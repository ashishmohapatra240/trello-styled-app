import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center w-[528px] h-[52px] p-2 text-white text-xl font-normal rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-[#4B36CC] bg-gradient-to-b from-[#4C38C2] to-[#2F2188] bg-opacity-30"
    >
      {children}
    </button>
  );
};

export default Button;
