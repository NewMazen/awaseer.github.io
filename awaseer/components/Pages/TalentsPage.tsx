
import React, { useState } from 'react';
import { AppData, Talent } from '../../types';
import SectionHeader from '../SectionHeader';
import { PageTransition } from '../CommonLayout';

const TalentModal: React.FC<{ talent: Talent; onClose: () => void }> = ({ talent, onClose }) => {
  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-6 backdrop-blur-2xl bg-slate-950/80 animate-in fade-in duration-500">
      <div className="bg-slate-900 border border-emerald-500/30 w-full max-w-5xl rounded-[3rem] shadow-2xl animate-in zoom-in-95 relative overflow-hidden flex flex-col md:flex-row max-h-[90vh]" dir="rtl">
        <button onClick={onClose} className="absolute top-6 left-6 z-50 w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center text-white hover:bg-red-500">✕</button>
        <div className="md:w-3/5 bg-slate-950 flex items-center justify-center">
          {talent.talentType === 'رسم' || talent.talentType === 'تصميم' ? (
            <img src={talent.content} className="w-full h-full object-contain" alt={talent.title} />
          ) : (
            <div className="p-12 md:p-20 overflow-y-auto w-full h-full text-right italic text-2xl leading-relaxed text-emerald-50">
              {talent.content}
            </div>
          )}
        </div>
        <div className="md:w-2/5 p-10 flex flex-col bg-slate-900 text-right">
          <span className="bg-emerald-600/20 text-emerald-400 px-6 py-2 rounded-full font-black text-xs mb-8 inline-block">{talent.talentType}</span>
          <h2 className="text-4xl font-black text-white mb-6">{talent.title}</h2>
          <div className="space-y-6">
            <div><h4 className="text-emerald-500 text-xs font-black mb-1">الموهوب/ة</h4><p className="text-2xl font-bold text-white">{talent.owner}</p></div>
            {talent.description && <div><h4 className="text-emerald-500 text-xs font-black mb-1">عن العمل</h4><p className="text-lg text-slate-400">{talent.description}</p></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TalentsPage: React.FC<{ data: AppData }> = ({ data }) => {
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  
  return (
    <PageTransition>
      <div className="pt-40 container mx-auto px-6 mb-40 text-right" dir="rtl">
        <SectionHeader title="مواهبنا الإبداعية" subtitle="أرواح تنبض بالفن، الفكر، والجمال في معرض أواصر." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {data.talents.map((talent) => (
            <div key={talent.id} onClick={() => setSelectedTalent(talent)} className="group cursor-pointer relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-emerald-900/10 hover:border-amber-500/30 transition-all">
              {talent.talentType === 'رسم' || talent.talentType === 'تصميم' ? (
                <div className="h-[500px] overflow-hidden"><img src={talent.content} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={talent.title} /></div>
              ) : (
                <div className="h-[500px] p-16 bg-slate-950 flex flex-col justify-center italic text-2xl text-emerald-50/80 leading-relaxed line-clamp-6">{talent.content}</div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-slate-950 to-transparent">
                <span className="text-amber-500 text-xs font-black uppercase mb-2 block">{talent.talentType}</span>
                <h3 className="text-3xl font-black text-white">{talent.title}</h3>
                <p className="text-emerald-400 font-bold mt-2">بأنامل: {talent.owner}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedTalent && <TalentModal talent={selectedTalent} onClose={() => setSelectedTalent(null)} />}
      </div>
    </PageTransition>
  );
};
