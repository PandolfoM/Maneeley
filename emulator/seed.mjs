// Resets the local emulators and seeds test data for the dashboard.
// Run while `npm run emulators` is up: `npm run emulators:seed`.

const PROJECT = "demo-maneeley";
const AUTH = "http://127.0.0.1:9099";
const FIRESTORE = `http://127.0.0.1:8080/v1/projects/${PROJECT}/databases/(default)/documents`;

// Throwaway accounts that only exist in the local Auth emulator.
export const TEST_ADMIN = { email: "admin@test.local", password: "emulator-admin-123" };
export const TEST_NON_ADMIN = { email: "visitor@test.local", password: "emulator-visitor-123" };

const MENUS = ["Catering", "Banquets", "Wedding", "Holiday", "Corporate"];

const toValue = (v) => {
  if (v === null) return { nullValue: null };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(toValue) } };
  if (typeof v === "boolean") return { booleanValue: v };
  if (typeof v === "number") return { integerValue: String(v) };
  if (typeof v === "object")
    return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toValue(x)])) } };
  return { stringValue: String(v) };
};

const request = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", Authorization: "Bearer owner", ...options.headers },
  });
  if (!res.ok) throw new Error(`${options.method || "GET"} ${url}: ${res.status} ${await res.text()}`);
  return res.json();
};

const setDoc = (path, data) =>
  request(`${FIRESTORE}/${path}`, {
    method: "PATCH",
    body: JSON.stringify({ fields: toValue(data).mapValue.fields }),
  });

const signUp = async ({ email, password }) => {
  const res = await request(`${AUTH}/identitytoolkit.googleapis.com/v1/accounts:signUp?key=demo-api-key`, {
    method: "POST",
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  return res.localId;
};

await request(`${AUTH}/emulator/v1/projects/${PROJECT}/accounts`, { method: "DELETE" });
await request(`http://127.0.0.1:8080/emulator/v1/projects/${PROJECT}/databases/(default)/documents`, {
  method: "DELETE",
});

const adminUid = await signUp(TEST_ADMIN);
await setDoc(`users/${adminUid}`, {
  email: TEST_ADMIN.email,
  username: "Test Admin",
  uid: adminUid,
  tempPassword: false,
});
await signUp(TEST_NON_ADMIN);

for (const name of MENUS) {
  await setDoc(`menus/${name}`, { id: name.toLowerCase(), name, items: [] });
}
for (const id of ["Gallery", "Slideshow"]) {
  await setDoc(`images/${id}`, { id, images: [] });
}

console.log(`Seeded emulators. Admin login: ${TEST_ADMIN.email} (password in emulator/seed.mjs)`);
