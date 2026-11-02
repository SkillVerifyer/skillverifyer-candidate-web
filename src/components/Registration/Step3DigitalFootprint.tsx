import { useState } from "react";
import { ArrowLeft, Check, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { StepHeader } from "./StepHeader";
import type { DigitalFootprint, Step3DigitalFootprintProps } from "../../types/registration";

export const Step3DigitalFootprint = ({ onBack, onFinish }: Step3DigitalFootprintProps) => {
  const [connections, setConnections] = useState<DigitalFootprint>({
    github: false,
    freelance: false,
  });

  const toggleConnection = (platform: keyof DigitalFootprint) => {
    setConnections((previous) => ({
      ...previous,
      [platform]: !previous[platform],
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <StepHeader
        step={3}
        totalSteps={3}
        title="Verify your digital footprint"
        subtitle="Connect your accounts to verify your skills and experience."
      />

      <div className="w-full border border-gray-200/80 rounded-2xl bg-white shadow-sm overflow-hidden mt-4">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4 items-start">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                connections.github ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-800"
              }`}
            >
              <FaGithub className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 text-sm">GitHub</h3>
                {connections.github && <CheckCircle2 className="w-4 h-4 text-green-500" />}
              </div>

              <p className="text-xs text-gray-500">Connect your GitHub account.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleConnection("github")}
            aria-pressed={connections.github}
            className={`cursor-pointer px-5 py-2.5 rounded-full text-xs font-bold border ${connections.github ? "bg-btn-active text-active-text border-active-border" : "bg-btn-inactive text-inactive-text"}`}
          >
            {connections.github ? "Connected" : "Connect account"}
          </button>
        </div>

        <div className="p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4 items-start">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                connections.freelance ? "bg-green-100 text-green-600" : "bg-blue-50 text-blue-500"
              }`}
            >
              <SiFreelancer className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 text-sm">Freelancer.com (Optional)</h3>
                {connections.freelance && <CheckCircle2 className="w-4 h-4 text-green-500" />}
              </div>

              <p className="text-xs text-gray-500">Connect your Freelancer account.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleConnection("freelance")}
            aria-pressed={connections.freelance}
            className={`cursor-pointer px-5 py-2.5 rounded-full text-xs font-bold border ${connections.freelance ? "bg-btn-active text-active-text border-active-border" : "bg-btn-inactive text-inactive-text"}`}
          >
            {connections.freelance ? "Connected" : "Connect account"}
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center text-xs font-bold text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to upload
        </button>

        {(connections.github || connections.freelance) && (
          <button
            type="button"
            onClick={() => onFinish(connections)}
            className="bg-btn-primary hover:bg-btn-primary-hover text-white font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 text-sm"
          >
            Finish Registration
            <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
