# Local Firebase emulators

Run the site and admin dashboard against local copies of Auth, Firestore,
Storage and Functions, with no access to the live project. Requires Java 11+.

```bash
npm run emulators        # terminal 1: start the emulators (project demo-maneeley)
npm run emulators:seed   # terminal 2: reset and seed test data + accounts
npm run dev:emulator     # terminal 2: site at http://localhost:5174
```

Sign in at http://localhost:5174/admin with the test admin account defined in
`seed.mjs` (it only exists in the local emulator). `seed.mjs` also creates a
non-admin account for checking that Cloud Functions reject non-admins.

Notes:
- `.env.emulator` points the site at the emulators and uses Cloudflare's
  always-pass Turnstile test key. The dashboard's emails still go to the real
  MJP Hub API, which rejects the test token, so expect "email could not be
  sent" messages unless you stub the request.
- The rules files here are wide open and only used by the emulators. They are
  not referenced by the root `firebase.json`, so `firebase deploy` never uses them.
