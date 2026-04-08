import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiSearch, FiEdit3, FiPlus, FiEye, FiClock, FiStar 
} from 'react-icons/fi';
import { LuHexagon } from "react-icons/lu";

// 1. مكون كارت المشروع المعدل مع إضافة id للـ Navigation
const ProjectCard = ({ title, views, id }: { title: string; views: string; id: number }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/project/${id}`)}
      className="group cursor-pointer transition-all duration-500 hover:scale-[1.03]"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 aspect-[4/3] flex items-center justify-center">
         <div className="text-white/5 text-[10px] font-black uppercase tracking-[0.3em]">Project Preview</div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
            <div className="bg-white text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <FiEye size={18} />
            </div>
         </div>
      </div>
      <div className="mt-6 px-2">
        <h4 className="text-[15px] font-bold tracking-tight mb-2 group-hover:text-emerald-400 transition-colors leading-snug">{title}</h4>
        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">{views} View</p>
      </div>
    </div>
  );
};

const RatingRow = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/[0.02] last:border-0 group">
    <span className="text-[13px] text-white/40 font-medium group-hover:text-white/70 transition-colors">
      {label}
    </span>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} className="text-amber-400 fill-amber-400 text-[10px]" />
      ))}
    </div>
  </div>
);

const ReviewItem = ({ name, project, date, comment }: { name: string; project: string; date: string; comment: string }) => (
  <div className="py-8 border-b border-white/[0.03] last:border-0 px-2">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h4 className="text-[14px] font-bold text-white mb-1">{name}</h4>
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.15em]">
          {project} • {date}
        </p>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="text-amber-400 fill-amber-400 text-[9px]" />
        ))}
      </div>
    </div>
    <p className="text-[13px] text-white/40 leading-relaxed max-w-3xl">
      {comment}
    </p>
  </div>
);

const FreelancerDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  // بيانات المشاريع
  const projectsData = [
    { id: 1, title: "PUERI Nursery Care (Mobile App)", views: "200" },
    { id: 2, title: "PUERI Nursery Care (Mobile App)", views: "200" },
    { id: 3, title: "PUERI Nursery Care (Mobile App)", views: "200" },
  ];

  const overviewRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      if (reviewsRef.current && scrollPosition >= reviewsRef.current.offsetTop) setActiveTab('Reviews & Ratings');
      else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) setActiveTab('My Projects');
      else setActiveTab('Overview');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, tabName: string) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 150, behavior: 'smooth' });
      setActiveTab(tabName);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center relative">
              <LuHexagon className="text-3xl text-white/20" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">AVAILABLE</span>
                <span className="bg-amber-400/10 text-amber-400 text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">★ 4.9</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Ahmed Mohammed <FiEdit3 className="inline text-white/20 text-sm ml-2 cursor-pointer hover:text-white transition-colors" /></h2>
              <p className="text-[11px] text-white/30 font-medium mt-1 capitalize tracking-wider">Frontend Engineer | Expert in React & Tailwind</p>
            </div>
          </div>
          <div className="flex gap-4">
             <button className="text-[10px] text-white/40 font-bold px-7 py-3.5 bg-[#0c0c0c] border border-white/5 rounded-full capitalize tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"><FiPlus /> Add Ready Service</button>
             <button className="text-[10px] text-black bg-white font-black px-8 py-3.5 rounded-full capitalize tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-white/10 flex items-center gap-2"><FiSearch size={14} /> Find New Projects</button>
          </div>
        </div>

        {/* Sticky Tabs */}
        <div className="sticky top-0 bg-black/90 backdrop-blur-xl z-50 mb-16">
          <div className="flex gap-12 border-b border-white/10 relative">
            {[
              { name: 'Overview', ref: overviewRef },
              { name: 'My Projects', ref: projectsRef },
              { name: 'Reviews & Ratings', ref: reviewsRef }
            ].map((tab) => (
              <button 
                key={tab.name}
                onClick={() => scrollToSection(tab.ref, tab.name)}
                className={`pb-5 text-[14px] font-black capitalize tracking-[0.10em] transition-all relative z-10
                  ${activeTab === tab.name ? 'text-white' : 'text-white/20 hover:text-white/50'}`}
              >
                {tab.name}
                {activeTab === tab.name && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <section ref={overviewRef} className="mb-32 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-10 shadow-sm">
                <h3 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-8 border-l-2 border-emerald-500 pl-4">About</h3>
                <p className="text-[15px] text-white/40 leading-[1.8] font-medium text-justify"> 
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique totam voluptatum obcaecati ab nulla? Rem animi possimus, numquam obcaecati minima autem. Libero vel veniam officiis laboriosam explicabo eveniet dolorem at.
                </p>
              </div>
              <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-10">
                <h3 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-8 border-l-2 border-emerald-500 pl-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'].map(s => (
                    <span key={s} className="bg-white/5 px-6 py-2.5 rounded-xl text-[9px] text-white/30 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/5">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-[#080808] border border-white/5 p-10 rounded-[1.5rem] h-fit">
              <h3 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-10">Statistics</h3>
              <div className="flex flex-col space-y-8">
                <div className="flex justify-between items-center text-[13px] font-bold capitalize tracking-widest">
                  <span className="text-white/20">Evaluations</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-amber-400 fill-amber-400 text-[10px]" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[13px] font-bold capitalize tracking-widest">
                  <span className="text-white/20">Completion</span>
                  <span className="text-white/80">33.33%</span>
                </div>
                <div className="flex justify-between items-center text-[13px] font-bold capitalize tracking-widest">
                  <span className="text-white/20">Delivery</span>
                  <span className="text-white/80">33.33%</span>
                </div>
                <div className="flex justify-between items-center text-[13px] font-bold capitalize tracking-widest">
                  <span className="text-white/20">Response speed</span>
                  <span className="flex items-center gap-1 text-white/80">
                    <FiClock size={12} className="text-white/40" /> 3h 25m
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - قمت بدمج التعديل الجديد هنا */}
        <section ref={projectsRef} className="mb-32 scroll-mt-32">
          <div className="flex justify-between items-center mb-12 px-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-[11px] font-black tracking-[0.3em] text-white uppercase border-l-2 border-emerald-500 pl-4">
                My Projects
              </h3>
              <span className="text-[9px] text-white/20 ml-5 uppercase tracking-widest font-bold">
                Total: {projectsData.length} Projects
              </span>
            </div>
            
            <button className="text-[9px] bg-[#111] text-white/40 border border-white/5 px-6 py-2.5 rounded-xl font-black uppercase tracking-widest hover:text-white hover:bg-[#1a1a1a] transition-all flex items-center gap-2 group">
              <FiPlus className="group-hover:rotate-90 transition-transform duration-300" /> 
              Add Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id} 
                title={project.title} 
                views={project.views} 
              />
            ))}
          </div>
        </section>

        {/* Reviews & Ratings Section */}
        <section ref={reviewsRef} className="scroll-mt-32">
          <div className="space-y-12">
            <div className="bg-[#080808] border border-white/[0.03] rounded-[1.5rem] p-10">
              <h3 className="text-[11px] font-black tracking-[0.3em] text-white/20 uppercase mb-6">Ratings</h3>
              <div className="flex flex-col">
                <RatingRow label="Professionalism in dealing" />
                <RatingRow label="Communication Follow-up" />
                <RatingRow label="Quality of Work" />
                <RatingRow label="Project Field Experience" />
                <RatingRow label="On-Time Delivery" />
                <RatingRow label="Dealing With Him Once" />
              </div>
            </div>
            
            <div className="bg-[#080808] border border-white/[0.03] rounded-[1.5rem] p-10 shadow-lg">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[11px] font-black tracking-[0.3em] text-white/20 uppercase">Client Reviews</h3>
                <span className="text-[10px] text-white/10 font-bold uppercase tracking-widest">3 Reviews</span>
              </div>
              <div className="flex flex-col">
                <ReviewItem 
                  name="Alpha Tech Inc." 
                  project="Food Delivery App" 
                  date="2 weeks ago" 
                  comment="Excellent and very professional work. Ahmed met the deadlines and provided smooth, bug-free interfaces." 
                />
                <ReviewItem 
                  name="Cyber Group" 
                  project="Innovative UI Design" 
                  date="1 month ago" 
                  comment="Design details were translated with high precision. The user experience is great." 
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FreelancerDashboard;