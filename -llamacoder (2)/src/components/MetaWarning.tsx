export function MetaWarning() {
  return (
    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-6 relative overflow-hidden">
      <span className="absolute -top-2 -right-2 text-7xl opacity-10">⚠️</span>
      
      <div className="relative z-10">
        <h3 className="text-red-700 text-lg font-bold mb-2 flex items-center gap-2">
          <span>🚨</span>
          IMPORTANT: Meta/WhatsApp Anti-Spam Policy
        </h3>
        
        <p className="text-red-800 text-sm leading-relaxed">
          <strong>Meta (WhatsApp's parent company) actively restricts spam and mass messaging activities.</strong>
          <br />
          Accounts that violate WhatsApp's Terms of Service may be temporarily or permanently banned.
          WA Sender includes safety features to help you comply with Meta's policies, but you must use it responsibly.
          <br />
          <strong>Always obtain consent before messaging and avoid sending unsolicited promotional content.</strong>
        </p>
      </div>
    </div>
  );
}