import type { ChangeEvent } from "react";

export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
}: InputFieldProps) => {
  const inputId = `registration-${name}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-[11px] font-bold text-gray-900 uppercase tracking-wide"
      >
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition-colors bg-white shadow-sm shadow-gray-50/50 ${
          error
            ? "border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500"
            : "border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
        }`}
      />

      {error && (
        <span id={`${inputId}-error`} role="alert" className="text-[11px] font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
