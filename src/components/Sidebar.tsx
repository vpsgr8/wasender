import { TabType } from "../App";
import { Home, Send, Users, FileText, BarChart3, Settings, Shield, Zap } from "lucide-react";

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const menuItems = [
  { id: "dashboard" as TabType, label: "Dashboard", icon: Home },
  { id: "campaigns" as TabType, label: "Campaigns", icon: Send },
  { id: "contacts" as TabType, label: "Contacts", icon: Users },
  { id: "templates" as TabType, label: "Templates", icon: FileText },
  { id: "analytics" as TabType, label: "Analytics", icon: BarChart3 },
  { id: "settings" as TabType, label: "Settings", icon: Settings },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">WA Sender</h1>
            <span className="text-xs text-slate-400">Pro Edition v5.1</span>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 p-3 bg-emerald-900/50 rounded-lg border border-emerald-700">
        <div className="flex items-center gap-2 mb-1">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-400">Privacy Mode Active</span>
        </div>
        <p className="text-xs text-slate-400">Your number is hidden</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive ? "bg-emerald-500 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-colors">
          <Zap className="w-4 h-4" />
          Quick Send
        </button>
      </div>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <p className="text-sm font-medium">Business Account</p>
            <p className="text-xs text-slate-400">Credits: 4,500</p>
          </div>
        </div>
      </div>
    </aside>
  );
}