import React from 'react';
import { 
  FiSettings, 
  FiMessageSquare, 
  FiChevronRight, 
  FiZap,
  FiPlus,
  FiEdit3
} from 'react-icons/fi';

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-6 md:px-16 md:py-10 selection:bg-white/10">
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full lg:w-auto text-center sm:text-left">
          <div className="relative">
            <div className="w-20 h-20 bg-[#121212] border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="w-10 h-10 border-2 border-white/20 rounded-xl rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 border border-white/40 rounded-lg -rotate-45"></div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-1.5">
              <span className="text-[10px] text-white/50 px-2 py-0.5 bg-white/5 border border-white/10 rounded-full font-mono uppercase tracking-[0.2em]">
                CLIENT_ID: #8921
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-white">Ahmed Mohammed</h2>
              <button className="p-1 hover:bg-white/10 rounded-full transition">
                <FiEdit3 className="text-white/40 text-sm" />
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-white/40 mt-1.5 font-medium tracking-wide">
              Frontend Engineer | <span className="text-white/70">Expert in React & Tailwind</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none text-[10px] sm:text-[11px] text-[#FFC107] font-bold px-4 sm:px-6 py-3 bg-[#FFC107]/5 border border-[#FFC107]/20 rounded-full flex items-center justify-center gap-2 hover:bg-[#FFC107]/10 transition-all">
            <FiZap className="text-sm" /> <span className="whitespace-nowrap">Browse Services</span>
          </button>
          <button className="flex-1 lg:flex-none text-[10px] sm:text-[11px] text-black bg-white font-black px-4 sm:px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#34d399] hover:text-white transition-all shadow-xl shadow-white/5">
             <FiPlus className="text-base" /> <span className="whitespace-nowrap">Post Project</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 sm:gap-10 border-b border-white/5 mb-10 sm:mb-14 overflow-x-auto no-scrollbar">
        {["Active Projects", "Pending Approval", "Completed"].map((tab, index) => (
          <button 
            key={tab}
            className={`pb-4 text-[10px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all whitespace-nowrap relative ${
              index === 0 ? "text-white" : "text-white/20 hover:text-white/50"
            }`}
          >
            {tab}
            {index === 0 && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full"></span>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div className="mb-6 flex justify-between items-center px-2">
            <h3 className="text-[11px] sm:text-sm font-bold tracking-[0.15em] text-white/90 uppercase">Your Active Projects</h3>
            <button className="text-[9px] sm:text-[10px] text-white/30 hover:text-white flex items-center gap-1.5 uppercase font-bold tracking-tighter transition">
              Browse Freelancers <FiChevronRight />
            </button>
          </div>

          <div className="bg-[#0f0f0f]/40 border border-white/[0.03] p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-3xl">
             <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mb-4">
                <div className="flex-1 w-full">
                   <span className="text-[9px] text-white/10 font-mono tracking-widest uppercase">ID: DP-441X</span>
                   <h4 className="text-xl sm:text-2xl font-black mt-2 text-white tracking-tight leading-tight">Unified Database Architecture</h4>
                   
                   <div className="flex flex-wrap items-center gap-4 mt-6">
                      <span className="flex items-center gap-2 text-[9px] sm:text-[10px] bg-white/5 border border-white/5 px-3 py-1 rounded-full text-white/50 uppercase font-bold">
                        <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></div> In Progress
                      </span>
                      <p className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-tight">Freelancer:<span className="text-white/40 ml-1">Ahmed Mohammed</span></p>
                   </div>

                   <div className="mt-10 sm:mt-14 w-full">
                      <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                         <div className="w-[65%] h-full bg-white/80 rounded-full"></div>
                      </div>
                      <div className="flex justify-end mt-3">
                         <p className="text-[9px] text-white/10 font-bold tracking-widest uppercase italic">65% completed</p>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col items-start sm:items-end lg:items-start xl:items-end gap-6 w-full xl:w-auto xl:min-w-[180px]">
                   <div className="text-left sm:text-right xl:text-right w-full">
                      <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.2em] mb-1">Allocated Budget</p>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter">$2,500</p>
                   </div>

                   <div className="flex flex-row xl:flex-col gap-3 w-full">
                      <button className="flex-1 w-full bg-white/5 border border-white/5 hover:bg-white/10 text-white/70 text-[9px] sm:text-[10px] font-bold py-3.5 rounded-full transition-all tracking-widest uppercase">
                        Deposit Payment
                      </button>
                      <button className="flex-1 w-full bg-white/5 border border-white/5 hover:bg-white/10 text-white/70 text-[9px] sm:text-[10px] font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all tracking-widest uppercase">
                        <FiMessageSquare className="text-xs" /> <span className="hidden sm:inline">Contact</span>
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8 lg:space-y-10 order-1 lg:order-2">
          <div className="bg-[#0f0f0f]/40 border border-white/[0.03] p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem]">
             <h3 className="text-[10px] sm:text-[11px] font-black mb-8 sm:mb-10 text-white/30 uppercase tracking-[0.3em]">Account Statistics</h3>
             <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:space-y-10">
                {[
                  { label: "Total Payments", value: "$14,500" },
                  { label: "Freelancers Hired", value: "03" },
                  { label: "Completed Projects", value: "12" }
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-[9px] text-white/15 uppercase font-black mb-2 tracking-widest leading-none">{stat.label}</p>
                    <p className="text-xl sm:text-2xl font-black text-white tracking-tighter">{stat.value}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-[#0f0f0f]/40 border border-white/[0.03] p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem]">
            <h3 className="text-[10px] sm:text-[11px] font-black mb-8 sm:mb-10 text-white uppercase tracking-[0.2em] flex items-center gap-3"> 
              <FiSettings className="text-white/20 text-xs"/> Quick Settings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-5 gap-x-4">
                {[
                  "Profile Details", 
                  "Billing & Payment Methods", 
                  "Notification Preferences"
                ].map(label => (
                  <a key={label} href="#" className="text-[10px] sm:text-[11px] text-white/20 font-bold hover:text-white/60 transition-all tracking-wide uppercase"> 
                    {label}
                  </a>
                ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FreelancerDashboard;