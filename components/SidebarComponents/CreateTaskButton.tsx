import React from 'react';

const CreateTaskButton: React.FC = () => {
  return (
    <button className="flex gap-2 justify-center p-2 mt-4 text-xl font-medium text-white rounded-lg shadow-[0px_1px_8px_rgba(0,0,0,0.25)] max-md:px-5">
      <span>Create new task</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd72c32e43fc390272b5ebeac39a3b31400c3696b3230fc5576d8ce18616b605?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" className="shrink-0 w-6 aspect-square" alt="" />
    </button>
  );
};

export default CreateTaskButton;