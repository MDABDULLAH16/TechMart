import React, { Suspense } from "react";
import RegisterClient from "@/components/Form/RegisterClient";
import SignInWithGoogle from "@/components/Buttons/SignInWithGoogle";
import Link from "next/link";
import { FiUser } from "react-icons/fi"; 

const Register = () => {  

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl mb-4 shadow-lg shadow-indigo-600/40">
              <FiUser className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Create account
            </h1>
            <p className="text-slate-400 mt-1 text-sm">
              Join us and get started today
            </p>
          </div>

          {/* Google Button */}
          <Suspense fallback={<div className="">loading...</div>}>

          <SignInWithGoogle></SignInWithGoogle>
          </Suspense>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-500 text-xs uppercase tracking-widest">
              or
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Form */}
         <RegisterClient></RegisterClient>

          {/* Footer */}
          <p className="text-center text-slate-500 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
