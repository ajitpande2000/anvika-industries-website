import { whatsappNumber } from "@/constants/constants";
import { FaWhatsapp } from "react-icons/fa";

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
    "flex items-center justify-center gap-2 text-white w-full py-3 mt-3 rounded-md transition bg-[#25D366] hover:bg-[#1DA851] shadow-md"; // WhatsApp green colors
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
        <FaWhatsapp size={18} /> {label}
      </button>
    </a>
  );
};

export default SendEnquiryButton;
