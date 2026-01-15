
import React from 'react';
import { AppData } from '../../types';
import SectionHeader from '../SectionHeader';
import { PageTransition } from '../CommonLayout';

export const InitiativesPage: React.FC<{ data: AppData }> = ({ data }) => (
  <PageTransition>
    <div className="pt-40 container mx-auto px-6 text-right" dir="rtl">
      <SectionHeader title="المبادرات الاجتماعية" subtitle="بصمتنا الوفية في خدمة المجتمع والوطن." />
      <div className="space-y-16">
        {data.initiatives.map((init, index) => (
          <div key={init.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-slate-900 p-8 md:p-12 rounded-[4rem] shadow-2xl border border-emerald-900/10 group hover:border-emerald-500/20 transition-all`}>
            <div className="lg:w-1/2 overflow-hidden rounded-[3rem]">
              <img src={init.image} className="h-[450px] w-full object-cover group-hover:scale-105 transition-transform duration-700" alt={init.title} />
            </div>
            <div className="lg:w-1/2 text-right">
              <span className="bg-amber-900/40 text-amber-400 px-6 py-2 rounded-full font-black text-sm mb-6 inline-block tracking-widest">{init.date}</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">{init.title}</h3>
              <p className="text-xl leading-relaxed text-slate-400 mb-10">{init.description}</p>
              <div className="h-1 w-20 bg-emerald-600 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageTransition>
);
