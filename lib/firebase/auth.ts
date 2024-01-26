import { signInWithEmailAndPassword } from "@firebase/auth";

import { auth } from "@/lib/firebase/config";

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signOut() {
  let result = null,
    error = null;

  try {
    result = await auth.signOut();
  } catch (e) {
    error = e;
  }

  return { result, error };
}
