"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
// import Swal from "sweetalert2";
const SignInWithGoogle = () => {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const handleGoogleLogin = async () => {
    const result = await signIn("google", { callbackUrl });
    console.log('gg result',result);
    
    // if (result.ok) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Login Successful",
    //     text: "You have been logged in successfully!",
    //   });
    // }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg mb-6"
    >
      <FcGoogle className="text-2xl" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default SignInWithGoogle;
