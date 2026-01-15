
import React, { useState, useEffect } from 'react';
import Navbar, { ViewType } from './components/Navbar';
import { 
  FOUNDER_NAME,
  FOUNDER_BIO,
  MOCK_ACHIEVEMENTS,
  MOCK_INITIATIVES,
  MOCK_TALENTS,
  MOCK_PROJECTS 
} from './constants';
import { AppData } from './types';

// استيراد المكونات المستقلة
import { PageTransition, ConfettiEffect } from './components/CommonLayout';
import { LoginModal } from './components/Admin/LoginModal';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { LandingCover } from './components/Pages/LandingCover';
import { HallOfGloryPage } from './components/Pages/HallOfGloryPage';
import { AboutPage } from './components/Pages/AboutPage';
import { InitiativesPage } from './components/Pages/InitiativesPage';
import { TalentsPage } from './components/Pages/TalentsPage';
import { ProjectsPage } from './components/Pages/ProjectsPage';

const INITIAL_DATA: AppData = {
  magazineTitle: 'أواصر',
  magazineIssue: 'الإصدار الأول',
  magazineDate: 'رمضان ١٤٤٥ هـ',
  heroWelcome: 'مرحباً بكم في  ',
  heroIntro: 'مجلة عائلية تجمع شتات الأخبار وتنشر عبق الإنجازات لذرية الجد محي الدين مليباري.',
  founderName: FOUNDER_NAME,
  founderBio: FOUNDER_BIO,
  founderImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
  gloryMusicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  featuredStoryTitle: 'قصة كفاح ونجاح',
  featuredStoryText: 'هنا نسطر أعظم القصص التي مرت بها العائلة عبر الأجيال، من حواري مكة القديمة إلى آفاق العلم الواسعة.',
  featuredStoryImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
  achievements: MOCK_ACHIEVEMENTS,
  initiatives: MOCK_INITIATIVES,
  talents: MOCK_TALENTS,
  projects: MOCK_PROJECTS,
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [appData, setAppData] = useState<AppData>(INITIAL_DATA);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('awaseer_cms_data');
    if (savedData) {
      try {
        setAppData(JSON.parse(savedData));
      } catch (e) {
        console.error("خطأ في تحميل البيانات", e);
      }
    }
  }, []);

  // وظيفة حفظ صامتة لدعم التحديث اللحظي
  const handleSaveData = (newData: AppData) => {
    setAppData(newData);
    localStorage.setItem('awaseer_cms_data', JSON.stringify(newData));
  };

  const handleLoginSuccess = () => {
    setIsAdminMode(true);
    setCurrentView('admin');
    setIsLoginModalOpen(false);
  };

  const renderCurrentPage = () => {
    if (currentView === 'admin') {
      return (
        <AdminDashboard 
          data={appData} 
          onSave={handleSaveData} 
          onExit={() => setCurrentView('home')} 
        />
      );
    }

    switch (currentView) {
      case 'home':
        return <LandingCover data={appData} onEnter={setCurrentView} onAdminEnter={() => setIsLoginModalOpen(true)} />;
      case 'glory':
        return <HallOfGloryPage data={appData} />;
      case 'about':
        return <AboutPage data={appData} />;
      case 'initiatives':
        return <InitiativesPage data={appData} />;
      case 'talents':
        return <TalentsPage data={appData} />;
      case 'projects':
        return <ProjectsPage data={appData} />;
      default:
        return <LandingCover data={appData} onEnter={setCurrentView} onAdminEnter={() => setIsLoginModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        isAdminMode={isAdminMode} 
        onAdminClick={() => setIsLoginModalOpen(true)} 
      />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />

      <main>{renderCurrentPage()}</main>

      {currentView !== 'home' && currentView !== 'admin' && (
        <footer className="bg-slate-900 border-t border-emerald-900/20 py-20 mt-20 text-right" dir="rtl">
          <div className="container mx-auto px-6 text-center">
             <div className="flex items-center justify-center gap-4 mb-8">
               <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl">أ</div>
               <h2 className="text-3xl font-black text-white">مجلة {appData.magazineTitle}</h2>
             </div>
             <p className="text-emerald-500/40 font-black uppercase tracking-[0.5em] text-xs leading-loose">
               {appData.magazineIssue} — {appData.magazineDate} <br/> 
               جميع الحقوق محفوظة لذرية {appData.founderName}
             </p>
          </div>
        </footer>
      )}

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
