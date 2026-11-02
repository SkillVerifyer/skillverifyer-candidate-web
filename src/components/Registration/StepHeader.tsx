export const StepHeader = ({
  step,
  totalSteps,
  title,
  subtitle,
}: {
  step: number;
  totalSteps: number;
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-[#eff6ff] text-[#2563eb] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest mb-6 uppercase">
      Step {step} of {totalSteps}
    </div>
    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
      {title}
    </h1>
    <p className="text-sm text-gray-500 max-w-md leading-relaxed">{subtitle}</p>
  </div>
);
