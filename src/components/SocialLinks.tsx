import { Youtube, Github, Linkedin, Mail, Globe } from "lucide-react";

const socialLinks = [
  { 
    icon: Youtube, 
    title: "YouTube Channel", 
    description: "Tutorials & Updates", 
    iconWrapperClass: "group-hover:bg-red-500",
  },
  { 
    icon: Github, 
    title: "GitHub Profile", 
    description: "Source code & Projects",
    iconWrapperClass: "group-hover:bg-slate-800",
  },
  { 
    icon: Globe, 
    title: "Fiverr Reviews", 
    description: "Buy & Leave Review",
    iconWrapperClass: "group-hover:bg-emerald-500",
  },
  { 
    icon: Linkedin, 
    title: "LinkedIn", 
    description: "Professional Profile",
    iconWrapperClass: "group-hover:bg-blue-600",
  },
  { 
    icon: Globe, 
    title: "Portfolio", 
    description: "About Me & Projects",
    iconWrapperClass: "group-hover:bg-indigo-500",
  },
  { 
    icon: Mail, 
    title: "Email Me", 
    description: "engrshuvoda@gmail.com",
    iconWrapperClass: "group-hover:bg-red-400",
  },
];

export function SocialLinks() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">🌐</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-800">Follow Developer</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.title}
              href="#"
              className="group flex items-center gap-3 p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 text-slate-600 ${link.iconWrapperClass} group-hover:text-white transition-all duration-300`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-slate-800 text-sm">{link.title}</p>
                <p className="text-xs text-slate-500">{link.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}