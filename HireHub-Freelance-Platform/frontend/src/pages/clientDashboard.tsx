import React from 'react';
import { 
  FiSettings, 
  FiArrowRight, 
  FiBriefcase, 
  FiCheckCircle, 
  FiClock, 
  FiPlus, 
  FiZap,
  FiExternalLink
} from 'react-icons/fi';

const ClientDashboard = () => {
  const stats = [
    { label: "Available Balance", val: "$2,450", icon: <FiZap className="text-yellow-500" /> },
    { label: "Completed Projects", val: "18", icon: <FiCheckCircle className="text-green-500" /> },
    { label: "Pending Proposals", val: "3", icon: <FiClock className="text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center border border-[#222]">
            <div className="w-6 h-6 border-2 border-gray-400 rotate-45"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Ahmed Mohammed</h2>
            <p className="text-[11px] text-gray-500 uppercase tracking-widest">Frontend Engineer | Expert in React & Tailwind</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[11px] text-gray-300 px-4 py-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-full flex items-center gap-2 hover:bg-[#151515]">
            <span className="text-[#FFC107]">✦</span> Add Ready Service
          </button>
          <button className="text-[11px] text-black bg-white font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200">
            <FiPlus /> Find New Projects
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 border-b border-[#111] mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {["Overview", "Submitted Proposals", "Current Jobs", "My Services", "Reviews & Ratings"].map((tab, idx) => (
          <button 
            key={tab} 
            className={`pb-4 text-[12px] font-medium transition-colors ${idx === 0 ? "text-white border-b-2 border-white" : "text-gray-500 hover:text-gray-300"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#0A0A0A] p-6 rounded-2xl border border-[#1A1A1A]">
                <div className="w-8 h-8 bg-[#151515] rounded-lg mb-4 flex items-center justify-center border border-[#222]">
                  {stat.icon}
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0A0A] p-8 rounded-[32px] border border-[#1A1A1A]">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <FiBriefcase className="text-green-500 text-lg" />
                <h3 className="font-bold">Recommended Projects</h3>
              </div>
              <a href="#" className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1">
                Browse All <FiExternalLink />
              </a>
            </div>
            <div className="space-y-4">
              {[
                { title: "Build Admin Dashboard for Real Estate", price: "$1,500 - $2,500", tags: ["React", "Tailwind"] },
                { title: "Convert Figma Design to Clean Code", price: "$400 - $800", tags: ["Figma", "Next.js"] }
              ].map((job, i) => (
                <div key={i} className="bg-[#050505] p-6 rounded-2xl border border-[#151515] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="font-bold text-sm mb-1">{job.title}</h4>
                    <p className="text-[10px] text-gray-500 mb-3">{job.price}</p>
                    <div className="flex gap-2">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-[9px] bg-[#111] px-2 py-1 rounded border border-[#222] text-gray-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full sm:w-auto text-[10px] text-white bg-[#111] px-5 py-2.5 rounded-xl border border-[#222] hover:bg-white hover:text-black transition-all">
                    Submit Proposal
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A0A0A] p-8 rounded-[32px] border border-[#1A1A1A]">
            <h3 className="font-bold mb-6">Recent Activity</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-[#151515] pb-5">
                <div>
                  <p className="text-xs font-medium">React Dashboard Development</p>
                  <p className="text-[10px] text-gray-600 mt-1">Fixed bugs & updated UI components</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold">$400</p>
                  <span className="text-[9px] bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded-full mt-1 inline-block">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0A0A0A] p-7 rounded-[32px] border border-[#1A1A1A]">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase mb-6 tracking-widest">Profile Status</h3>
            <div className="mb-6">
              <div className="flex justify-between text-[10px] mb-2">
                <span className="text-gray-500">Completeness</span>
                <span className="text-white font-bold">85%</span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= 4 ? "bg-white" : "bg-[#1A1A1A]"}`}></div>
                ))}
              </div>
            </div>
            <button className="w-full py-3 bg-[#111] border border-[#222] rounded-xl text-[10px] text-gray-400 hover:text-white transition-colors">
              View Profile as Client
            </button>
          </div>

          <div className="bg-[#0A0A0A] p-7 rounded-[32px] border border-[#1A1A1A]">
            <div className="flex items-center gap-2 mb-8">
              <FiSettings className="text-gray-500 text-sm" />
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Settings</h3>
            </div>
            <div className="space-y-6">
              {["Edit Profile", "Manage Portfolio", "Withdraw Funds"].map((item) => (
                <a key={item} href="#" className="flex justify-between items-center group">
                  <span className="text-[12px] text-gray-500 group-hover:text-white transition-colors">{item}</span>
                  <FiArrowRight className="text-gray-800 group-hover:text-white transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;