import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, firebaseConfigured } from "@/lib/firebase";

interface AuthState {
  user: User | null;
  /** True until the first onAuthStateChanged callback resolves whether a
   *  session already exists. False immediately if Firebase isn't configured
   *  at all — there's nothing to wait for. */
  initializing: boolean;
  /** True while a sign-in popup is open. */
  signingIn: boolean;
  /** Message from the most recent failed sign-in/out attempt, if any. */
  error: string | null;
  signIn: () => Promise<void>;
  signOutUser: () => Promise<void>;
  clearError: () => void;
}

function authErrorMessage(err: unknown): string {
  const code = err && typeof err === "object" && "code" in err ? String((err as { code: unknown }).code) : "";
  if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
    return "Sign-in was cancelled.";
  }
  if (code === "auth/popup-blocked") {
    return "Your browser blocked the sign-in popup. Allow popups for this site and try again.";
  }
  if (code === "auth/network-request-failed") {
    return "Network error during sign-in. Check your connection and try again.";
  }
  return "Sign-in failed. Please try again.";
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  initializing: firebaseConfigured,
  signingIn: false,
  error: null,

  signIn: async () => {
    const auth = getFirebaseAuth();
    if (!auth) {
      set({ error: "Sign-in isn't set up yet — see Settings for what's needed." });
      return;
    }
    set({ error: null, signingIn: true });
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (err) {
      set({ error: authErrorMessage(err) });
    } finally {
      set({ signingIn: false });
    }
  },

  signOutUser: async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      set({ error: authErrorMessage(err) });
    }
  },

  clearError: () => set({ error: null }),
}));

// Wire up the live Firebase listener once, when this module first loads.
// Guarded on `window` even though this store is only ever imported from
// client-only code (see app/ClientOnlyApp.tsx's ssr:false boundary) — the
// same defensive pattern themeStore.ts uses, in case that ever changes.
if (typeof window !== "undefined" && firebaseConfigured) {
  const auth = getFirebaseAuth();
  if (auth) {
    onAuthStateChanged(auth, (user) => {
      useAuthStore.setState({ user, initializing: false });
    });
  }
}

/** Non-hook accessor for use outside React (e.g. cloudBackup.ts). */
export function getCurrentUser(): User | null {
  return useAuthStore.getState().user;
}
