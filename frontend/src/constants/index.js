import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  css,
  cloud,
  discordBlack,
  facebook,
  webdev,
  file02,
  cybersecurity,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  networking,
  db,
  message,
  aiml,
  da,
  html,
  js,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  dsa,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/home",
  },
  {
    id: "1",
    title: "Courses",
    url: "/courses",
  },
  {
    id: "2",
    title: "CodeLab",
    url: "/codelab",
  },
  {
    id: "3",
    title: "ChatRoom",
    url: "/chatroom",
  },
  {
    id: "4",
    title: "New account",
    url: "/auth",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/auth",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, searchMd, file02, message];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Personalized Video Recommendation",
  "Content Based Filtering",
  "All major CS/IT subject Courses",
];

export const brainwaveServicesIcons = [html, js, css];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: "https://www.youtube.com/embed/TBIjgBVFjVI?si=GdaMTxPuqytPvuYN?modestbranding=1&rel=0&showinfo=0",
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: "https://www.youtube.com/embed/TBIjgBVFjVI?si=GdaMTxPuqytPvuYN?modestbranding=1&rel=0&showinfo=0",

  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: "https://www.youtube.com/embed/TBIjgBVFjVI?si=GdaMTxPuqytPvuYN?modestbranding=1&rel=0&showinfo=0",

  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: "https://www.youtube.com/embed/TBIjgBVFjVI?si=GdaMTxPuqytPvuYN?modestbranding=1&rel=0&showinfo=0",

  },
];

export const collabText =
  "NeuraLab Nexus offers a personalized learning platform that tailors video recommendations to individual learning preferences";

export const collabContent = [
  {
    id: "0",
    title: "Personalized Courses",
    text: collabText,
  },
  {
    id: "1",
    title: "Collaborative CodeLab",
  },
  {
    id: "2",
    title: "Realtime ChatRoom",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Web Development",
    icon: webdev,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Networking",
    icon: networking,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "CyberSecurity",
    icon: cloud,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Database Management",
    icon: dsa,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Data Analyst",
    icon: db,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Cloud Computing",
    icon: aiml,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "AI ML",
    icon: cybersecurity,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Data Structures and Algorithms",
    icon: da,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Learning Platform with personalized video recommendations",
    price: "0",
    features: [
      "Access to a variety of educational videos and tech courses",
      "Video recommendations based on user interactions",
      "Content Based Filtering",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced Learning Platform with enhanced features and support",
    price: "0.99",
    features: [
      "Advanced video recommendation Learning platform",
      "Access to real-time collaborative coding workspace (CodeLab)",
      "Priority support for prompt resolution of issues",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom Learning Platform with advanced analytics and collaboration tools",
    price: null,
    features: [
      "Customizable Courses tailored to organizational needs",
      "Advanced analytics dashboard for tracking engagement and performance",
      "Full access to real-time collaborative coding workspace (CodeLab) and chat features",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Learning Platform",
    text: "Provides users with access to personalized video recommendations and curated tech courses tailored to their interests and goals.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link:"/courses",
  },
  {
    id: "1",
    title: "CodeLab",
    text: "Enables collaborative coding sessions, allowing users to work on projects in real-time with their peers.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link:"/codelab",

  },
  {
    id: "2",
    title: "ChatRoom",
    text: "Facilitates instant communication within teams, supporting real-time collaboration and efficient information sharing.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link:"/chatroom",

  },
  
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
