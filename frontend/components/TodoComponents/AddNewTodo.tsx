
import React from "react";

const AddNewTodo: React.FC = () => {
  return (
    <button className="flex gap-5 justify-between p-2 mt-4 w-full text-base rounded-lg text-neutral-200">
      <span className="my-auto">Add new</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20818b71c3ce13c107f381418c54401b26dade9d40bd9796094949a1bc97820?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
        className="shrink-0 w-6 aspect-square"
        alt=""
      />
    </button>
  );
};

export default AddNewTodo;
