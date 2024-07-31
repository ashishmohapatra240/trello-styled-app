import React from "react";

interface CreateNewButtonProps {
  onClick: () => void;
}

const CreateNewButton: React.FC<CreateNewButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex gap-2 justify-center p-2 font-medium text-white rounded-lg shadow-[0px_1px_8px_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      <span className="my-auto">Create new</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81a7bce4b65d2e2a5ef6c164066c6011d4bb23f98c8599367a1169bb565939b9?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  );
};

export default CreateNewButton;
