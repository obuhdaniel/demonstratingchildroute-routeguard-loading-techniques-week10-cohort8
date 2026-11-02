export interface WhiteCardItem {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  actionValue: string;
  tone: 'teal' | 'orange';
  actionStyle?: 'link' | 'primary' | 'secondary';
  icon?: string;
  imageLabel?: string;
  imageBackground?: string;
  category?: 'Training' | 'Seminar' | 'Workshop';
  date?: string;
  mode?: string;
  duration?: string;
  fee?: number;
}

export const YRA_PILLARS: WhiteCardItem[] = [
  {
    id: 'publish', icon: 'P', title: 'PUBLISH',
    description: 'Build the skills to communicate and publish meaningful research.',
    actionLabel: 'Explore resources →', actionValue: '/resources', tone: 'teal',
  },
  {
    id: 'research', icon: 'R', title: 'RESEARCH',
    description: 'Develop sound research knowledge, skills and practice.',
    actionLabel: 'Explore training →', actionValue: '/programmes', tone: 'orange',
  },
  {
    id: 'impact', icon: 'I', title: 'IMPACT',
    description: 'Connect research with meaningful academic and societal outcomes.',
    actionLabel: 'Explore opportunities →', actionValue: '/opportunities', tone: 'teal',
  },
  {
    id: 'collaborate', icon: 'C', title: 'COLLABORATE',
    description: 'Build connections, mentorship and cross-disciplinary partnerships.',
    actionLabel: 'Join community →', actionValue: '/community', tone: 'orange',
  },
];

export const EVENTS: WhiteCardItem[] = [
  {
    id: 'bootcamp', title: 'YRA Global Research Bootcamp 2026',
    description: 'Intensive research training for emerging researchers and scholars.',
    actionLabel: 'Register Now →', actionValue: 'bootcamp', tone: 'teal',
    imageLabel: 'RESEARCH BOOTCAMP', category: 'Training',
    date: '20 Aug', mode: 'Online', duration: '4 Weeks', fee: 15000,
  },
  {
    id: 'slr', title: 'How to Write a Systematic Literature Review',
    description: 'Practical session on systematic literature review and publication.',
    actionLabel: 'View Details →', actionValue: 'slr', tone: 'orange',
    imageLabel: 'SLR MASTERCLASS',
    imageBackground: 'linear-gradient(135deg, #ff861b, #ffb56e)',
    category: 'Seminar', date: '30 Aug', mode: 'Online', duration: '1 Day', fee: 5000,
  },
  {
    id: 'spss', title: 'Data Analysis with SPSS for Researchers',
    description: 'Hands-on training on data analysis and interpretation.',
    actionLabel: 'View Details →', actionValue: 'spss', tone: 'teal',
    imageLabel: 'DATA ANALYSIS', category: 'Workshop',
    date: '10 Sep', mode: 'Online', duration: '2 Days', fee: 7500,
  },
];

export const YRA_RESOURCES: WhiteCardItem[] = [
  {
    id: 'free-resources', icon: 'F', title: 'Free Reources',
    description: 'Explore guides, templates and learning materials.',
    actionLabel: 'Browse free', actionValue: '/resources',
    actionStyle: 'secondary', tone: 'teal',
  },
  {
    id: 'premium-resources', icon: 'P', title: 'Premium Reources',
    description: 'Access premium guides, templates and research toolkits.',
    actionLabel: 'Browse premium', actionValue: '/resources',
    actionStyle: 'primary', tone: 'orange',
  },
];
