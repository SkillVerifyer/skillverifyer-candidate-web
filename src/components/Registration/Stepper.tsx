import { Check } from "lucide-react";

export const Stepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: "User Registration" },
    { label: "CV Upload" },
    { label: "Verify Digital Footprint" },
  ];

  return (
    <div className="w-full max-w-2xl mb-12 relative mx-auto">
      {/* Connecting Lines */}
      {/* Line between Step 1 and Step 2 */}
      <div
        className={`absolute top-5 left-[15%] right-[50%] h-0.5 z-0 transition-colors duration-300 ${
          currentStep > 1 ? "bg-[#3b82f6]" : "bg-gray-100"
        }`}
      ></div>

      {/* Line between Step 2 and Step 3 */}
      <div
        className={`absolute top-5 left-[50%] right-[15%] h-0.5 z-0 transition-colors duration-300 ${
          currentStep > 2 ? "bg-[#3b82f6]" : "bg-gray-100"
        }`}
      ></div>

      <div className="relative z-10 flex justify-between w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={index} className="flex flex-col items-center gap-3 w-1/3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ring-4 ring-white transition-colors duration-300 ${
                  isActive
                    ? "bg-[#3b82f6] text-white shadow-sm"
                    : isCompleted
                      ? "bg-white text-[#3b82f6] border border-[#3b82f6]"
                      : "bg-white border-2 border-gray-100 text-gray-300"
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" strokeWidth={3} /> : stepNumber}
              </div>
              <span
                className={`text-xs whitespace-nowrap ${
                  isActive
                    ? "font-bold text-[#3b82f6]"
                    : isCompleted
                      ? "font-medium text-[#3b82f6]"
                      : "font-medium text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
