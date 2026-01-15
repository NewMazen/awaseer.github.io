
import { AchievementType, Achievement, SocialInitiative, Occasion, Talent, Project } from './types';

export const FAMILY_NAME = "أواصر";
export const FAMILY_DESCENDANTS = "ذرية محي الدين مليباري";
export const FOUNDER_NAME = "محي الدين مليباري";
export const FOUNDER_BIO = "رجل العلم والتقوى، الذي غرس في ذريته حب الخير والترابط، وبنى إرثاً يفتخر به أبناؤه وأحفاده في حواري مكة العريقة.";

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  { id: '1', name: 'أحمد مليباري', type: AchievementType.PHD, description: 'دكتوراه في علوم الحاسب من جامعة الملك سعود', year: '2023', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'سارة مليباري', type: AchievementType.MASTERS, description: 'ماجستير في إدارة الأعمال الدولية من جامعة الملك عبدالعزيز', year: '2024', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'ياسين مليباري', type: AchievementType.BACHELORS, description: 'بكالوريوس هندسة ميكانيكية بمرتبة الشرف', year: '2022', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'فيصل مليباري', type: AchievementType.DIPLOMA, description: 'دبلوم تقني في الشبكات والأمن السيبراني', year: '2023', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'طلال مليباري', type: AchievementType.HIGH_SCHOOL, description: 'خريج الثانوية العامة بنسبة 99% والمركز الأول على المنطقة', year: '2024', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'محمد مليباري', type: AchievementType.RETIREE, description: 'تقاعد بعد خدمة 35 عاماً في قطاع التعليم والتربية', year: '2023', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { id: '7', name: 'عبدالله مليباري', type: AchievementType.INDIVIDUAL, description: 'جائزة التميز في الابتكار التقني على مستوى الشرق الأوسط', year: '2024', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400' },
];

export const MOCK_INITIATIVES: SocialInitiative[] = [
  { id: '1', title: 'حملة إفطار صائم بالكدوة', description: 'إحياءً لذكرى الجد، بادر شباب العائلة بتوزيع الوجبات في حارة الكدوة بمكة المكرمة.', date: 'رمضان 1445', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800' },
];

export const MOCK_OCCASIONS: Occasion[] = [
  { id: '1', type: 'زواج', title: 'عقد قران ابن العائلة فهد', date: '15 رجب 1445', description: 'تم بحمد الله عقد قران ابننا فهد على كريمة إحدى العوائل الكريمة.' },
  { id: '2', type: 'مولود', title: 'قدوم المولودة "نورة"', date: '2 شعبان 1445', description: 'رزق ابن العائلة خالد بمولودة أسماها نورة، جعلها الله من مواليد السعادة.' },
];

export const MOCK_TALENTS: Talent[] = [
  { 
    id: '1', 
    owner: 'نورة مليباري', 
    talentType: 'رسم', 
    title: 'لوحات تراثية مكية', 
    content: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
    description: 'مجموعة من الرسومات التي تحاكي الزوايا العتيقة في مكة المكرمة، باستخدام الألوان الزيتية لإبراز دفء الحجر القديم.',
    date: 'رمضان ١٤٤٥ هـ'
  },
  { 
    id: '2', 
    owner: 'عمر مليباري', 
    talentType: 'كتابة', 
    title: 'خاطرة في حب الوطن', 
    content: 'وطني يا مأوى الروح، وفجر الطموح، بك نعلوا وبك نفتخر. مكة التي احتضنت صرخاتنا الأولى، وبها مشينا دروب العلم، تظل في قلوبنا منارة لا تنطفئ. إرث الأجداد أمانة نحملها، وتاريخ العائلة جزء لا يتجزأ من طين هذه الأرض الطيبة.',
    description: 'نص أدبي يجمع بين مشاعر الحنين إلى الماضي وتطلعات المستقبل، مهداة لروح الجد محي الدين.',
    date: 'شوال ١٤٤٥ هـ'
  },
  { 
    id: '3', 
    owner: 'فيصل مليباري', 
    talentType: 'تصميم', 
    title: 'هوية أواصر البصرية', 
    content: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    description: 'تصميم شعار العائلة وفلسفة الألوان المستخدمة التي ترمز للنماء (الأخضر) والأصالة (الذهبي).',
    date: 'ذو القعدة ١٤٤٥ هـ'
  },
  { 
    id: '4', 
    owner: 'ليلى مليباري', 
    talentType: 'كتابة', 
    title: 'رحلتي مع متجر شغف', 
    content: 'البدايات دائماً صعبة، لكن الشغف يحول العقبات إلى درجات سلم. بدأت بمقص وورق، واليوم أصبح المتجر يمثلني ويمثل ذوقي في اختيار التفاصيل التي تسعد الآخرين في مناسباتهم السعيدة.',
    description: 'مقال يلخص رحلة ريادة الأعمال من الفكرة إلى التنفيذ.',
    date: 'محرم ١٤٤٦ هـ'
  },
];

export const MOCK_PROJECTS: Project[] = [
  { id: '1', owner: 'ليلى مليباري', name: 'متجر شغف', description: 'مشروع متخصص في الهدايا اليدوية والتغليف الفاخر.', link: '#', logo: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=200' },
];
