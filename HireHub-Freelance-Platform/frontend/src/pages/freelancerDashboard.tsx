import React from 'react';
import { FiDollarSign, FiZap, FiEdit3, FiFileText, FiRefreshCw, FiStar, FiSettings, FiArrowRight } from 'react-icons/fi';

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 md:p-10">
      
      <div className="flex items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img 
              src="https://via.placeholder.com/64" 
              alt="Freelancer Profile" 
              className="w-16 h-16 rounded-full border-2 border-[#2A2A2A]"
            />
            <div className="absolute -top-1.5 -right-1.5 bg-[#4CAF50] text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
               <FiStar className="text-[10px]" /> 4.5
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#4CAF50] px-2 py-0.5 bg-[#4CAF50]/10 rounded font-medium">Freelancer</span>
                <p className="text-[11px] text-gray-400">Expert in React & Tailwind</p>
            </div>
            <h2 className="text-2xl font-bold mt-1">Ahmed Mohammed</h2>
            <p className="text-xs text-gray-400 mt-1">Frontend Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xs text-gray-400 font-medium px-4 py-1.5 border border-[#2A2A2A] rounded-full flex items-center gap-1.5">
            <FiZap /> Add Ready Service
          </button>
          <button className="text-xs text-black bg-white font-bold px-5 py-2 rounded-full flex items-center gap-1.5">
             Find New Projects <FiArrowRight className="text-sm"/>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 border-b border-[#2A2A2A] mb-10 overflow-x-auto text-sm">
        {["Overview", "Submitted Proposals", "Current Jobs", "My Services", "Reviews & Ratings"].map((tab, index) => (
          <button 
            key={tab}
            className={`pb-4 whitespace-nowrap ${
              index === 0 
                ? "text-white border-b-2 border-white font-medium" 
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {[
              { label: "Available Balance", value: "$2,450", icon: FiDollarSign },
              { label: "Completed Projects", value: "18", icon: FiFileText },
              { label: "Pending Proposals", value: "3", icon: FiZap }
          ].map(stat => (
              <div key={stat.label} className="md:col-span-4 bg-black p-6 rounded-2xl border border-[#2A2A2A] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-gray-500 border border-[#2A2A2A]">
                    <stat.icon className="text-xl"/>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 tracking-wide uppercase">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
              </div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 space-y-8">
          
          <div className="bg-black p-8 rounded-3xl border border-[#2A2A2A]">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <FiZap className="text-green-400 text-lg"/>
                  <h3 className="text-lg font-bold">Recommended Projects</h3>
                </div>
              <a href="#" className="text-xs text-gray-500">View All &gt;</a>
            </div>
            
            {[
              { title: "Build Admin Dashboard for Real Estate", client: "Josh Works", budget: "$1,500 - $3,000", tags: ["React", "Tailwind", "Firebase"]},
              { title: "Convert Figma Design to Clean Code", client: "Creative Agency", budget: "$800 - $1,200", tags: ["Figma", "HTML", "JS"]},
            ].map((proj, index) => (
              <div key={proj.title} className={`p-6 rounded-xl border border-[#2A2A2A] bg-[#121212] ${index > 0 ? 'mt-5' : ''}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium tracking-wide uppercase">{proj.client}</p>
                    <h4 className="text-base font-bold mt-1.5 mb-2">{proj.title}</h4>
                    <p className="text-[11px] text-[#4CAF50] px-2.5 py-1 bg-[#4CAF50]/10 rounded font-medium inline-block">Estimated Budget: {proj.budget}</p>
                    <div className="flex gap-2 mt-3.5">
                      {proj.tags.map(tag => (
                        <span key={tag} className="text-[9px] text-gray-400 px-2 py-0.5 bg-[#1A1A1A] rounded border border-[#2A2A2A] uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button className="text-xs text-white border border-[#2A2A2A] px-5 py-2 rounded-full whitespace-nowrap">
                    Submit Proposal
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black p-8 rounded-3xl border border-[#2A2A2A]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold">Recent Activity</h3>
              <button className="text-[11px] text-gray-500 font-medium px-4 py-1.5 border border-[#2A2A2A] rounded-full flex items-center gap-1.5">
                <FiRefreshCw /> Refresh Activity
              </button>
            </div>
            
            {[
                { activity: "React Dashboard Development", date: "2 days ago", amount: "$800", status: "Pending"},
                { activity: "Landing Page Programming", date: "1 week ago", amount: "$500", status: "Rejected"},
            ].map(log => (
                <div key={log.activity} className="flex items-center justify-between py-5 border-b border-[#2A2A2A]">
                    <div>
                        <p className="text-sm font-medium text-white">{log.activity}</p>
                        <p className="text-[11px] text-gray-500 mt-1">{log.date}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-200">{log.amount}</p>
                        <span className={`text-[9px] px-2.5 py-0.5 rounded-full mt-1.5 inline-block ${log.status === 'Pending' ? 'bg-[#FFC107]/10 text-[#FFC107]' : 'bg-red-400/10 text-red-400'}`}>{log.status}</span>
                    </div>
                </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
            <div className="bg-black p-8 rounded-3xl border border-[#2A2A2A]">
                <h3 className="text-lg font-bold mb-6">Profile Status</h3>
                <div className="space-y-3">
                    <p className="text-xs text-gray-400">Completeness: <span className="font-bold text-white text-sm">85%</span></p>
                    <div className="w-full h-1 bg-[#2A2A2A] rounded-full">
                        <div className="w-[85%] h-full bg-white rounded-full"></div>
                    </div>
                    <a href="#" className="text-xs text-gray-500 hover:text-white">View Profile Details &gt;</a>
                </div>
            </div>
            
            <div className="bg-black p-8 rounded-3xl border border-[#2A2A2A]">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2.5"> <FiSettings className="text-gray-500"/> Settings</h3>
                <div className="space-y-4">
                    <a href="#" className="flex items-center gap-3 text-xs text-gray-400 py-1"> <FiEdit3 className="text-lg text-gray-600"/> Edit Profile</a>
                    <a href="#" className="flex items-center gap-3 text-xs text-gray-400 py-1"> <FiFileText className="text-lg text-gray-600"/> My Proposal History</a>
                    <a href="#" className="flex items-center gap-3 text-xs text-gray-400 py-1"> <FiDollarSign className="text-lg text-gray-600"/> Withdrawal History</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;