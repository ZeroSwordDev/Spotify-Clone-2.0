"use client";
import { signIn } from "next-auth/react";
import React from "react";
const Login = () => {
  return (
    <div>
      <button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
        Login with spotify
      </button>
    </div>
  );
};

export default Login;