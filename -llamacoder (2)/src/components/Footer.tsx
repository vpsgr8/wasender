export function Footer() {
  return (
    <div className="bg-slate-50 border-t border-slate-200 px-6 md:px-10 py-8 text-center">
      <p className="text-slate-500 text-sm mb-2">Last updated: June 10, 2026</p>
      
      <p className="text-slate-500 text-sm mb-4">
        Need help?{" "}
        <a href="#" className="text-emerald-600 font-semibold hover:underline">
          Chat on WhatsApp
        </a>
        {" "}or access the{" "}
        <a href="#" className="text-emerald-600 font-semibold hover:underline">
          Control Panel
        </a>
      </p>
      
      <p className="text-slate-400 text-xs">
        © 2026 WA Sender. All rights reserved. WhatsApp is a trademark of Meta Platforms, Inc.
      </p>
    </div>
  );
}