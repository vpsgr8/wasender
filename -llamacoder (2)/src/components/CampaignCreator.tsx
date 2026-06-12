import { useState } from "react";
import { Campaign, Contact, MessageTemplate } from "../App";
import { Play, Pause, Trash2, Plus, Send, Clock, Users, Shield } from "lucide-react";

interface CampaignCreatorProps {
  contacts: Contact[];
  templates: MessageTemplate[];
  campaigns: Campaign[];
  setCampaigns: (campaigns: Campaign[]) => void;
}

export function CampaignCreator({ contacts, templates, campaigns, setCampaigns }: CampaignCreatorProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [sendingSpeed, setSendingSpeed] = useState("normal");
  const [scheduleTime, setScheduleTime] = useState("");

  const activeContacts = contacts.filter((c) => c.status === "active");

  const handleCreateCampaign = () => {
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: campaignName,
      status: "draft",
      totalContacts: selectedContacts.length,
      sentCount: 0,
      deliveredCount: 0,
      readCount: 0,
      failedCount: 0,
      createdAt: new Date().toISOString(),
      scheduledAt: scheduleTime || undefined,
    };
    setCampaigns([newCampaign, ...campaigns]);
    setShowCreateModal(false);
    setCampaignName("");
    setSelectedContacts([]);
    setScheduleTime("");
  };

  const startCampaign = (campaignId: string) => {
    setCampaigns(campaigns.map((c) => (c.id === campaignId ? { ...c, status: "running" as const } : c)));
  };

  const pauseCampaign = (campaignId: string) => {
    setCampaigns(campaigns.map((c) => (c.id === campaignId ? { ...c, status: "paused" as const } : c)));
  };

  const deleteCampaign = (campaignId: string) => {
    setCampaigns(campaigns.filter((c) => c.id !== campaignId));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Campaigns</h1>
          <p className="text-slate-500 mt-1">Create and manage your bulk messaging campaigns</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Campaign
        </button>
      </div>

      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3">
        <Shield className="w-6 h-6 text-blue-600" />
        <div>
          <p className="font-semibold text-blue-800">Anonymous Sending Mode</p>
          <p className="text-sm text-blue-600">All messages will be sent without revealing your phone number</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800">All Campaigns</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-800">{campaign.name}</h3>
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
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {campaign.totalContacts} contacts
                    </span>
                    <span>{campaign.sentCount} sent</span>
                    <span>{campaign.deliveredCount} delivered</span>
                    <span>{campaign.readCount} read</span>
                    {campaign.failedCount > 0 && <span className="text-red-500">{campaign.failedCount} failed</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {campaign.status === "draft" && (
                    <button
                      onClick={() => startCampaign(campaign.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Start
                    </button>
                  )}
                  {campaign.status === "running" && (
                    <button
                      onClick={() => pauseCampaign(campaign.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
                    >
                      <Pause className="w-4 h-4" />
                      Pause
                    </button>
                  )}
                  {campaign.status === "paused" && (
                    <button
                      onClick={() => startCampaign(campaign.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Resume
                    </button>
                  )}
                  <button
                    onClick={() => deleteCampaign(campaign.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {campaign.status !== "draft" && (
                <div className="mt-4">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${(campaign.sentCount / campaign.totalContacts) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    <span>{Math.round((campaign.sentCount / campaign.totalContacts) * 100)}% complete</span>
                    <span>{campaign.totalContacts - campaign.sentCount} remaining</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">Create New Campaign</h2>
              <p className="text-slate-500 mt-1">Configure your bulk messaging campaign</p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Campaign Name</label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="e.g., Summer Sale Promotion"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message Template</label>
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select a template</option>
                  {templates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Contacts ({selectedContacts.length} selected)</label>
                <div className="border border-slate-200 rounded-xl max-h-48 overflow-y-auto">
                  <div className="p-3 border-b border-slate-100 bg-slate-50">
                    <button
                      onClick={() => setSelectedContacts(activeContacts.map((c) => c.id))}
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Select All Active ({activeContacts.length})
                    </button>
                  </div>
                  {activeContacts.map((contact) => (
                    <label key={contact.id} className="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedContacts.includes(contact.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedContacts([...selectedContacts, contact.id]);
                          } else {
                            setSelectedContacts(selectedContacts.filter((id) => id !== contact.id));
                          }
                        }}
                        className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500"
                      />
                      <div>
                        <p className="font-medium text-slate-800">{contact.name}</p>
                        <p className="text-sm text-slate-500">{contact.phone}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sending Speed</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "slow", label: "Slow", desc: "1 msg/5sec" },
                    { id: "normal", label: "Normal", desc: "1 msg/2sec" },
                    { id: "fast", label: "Fast", desc: "1 msg/sec" },
                  ].map((speed) => (
                    <button
                      key={speed.id}
                      onClick={() => setSendingSpeed(speed.id)}
                      className={`p-4 border-2 rounded-xl text-left transition-all ${
                        sendingSpeed === speed.id ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <p className="font-medium text-slate-800">{speed.label}</p>
                      <p className="text-sm text-slate-500">{speed.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Schedule (Optional)</label>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <input
                    type="datetime-local"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-800">Privacy Protected</span>
                </div>
                <p className="text-sm text-emerald-700">Your phone number will be hidden from all recipients.</p>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setShowCreateModal(false)} className="px-6 py-3 text-slate-600 hover:text-slate-800 font-medium transition-colors">
                Cancel
              </button>
              <button
                onClick={handleCreateCampaign}
                disabled={!campaignName || selectedContacts.length === 0}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}