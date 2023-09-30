import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
const Auth = () => {
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log(results);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(authInfo));
  };

  return (
    <div>
      <h2>Sign in with Google to continue</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Auth;
