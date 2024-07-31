"use client";
import React from "react";
import WelcomeForm from "./WelcomeForm";

const WelcomeComponent: React.FC = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log("Form submitted", { email, password });
  };

  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <main className="flex flex-col bg-white p-16 text-xl rounded-2xl border border-solid border-stone-300 max-w-[648px] max-md:px-5">
      <h1 className="text-5xl font-semibold text-center text-zinc-800 max-md:max-w-full max-md:text-4xl py-8">
        Welcome to <span className="text-indigo-800">Workflo</span>
      </h1>
      <WelcomeForm onSubmit={handleSubmit} />
      <p className="flex gap-1 justify-center self-center mt-8 text-center max-md:flex-wrap">
        <span className="text-zinc-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </span>
        <a href="#" className="text-sky-700">
          {isLogin ? "Sign up" : "Sign in"}
          <span className="text-black">.</span>
        </a>
      </p>
    </main>
  );
};

export default WelcomeComponent;
