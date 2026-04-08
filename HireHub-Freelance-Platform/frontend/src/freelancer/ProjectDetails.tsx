import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiShare2 } from 'react-icons/fi';

const ProjectDetails = () => {

  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();


  console.log("Viewing Project ID:", id);


  const project = {
    title: "PUERI Nursery Care",
    category: "Mobile Application",
    designer: "Mohamed Osama",
    likes: 20,
    date: "5/4/2026",
    completionDate: "5/4/2026",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Figma to Code", "Web Performance"],
    description: "Lorem ipsum dolor sit amet consectetur. Semper venenatis viverra interdum orci morbi. Curabitur tristique sollicitudin nunc id parturient non viverra sed. Viverra auctor faucibus consequat aliquet. Nibh neque auctor vulputate nisl faucibus malesuada. Lorem ipsum dolor sit amet consectetur..."
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-20">

      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-black uppercase tracking-widest"
        >
          <FiArrowLeft /> Back
        </button>
        <div className="flex gap-4">
          <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-white/40 hover:text-white border border-white/5">
            <FiHeart />
          </button>
          <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-white/40 hover:text-white border border-white/5">
            <FiShare2 />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
   
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0d0d0d] aspect-video flex items-center justify-center group">
                 <div className="text-white/5 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-white/10 transition-colors">
                    Project View {item} (ID: {id})
                 </div>
              </div>
            ))}
          </div>

          <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-10">
            <h3 className="text-[11px] font-black tracking-[0.3em] text-white/20 uppercase mb-8 border-l-2 border-emerald-500 pl-4">
              About For Project
            </h3>
            <p className="text-[14px] text-white/40 leading-[1.8] font-medium text-justify">
              {project.description}
            </p>
            <div className="mt-12 flex justify-center">
                <button className="bg-white/5 border border-white/10 px-12 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-2xl">
                    Inspection
                </button>
            </div>
          </div>
        </div>


        <div className="lg:col-span-4">
          <div className="bg-[#080808] border border-white/5 rounded-[2rem] p-8 sticky top-10">
            <h3 className="text-[11px] font-black tracking-[0.2em] text-white/20 uppercase mb-10 text-center">Business Card</h3>
            
            <div className="space-y-6">
              {[
                { label: "Freelancer Name", value: project.designer },
                { label: "Likes", value: project.likes },
                { label: "Date of Addition", value: project.date },
                { label: "Completion Date", value: project.completionDate }
              ].map((info, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/[0.03] pb-4">
                  <span className="text-[11px] text-white/20 font-bold uppercase tracking-wider">{info.label}</span>
                  <span className="text-[13px] font-bold text-white/80">{info.value}</span>
                </div>
              ))}

              <div className="pt-4">
                <span className="text-[11px] text-white/20 font-bold uppercase block mb-6 tracking-wider">Skills Used</span>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-[9px] font-bold text-white/30 uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;