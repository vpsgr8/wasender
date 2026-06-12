const changelogItems = [
  "✅ Fixed critical bugs",
  "✅ Improved performance",
  "✅ Updated UI components",
  "✅ Enhanced security features",
];

export function Changelog() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">📋</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-800">What's New in Version 5.1.1</h2>
      </div>

      <div className="space-y-2">
        {changelogItems.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-lg p-3 text-slate-600 text-sm hover:bg-slate-100 hover:translate-x-1 transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}