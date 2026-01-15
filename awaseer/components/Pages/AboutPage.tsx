
import React from 'react';
import { AppData } from '../../types';
import SectionHeader from '../SectionHeader';
import { PageTransition } from '../CommonLayout';

export const AboutPage: React.FC<{ data: AppData }> = ({ data }) => (
  <PageTransition>
    <div className="pt-40 container mx-auto px-6 max-w-5xl text-right" dir="rtl">
      <SectionHeader title="عن العائلة والجذور" subtitle="تاريخ ممتد من العطاء في أطهر بقاع الأرض." />
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-500 rounded-[3rem] blur-3xl opacity-20"></div>
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-slate-900 shadow-2xl ring-1 ring-emerald-500/30">
            <img src={data.founderImage} className="w-full" alt="Founder" />
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-3xl font-black text-emerald-400 mb-6 underline decoration-amber-500 decoration-4 underline-offset-8">نشأة العائلة</h3>
          <p className="text-xl leading-loose text-slate-300 mb-8 whitespace-pre-wrap">{data.founderBio}</p>
        </div>
      </div>
    </div>
  </PageTransition>
);
