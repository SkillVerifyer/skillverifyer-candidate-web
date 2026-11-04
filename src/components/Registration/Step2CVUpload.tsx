import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { ArrowLeft, ArrowRight, Check, FileText, LockKeyhole } from "lucide-react";
import { StepHeader } from "./StepHeader";
import type { Step2CVUploadProps } from "../../types/registration";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const Step2CVUpload = ({ onNext, onBack }: Step2CVUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [cv, setCv] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const isPdf =
      selectedFile.type === "application/pdf" || selectedFile.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setCv(null);
      setError("Please select a PDF file.");
      event.target.value = "";
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setCv(null);
      setError("The PDF must be 10 MB or smaller.");
      event.target.value = "";
      return;
    }

    if (selectedFile.size === 0) {
      setCv(null);
      setError("The selected file is empty.");
      event.target.value = "";
      return;
    }

    setCv(selectedFile);
    setError("");
  };

  const handleContinue = () => {
    if (!cv) {
      setError("Please select your CV before continuing.");
      return;
    }

    onNext(cv);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <StepHeader
        step={2}
        totalSteps={3}
        title="Welcome to SkillVerifyer!"
        subtitle="Upload your CV to build your verified candidate profile."
      />

      <div
        className={`w-full mt-4 rounded-xl border-2 border-dashed p-10 flex flex-col items-center text-center transition-all duration-300 ${
          cv ? "border-green-400 bg-green-50/20" : "border-blue-300 bg-surface-muted"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        {cv ? (
          <>
            <div className="relative mb-5 text-green-500">
              <FileText className="w-10 h-10" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-2 bg-green-500 rounded-full p-0.5 border-2 border-white">
                <Check className="w-3 h-3 text-white" strokeWidth={4} />
              </div>
            </div>

            <h3 className="text-[17px] font-bold text-gray-900 mb-2">Your CV is ready</h3>

            <p className="text-xs text-gray-500 mb-6 break-all">
              <span className="font-bold text-gray-900">{cv.name}</span>
              {" — "}
              {(cv.size / (1024 * 1024)).toFixed(2)} MB
            </p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#16a34a] hover:bg-green-700 text-white text-sm font-medium px-6 py-2.5 rounded-full"
            >
              Choose another file
            </button>
          </>
        ) : (
          <>
            <FileText className="w-10 h-10 mb-5 text-[#3b82f6]" />

            <h3 className="text-[17px] font-bold text-gray-900 mb-2">Upload your CV</h3>

            <p className="text-xs text-gray-500 mb-6">Choose a PDF resume from your device.</p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-6 py-2.5 rounded-full"
            >
              Browse Files
            </button>
          </>
        )}

        <p className="text-[10px] text-gray-400 mt-6 uppercase font-semibold tracking-wider">
          PDF · Maximum 10 MB
        </p>

        {error && (
          <p role="alert" className="text-sm text-red-500 mt-3">
            {error}
          </p>
        )}
      </div>

      <div className="w-full mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-xs font-bold text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to registration
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="flex items-center text-xs font-bold text-gray-900"
        >
          Next
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </button>
      </div>

      <div className="flex items-center text-[11px] text-gray-400 mt-3">
        <LockKeyhole className="w-3 h-3 mr-1.5 text-green-500" />
        Your CV will be sent when you finish registration.
      </div>
    </div>
  );
};
