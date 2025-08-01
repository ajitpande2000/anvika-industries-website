"use client";

import { whatsappNumber } from "@/constants/constants";

type ButtonProp = {
  type?: "submit" | "button" | "reset";
  label: string;
  className?: string;
  message: string;
};

const SendEnquiryButton = ({
  label,
  className = "",
  type = "button",
  message = "Hiii",
}: ButtonProp) => {
  const baseClasses =
    "text-white w-full py-2 mt-3 rounded-md transition bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-900 hover:to-gray-800";
  const encodedMessage = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(
        /\D/g,
        ""
      )}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type={type} className={`${baseClasses} ${className}`}>
        {label}
      </button>
    </a>
  );
};

export default SendEnquiryButton;
