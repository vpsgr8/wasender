import { useState } from "react";
import { Download, FileText, Settings, MessageCircle, Users, Shield, ExternalLink, HardDrive, Github, AlertCircle } from "lucide-react";

export function DownloadPage() {
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "started">("idle");
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  // Download URLs - GitHub releases
  const DOWNLOAD_URLS = {
    github: "https://github.com/engrshuvodas/wasender/releases/download/v5.1.1/wasender.exe",
    githubAlt: "https://github.com/engrshuvodas/wasender/releases/download/v5.1.1/WASender-Setup.exe",
  };

  const handleDownload = (url: string, source: string) => {
    setDownloadStatus("downloading");
    setSelectedSource(source);
    
    // Create hidden anchor and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = "wasender.exe";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setDownloadStatus("started");
      setTimeout(() => {
        setDownloadStatus("idle");
        setSelectedSource(null);
      }, 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingIcons />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-10 md:px-10 md:py-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">WA Sender</h1>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30">
              Version 5.1.1
            </span>
          </div>

          {/* Content */}
          <div className="px-6 py-8 md:px-10 md:py-10">
            
            {/* Meta Warning */}
            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-6 relative overflow-hidden">
              <div className="absolute -top-2 -right-2 text-6xl opacity-10">⚠️</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🚨</span>
                <h3 className="text-red-700 font-bold text-lg">IMPORTANT: Meta/WhatsApp Anti-Spam Policy</h3>
              </div>
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>Meta (WhatsApp's parent company) actively restricts spam and mass messaging activities.</strong>
                <br />
                Accounts that violate WhatsApp's Terms of Service may be temporarily or permanently banned.
                WA Sender includes safety features to help you comply with Meta's policies, but you must use it responsibly.
                <strong> Always obtain consent before messaging and avoid sending unsolicited promotional content.</strong>
              </p>
            </div>

            {/* Windows Defender Alert */}
            <div className="bg-amber-50 border border-amber-400 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Make sure Windows Defender or your antivirus is configured to allow the installation.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Version", value: "5.1.1" },
                { label: "Updated", value: "10/06/2026" },
                { label: "File Size", value: "88.6MB" },
                { label: "Platform", value: "Windows" },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-500">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Guideline Section */}
            <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-6 mb-6 text-center">
              <p className="text-blue-800 font-semibold mb-4">
                Please read the guideline PDF carefully before starting the campaign.
              </p>
              <a
                href="https://github.com/engrshuvodas/wasender/releases/download/v5.1.1/WASender-Guidelines.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <FileText className="w-5 h-5" />
                Download Guideline PDF
              </a>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-500" />
                Download WASender
              </h3>
              
              {/* Primary Download Button */}
              <button
                onClick={() => handleDownload(DOWNLOAD_URLS.github, "GitHub")}
                disabled={downloadStatus !== "idle"}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all mb-4 ${
                  downloadStatus === "idle"
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                    : "bg-emerald-400 text-white cursor-wait"
                }`}
              >
                {downloadStatus === "idle" && (
                  <>
                    <Github className="w-5 h-5" />
                    Download from GitHub
                  </>
                )}
                {downloadStatus === "downloading" && (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Starting download from {selectedSource}...
                  </>
                )}
                {downloadStatus === "started" && (
                  <>
                    <span className="text-xl">✅</span>
                    Download started! Check your downloads folder.
                  </>
                )}
              </button>

              {/* Alternative Download Options */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={DOWNLOAD_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  <HardDrive className="w-4 h-4" />
                  Direct Link
                </a>
                <a
                  href="https://wa.me/+919641700503?text=I%20need%20the%20download%20link%20for%20WASender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get via WhatsApp
                </a>
              </div>
            </div>

            {/* Download Help */}
            <div className="bg-amber-50 rounded-lg p-4 mb-8 border border-amber-200">
              <p className="text-amber-800 text-sm text-center">
                <strong>Having trouble downloading?</strong> 
                <span className="block mt-1">Try the "Direct Link" button or contact support on WhatsApp for assistance.</span>
              </p>
            </div>

            {/* System Requirements */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                System Requirements
              </h2>
              <div className="bg-slate-50 rounded-xl p-4">
                {[
                  { label: "Operating System", value: "Windows 10/11 (64-bit)" },
                  { label: "RAM", value: "4 GB minimum (8 GB recommended)" },
                  { label: "Disk Space", value: "500 MB" },
                  { label: "Internet", value: "Stable connection required" },
                  { label: ".NET Framework", value: "4.7.2 or higher" },
                ].map((req) => (
                  <div key={req.label} className="flex justify-between py-3 border-b border-slate-200 last:border-0">
                    <span className="text-slate-500 text-sm">{req.label}</span>
                    <span className="text-slate-800 font-medium text-sm">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                Activation & Support
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <SupportCard
                  icon={<Users className="w-6 h-6" />}
                  title="Get Activation Key"
                  subtitle="Instant license activation"
                  href="https://wa.me/+919641700503?text=Hello,%20I%20need%20activation%20key%20for%20WA%20Sender"
                />
                <SupportCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Contact Support"
                  subtitle="24/7 technical assistance"
                  href="https://wa.me/+919641700503?text=Hello,%20I%20need%20support%20for%20WA%20Sender"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                Follow Developer
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <SocialCard key={link.name} {...link} />
                ))}
              </div>
            </div>

            {/* Changelog */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                What's New in Version 5.1.1
              </h2>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <span>✅</span>
                  <span>Fixed various bugs and improvements</span>
                </div>
              </div>
            </div>

            {/* Compliance Guidelines */}
            <div className="mt-10 bg-blue-50 border border-blue-300 rounded-xl p-6">
              <h3 className="text-blue-800 font-bold text-lg mb-4 flex items-center gap-2">
                <span>📘</span>
                Best Practices for Meta Compliance
              </h3>
              <ul className="space-y-2">
                {[
                  "Send messages only to contacts who have opted-in",
                  "Avoid sending identical messages to multiple users",
                  "Use personalization variables to make messages unique",
                  "Respect WhatsApp Business hours (9 AM - 9 PM)",
                  "Limit your daily sending volume gradually",
                  "Never send promotional content without consent",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-blue-800 text-sm">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 bg-slate-100 rounded-lg p-4 text-center">
              <p className="text-slate-500 text-xs leading-relaxed">
                <strong>Disclaimer:</strong> WA Sender is a tool designed for legitimate business communication.
                Users are solely responsible for complying with WhatsApp's Terms of Service, local laws, and regulations.
                We do not condone or support the use of our software for spam, harassment, or any illegal activities.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-6 text-center border-t border-slate-200">
            <p className="text-slate-500 text-sm mb-2">Last updated: June 10, 2026</p>
            <p className="text-slate-500 text-sm mb-4">
              Need help?{" "}
              <a href="https://wa.me/+919641700503" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-semibold hover:underline">
                Chat on WhatsApp
              </a>
              {" "}or access the{" "}
              <a href="https://control.zaplink.net/" className="text-emerald-500 font-semibold hover:underline">
                Control Panel
              </a>
            </p>
            <p className="text-slate-400 text-xs">
              © 2026 WA Sender. All rights reserved. WhatsApp is a trademark of Meta Platforms, Inc.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <a
        href="https://wa.me/+919641700503"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-zinc-900 border border-zinc-700 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-xl hover:bg-zinc-800 hover:-translate-y-1 transition-all z-50"
      >
        <div className="w-10 h-10 rounded-full border-2 border-amber-500 p-0.5">
          <img
            src="https://github.com/engrshuvodas.png"
            alt="Shuvo"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-white font-bold text-sm">Message - Shuvo</p>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-500 font-semibold">Online</span>
            <span className="text-zinc-500 hidden md:inline">· Avg. response: 1 Hour</span>
          </div>
        </div>
      </a>
    </div>
  );
}

// Support Card Component
function SupportCard({ icon, title, subtitle, href }: { icon: React.ReactNode; title: string; subtitle: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg transition-all group"
    >
      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="text-slate-500 text-sm">{subtitle}</p>
      </div>
    </a>
  );
}

// Social Card Component
function SocialCard({ name, subtitle, href }: { name: string; subtitle: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 bg-white border-2 border-slate-100 rounded-xl hover:border-slate-300 hover:-translate-y-1 hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-colors text-sm font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-medium text-slate-800 text-sm">{name}</p>
        <p className="text-slate-400 text-xs">{subtitle}</p>
      </div>
    </a>
  );
}

// Social Links Data
const socialLinks = [
  { name: "YouTube", subtitle: "Tutorials & Updates", href: "https://www.youtube.com/@engr_shuvo" },
  { name: "GitHub", subtitle: "Source code & Projects", href: "https://github.com/engrshuvodas" },
  { name: "Fiverr", subtitle: "Buy & Leave Review", href: "https://www.fiverr.com/shuvo_das74886" },
  { name: "LinkedIn", subtitle: "Professional Profile", href: "https://www.linkedin.com/in/engr-shuvo-das-a28085260/" },
  { name: "Portfolio", subtitle: "About Me & Projects", href: "https://engr-shuvo-portfolio.vercel.app/" },
  { name: "Email", subtitle: "engrshuvoda@gmail.com", href: "mailto:engrshuvoda@gmail.com" },
];

// Floating Icons Background
function FloatingIcons() {
  const icons = ["💬", "✉️", "💰", "📈", "🚀", "📊", "🤝", "💸", "📱", "🛒", "🎯", "📢", "🔥"];
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-white/30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        >
          {icons[Math.floor(Math.random() * icons.length)]}
        </div>
      ))}
    </div>
  );
}