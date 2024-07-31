import React from "react";

interface IconButtonProps {
  src: string;
  alt: string;
  onClick?: () => void;
  label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ src, alt, onClick, label }) => {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <img src={src} alt={alt} className="w-6 h-6" />
      {label && <span>{label}</span>}
    </button>
  );
};

export default IconButton;
