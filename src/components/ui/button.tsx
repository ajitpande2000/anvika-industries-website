"use client";

type ButtonProp = {
  type?: "submit" | "button" | "reset";
  label: string;
  onClick?: () => void;
  className?: string; // Allow passing Tailwind classes
};

const Button = ({
  label,
  onClick,
  className = "",
  type = "button",
}: ButtonProp) => {
  const baseClasses =
    "text-white w-full py-2 mt-3 rounded-md transition bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-900 hover:to-gray-800";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
