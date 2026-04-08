import React, { useRef, useState, useEffect } from 'react';
import { HiPlusCircle, HiStar, HiOutlineCheckCircle } from 'react-icons/hi';
import { LuHexagon } from "react-icons/lu";
import { HiOutlineBriefcase } from 'react-icons/hi2';

const HireHubProfile = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects'>('overview');

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const overviewRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: 'overview' | 'projects') => {
    if (section === 'projects') {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('projects');
    } else {
      overviewRef.current?.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('overview');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const projectsPosition = projectsRef.current.getBoundingClientRect().top;
      
        if (projectsPosition <= 200) {
          setActiveTab('projects');
        } else {
          setActiveTab('overview');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectsList = [
    { id: 'ID: CP-102X', title: 'Food Delivery App Development', tech: '(React Native)', amount: '$1,200', date: '2 weeks ago' },
    { id: 'ID: CP-102X', title: 'Food Delivery App Development', tech: '(React Native)', amount: '$1,200', date: '2 weeks ago' },
    { id: 'ID: CP-102X', title: 'Food Delivery App Development', tech: '(React Native)', amount: '$1,200', date: '2 weeks ago' },
    { id: 'ID: CP-102X', title: 'Food Delivery App Development', tech: '(React Native)', amount: '$1,200', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-10 bg-[#0A0A0A] rounded-[2.5rem] border border-zinc-900 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shadow-2xl">
              <LuHexagon className="w-10 h-10 text-zinc-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-zinc-600 rounded-full"></div>
                <h1 className="text-3xl font-bold tracking-tight">Ahmed Mohammed</h1>
              </div>
              <p className="text-zinc-500 mt-1 font-medium text-sm md:text-base">Frontend Engineer | Expert in React & Tailwind</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#141414] border border-zinc-800 rounded-full text-xs md:text-sm font-semibold hover:bg-zinc-800 transition-all">
              <span className="text-yellow-500 italic">⚡</span> Browse Services
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-xs md:text-sm font-bold hover:bg-zinc-200 transition-all">
              <HiPlusCircle className="w-5 h-5" /> Post New Project
            </button>
          </div>
        </div>

        {/* Navigation Tabs with Moving Border */}
        <div className="flex gap-10 px-6 mb-16 border-b border-zinc-900 relative">
          <button 
            onClick={() => scrollToSection('overview')}
            className={`pb-5 text-sm font-bold transition-all relative ${activeTab === 'overview' ? 'text-white' : 'text-zinc-600'}`}
          >
            Active Projects
            {activeTab === 'overview' && (
              <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white rounded-full transition-all duration-300"></div>
            )}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`pb-5 text-sm font-bold transition-all relative ${activeTab === 'projects' ? 'text-white' : 'text-zinc-600'}`}
          >
            Projects
            {activeTab === 'projects' && (
              <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white rounded-full transition-all duration-300"></div>
            )}
          </button>
        </div>

        {/* Section 1: Overview / About */}
        <div ref={overviewRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 scroll-mt-32">
          <div className="lg:col-span-8 p-10 bg-[#0A0A0A] rounded-[2rem] border border-zinc-900 shadow-sm">
            <h2 className="text-xl font-bold mb-6">About</h2>
            <p className="text-zinc-400 leading-[1.8] text-[15px]">
              Lorem ipsum dolor sit amet consectetur. Semper venenatis viverra interdum orci morbi. Curabitur tristique sollicitudin nunc id parturient non viverra sed. Viverra auctor faucibus consequat aliquet. Nibh neque auctor vulputate nisl faucibus malesuada. Lorem ipsum dolor sit amet consectetur. Semper venenatis viverra interdum orci morbi. Curabitur tristique sollicitudin nunc id parturient non viverra sed. Viverra auctor faucibus consequat aliquet. Nibh neque auctor vulputate nisl faucibus malesuada.
            </p>
          </div>
          
          <div className="lg:col-span-4 p-10 bg-[#0A0A0A] rounded-[2rem] border border-zinc-900 flex flex-col justify-center space-y-8">
            <h2 className="text-xs font-black text-zinc-600 uppercase tracking-widest">Statistics</h2>
            <div className="flex justify-between items-center border-b border-zinc-900 pb-6">
              <span className="text-zinc-500 font-medium text-sm">Completion of projects</span>
              <span className="text-2xl font-black">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 font-medium text-sm">Total Payments</span>
              <span className="text-2xl font-black text-white">$14,500</span>
            </div>
          </div>
        </div>

        {/* Section 2: Projects with Sticky Sidebar */}
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start scroll-mt-32">
          
          {/* Projects List Area */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold flex items-center gap-3 px-2 text-zinc-100">
                <HiOutlineBriefcase className="text-zinc-700 w-7 h-7" /> Completed Projects
              </h2>
              <button className="text-xs font-bold text-zinc-600 hover:text-white transition-colors">More &gt;</button>
            </div>

            {projectsList.map((p, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between p-8 bg-[#0A0A0A] rounded-[2rem] border border-zinc-900 hover:border-zinc-700 transition-all group">
                <div className="space-y-2">
                  <span className="text-[10px] text-zinc-700 font-black uppercase tracking-widest block mb-2">{p.id}</span>
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">{p.title}</h3>
                  <p className="text-zinc-500 font-medium">{p.tech}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-8">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 rounded-full border border-green-500/20">
                      <HiOutlineCheckCircle className="text-green-500 w-4 h-4" />
                      <span className="text-[10px] font-bold text-green-500 uppercase">Completed</span>
                    </div>
                    <span className="text-[11px] text-zinc-600 font-semibold">Freelancer Ahmed Mohammed • {p.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-between min-w-[180px] mt-6 md:mt-0">
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-700 font-black uppercase tracking-widest block mb-1">Amount Paid</span>
                    <span className="text-4xl font-black tabular-nums tracking-tighter text-white">{p.amount}</span>
                  </div>
                  <button className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 bg-[#111111] border border-yellow-900/20 text-yellow-500 rounded-xl text-[10px] font-black hover:bg-yellow-500 hover:text-black transition-all uppercase tracking-tight shadow-sm">
                    <HiStar className="w-4 h-4" /> Add Review & Rating
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Account Statistics STICKY Sidebar */}
          <aside className="lg:col-span-4 sticky top-10 hidden lg:block">
            <div className="p-12 bg-[#0A0A0A] rounded-[2.5rem] border border-zinc-900 text-center space-y-12 shadow-2xl">
              <h2 className="text-[10px] font-black text-zinc-700 text-left uppercase tracking-[0.3em]">Account Statistics</h2>
              
              <div className="space-y-2">
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Total Payments</p>
                <p className="text-5xl font-black tracking-tighter text-white">$14,500</p>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Freelancers Hired</p>
                <p className="text-5xl font-black tracking-tighter text-white">03</p>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Completed Projects</p>
                <p className="text-5xl font-black tracking-tighter text-white">12</p>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default HireHubProfile;