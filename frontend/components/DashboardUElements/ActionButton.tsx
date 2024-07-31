import React from "react";

interface ActionButtonProps {
  label: string;
  iconSrc: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, iconSrc, className }) => {
  return (
    <button className={`flex gap-3.5 p-2 rounded bg-zinc-100 ${className}`}>
      <span className="my-auto">{label}</span>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  );
};

export default ActionButton;
