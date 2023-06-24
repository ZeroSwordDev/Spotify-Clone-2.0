'use client'
import { signIn } from "next-auth/react";
import React from "react";
const Login = () => {
  return (
    <button
      onClick={() => signIn('spotify',{ callbackUrl: '/'})}
    >
      Login with spotify
    </button>
  );
};

export default Login;
