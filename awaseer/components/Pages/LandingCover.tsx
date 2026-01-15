
import React from 'react';
import { AppData } from '../../types';
import { ViewType } from '../Navbar';

interface LandingProps {
  data: AppData;
  onEnter: (v: ViewType) => void;
  onAdminEnter: () => void;
}

export const LandingCover: React.FC<LandingProps> = ({ data, onEnter, onAdminEnter }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden text-right" dir="rtl">
      {/* شبكة زخرفية خلفية */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      
      {/* ترويسة الغلاف */}
      <div className="container mx-auto px-8 pt-32 pb-12 flex flex-col items-center border-b border-emerald-900/20">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6 text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.4em]">
          <span>{data.magazineIssue}</span>
          <span className="my-2 md:my-0 italic text-amber-500/80">مجلة رقمية فاخرة لذرية {data.founderName}</span>
          <span>التاريخ: {data.magazineDate}</span>
        </div>
        <h1 className="text-[14vw] md:text-[10vw] font-black text-white tracking-tighter mb-6 text-center leading-none">{data.magazineTitle}</h1>
        <div className="w-full flex justify-center items-center gap-8">
          <div className="h-px bg-gradient-to-l from-transparent to-amber-500/50 flex-grow"></div>
          <span className="text-xl md:text-3xl font-bold text-amber-500 tracking-[0.2em] uppercase">آل محـــي الدين</span>
          <div className="h-px bg-gradient-to-r from-transparent to-amber-500/50 flex-grow"></div>
        </div>
      </div>

      {/* المحتوى الرئيسي للغلاف */}
      <div className="flex-grow container mx-auto px-8 py-20 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center order-2 lg:order-1">
           <div className="relative w-full max-w-md aspect-[3/4] p-4 bg-slate-900 shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-emerald-900/30 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
             <div className="w-full h-full overflow-hidden grayscale brightness-90 contrast-125">
               <img src={data.founderImage} className="w-full h-full object-cover" alt="Founder" />
             </div>
             <div className="absolute -bottom-6 -right-6 p-8 bg-emerald-950 text-white border-r-8 border-amber-500 shadow-2xl z-20">
               <p className="text-[10px] uppercase tracking-[0.4em] mb-2 font-black text-amber-400">The Legacy Holder</p>
               <h3 className="text-3xl font-black whitespace-nowrap">{data.founderName}</h3>
             </div>
           </div>
        </div>
        
        <div className="text-right order-1 lg:order-2">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[1.1] tracking-tight">{data.heroWelcome}</h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-slate-400 mb-14 max-w-xl mr-auto border-r-8 border-emerald-600 pr-8 font-medium">{data.heroIntro}</p>
          <div className="flex flex-row-reverse gap-8 flex-wrap justify-center lg:justify-start">
            <button onClick={() => onEnter('glory')} className="bg-emerald-600 text-white px-16 py-5 rounded-full font-black text-xl shadow-2xl transition-all hover:bg-emerald-500 hover:scale-105">تصفح لوحة المجد</button>
            <button onClick={() => onEnter('about')} className="bg-transparent text-white border-2 border-slate-700 px-16 py-5 rounded-full font-black text-xl hover:border-emerald-500">افتتاحية العدد</button>
          </div>
        </div>
      </div>

      {/* قصة العدد المميزة */}
      <div className="bg-slate-900 py-32 border-y border-emerald-900/20">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            <span className="text-amber-500 font-black tracking-widest text-sm uppercase mb-4 block">قـصـــة الـعــــدد</span>
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">{data.featuredStoryTitle}</h2>
            <p className="text-xl text-slate-400 leading-loose mb-10">{data.featuredStoryText}</p>
            <div className="h-1 w-20 bg-emerald-600 rounded-full"></div>
          </div>
          <div className="relative group">
            <img src={data.featuredStoryImage} className="relative w-full rounded-[2.5rem] shadow-2xl border border-slate-800 transform group-hover:scale-[1.02] transition-transform duration-500" alt="Featured Story" />
          </div>
        </div>
      </div>

      {/* فريق العمل والمسؤولين */}
      <div className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-center items-center gap-16 text-center md:text-right">
          <button onClick={onAdminEnter} className="flex flex-col md:flex-row items-center gap-6 group">
            <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-slate-950 font-black text-3xl shadow-lg rotate-6 group-hover:rotate-12 transition-transform">ف</div>
            <div>
              <h5 className="text-emerald-500/40 text-xs font-black uppercase tracking-widest mb-1">فكرة وتنفيذ</h5>
              <p className="text-3xl font-black text-white">مازن مليباري</p>
            </div>
          </button>
          <div className="w-px h-16 bg-emerald-900/30 hidden md:block"></div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-emerald-800 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-lg -rotate-6">إ</div>
            <div>
              <h5 className="text-emerald-500/40 text-xs font-black uppercase tracking-widest mb-1">إعداد وتجميع</h5>
              <p className="text-3xl font-black text-white">سميرة مليباري</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
