import { Check } from "lucide-react";

export const Header = () => (
  <header className="px-8 py-5 border-b border-gray-100 flex items-center">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-[#3b82f6] rounded flex items-center justify-center shadow-sm">
        <Check className="w-4 h-4 text-white" strokeWidth={3} />
      </div>
      <span className="text-[17px] text-gray-900 tracking-tight">
        <span className="font-bold">Skill</span>
        <span className="font-medium">Verifyer</span>
      </span>
    </div>
  </header>
);
