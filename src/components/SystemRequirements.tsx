import { Settings } from "lucide-react";

const requirements = [
  { label: "Operating System", value: "Windows 10/11 (64-bit)" },
  { label: "RAM", value: "4 GB minimum (8 GB recommended)" },
  { label: "Disk Space", value: "500 MB" },
  { label: "Internet", value: "Stable connection required" },
  { label: ".NET Framework", value: "4.7.2 or higher" },
];

export function SystemRequirements() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
          <Settings className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800">System Requirements</h2>
      </div>

      <div className="bg-slate-50 rounded-lg overflow-hidden">
        {requirements.map((req, index) => (
          <div
            key={req.label}
            className={`flex justify-between items-center p-4 ${
              index !== requirements.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="text-slate-500 text-sm">{req.label}</span>
            <span className="text-slate-800 font-semibold text-sm">{req.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}