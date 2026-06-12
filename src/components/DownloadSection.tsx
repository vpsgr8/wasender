import { Button } from "./ui/button";

interface DownloadSectionProps {
  downloadState: "idle" | "downloading" | "completed";
  onDownload: () => void;
}

const appInfo = [
  { label: "Version", value: "5.1.1" },
  { label: "Updated", value: "10/06/2026" },
  { label: "File Size", value: "88.6MB" },
  { label: "File Name", value: "wasender.exe" },
];

export function DownloadSection({ downloadState, onDownload }: DownloadSectionProps) {
  const getButtonText = () => {
    switch (downloadState) {
      case "downloading":
        return { icon: "⏳", text: "Starting download..." };
      case "completed":
        return { icon: "✅", text: "Download started!" };
      default:
        return { icon: "⬇️", text: "Download WASender for Windows" };
    }
  };

  const { icon, text } = getButtonText();

  return (
    <div className="mb-8">
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-5 flex items-start gap-3">
        <span className="text-xl">⚠️</span>
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> Make sure Windows Defender or your antivirus is configured to allow the installation.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {appInfo.map((item) => (
          <div key={item.label} className="bg-slate-50 border-l-4 border-l-emerald-500 rounded-lg p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</p>
            <p className="text-lg font-semibold text-slate-800">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-6 text-center mb-6">
        <p className="text-blue-800 font-semibold mb-4">
          📄 Please read the guideline PDF carefully before starting the campaign.
        </p>
        <Button
          variant="outline"
          className="bg-blue-600 hover:bg-blue-700 text-white border-0"
        >
          Download Guideline PDF
        </Button>
      </div>

      <Button
        onClick={onDownload}
        className={`w-full py-5 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 ${
          downloadState === "downloading"
            ? "animate-pulse bg-slate-500"
            : downloadState === "completed"
            ? "bg-emerald-600"
            : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:-translate-y-0.5 hover:shadow-xl"
        }`}
      >
        <span className="mr-2">{icon}</span>
        {text}
      </Button>
    </div>
  );
}