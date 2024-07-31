import React from "react";

interface IconButtonProps {
  src: string;
  alt: string;
  label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ src, alt, label }) => {
  return (
    <button className="flex gap-3.5 p-2 rounded bg-zinc-100">
      {label && <span className="my-auto">{label}</span>}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  );
};

export default IconButton;
