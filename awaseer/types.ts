
export enum AchievementType {
  PHD = 'دكتوراه',
  MASTERS = 'ماجستير',
  BACHELORS = 'بكالوريوس',
  DIPLOMA = 'دبلوم',
  HIGH_SCHOOL = 'ثانوي',
  RETIREE = 'متقاعد',
  INDIVIDUAL = 'إنجاز فردي'
}

export interface Achievement {
  id: string;
  name: string;
  type: AchievementType;
  description: string;
  year: string;
  image?: string;
}

export interface SocialInitiative {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface Talent {
  id: string;
  owner: string;
  talentType: 'رسم' | 'كتابة' | 'تصميم' | 'أخرى';
  title: string;
  content: string; 
  description?: string;
  date?: string;
}

export interface Project {
  id: string;
  owner: string;
  name: string;
  description: string;
  link: string;
  logo: string;
}

export interface Occasion {
  id: string;
  type: string;
  title: string;
  date: string;
  description: string;
}

export interface AppData {
  magazineTitle: string;
  magazineIssue: string;
  magazineDate: string;
  heroWelcome: string;
  heroIntro: string;
  founderName: string;
  founderBio: string;
  founderImage: string;
  gloryMusicUrl: string;
  featuredStoryTitle: string;
  featuredStoryText: string;
  featuredStoryImage: string;
  achievements: Achievement[];
  initiatives: SocialInitiative[];
  talents: Talent[];
  projects: Project[];
}
