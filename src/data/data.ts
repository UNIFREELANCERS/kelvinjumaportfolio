import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
  href?: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href?: string;
  desc: string;
  categories?: string[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  title: string;
  image: string;
  description: string;
  categories: string[];
  href?: string;
  screenshots: ProjectScreenshot[];
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}



export const experiences: Experience[] = [
  {
    company: "UNI Freelancers Africa",
    duration: "Current",
    role: "Founder and Team Lead",
    desc: "Leading digital skills development, web development training, youth empowerment, practical learning pathways, freelancing opportunities, and organisational website and digital-systems projects.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Freelance Web Development",
    duration: "4+ years",
    role: "Full-Stack Web Developer",
    desc: "Building business websites and database-driven applications, with frontend and backend development, API and payment integrations, maintenance, hosting, and deployment.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "ChezaCheza Dance Foundation",
    duration: "Since 2022",
    role: "Dancer and Creative Contributor",
    desc: "Contributing to ChezaCheza All Stars and its academy through dance, creative performance, teamwork, youth engagement, and development activities.",
    dotColor: "bg-[#FD853A]",
  },
];

export const buttons: string[] = [
  "Websites",
  "Web Applications",
  "Business & Organisations",
  "Creative & Portfolio Websites",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "4+ Years in Web Development",
  },
  {
    icon: Award,
    name: "15+ Websites Worked On",
  },
  {
    icon: ShieldCheck,
    name: "Psychology Student, Chuka University",
  },
];

export const skills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Web Design",
  "React (Basic)",
  "Angular (Basic)",
  "API Integration",
  "PHP",
  "Laravel",
  "MySQL",
  "Database Management",
  "CRUD Operations",
  "Authentication Systems",
  "Payment Integration",
  "Git",
  "GitHub",
  "XAMPP",
  "Netlify",
  "Namecheap",
  "Domain and Hosting Management",
  "DNS Configuration",
  "Figma",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Canva",
  "UI Implementation",
  "Visual Content Creation",
  "AI-Assisted Development",
  "AI Prompt Engineering",
  "AI Productivity Tools",
  "Digital Workflow Optimisation",
  "Data Entry",
  "Bookkeeping",
  "Monitoring and Evaluation",
  "Project Coordination",
  "Problem-Solving",
  "Communication",
  "Team Collaboration",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "Open Demo",
    name: "Maisha Foundation",
    date: "Demo",
    title: "A nonprofit website demo showcasing an organisation's mission and community engagement.",
    href: "https://foundationmaishafreedemo.netlify.app/",
  },
  {
    image: "/Frame 60.svg",
    button: "View Concept",
    name: "Social Manager",
    date: "Concept",
    title: "A social media management application concept for content and publishing workflows across platforms.",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Desktop Project",
    name: "JUMA Personal AI Assistant",
    date: "Windows Assistant",
    title: "A Windows desktop assistant project using Electron, local Whisper speech recognition, and voice interaction.",
  },
  {
    image: "/assets/projects/nane-dance-hub-desktop-home.jpg",
    button: "Watch Documentary",
    name: "Nane Dance Hub",
    date: "Documentary",
    title: "Nane Dance Hub documentary video.",
    href: "https://nanedancehub.org/NANE%20DANCE%20DOCUMENTARY.mp4",
  },
  {
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    button: "Watch Video",
    name: "Meshack Omondi",
    date: "Performance",
    title: "Advert performance video.",
    href: "https://meshackprofessionalperformer.netlify.app/Advert.mp4",
  },
  {
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    button: "Watch Video",
    name: "Meshack Omondi",
    date: "Performance",
    title: "Eye of the Storm performance video.",
    href: "https://meshackprofessionalperformer.netlify.app/Eye%20of%20the%20storm.mp4",
  },
  {
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    button: "Watch Video",
    name: "Meshack Omondi",
    date: "Choreography",
    title: "Choreography performance video.",
    href: "https://meshackprofessionalperformer.netlify.app/Choreography%20.mp4",
  },
  {
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    button: "Watch Video",
    name: "Meshack Omondi",
    date: "Performance",
    title: "Fresh performance video.",
    href: "https://meshackprofessionalperformer.netlify.app/Fresh.mp4",
  },
  {
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    button: "Watch Video",
    name: "Meshack Omondi",
    date: "Performance",
    title: "Toxic performance video.",
    href: "https://meshackprofessionalperformer.netlify.app/Toxic.mp4",
  },
  {
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    button: "Watch Video",
    name: "Meshack Omondi",
    date: "Performance",
    title: "EEDF 2026 performance video.",
    href: "https://meshackprofessionalperformer.netlify.app/EEDF2026%20performance%20.mp4",
  },
];

export const projectCategories = [
  "Websites",
  "Web Applications",
  "Business & Organisations",
  "Creative & Portfolio Websites",
];

export const selectedProjects: PortfolioProject[] = [
  {
    title: "UNI Freelancers Africa",
    image: "/assets/projects/uni-freelancers-desktop-home.jpg",
    description: "An initiative connecting young people with digital skills, practical work, and economic opportunities.",
    categories: ["Websites", "Business & Organisations"],
    href: "https://unifreelancersafrica.org/",
    screenshots: [
      { src: "/assets/projects/uni-freelancers-desktop-home.jpg", alt: "UNI Freelancers Africa homepage on desktop" },
      { src: "/assets/projects/uni-freelancers-mobile-home.jpg", alt: "UNI Freelancers Africa homepage on mobile" },
    ],
  },
  {
    title: "Mathematics Association of Nairobi University",
    image: "/assets/projects/manu-home.png",
    description: "An institutional platform for MANU, with association information, student resources, events, and member engagement.",
    categories: ["Websites", "Business & Organisations"],
    href: "https://manuonbi.org/",
    screenshots: [
      { src: "/assets/projects/manu-home.png", alt: "MANU homepage" },
      { src: "/assets/projects/manu-partners.png", alt: "MANU partners section" },
    ],
  },
  {
    title: "Kejani Africa",
    image: "/assets/projects/kejani-africa-browse.png",
    description: "A property and accommodation platform. Its supplied live domain could not be reached during verification.",
    categories: ["Web Applications"],
    screenshots: [
      { src: "/assets/projects/kejani-africa-browse.png", alt: "Kejani Africa accommodation browsing page" },
      { src: "/assets/projects/kejani-africa-admin.png", alt: "Kejani Africa administration dashboard" },
    ],
  },
  {
    title: "Ballers Lane",
    image: "/assets/projects/ballers-lane-home.png",
    description: "A competitive football platform with match creation, escrow-based match funds, result verification, and payouts.",
    categories: ["Web Applications"],
    href: "https://ballerslane.online/",
    screenshots: [
      { src: "/assets/projects/ballers-lane-home.png", alt: "Ballers Lane competitive football homepage" },
      { src: "/assets/projects/ballers-lane-matches.png", alt: "Ballers Lane match listings" },
      { src: "/assets/projects/ballers-lane-operations.png", alt: "Ballers Lane operations dashboard" },
    ],
  },
  {
    title: "Maisha Foundation",
    image: "/assets/projects/maisha-foundation-desktop-home.jpg",
    description: "A nonprofit website demonstration focused on dignity, care, and opportunity for women, mothers, and young people.",
    categories: ["Websites", "Business & Organisations"],
    href: "https://foundationmaishafreedemo.netlify.app/",
    screenshots: [
      { src: "/assets/projects/maisha-foundation-desktop-home.jpg", alt: "Maisha Foundation homepage on desktop" },
      { src: "/assets/projects/maisha-foundation-mobile-home.jpg", alt: "Maisha Foundation homepage on mobile" },
    ],
  },
  {
    title: "Nane Dance Hub",
    image: "/assets/projects/nane-dance-hub-desktop-home.jpg",
    description: "A community platform highlighting youth empowerment through dance, mentorship, education, and holistic support.",
    categories: ["Websites", "Business & Organisations"],
    href: "https://nanedancehub.org/",
    screenshots: [
      { src: "/assets/projects/nane-dance-hub-desktop-home.jpg", alt: "Nane Dance Hub homepage on desktop" },
      { src: "/assets/projects/nane-dance-hub-mobile-home.jpg", alt: "Nane Dance Hub homepage on mobile" },
    ],
  },
  {
    title: "Hair Hustler",
    image: "/assets/projects/hair-hustler-home.png",
    description: "A barbershop and hair-services website with account-gated areas.",
    categories: ["Websites"],
    href: "https://unifreelancers.github.io/hairhustler/home.html",
    screenshots: [
      { src: "/assets/projects/hair-hustler-home.png", alt: "Hair Hustler barbershop homepage" },
      { src: "/assets/projects/hair-hustler-services.png", alt: "Hair Hustler services page" },
    ],
  },
  {
    title: "ChezaCheza Dress to Educate",
    image: "/assets/projects/cheza-cheza-dress-to-educate-desktop-home.jpg",
    description: "A merchandise and donation platform supporting children's education, wellbeing, and dance programming.",
    categories: ["Web Applications", "Business & Organisations"],
    href: "https://chezachezadresstoeducate.netlify.app/",
    screenshots: [
      { src: "/assets/projects/cheza-cheza-dress-to-educate-desktop-home.jpg", alt: "ChezaCheza Dress to Educate homepage on desktop" },
      { src: "/assets/projects/cheza-cheza-dress-to-educate-mobile-home.jpg", alt: "ChezaCheza Dress to Educate homepage on mobile" },
    ],
  },
  {
    title: "ChezaCheza All Stars Auditions 2026",
    image: "/assets/projects/cheza-cheza-all-stars-desktop-home.jpg",
    description: "An audition information and registration website for the ChezaCheza All Stars Academy 2026 intake.",
    categories: ["Web Applications", "Business & Organisations"],
    href: "https://chezachezaallstarsaudition2026.netlify.app/",
    screenshots: [
      { src: "/assets/projects/cheza-cheza-all-stars-desktop-home.jpg", alt: "ChezaCheza All Stars Auditions 2026 website on desktop" },
      { src: "/assets/projects/cheza-cheza-all-stars-mobile-home.jpg", alt: "ChezaCheza All Stars Auditions 2026 website on mobile" },
    ],
  },
  {
    title: "Huit Fambo Organisation",
    image: "/assets/projects/huit-fambo-desktop-home.jpg",
    description: "An organisation website presenting youth empowerment through dance, mentorship, and environmental initiatives.",
    categories: ["Websites", "Business & Organisations"],
    href: "https://huitfamboorg.netlify.app/",
    screenshots: [
      { src: "/assets/projects/huit-fambo-desktop-home.jpg", alt: "Huit Fambo homepage on desktop" },
      { src: "/assets/projects/huit-fambo-mobile-home.jpg", alt: "Huit Fambo homepage on mobile" },
    ],
  },
  {
    title: "Meshack Omondi Otieno",
    image: "/assets/projects/meshack-performer-desktop-home.jpg",
    description: "A performing-artist portfolio presenting Meshack's dance work, biography, performances, and gallery.",
    categories: ["Websites", "Creative & Portfolio Websites"],
    href: "https://meshackprofessionalperformer.netlify.app/",
    screenshots: [
      { src: "/assets/projects/meshack-performer-desktop-home.jpg", alt: "Meshack Omondi Otieno portfolio on desktop" },
      { src: "/assets/projects/meshack-performer-mobile-home.jpg", alt: "Meshack Omondi Otieno portfolio on mobile" },
    ],
  },
  {
    title: "ChezaCheza Attendance System",
    image: "/assets/projects/cheza-cheza-attendance-home.png",
    description: "An attendance and facilitator-verification system for ChezaCheza Dance Foundation.",
    categories: ["Web Applications"],
    href: "https://www.unifreelancersafricaprojects.online/",
    screenshots: [
      { src: "/assets/projects/cheza-cheza-attendance-home.png", alt: "ChezaCheza attendance system homepage" },
    ],
  },
];

export const portfolioData: PortfolioItem[] = selectedProjects.map((project) => ({
  image: project.image,
  title: project.title,
  href: project.href,
  desc: project.description,
  categories: project.categories,
}));

export const reviews: Review[] = [];

export const cardData: CardData[] = [
  { title: "Website Development", imageSrc: "/Rectangle 7.svg" },
  { title: "Full-Stack Web Development", imageSrc: "/Rectangle 7.svg" },
  { title: "Database-Driven Applications", imageSrc: "/Rectangle 7.svg" },
  { title: "API Integration", imageSrc: "/Rectangle 7.svg" },
  { title: "Payment Integration", imageSrc: "/Rectangle 7.svg" },
  { title: "Website Maintenance", imageSrc: "/Rectangle 7.svg" },
];
