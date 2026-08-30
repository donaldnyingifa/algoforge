/**
 * Firebase client init — lazy, optional, and emulator-aware.
 *
 * "Optional" matters here: AlgoForge worked with zero backend before this
 * feature existed, and the DSA Foundations stage must keep working with zero
 * backend after it too (see claude/firebase-auth-plan.md). So nothing in
 * this module throws when Firebase isn't configured — every getter simply
 * returns `undefined`, and callers (the auth store, cloudBackup) treat that
 * as "auth/cloud backup isn't available right now" rather than a crash.
 *
 * Two ways to get configured:
 *  - Real project: set every NEXT_PUBLIC_FIREBASE_* var (see .env.example).
 *  - Local dev/testing with no real project yet: set
 *    NEXT_PUBLIC_FIREBASE_USE_EMULATOR=true and run the Firebase Auth +
 *    Firestore emulators (`npx firebase-tools emulators:start`) against the
 *    demo-algoforge project id below. A "demo-"-prefixed project id lets the
 *    emulators run fully standalone, no real credentials involved.
 */
import { initializeApp, getApps, type FirebaseApp, type FirebaseOptions } from "firebase/app";
import { getAuth, connectAuthEmulator, type Auth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, type Firestore } from "firebase/firestore";

const USE_EMULATOR = process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR === "true";
const EMULATOR_PROJECT_ID = "demo-algoforge";
const AUTH_EMULATOR_URL = "http://127.0.0.1:9099";
const FIRESTORE_EMULATOR_HOST = "127.0.0.1";
const FIRESTORE_EMULATOR_PORT = 8080;

const realConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseConfig: FirebaseOptions = USE_EMULATOR
  ? { apiKey: "demo-emulator-key", authDomain: "localhost", projectId: EMULATOR_PROJECT_ID }
  : realConfig;

/** True once there's enough config to talk to either a real project or the local emulators. */
export const firebaseConfigured = USE_EMULATOR || Boolean(realConfig.apiKey && realConfig.projectId);

let app: FirebaseApp | undefined;
let authInstance: Auth | undefined;
let dbInstance: Firestore | undefined;

function ensureApp(): FirebaseApp | undefined {
  if (!firebaseConfigured) return undefined;
  if (!app) app = getApps()[0] ?? initializeApp(firebaseConfig);
  return app;
}

/** The shared Auth instance, or undefined if Firebase isn't configured. */
export function getFirebaseAuth(): Auth | undefined {
  const a = ensureApp();
  if (!a) return undefined;
  if (!authInstance) {
    authInstance = getAuth(a);
    // connectAuthEmulator must run exactly once, immediately after the
    // instance is created and before it's used for anything else.
    if (USE_EMULATOR) connectAuthEmulator(authInstance, AUTH_EMULATOR_URL, { disableWarnings: true });
  }
  return authInstance;
}

/** The shared Firestore instance, or undefined if Firebase isn't configured. */
export function getFirebaseDb(): Firestore | undefined {
  const a = ensureApp();
  if (!a) return undefined;
  if (!dbInstance) {
    dbInstance = getFirestore(a);
    if (USE_EMULATOR) connectFirestoreEmulator(dbInstance, FIRESTORE_EMULATOR_HOST, FIRESTORE_EMULATOR_PORT);
  }
  return dbInstance;
}
