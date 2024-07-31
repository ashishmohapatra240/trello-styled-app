import React from "react";

interface TaskPropertyProps {
  icon: string;
  label: string;
  value: string;
}

const TaskProperty: React.FC<TaskPropertyProps> = ({ icon, label, value }) => {
  return (
    <div className="flex gap-5 justify-between mt-8">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <div className="my-auto">{label}</div>
      <div className="text-black">{value}</div>
    </div>
  );
};

export default TaskProperty;
