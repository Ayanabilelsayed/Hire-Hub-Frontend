import React from 'react';
import { 
  FiSearch, 
  FiEdit3, 
  FiPlus, 
  FiChevronRight, 
  FiSettings,
  FiMessageSquare,
  FiClock
} from 'react-icons/fi';
import { 
  LuHexagon, 
  LuZap, 
  LuLayoutGrid, 
  LuBriefcase 
} from "react-icons/lu";

// --- Types & Interfaces ---

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface ProjectItemProps {
  title: string;
  client: string;
  budget: string;
}

interface ActivityItemProps {
  title: string;
  date: string;
  amount: string;
  status: 'Pending' | 'Rejected' | 'Completed';
}

// --- Sub-Components ---

const StatCard = ({ label, value, icon }: StatCardProps) => (
  <div className="bg-[#0c0c0c] border border-white/[0.05] p-9 rounded-[2.2rem] hover:border-white/20 transition-all cursor-pointer group">
    <div className="mb-8 text-white/10 group-hover:text-white transition-all text-2xl">{icon}</div>
    <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.2em] mb-2">{label}</p>
    <p className="text-3xl font-bold tracking-tight">{value}</p>
  </div>
);

const ProjectItem = ({ title, client, budget }: ProjectItemProps) => (
  <div className="bg-[#0a0a0a] border border-white/[0.03] p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-[#111] transition-all group">
    <div className="flex-1">
      <h4 className="text-[17px] font-bold mb-2 group-hover:text-emerald-400 transition-colors">{title}</h4>
      <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-6">{client} • <span className="text-white/40">{budget}</span></p>
      <div className="flex gap-2">
        <span className="text-[8px] bg-white/5 px-4 py-1.5 rounded-md text-white/30 uppercase font-black">React</span>
        <span className="text-[8px] bg-white/5 px-4 py-1.5 rounded-md text-white/30 uppercase font-black">Tailwind</span>
      </div>
    </div>
    <button className="w-full md:w-auto bg-[#151515] border border-white/5 hover:bg-white hover:text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">
      Submit Proposal
    </button>
  </div>
);

const ActivityItem = ({ title, date, amount, status }: ActivityItemProps) => (
  <div className="p-9 border-b border-white/[0.02] last:border-0 flex items-center justify-between hover:bg-white/[0.01] transition-all group">
    <div className="flex items-center gap-6">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
        <FiMessageSquare className="text-white/20 text-xl group-hover:text-white" />
      </div>
      <div>
        <p className="text-[15px] font-bold mb-1.5">{title}</p>
        <p className="text-[9px] text-white/10 uppercase font-bold tracking-widest flex items-center gap-2">
            <FiClock /> {date}
        </p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-[15px] font-bold mb-2 tracking-tighter">{amount}</p>
      <span className={`text-[8px] uppercase font-black px-4 py-1 rounded-full tracking-widest ${
        status === 'Pending' ? 'bg-amber-500/10 text-amber-500' : 
        status === 'Rejected' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'
      }`}>
        {status}
      </span>
    </div>
  </div>
);

// --- Main Component ---

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:px-20 md:py-16 font-sans">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center">
            <LuHexagon className="text-3xl text-white/40" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500/10 text-emerald-400 text-[8px] font-black px-2 py-0.5 rounded-sm uppercase flex items-center gap-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div> AVAILABLE
              </span>
              <span className="bg-amber-400/10 text-amber-400 text-[8px] font-black px-2 py-0.5 rounded-sm uppercase">★ 4.9</span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight">Ahmed Mohammed</h2>
              <FiEdit3 className="text-white/20 text-sm cursor-pointer hover:text-white transition-colors" />
            </div>
            <p className="text-[11px] text-white/30 font-medium mt-1 uppercase tracking-wider">Frontend Engineer | Expert in React & Tailwind</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none text-[10px] text-white/40 font-bold px-7 py-3.5 bg-[#0c0c0c] border border-white/5 rounded-full uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <FiPlus className="text-sm" /> Add Ready Service
          </button>
          <button className="flex-1 md:flex-none text-[10px] text-black bg-white font-black px-8 py-3.5 rounded-full flex items-center justify-center gap-2 uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-white/5">
             <FiSearch className="text-sm" /> Find New Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard label="Available Balance" value="$2,450" icon={<LuLayoutGrid />} />
            <StatCard label="Completed Projects" value="18" icon={<LuZap />} />
            <StatCard label="Pending Proposals" value="3" icon={<LuHexagon />} />
            <StatCard label="Available Balance" value="$2,450" icon={<LuLayoutGrid />} />
            <StatCard label="Completed Projects" value="18" icon={<LuZap />} />
            <StatCard label="Pending Proposals" value="3" icon={<LuHexagon />} />
          </div>

          {/* Recommended Projects Card */}
          <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-10">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                    <LuBriefcase className="text-emerald-500 text-lg" />
                 </div>
                 <div>
                    <h3 className="text-[11px] font-black tracking-widest text-white uppercase">Recommended Projects</h3>
                    <p className="text-[9px] text-white/20 uppercase font-bold mt-1 tracking-tighter">Matches your skills</p>
                 </div>
              </div>
              <button className="text-[9px] text-white/20 hover:text-white uppercase font-bold tracking-widest transition flex items-center gap-1.5">Browse All <FiChevronRight /></button>
            </div>
            
            <div className="space-y-4">
              <ProjectItem title="Build Admin Dashboard for Real Estate" client="Horizon Corp" budget="$1,500 - $2,500" />
              <ProjectItem title="Convert Figma Design to Clean Code" client="Creative Agency" budget="$500" />
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="pt-6">
            <h3 className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-6 px-1">Recent Activity</h3>
            <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] overflow-hidden">
                <ActivityItem title="React Dashboard Development" date="2 days ago" amount="$800" status="Pending" />
                <ActivityItem title="Landing Page Programming" date="1 week ago" amount="$300" status="Rejected" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0c0c0c] border border-white/5 p-10 rounded-[2.5rem]">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Profile Status</h3>
              <span className="text-[11px] font-bold text-white/60">85%</span>
            </div>
            <div className="flex gap-2 mb-10">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 4 ? 'bg-white' : 'bg-white/10'}`}></div>)}
            </div>
            <button className="w-full bg-white/5 border border-white/10 hover:bg-white hover:text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              View Profile as Client
            </button>
          </div>

          <div className="bg-[#0c0c0c] border border-white/5 p-10 rounded-[2.5rem]">
            <h3 className="text-[10px] font-bold mb-10 text-white/40 uppercase tracking-[0.2em] flex items-center gap-2.5">
                <FiSettings /> Settings
            </h3>
            <div className="flex flex-col gap-8">
              {["Edit Profile", "Manage Portfolio", "Withdraw Funds"].map(label => (
                <a key={label} href="#" className="text-[10px] text-white/20 font-black hover:text-white transition-all uppercase tracking-[0.1em] flex justify-between items-center group"> 
                  {label}
                  <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-all" />
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