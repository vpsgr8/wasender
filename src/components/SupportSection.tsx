import { MessageCircle, Headphones } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Get Activation Key",
    description: "Instant license activation",
    iconWrapperClass: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500",
  },
  {
    icon: Headphones,
    title: "Contact Support",
    description: "24/7 technical assistance",
    iconWrapperClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-500",
  },
];

export function SupportSection() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">💬</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-800">Activation & Support</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {supportOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <a
              key={option.title}
              href="#"
              className="group flex items-center gap-4 p-5 bg-white border-2 border-slate-100 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${option.iconWrapperClass} group-hover:text-white`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 group-hover:text-emerald-700">{option.title}</p>
                <p className="text-sm text-slate-500">{option.description}</p>
              </div>
              <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}