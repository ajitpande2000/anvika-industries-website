"use client";
import { useState } from "react";
import Button from "./ui/button";
import { whatsappNumber } from "@/constants/constants";

export function ConversationForm() {
  const [formData, setFormData] = useState<{
    firstname?: string;
    lastname?: string;
    email?: string;
    message?: string;
  }>({
    firstname: "",
    lastname: "",
    message: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Hii,
I am ${formData?.firstname} ${formData?.lastname}.
${formData?.email && `Email: ${formData?.email}`}
Message: ${formData?.message}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setFormData({
      firstname: "",
      lastname: "",
      message: "",
      email: "",
    });
    window.open(whatsappURL, "_blank");
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-2">
          {`Send Your Enquiry`}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["First Name", "Last Name"].map((label) => (
          <InputField
            value={
              label === "First Name"
                ? formData?.firstname || ""
                : formData?.lastname || ""
            }
            key={label}
            id={label.replace(" ", "").toLowerCase()}
            label={label}
            placeholder={label === "First Name" ? "first name" : "last name"}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { name, value } = e.target;
              setFormData((prev) => ({ ...prev, [name]: value }));
              console.log(value);
            }}
          />
        ))}
      </div>
      <InputField
        value={formData?.email || ""}
        id="email"
        label="Email"
        placeholder="abc@example.com"
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData((prev) => ({ ...prev, email: e.target.value }));
          console.log(e.target.value);
        }}
      />
      <TextAreaField
        value={formData?.message || ""}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setFormData((prev) => ({ ...prev, message: e.target.value }));
          console.log(e.target.value);
        }}
        rows={3}
        id="message"
        label="message"
        placeholder=""
      />
      <div className="text-center pt-6">
        <Button type="submit" label="Send Message" />
      </div>
    </form>
  );
}

// Reusable Inputs and Blocks
function InputField({
  value,
  onChange,
  id,
  label,
  placeholder,
  required = false,
  type = "text",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium  dark:text-white">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="flex w-full border px-3 py-2 text-base bg-white/80 dark:bg-white/10   rounded-xl h-12 transition-all duration-300  "
      />
    </div>
  );
}

function TextAreaField({
  value,
  id,
  label,
  placeholder,
  required = false,
  rows = 3,
  onChange,
}: {
  value: string;
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium dark:text-white">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="flex w-full border px-3 py-2 text-base bg-white/80 dark:bg-white/10   rounded-xl transition-all duration-300 "
      />
    </div>
  );
}
