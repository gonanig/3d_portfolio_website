/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

*/
import { Facebook, Github, Home, Linkedin, Notebook, Palette, Phone, User } from "lucide-react";

export const projectsData = [
  {
    id: 1,
    name: "AppleWebsite",
    description: "Digital book showcase platform",
    date: "2023-07-15",
    demoLink: "https://book-slider.netlify.app/",
  },
  {
    id: 2,
    name: "ModernWebsite",
    description: "Explore the Possibilities of AI Chatting",
    date: "2022-06-20",
    demoLink: "https://6601eb4562d94a50f2dbb885--modern-ai-website.netlify.app/",
  },
  {
    id: 3,
    name: "BookSlider",
    description: "Digital book showcase platform",
    date: "2023-07-15",
    demoLink: "https://book-slider.netlify.app/",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "Monitor heart rate zones",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/gonanig",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/gonanig/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100004385175495",
    icon: "facebook",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];

export const getIcon = (icon) => {
  switch (icon) {
      case 'home':
          return <Home className="w-full h-auto" strokeWidth={1.5}/>
          case 'about':
          return <User className="w-full h-auto" strokeWidth={1.5}/>
          case 'projects':
          return <Palette className="w-full h-auto" strokeWidth={1.5}/>
          case 'contact':
          return <Phone className="w-full h-auto" strokeWidth={1.5}/>
          case 'github':
          return <Github className="w-full h-auto" strokeWidth={1.5}/>
          case 'linkedin':
          return <Linkedin className="w-full h-auto" strokeWidth={1.5}/>
          case 'facebook':
          return <Facebook className="w-full h-auto" strokeWidth={1.5}/>
          case 'resume':
          return <Notebook className="w-full h-auto" strokeWidth={1.5}/>
  
      default:
          return <Home className="w-full h-auto" strokeWidth={1.5}/>
  }
}


