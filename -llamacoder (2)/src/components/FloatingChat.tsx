import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-emerald-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="text-white font-semibold">Message - Shuvo</p>
                <p className="text-emerald-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-slate-600 text-sm mb-4">Hi! How can I help you today?</p>
            <a
              href="#"
              className="block w-full bg-emerald-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}