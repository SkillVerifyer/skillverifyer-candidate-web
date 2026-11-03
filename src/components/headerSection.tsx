export default function HeaderSection() {
  const pathName = window.location.pathname.replace("/", "");
  return (
    <div className="p-3 bg-header bg-white justify-between flex items-center border-b border-gray-300">
      <div className="flex items-center gap-1">
        <span className="text-secondary text-medium">
          Candidate workspace /{" "}
        </span>
        <span className="font-bold text-primary text-small">{pathName}</span>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white">
            T
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-medium text-primary font-bold">
            Tharindu Nilan
          </span>
          <span className="text-small text-secondary">Frontend Developer</span>
        </div>
      </div>
    </div>
  );
}