import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showPasswordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  showPasswordToggle,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={showPasswordToggle && showPassword ? "text" : props.type}
        className="w-full px-3 py-4 bg-gray-100 rounded-lg text-[#606060] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfcd153cf2e7e4871cee459d40fb3e24f2ac144ebe9bf7c898aea9e30458133?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
            alt=""
            className="w-6 h-6"
          />
        </button>
      )}
    </div>
  );
};

export default InputField;
