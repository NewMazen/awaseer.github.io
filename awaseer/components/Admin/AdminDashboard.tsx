
import React, { useState, useRef, useEffect } from 'react';
import { AppData, AchievementType } from '../../types';
import { ImagePicker } from './ImagePicker';

interface AdminDashboardProps {
  data: AppData;
  onSave: (d: AppData) => void;
  onExit: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ data, onSave, onExit }) => {
  const [formData, setFormData] = useState<AppData>(data);
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('');
  const audioFileInputRef = useRef<HTMLInputElement>(null);

  // تحديث البيانات لحظياً عند كل تغيير
  const syncChanges = (updatedData: AppData) => {
    setFormData(updatedData);
    onSave(updatedData); // انعكاس فوري في الموقع
    setIsSaving(true);
    const now = new Date();
    setLastSaved(`${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`);
    setTimeout(() => setIsSaving(false), 2000);
  };

  const updateField = (field: keyof AppData, value: any) => {
    const newData = { ...formData, [field]: value };
    syncChanges(newData);
  };

  const removeItem = (field: keyof AppData, id: string) => {
    const list = formData[field] as any[];
    const newData = { ...formData, [field]: list.filter((item: any) => item.id !== id) };
    syncChanges(newData);
  };

  const handleAddItem = (field: keyof AppData, template: any) => {
    const list = formData[field] as any[];
    const newData = { ...formData, [field]: [...list, { ...template, id: Date.now().toString() }] };
    syncChanges(newData);
  };

  const handleUpdateItem = (field: keyof AppData, id: string, updates: any) => {
    const list = formData[field] as any[];
    const newData = {
      ...formData,
      [field]: list.map((item: any) => item.id === id ? { ...item, ...updates } : item)
    };
    syncChanges(newData);
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateField('gloryMusicUrl', event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10 pt-28 font-sans text-right" dir="rtl">
      
      {/* إشعار التحديث اللحظي العلوي */}
      <div className={`fixed top-6 left-6 z-[300] transition-all duration-500 ${isSaving ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-emerald-600/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400/50">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          <span className="font-bold text-sm">تم التحديث لحظياً ({lastSaved})</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-slate-900/50 p-6 rounded-[2rem] border border-emerald-900/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">تح</div>
            <div>
              <h1 className="text-2xl font-black text-white">إدارة محتوى أواصر</h1>
              <p className="text-emerald-500/60 text-xs font-bold">التعديلات تنعكس مباشرة على الموقع</p>
            </div>
          </div>
          <button onClick={onExit} className="mt-4 md:mt-0 bg-slate-800 hover:bg-slate-700 text-white px-10 py-3 rounded-xl font-bold transition-all border border-slate-700 shadow-xl">العودة للموقع</button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* قائمة التبويبات */}
          <div className="space-y-2">
            {[
              { id: 'general', label: 'الرئيسية والغلاف', icon: '🏠' },
              { id: 'story', label: 'قصة العدد', icon: '📖' },
              { id: 'glory', label: 'لوحة المجد', icon: '🎓' },
              { id: 'initiatives', label: 'المبادرات', icon: '🤝' },
              { id: 'talents', label: 'المواهب', icon: '🎨' },
              { id: 'projects', label: 'المشاريع', icon: '💼' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-right px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-3 ${activeTab === tab.id ? 'bg-emerald-600 text-white shadow-xl translate-x-2' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
              >
                <span className="text-xl">{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* محتوى الإدارة الفعلي */}
          <div className="lg:col-span-3 bg-slate-900 p-8 rounded-[2.5rem] border border-emerald-900/20 shadow-2xl">
            
            {activeTab === 'general' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-4">
                <h2 className="text-2xl font-bold text-amber-500 flex items-center gap-3">الواجهة الرئيسية <span className="h-px bg-slate-800 flex-grow"></span></h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-emerald-400 uppercase tracking-widest">عنوان المجلة</label>
                    <input type="text" value={formData.magazineTitle} onChange={e => updateField('magazineTitle', e.target.value)} className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl outline-none focus:border-emerald-500 transition-all" />
                  </div>
                  <ImagePicker label="صورة الجد" value={formData.founderImage} onChange={val => updateField('founderImage', val)} />
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-black text-emerald-400">نص الترحيب</label>
                    <textarea value={formData.heroIntro} onChange={e => updateField('heroIntro', e.target.value)} className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl h-24 outline-none focus:border-emerald-500" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'story' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <h2 className="text-2xl font-bold text-amber-500">تحرير قصة العدد</h2>
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500">📝</div>
                </div>
                
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-emerald-400 uppercase tracking-widest">عنوان القصة الرئيسي</label>
                    <input 
                      type="text" 
                      value={formData.featuredStoryTitle} 
                      onChange={e => updateField('featuredStoryTitle', e.target.value)} 
                      className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl outline-none focus:border-emerald-500 text-xl font-bold" 
                      placeholder="مثال: قصة كفاح ونجاح"
                    />
                  </div>
                  
                  <ImagePicker 
                    label="صورة القصة المميزة" 
                    value={formData.featuredStoryImage} 
                    onChange={val => updateField('featuredStoryImage', val)} 
                  />
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black text-emerald-400 uppercase tracking-widest">محتوى القصة</label>
                    <textarea 
                      value={formData.featuredStoryText} 
                      onChange={e => updateField('featuredStoryText', e.target.value)} 
                      className="w-full bg-slate-800 border border-slate-700 p-5 rounded-2xl h-64 outline-none focus:border-emerald-500 leading-loose text-slate-300"
                      placeholder="اكتب تفاصيل القصة هنا..."
                    />
                  </div>
                  
                  <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-2xl flex items-center gap-4">
                    <div className="text-2xl">💡</div>
                    <p className="text-xs text-emerald-500 font-bold">نصيحة: اجعل القصة ملهمة وتركز على القيم العائلية التي زرعها الجد محي الدين.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'glory' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-4">
                <div className="flex justify-between items-center">
                   <h2 className="text-2xl font-bold text-amber-500">إدارة لوحة المجد</h2>
                   <button onClick={() => handleAddItem('achievements', { name: 'اسم جديد', type: AchievementType.PHD, description: 'وصف', year: '1446هـ', image: '' })} className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg">+ إضافة مكرم</button>
                </div>

                <div className="bg-slate-800/40 p-5 rounded-2xl border border-emerald-900/10 mb-6">
                  <label className="text-[10px] font-black text-emerald-500 uppercase mb-2 block">الموسيقى الخلفية (رابط مباشر)</label>
                  <div className="flex gap-2">
                    <input type="text" value={formData.gloryMusicUrl} onChange={e => updateField('gloryMusicUrl', e.target.value)} className="flex-grow bg-slate-900 border border-slate-700 p-3 rounded-xl text-xs outline-none" />
                    <button onClick={() => audioFileInputRef.current?.click()} className="bg-slate-700 px-4 rounded-xl text-xs font-bold">رفع</button>
                    <input type="file" ref={audioFileInputRef} onChange={handleAudioUpload} accept="audio/*" className="hidden" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {formData.achievements.map((a) => (
                    <div key={a.id} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-4 group hover:border-emerald-500/50 transition-all">
                      <div className="flex gap-4">
                        <div className="flex-grow space-y-3">
                          <input type="text" value={a.name} onChange={e => handleUpdateItem('achievements', a.id, { name: e.target.value })} className="bg-slate-900 border border-slate-700 p-2 rounded-xl w-full text-sm font-bold" placeholder="الاسم" />
                          <select value={a.type} onChange={e => handleUpdateItem('achievements', a.id, { type: e.target.value })} className="bg-slate-900 border border-slate-700 p-2 rounded-xl w-full text-xs">
                            {Object.values(AchievementType).map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div className="w-16 h-16 flex-shrink-0">
                          <ImagePicker label="" value={a.image || ''} onChange={val => handleUpdateItem('achievements', a.id, { image: val })} />
                        </div>
                      </div>
                      <input type="text" value={a.year} onChange={e => handleUpdateItem('achievements', a.id, { year: e.target.value })} className="bg-slate-900 border border-slate-700 p-2 rounded-xl w-full text-xs" placeholder="السنة" />
                      <textarea value={a.description} onChange={e => handleUpdateItem('achievements', a.id, { description: e.target.value })} className="bg-slate-900 border border-slate-700 p-2 rounded-xl w-full h-16 text-xs resize-none" placeholder="نبذة" />
                      <button onClick={() => removeItem('achievements', a.id)} className="text-red-400 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all">حذف السجل</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* الأقسام الأخرى بنفس الفلسفة */}
            {activeTab === 'initiatives' && (
              <div className="space-y-8 animate-in fade-in">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-amber-500">المبادرات</h2>
                  <button onClick={() => handleAddItem('initiatives', { title: 'مبادرة جديدة', description: 'وصف', date: '1446هـ', image: '' })} className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg">+ إضافة</button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {formData.initiatives.map(item => (
                    <div key={item.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 relative group">
                      <input type="text" value={item.title} onChange={e => handleUpdateItem('initiatives', item.id, { title: e.target.value })} className="bg-slate-900 border border-slate-700 p-3 rounded-xl w-full font-bold" />
                      <ImagePicker label="صورة المبادرة" value={item.image} onChange={val => handleUpdateItem('initiatives', item.id, { image: val })} />
                      <button onClick={() => removeItem('initiatives', item.id)} className="text-red-400 text-xs font-bold">حذف</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'talents' && (
              <div className="space-y-8 animate-in fade-in">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-amber-500">المواهب</h2>
                  <button onClick={() => handleAddItem('talents', { title: 'موهبة جديدة', owner: 'الاسم', talentType: 'رسم', content: '', description: '' })} className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-black">+ إضافة</button>
                </div>
                {formData.talents.map(item => (
                   <div key={item.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 mb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" value={item.title} onChange={e => handleUpdateItem('talents', item.id, { title: e.target.value })} className="bg-slate-900 border border-slate-700 p-3 rounded-xl font-bold" placeholder="العنوان" />
                        <input type="text" value={item.owner} onChange={e => handleUpdateItem('talents', item.id, { owner: e.target.value })} className="bg-slate-900 border border-slate-700 p-3 rounded-xl font-bold" placeholder="صاحب الموهبة" />
                      </div>
                      <ImagePicker label="العمل الفني" value={item.content} onChange={val => handleUpdateItem('talents', item.id, { content: val })} />
                      <button onClick={() => removeItem('talents', item.id)} className="text-red-400 text-xs font-bold">حذف</button>
                   </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
