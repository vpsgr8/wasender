import { Campaign, Contact } from "../App";
import { Users, Send, CheckCircle, Clock, AlertTriangle } from "lucide-react";

interface DashboardProps {
  campaigns: Campaign[];
  contacts: Contact[];
}

export function Dashboard({ campaigns, contacts }: DashboardProps) {
  const stats = [
    { label: "Total Contacts", value: contacts.length, icon: Users, color: "bg-blue-500", change: "+12%" },
    { label: "Messages Sent", value: "12,458", icon: Send, color: "bg-emerald-500", change: "+23%" },
    { label: "Delivery Rate", value: "98.5%", icon: CheckCircle, color: "bg-green-500", change: "+2.1%" },
    { label: "Active Campaigns", value: campaigns.filter((c) => c.status === "running").length, icon: Clock, color: "bg-amber-500", change: "2 running" },
  ];

  const recentActivity = [
    { time: "2 min ago", message: "Campaign 'Flash Sale' sent 50 messages", type: "success" },
    { time: "15 min ago", message: "New contact imported: +1234567899", type: "info" },
    { time: "1 hour ago", message: "Campaign 'New Year Sale' completed", type: "success" },
    { time: "2 hours ago", message: "Template 'Welcome Message' updated", type: "info" },
    { time: "3 hours ago", message: "5 contacts marked as inactive", type: "warning" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's your messaging overview.</p>
      </div>

      <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="font-semibold text-emerald-800">Privacy Mode Enabled</p>
          <p className="text-sm text-emerald-600">Your sender number is hidden from all recipients</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Campaigns</h2>
          <div className="space-y-4">
            {campaigns.slice(0, 4).map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-800">{campaign.name}</p>
                  <p className="text-sm text-slate-500">{campaign.totalContacts} contacts</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-800">{campaign.sentCount} sent</p>
                    <p className="text-xs text-slate-500">{campaign.deliveredCount} delivered</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === "running"
                        ? "bg-emerald-100 text-emerald-700"
                        : campaign.status === "completed"
                        ? "bg-blue-100 text-blue-700"
                        : campaign.status === "paused"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 mt-2 rounded-full ${
                    activity.type === "success" ? "bg-emerald-500" : activity.type === "warning" ? "bg-amber-500" : "bg-blue-500"
                  }`}
                />
                <div>
                  <p className="text-sm text-slate-700">{activity.message}</p>
                  <p className="text-xs text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-800">Meta Compliance Reminder</p>
          <p className="text-sm text-amber-700 mt-1">
            Ensure all recipients have opted in to receive messages. Avoid sending promotional content to users who haven't consented.
          </p>
        </div>
      </div>
    </div>
  );
}