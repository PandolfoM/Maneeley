// One-off backfill for images uploaded before thumbnails existed.
//
// - Gallery images: creates an 800px thumbnail at Gallery/thumbs/<id> and
//   saves its URL as `thumb` on the image entry in Firestore.
// - All images: sets a long-lived Cache-Control header so browsers stop
//   re-downloading them on every visit.
//
// Usage (see README): node index.mjs [--dry-run]

import { randomUUID } from "node:crypto";
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import sharp from "sharp";

const BUCKET = process.env.STORAGE_BUCKET || "maneeley.appspot.com";
const CACHE_CONTROL = "public, max-age=31536000, immutable";
const THUMB_SIZE = 800;
const dryRun = process.argv.includes("--dry-run");

initializeApp({ credential: applicationDefault(), storageBucket: BUCKET });
const db = getFirestore();
const bucket = getStorage().bucket();

const downloadUrl = (path, token) =>
  `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(
    path
  )}?alt=media&token=${token}`;

const createThumbnail = async (category, item, original) => {
  const [buffer] = await original.download();
  const thumb = await sharp(buffer)
    .rotate()
    .resize({
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  const path = `${category}/thumbs/${item.id}`;
  const token = randomUUID();
  if (!dryRun) {
    await bucket.file(path).save(thumb, {
      metadata: {
        contentType: "image/jpeg",
        cacheControl: CACHE_CONTROL,
        metadata: { firebaseStorageDownloadTokens: token },
      },
    });
  }
  console.log(
    `  thumb   ${path} (${(buffer.length / 1024).toFixed(0)}KB -> ${(
      thumb.length / 1024
    ).toFixed(0)}KB)`
  );
  return downloadUrl(path, token);
};

const snapshot = await db.collection("images").get();
let thumbsCreated = 0;
let cacheUpdated = 0;

for (const docSnap of snapshot.docs) {
  const category = docSnap.id;
  const images = docSnap.get("images") ?? [];
  console.log(`${category}: ${images.length} images`);

  const updated = [];
  let changed = false;

  for (const item of images) {
    const original = bucket.file(`${category}/${item.id}`);
    const [exists] = await original.exists();
    if (!exists) {
      console.warn(`  missing ${category}/${item.id}, skipping`);
      updated.push(item);
      continue;
    }

    const [metadata] = await original.getMetadata();
    if (metadata.cacheControl !== CACHE_CONTROL) {
      if (!dryRun) await original.setMetadata({ cacheControl: CACHE_CONTROL });
      console.log(`  cache   ${category}/${item.id}`);
      cacheUpdated++;
    }

    if (category === "Gallery" && !item.thumb) {
      updated.push({
        ...item,
        thumb: await createThumbnail(category, item, original),
      });
      thumbsCreated++;
      changed = true;
    } else {
      updated.push(item);
    }
  }

  if (changed && !dryRun) {
    await docSnap.ref.update({ images: updated });
  }
}

console.log(
  `\n${dryRun ? "[dry run] would have " : ""}created ${thumbsCreated} thumbnails, updated cache headers on ${cacheUpdated} files.`
);
