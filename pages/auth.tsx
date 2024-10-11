import React from "react";
import { UserAuthForm } from "@/components/Auth";

const AuthPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Sign In/Sign Up</h1>
      <UserAuthForm />
    </div>
  );
};

export default AuthPage;