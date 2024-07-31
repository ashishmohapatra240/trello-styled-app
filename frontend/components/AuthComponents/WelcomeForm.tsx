"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";

interface WelcomeFormProps {
  onSubmit: (email: string, password: string) => void;
}

const WelcomeForm: React.FC<WelcomeFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email"
      />
      <InputField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="Password"
        showPasswordToggle
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default WelcomeForm;
