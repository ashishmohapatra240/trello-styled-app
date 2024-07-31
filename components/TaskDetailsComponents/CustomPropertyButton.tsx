import React from "react";

const CustomPropertyButton: React.FC = () => {
  return (
    <button className="flex gap-5 justify-between self-start mt-10 text-base text-black">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e535ddac78a70446cf8b673297542560903be2f93104ec91cd542c7150f41aea?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <span className="my-auto">Add custom property</span>
    </button>
  );
};

export default CustomPropertyButton;
