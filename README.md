# Maneeley

New website for Maneeley's Banquet &amp; Catering

## Gallery thumbnails

New gallery uploads from the dashboard automatically get an 800px thumbnail
(`Gallery/thumbs/<id>`), which the public gallery grid uses instead of the
full-size image. All image uploads are also given a 1-year `Cache-Control`
header.

Images uploaded before this existed can be backfilled once with
`scripts/backfill-gallery`:

1. In the Firebase console go to **Project settings → Service accounts →
   Generate new private key** and save it as
   `scripts/backfill-gallery/service-account.json` (gitignored — never commit it).
2. Run:

   ```bash
   cd scripts/backfill-gallery
   npm install
   GOOGLE_APPLICATION_CREDENTIALS=./service-account.json npm run dry-run
   GOOGLE_APPLICATION_CREDENTIALS=./service-account.json npm start
   ```

   (PowerShell: `$env:GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"`.)

Run it when nobody is editing images in the dashboard. It is safe to re-run;
images that already have a thumbnail are skipped. Delete the key file afterwards.
