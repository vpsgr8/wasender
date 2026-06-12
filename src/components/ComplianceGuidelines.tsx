const guidelines = [
  "Send messages only to contacts who have opted-in",
  "Avoid sending identical messages to multiple users",
  "Use personalization variables to make messages unique",
  "Respect WhatsApp Business hours (9 AM - 9 PM)",
  "Limit your daily sending volume gradually",
  "Never send promotional content without consent",
];

export function ComplianceGuidelines() {
  return (
    <div className="mb-8">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-800 font-bold text-lg mb-4 flex items-center gap-2">
          <span>📘</span>
          Best Practices for Meta Compliance
        </h3>
        
        <ul className="space-y-2">
          {guidelines.map((guideline, index) => (
            <li key={index} className="flex items-start gap-3 text-blue-700 text-sm">
              <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
              {guideline}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 mt-6 text-center">
        <p className="text-slate-500 text-xs leading-relaxed">
          <strong className="text-slate-600">Disclaimer:</strong> WA Sender is a tool designed for legitimate business communication.
          Users are solely responsible for complying with WhatsApp's Terms of Service, local laws, and regulations.
          We do not condone or support the use of our software for spam, harassment, or any illegal activities.
        </p>
      </div>
    </div>
  );
}