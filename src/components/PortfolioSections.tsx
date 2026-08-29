import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cpu, Database, GraduationCap, Award, Mail, 
  Check, Layers, Sparkles, BookOpen, ArrowUpRight,
  Terminal, ExternalLink, MapPin, Calendar, FileText,
  Globe, Mic, Shield, TrendingUp, Languages, Atom, Moon
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom LinkedIn, Kaggle, GitHub Icon Components for premium look
const CustomLinkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const CustomGithub: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const CustomKaggle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 324 324" fill="currentColor" {...props}>
    <path d="M162 0C72.5 0 0 72.5 0 162s72.5 162 162 162 162-72.5 162-162S251.5 0 162 0zm54.1 237.4c-6.8 6.8-17.8 6.8-24.6 0l-39.7-39.7-18.7 18.7V236c0 9.6-7.8 17.4-17.4 17.4h-6c-9.6 0-17.4-7.8-17.4-17.4v-148c0-9.6 7.8-17.4 17.4-17.4h6c9.6 0 17.4 7.8 17.4 17.4v68.5l52.5-52.5c6.8-6.8 17.8-6.8 24.6 0l3.8 3.8c6.8 6.8 6.8 17.8 0 24.6L196.4 175l48.1 48.1c6.8 6.8 6.8 17.8 0 24.6l-8.4 8.4z" />
  </svg>
);

const CustomHappenstance: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

// Custom Shaip Brand Logo Icon
const CustomShaip: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none" {...props}>
    <rect x="2" y="4" width="10" height="3.5" rx="1.75" fill="#F97316" />
    <rect x="15" y="4" width="15" height="3.5" rx="1.75" fill="#FFFFFF" />
    <rect x="2" y="11" width="18" height="3.5" rx="1.75" fill="#FFFFFF" />
    <rect x="23" y="11" width="7" height="3.5" rx="1.75" fill="#F97316" />
    <rect x="2" y="18" width="12" height="3.5" rx="1.75" fill="#F97316" />
    <rect x="17" y="18" width="13" height="3.5" rx="1.75" fill="#FFFFFF" />
    <rect x="2" y="25" width="20" height="3.5" rx="1.75" fill="#FFFFFF" />
    <rect x="25" y="25" width="5" height="3.5" rx="1.75" fill="#F97316" />
  </svg>
);

// Custom The Decor Duo Emblem
const CustomDecorDuoLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100" fill="none" {...props}>
    <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
    <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M30 72 V48 Q50 26 70 48 V72" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M38 72 V52 Q50 36 62 52 V72" stroke="#F9F9F6" strokeWidth="1.5" fill="none" opacity="0.8" />
    <circle cx="50" cy="46" r="3.5" fill="#D4AF37" />
    <path d="M50 38 V42 M45 40 L55 40" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Custom Skillorbit Logo Icon
const CustomSkillorbit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none" {...props}>
    <defs>
      <linearGradient id="soGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="16" stroke="url(#soGrad)" strokeWidth="3" opacity="0.3" strokeDasharray="4 2" />
    <path 
      d="M26 12 C20 7 11 9 11 16 C11 25 29 20 29 27 C29 33 19 35 13 30" 
      stroke="url(#soGrad)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="27" cy="13" r="2.5" fill="#F97316" />
    <circle cx="13" cy="29" r="2.5" fill="#8B5CF6" />
  </svg>
);

// Custom Cognifyz Logo Icon
const CustomCognifyz: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none" {...props}>
    <circle cx="10" cy="20" r="3" fill="#22C55E" />
    <circle cx="20" cy="10" r="3.5" fill="#F97316" />
    <circle cx="30" cy="18" r="3" fill="#3B82F6" />
    <circle cx="24" cy="30" r="3.5" fill="#A855F7" />
    <circle cx="14" cy="29" r="2.5" fill="#EAB308" />
    <line x1="10" y1="20" x2="20" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    <line x1="20" y1="10" x2="30" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    <line x1="30" y1="18" x2="24" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    <line x1="24" y1="30" x2="14" y2="29" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    <line x1="14" y1="29" x2="10" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
  </svg>
);

// Custom Dhruva OS Celestial Star Logo
const CustomDhruvaOSLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100" fill="none" {...props}>
    <defs>
      <linearGradient id="dhruvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
    <circle cx="50" cy="50" r="38" stroke="#38BDF8" strokeWidth="1.5" opacity="0.6" />
    <circle cx="50" cy="50" r="28" stroke="#C084FC" strokeWidth="1" strokeDasharray="3 2" />
    <path d="M50 16 L55 42 L81 50 L55 58 L50 84 L45 58 L19 50 L45 42 Z" fill="url(#dhruvaGrad)" />
    <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
  </svg>
);

// Types for Dhruva OS Simulator
type DhruvaModuleId = 'jarvis' | 'math' | 'bloomberg' | 'kali' | 'languages' | 'monk';

interface DhruvaModuleInfo {
  name: string;
  command: string;
  category: string;
  jarvisVoice: string;
  tech: string;
  details: string[];
  metrics: { label: string; val: string }[];
}

const DHRUVA_MODULES: Record<DhruvaModuleId, DhruvaModuleInfo> = {
  jarvis: {
    name: "JARVIS Neural Voice Agent",
    command: "Hey Jarvis, summarize OS state",
    category: "Hands-Free Voice Control",
    jarvisVoice: "Dhruva OS operational. All 11 polymath skill trees synchronized. Solitary monk-mode at 100% capacity.",
    tech: "Web Speech & Web Audio APIs",
    details: [
      "Zero-latency continuous natural voice recognition & speech synthesis",
      "Dynamic contextual routing across all 11 scientific workspaces",
      "Hands-free keyboardless polymath navigation and command triggers"
    ],
    metrics: [
      { label: "Voice Latency", val: "<45ms" },
      { label: "Spoken Commands", val: "50+ Global" },
      { label: "Speech Engine", val: "Neural Web" },
      { label: "Hands-Free", val: "100% Active" }
    ]
  },
  math: {
    name: "11 Science & Polymath Skill Trees",
    command: "Hey Jarvis, open Mathematics & Quantum Lab",
    category: "Calculus, ML & Quantum Computing",
    jarvisVoice: "Loading pure calculus pathways, Qiskit quantum state vector simulators, and Scikit-Learn pipelines...",
    tech: "LaTeX Notation + Qiskit Simulator",
    details: [
      "Pure Calculus, Differential Equations & Linear Algebra roadmaps",
      "Quantum Computing circuits (IBM Qiskit) & Quantum Fourier Transforms",
      "Data Science, Machine Learning, Deep Architectures & Advanced SQL"
    ],
    metrics: [
      { label: "Skill Trees", val: "11 Masteries" },
      { label: "Quantum Circuits", val: "Qiskit Native" },
      { label: "Math Notation", val: "Live LaTeX" },
      { label: "ML Roadmaps", val: "End-to-End" }
    ]
  },
  bloomberg: {
    name: "Bloomberg Professional® Terminal",
    command: "Hey Jarvis, launch Bloomberg Terminal",
    category: "Wall Street Quantitative Finance",
    jarvisVoice: "Live tick stream established. DCF valuation workbench active. Yield curve spreads (YAS/WB) computing...",
    tech: "Python BQL Quant Engine + Live Stream",
    details: [
      "Live multi-asset tick stream & real-time global capital markets feed",
      "Discounted Cash Flow (DCF) valuation models & sensitivity matrix",
      "Yield curve spreads (YAS/WB) & Python BQL quant algorithmic models"
    ],
    metrics: [
      { label: "Tick Stream", val: "Real-Time" },
      { label: "Valuation", val: "DCF / WACC" },
      { label: "Quant Engine", val: "Python BQL" },
      { label: "Yield Spreads", val: "YAS / WB" }
    ]
  },
  kali: {
    name: "Kali Linux & Cyber Warfare Lab",
    command: "Hey Jarvis, initialize Kali Lab",
    category: "Offensive Security & CTF Arena",
    jarvisVoice: "Spawning root bash environment. SUID privilege escalation sandbox and hash-cracking suite ready.",
    tech: "Interactive Bash Virtual Terminal",
    details: [
      "Embedded Linux terminal simulator with 60+ native Unix utilities",
      "SUID privilege escalation challenges & automated binary exploits",
      "Cryptographic hash cracking modules & capture-the-flag (CTF) arena"
    ],
    metrics: [
      { label: "Terminal", val: "Interactive Bash" },
      { label: "Exploits", val: "SUID / Bin" },
      { label: "Crypto Lab", val: "Hash Cracker" },
      { label: "CTF Sandbox", val: "Multi-Stage" }
    ]
  },
  languages: {
    name: "20+ Polyglot Language Studio",
    command: "Hey Jarvis, open Polyglot Studio",
    category: "Classical & Global Linguistics",
    jarvisVoice: "Active recall decks loaded. Classical Sanskrit, Tamil, Hindi, Russian, Japanese & French initialized.",
    tech: "Spaced-Repetition Active Recall Decks",
    details: [
      "Native Indian Classical languages: Sanskrit (संस्कृतम्), Hindi (हिंदी), Tamil (தமிழ்)",
      "Global language suites: Russian (Русский), French, Japanese (日本語), German",
      "Intelligent spaced-repetition active recall flashcards with phonetic phonemes"
    ],
    metrics: [
      { label: "Languages", val: "20+ Native" },
      { label: "Classicals", val: "Sanskrit/Tamil" },
      { label: "Recall Mode", val: "Spaced Ret." },
      { label: "Phonetics", val: "Audio Clones" }
    ]
  },
  monk: {
    name: "24-Hour Solitary Discipline & Sleep OS",
    command: "Hey Jarvis, enter 24h Monk Mode",
    category: "Solitary Mastery & Biometrics",
    jarvisVoice: "Monk-mode routines activated. 8-hour sleep tap-in/tap-out biometric recovery calculation in progress.",
    tech: "Biometric Recovery Calculator",
    details: [
      "8-Hour sleep tap-in/tap-out system with circadian biometric recovery score",
      "1-Hour deep research sprint lab with LaTeX vault & viva defense timer",
      "Instrument studio (Guitar/Tabla) & 3-Act Story screenplay authoring with AI critique"
    ],
    metrics: [
      { label: "Monk Cycle", val: "24h Strict" },
      { label: "Sleep Recovery", val: "8h Biometrics" },
      { label: "Research Lab", val: "1h Sprints" },
      { label: "Creative Arts", val: "Guitar/Tabla" }
    ]
  }
};

// Types for Model Arena Classifier
type ClassifierName = 'Random Forest' | 'Support Vector Machine' | 'Gradient Boosting' | 'Logistic Regression';

interface ClassifierMetric {
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
}

const CLASSIFIERS: Record<ClassifierName, ClassifierMetric> = {
  'Random Forest': { accuracy: 94.2, precision: 93.5, recall: 92.1, f1: 92.8 },
  'Support Vector Machine': { accuracy: 89.6, precision: 88.0, recall: 87.5, f1: 87.7 },
  'Gradient Boosting': { accuracy: 95.8, precision: 95.0, recall: 94.2, f1: 94.6 },
  'Logistic Regression': { accuracy: 84.1, precision: 82.5, recall: 81.0, f1: 81.7 }
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const PortfolioSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Interactive Dhruva OS Simulator States
  const [activeDhruvaModule, setActiveDhruvaModule] = useState<DhruvaModuleId>('jarvis');
  const [jarvisProcessing, setJarvisProcessing] = useState<boolean>(false);
  const [jarvisSpokenText, setJarvisSpokenText] = useState<string>(DHRUVA_MODULES.jarvis.jarvisVoice);

  const handleSelectDhruvaModule = (moduleId: DhruvaModuleId) => {
    if (activeDhruvaModule === moduleId) return;
    setJarvisProcessing(true);
    setActiveDhruvaModule(moduleId);
    setTimeout(() => {
      setJarvisSpokenText(DHRUVA_MODULES[moduleId].jarvisVoice);
      setJarvisProcessing(false);
    }, 300);
  };

  // Interactive Model Arena States
  const [selectedModel, setSelectedModel] = useState<ClassifierName>('Random Forest');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(true);

  // Contact Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Simulate training when a model is selected
  const handleModelTrain = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    setShowResults(false);
    setLogs([]);

    const logMessages = [
      `[INFO] Initializing Model Arena evaluation for ${selectedModel}...`,
      `[INFO] Fetching 9,000+ attrition employee records...`,
      `[INFO] Target column detected: Attrition (16.2% positive class ratio)`,
      `[INFO] Encoding categorical variables and scaling numerical features...`,
      `[INFO] Splitting dataset into 80/20 train/test sets...`,
      `[INFO] Optimizing hyperparameters using GridSearchCV...`,
      `[INFO] Model fit completed in 314ms.`,
      `[SUCCESS] Model evaluation generated. Ready.`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logMessages.length) {
        setLogs(prev => [...prev, logMessages[currentStep]]);
        setTrainingProgress(Math.min(((currentStep + 1) / logMessages.length) * 100, 100));
        currentStep++;
      } else {
        clearInterval(interval);
        setIsTraining(false);
        setShowResults(true);
      }
    }, 450);
  };

  // Submit Contact Form
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormSubmitted(false);
      }, 5000);
    }
  };

  // Render SVG Decision Boundary based on model selection
  const renderDecisionBoundary = () => {
    switch (selectedModel) {
      case 'Logistic Regression':
        return (
          <>
            {/* Linear Boundary */}
            <motion.line 
              initial={{ x1: 0, y1: 50, x2: 300, y2: 250 }}
              animate={{ x1: 0, y1: 60, x2: 300, y2: 240 }}
              transition={{ duration: 0.6 }}
              stroke="#D4AF37" 
              strokeWidth="4" 
              strokeDasharray="4 4"
            />
            {/* Shaded areas */}
            <path d="M 0,60 L 300,240 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
      case 'Support Vector Machine':
        return (
          <>
            {/* Smooth Plane Boundary */}
            <motion.path 
              initial={{ d: "M 0,90 Q 150,220 300,120" }}
              animate={{ d: "M 0,80 Q 150,200 300,100" }}
              transition={{ duration: 0.6 }}
              fill="none" 
              stroke="#D4AF37" 
              strokeWidth="4"
            />
            <path d="M 0,80 Q 150,200 300,100 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
      case 'Gradient Boosting':
        return (
          <>
            {/* Complex Stepped Decision Boundaries */}
            <motion.path 
              initial={{ d: "M 0,110 H 90 V 150 H 220 V 60 H 300" }}
              animate={{ d: "M 0,100 H 100 V 160 H 200 V 80 H 300" }}
              transition={{ duration: 0.6 }}
              fill="none" 
              stroke="#D4AF37" 
              strokeWidth="4"
            />
            <path d="M 0,100 H 100 V 160 H 200 V 80 H 300 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
      case 'Random Forest':
      default:
        return (
          <>
            {/* Orthogonal Split Boundaries */}
            <motion.path 
              initial={{ d: "M 0,80 H 140 V 180 H 250 V 90 H 300" }}
              animate={{ d: "M 0,90 H 120 V 170 H 260 V 100 H 300" }}
              transition={{ duration: 0.6 }}
              fill="none" 
              stroke="#D4AF37" 
              strokeWidth="4"
            />
            <path d="M 0,90 H 120 V 170 H 260 V 100 H 300 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden select-none z-30 bg-[#080808] text-[#F9F9F6]"
    >
      
      {/* OVERLAY INTRO SECTION */}
      <section className="relative min-h-[45vh] flex flex-col justify-end px-6 md:px-20 pb-16 pt-20 bg-gradient-to-b from-transparent to-[#080808] z-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-4 max-w-4xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-white uppercase leading-none">
              DHRUV <span className="text-luxury-gold">SATHVARA</span>
            </h1>
            <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-400 font-light pl-1">
              B.Tech. Lateral Artificial Intelligence &bull; Ahmedabad, India
            </p>
            
            {/* Socials Link Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 pl-1">
              <a 
                href="https://www.linkedin.com/in/dhruv-sathvara-64461b352/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-luxury-gold transition-colors duration-300"
              >
                <CustomLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Dhruv139555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-luxury-gold transition-colors duration-300"
              >
                <CustomGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.kaggle.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-luxury-gold transition-colors duration-300"
              >
                <CustomKaggle className="w-4 h-4 text-neutral-400 hover:text-luxury-gold" />
                <span>Kaggle</span>
              </a>
              <a 
                href="https://happenstance.ai/u/Dhruvsathvara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-luxury-gold transition-colors duration-300"
              >
                <CustomHappenstance className="w-4 h-4 text-neutral-400 hover:text-luxury-gold" />
                <span>Happenstance</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. ABOUT ME & PROFESSIONAL SUMMARY */}
      <section id="about" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column A: Summary details */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-3 text-luxury-gold">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-light">About Me</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide leading-tight">
              Engineering intelligence, <span className="italic text-luxury-gold">systems</span> & polymath mastery.
            </h2>
            
            <p className="font-sans text-neutral-400 leading-relaxed font-light text-base">
              I am an AI architect, software engineer, and data intelligence researcher. From engineering sovereign Life Operating Systems (Dhruva OS) with hands-free neural voice control to training production machine learning architectures and quantitative valuation engines, I focus on building end-to-end systems that bridge artificial intelligence with human potential.
            </p>
          </motion.div>

          {/* Column B: Skill cards with stagger entry */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col justify-between h-56 transition-all duration-500"
            >
              <Cpu className="w-8 h-8 text-luxury-gold stroke-[1.25]" />
              <div>
                <h3 className="font-serif text-lg tracking-wider text-white font-medium">Artificial Intelligence & ML</h3>
                <p className="font-sans text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                  Supervised Learning, Hyperparameter Tuning, Classification, Regression, and PCA.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col justify-between h-56 transition-all duration-500"
            >
              <Database className="w-8 h-8 text-luxury-gold stroke-[1.25]" />
              <div>
                <h3 className="font-serif text-lg tracking-wider text-white font-medium">Data Engineering & Systems</h3>
                <p className="font-sans text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                  Structuring SQL schemas, cleaning robust datasets, and scripting pipeline workflows.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col justify-between h-56 transition-all duration-500 col-span-1 md:col-span-2"
            >
              <Layers className="w-8 h-8 text-luxury-gold stroke-[1.25]" />
              <div className="mt-4">
                <h3 className="font-serif text-lg tracking-wider text-white font-medium">Technical Stack & Polymath Tools</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    'Python', 'React 19', 'TypeScript', 'Web Speech API', 'Web Audio',
                    'TailwindCSS', 'Scikit-Learn', 'IBM Qiskit', 'SQL', 'Flask', 'Pandas',
                    'Quant Finance (DCF)', 'Linux Systems'
                  ].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-neutral-950 border border-white/10 text-neutral-400 text-[10px] font-sans tracking-wide uppercase font-light hover:text-luxury-gold hover:border-luxury-gold/30 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#080808] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div 
            {...fadeInUp}
            className="flex flex-col space-y-4 mb-16"
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">Career Milestones</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Professional Experience</h2>
            <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
          </motion.div>

          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16">
            
            {/* The Decor Duo - Founder */}
            <motion.div 
              {...fadeInUp}
              className="relative group"
            >
              {/* Timeline dot with glowing active ring */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#080808] border-2 border-luxury-gold flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-luxury-gold/30 flex items-center justify-center p-2 text-luxury-gold shrink-0">
                    <CustomDecorDuoLogo className="w-full h-full" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-luxury-gold text-xs font-sans tracking-widest uppercase font-semibold">The Decor Duo</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold font-sans tracking-wide">
                        Self-employed &bull; Founder
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans tracking-wide flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Present
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-light mt-1">Founder & Managing Director</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-500 text-xs font-light mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                        Jun 2026 &mdash; Present &bull; 3 mos
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        Ahmedabad, Gujarat, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Live Website Link Button */}
                <a 
                  href="https://the-decor-duo.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-black border border-luxury-gold/40 text-xs font-sans tracking-wider uppercase font-semibold transition-all duration-300 group/btn shadow-lg"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>the-decor-duo.vercel.app</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              <p className="text-neutral-300 text-sm font-light italic mb-3">
                "Founded an event design and execution startup specializing in customized celebrations across Gujarat."
              </p>

              <ul className="list-disc list-inside text-neutral-400 text-sm font-light space-y-2 leading-relaxed pl-1">
                <li>Spearheaded creative direction, bespoke event styling, stage architecture, and luxury decor logistics across Gujarat.</li>
                <li>Architected and launched the web-based interactive pricing estimator & quote generator at <a href="https://the-decor-duo.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-luxury-gold underline hover:text-white transition-colors">the-decor-duo.vercel.app</a> featuring automated cost formulas and direct WhatsApp dispatch.</li>
                <li>Managed client negotiations, vendor network partnerships, resource allocations, and cross-functional teams for end-to-end execution.</li>
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                {[
                  'Start-up Leadership', 'Event Planning', 'Web Platform Architecture',
                  'Cost Estimation Systems', 'Client Operations', 'Vendor Management'
                ].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-white/5 text-neutral-400 text-[10px] font-sans tracking-wide uppercase font-light hover:text-luxury-gold hover:border-luxury-gold/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Shaip - AR/VR Intern */}
            <motion.div 
              {...fadeInUp}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#080808] border-2 border-luxury-gold flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-pulse" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center p-2 text-white shrink-0 group-hover:border-[#F97316]/50 transition-colors duration-300">
                    <CustomShaip className="w-full h-full" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white group-hover:text-luxury-gold text-xs font-sans tracking-widest uppercase font-semibold transition-colors duration-300">Shaip</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-sans tracking-wide">
                        Internship
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-sans tracking-wide flex items-center gap-1">
                        <FileText className="w-3 h-3 text-amber-300" />
                        Offer Letter Verified
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-light mt-1">AR/VR Intern</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-500 text-xs font-light mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                        Jun 2026 &mdash; Present &bull; 3 mos
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        Ahmedabad, Gujarat, India &bull; On-site
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside text-neutral-400 text-sm font-light space-y-2 leading-relaxed pl-1">
                <li>Spearheading high-fidelity multimodal data collection and spatial annotation pipelines for cutting-edge AR/VR AI models.</li>
                <li>Executing fine-grained 3D computer vision labeling, spatial feature segmentation, and quality assurance for immersive datasets.</li>
                <li>Optimizing data labeling throughput and ground-truth validation workflows for enterprise artificial intelligence deployment.</li>
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                {[
                  'Data Collection', 'Data Annotation', 'AR/VR Intelligence',
                  'Spatial Computing', 'Computer Vision Datasets', 'Dataset Quality Assurance'
                ].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-white/5 text-neutral-400 text-[10px] font-sans tracking-wide uppercase font-light hover:text-[#F97316] hover:border-[#F97316]/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skillorbit Experience */}
            <motion.div 
              {...fadeInUp}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#080808] border-2 border-neutral-700 flex items-center justify-center group-hover:border-luxury-gold transition-colors duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center p-2 text-white shrink-0 group-hover:border-purple-500/40 transition-colors duration-300">
                    <CustomSkillorbit className="w-full h-full" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white group-hover:text-luxury-gold text-xs font-sans tracking-widest uppercase font-semibold transition-colors duration-300">Skillorbit</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-sans tracking-wide">
                        Internship
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-sans tracking-wide flex items-center gap-1">
                        <FileText className="w-3 h-3 text-purple-300" />
                        Offer Letter Verified
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-light mt-1">Data Science Intern</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-500 text-xs font-light mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                        Jan 2026 &mdash; Apr 2026 &bull; 4 mos
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        Gaur Yamuna City, Uttar Pradesh &bull; On-site
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-neutral-300 text-sm font-light italic mb-3">
                "Selected as Data Science Intern at Skillorbit &mdash; gaining hands-on experience and scaling skills in real-world data science workflows."
              </p>

              <ul className="list-disc list-inside text-neutral-400 text-sm font-light space-y-2 leading-relaxed pl-1">
                <li>Leveraged statistical modeling, data visualization, and exploratory analysis to derive actionable insights from complex datasets.</li>
                <li>Collaborated on the development, optimization, and deployment of data-driven solutions in a fast-paced production environment.</li>
                <li>Engineered automated data preprocessing routines and evaluated key predictive drivers.</li>
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                {[
                  'Data Science', 'Python', 'Statistical Analysis',
                  'Data Visualization', 'Exploratory Data Analysis (EDA)', 'Predictive Modeling'
                ].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-white/5 text-neutral-400 text-[10px] font-sans tracking-wide uppercase font-light hover:text-purple-400 hover:border-purple-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cognifyz Technologies Experience */}
            <motion.div 
              {...fadeInUp}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#080808] border-2 border-neutral-800 flex items-center justify-center group-hover:border-luxury-gold transition-colors duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center p-2 text-white shrink-0 group-hover:border-emerald-500/40 transition-colors duration-300">
                    <CustomCognifyz className="w-full h-full" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white group-hover:text-luxury-gold text-xs font-sans tracking-widest uppercase font-semibold transition-colors duration-300">Cognifyz Technologies</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-sans tracking-wide">
                        Internship
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-sans tracking-wide flex items-center gap-1">
                        <Award className="w-3 h-3 text-emerald-300" />
                        Certified & Completed
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-light mt-1">Machine Learning Intern</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-500 text-xs font-light mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                        Jan 2025 &mdash; Feb 2025 &bull; 2 mos
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        Nagpur, Maharashtra, India &bull; Remote
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-neutral-300 text-sm font-light italic mb-3">
                "Strengthened core understanding of data analysis, model development, and effective technical collaboration in a professional machine learning setting."
              </p>

              <ul className="list-disc list-inside text-neutral-400 text-sm font-light space-y-2 leading-relaxed pl-1">
                <li>Developed and fine-tuned predictive machine learning models using a benchmark dataset of 9,000+ records.</li>
                <li>Conducted rigorous exploratory data analysis (EDA), correlation matrices, and feature transformations to optimize evaluation metrics.</li>
                <li>Delivered predictive modeling insights, documentation, and evaluation presentations remotely.</li>
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                {[
                  'Python (Programming Language)', 'Artificial Intelligence (AI)', 'Machine Learning',
                  'Scikit-Learn', 'Feature Engineering', 'Model Evaluation'
                ].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-white/5 text-neutral-400 text-[10px] font-sans tracking-wide uppercase font-light hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section id="education" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div 
            {...fadeInUp}
            className="flex flex-col space-y-4 mb-16"
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">Academic Foundation</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Education History</h2>
            <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Parul University */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/60 transition-all duration-500 flex flex-col justify-between h-64"
            >
              <div>
                <div className="flex items-center justify-between">
                  <GraduationCap className="w-8 h-8 text-luxury-gold stroke-[1.25]" />
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-sans font-light">2023 &mdash; 2026</span>
                </div>
                <h3 className="font-serif text-xl text-white font-light mt-6">Parul University (PIT)</h3>
                <p className="font-sans text-xs text-neutral-400 tracking-wide uppercase mt-1">B.Tech. Lateral Artificial Intelligence</p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500">Academic Standing</span>
                <span className="text-luxury-gold font-serif text-lg font-light">CGPA: 7.16 / 10</span>
              </div>
            </motion.div>

            {/* Dalia Institute */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/60 transition-all duration-500 flex flex-col justify-between h-64"
            >
              <div>
                <div className="flex items-center justify-between">
                  <GraduationCap className="w-8 h-8 text-luxury-gold stroke-[1.25]" />
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-sans font-light">2020 &mdash; 2023</span>
                </div>
                <h3 className="font-serif text-xl text-white font-light mt-6">Dalia Institute of Diploma Studies</h3>
                <p className="font-sans text-xs text-neutral-400 tracking-wide uppercase mt-1">Diploma Information Technology (GTU)</p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500">Academic Standing</span>
                <span className="text-luxury-gold font-serif text-lg font-light">CGPA: 8.72 / 10</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. PROJECTS & INTERACTIVE MODEL ARENA */}
      <section id="projects" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#080808] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div 
            {...fadeInUp}
            className="flex flex-col space-y-4 mb-16"
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">Practical Innovation</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Featured Projects</h2>
            <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
          </motion.div>

          <div className="flex flex-col space-y-20">
            
            {/* FLAGSHIP PROJECT 1: Dhruva OS (ध्रुव OS) - Universal Polymath Life Operating System */}
            <div id="dhruva-os" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/5 scroll-mt-24">
              
              {/* Project Card Text */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 flex flex-col space-y-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-sans text-xs uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
                    Flagship Life OS & Neural AI
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-sans tracking-wide">
                    React 19 &bull; Web Speech
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans tracking-wide">
                    Live Demo Active
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold p-2 shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <CustomDhruvaOSLogo className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white font-light leading-tight">
                      Dhruva OS <span className="text-luxury-gold font-normal">(ध्रुव OS)</span>
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 tracking-wider uppercase font-light">
                      Universal Polymath Discipline & Life OS
                    </p>
                  </div>
                </div>

                <p className="font-sans text-neutral-300 text-sm leading-relaxed font-light">
                  An all-in-one 24-hour solitary discipline operating system engineered from first principles for universal polymath mastery—spanning pure mathematics, Linux systems architecture, Wall Street capital markets, quantum computing, creative arts, and 20+ languages.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-400 font-light">
                  <div className="flex items-start gap-2">
                    <Mic className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Hands-Free JARVIS Neural Voice Agent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Atom className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>11 Science Trees & Quantum (Qiskit)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Kali Linux Lab & CTF Sandbox</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Bloomberg Terminal & Quant DCF</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Languages className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>20+ Polyglot Studio (Sanskrit & Global)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Moon className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>24h Monk-Mode & Sleep Biometrics</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="https://dhruva-os.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-luxury-gold hover:bg-white text-black text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl group font-sans"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://github.com/Dhruv139555" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 text-xs uppercase tracking-wider font-semibold transition-all duration-300 group font-sans"
                  >
                    <CustomGithub className="w-4 h-4" />
                    <span>Inspect on GitHub</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* JARVIS NEURAL VOICE & COMMAND SIMULATOR */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="lg:col-span-7 p-6 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl flex flex-col space-y-6 relative overflow-hidden"
              >
                {/* Simulator Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 gap-2">
                  <div className="flex items-center gap-2 text-luxury-gold">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white">
                      DHRUVA_OS // JARVIS NEURAL VOICE HUB
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://dhruva-os.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-luxury-gold/20 hover:bg-luxury-gold text-luxury-gold hover:text-black border border-luxury-gold/40 text-[10px] font-mono tracking-wider transition-all duration-300"
                    >
                      <span>LIVE APP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/50 border border-cyan-800/50 px-2 py-0.5 rounded">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Spoken Voice Commands Selection */}
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-neutral-400 mb-2 block">
                    Trigger Simulated JARVIS Spoken Commands:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(Object.keys(DHRUVA_MODULES) as DhruvaModuleId[]).map((key) => {
                      const mod = DHRUVA_MODULES[key];
                      const isSelected = activeDhruvaModule === key;
                      return (
                        <button
                          key={key}
                          onClick={() => handleSelectDhruvaModule(key)}
                          className={`p-2.5 rounded-xl text-left border text-xs font-sans transition-all duration-300 flex flex-col justify-between ${
                            isSelected 
                              ? 'bg-luxury-gold/15 border-luxury-gold text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                              : 'bg-black/60 border-white/5 text-neutral-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-mono truncate">{mod.category}</span>
                          <span className="font-medium text-[11px] text-white mt-1 leading-snug">{mod.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live JARVIS Voice Response & Waveform Box */}
                <div className="p-4 rounded-xl bg-black border border-white/10 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-neutral-400 text-[10px] border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Mic className="w-3.5 h-3.5 animate-pulse" />
                      <span>SPOKEN COMMAND: "{DHRUVA_MODULES[activeDhruvaModule].command}"</span>
                    </div>
                    <span className="text-neutral-500 font-mono">{DHRUVA_MODULES[activeDhruvaModule].tech}</span>
                  </div>

                  {/* Waveform Visualization Bars */}
                  <div className="flex items-center gap-1 h-6 py-1">
                    {[40, 75, 30, 95, 60, 85, 45, 100, 70, 50, 90, 65, 35, 80, 55, 90, 40, 70, 85, 50].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ 
                          height: jarvisProcessing ? ['20%', '100%', '30%'] : `${h}%`,
                          backgroundColor: jarvisProcessing ? '#38BDF8' : '#D4AF37'
                        }}
                        transition={{ duration: 0.5, repeat: jarvisProcessing ? Infinity : 0, delay: i * 0.02 }}
                        className="flex-1 rounded-full opacity-80"
                      />
                    ))}
                  </div>

                  {/* JARVIS Speech Bubble Output */}
                  <div className="text-neutral-200 text-xs leading-relaxed bg-neutral-950/80 p-3 rounded-lg border border-white/5">
                    <span className="text-luxury-gold font-semibold">[JARVIS RESPONSE]: </span>
                    <span className="text-neutral-200">{jarvisSpokenText}</span>
                  </div>

                  {/* Module Feature Bullets */}
                  <ul className="text-[11px] text-neutral-400 space-y-1 pl-1 list-disc list-inside">
                    {DHRUVA_MODULES[activeDhruvaModule].details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Module Metrics Bar */}
                <div className="grid grid-cols-4 gap-2 bg-black/60 p-3 rounded-xl border border-white/5 text-center">
                  {DHRUVA_MODULES[activeDhruvaModule].metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="font-sans text-[8px] uppercase tracking-wider text-neutral-500 block truncate">{m.label}</span>
                      <h5 className="text-xs font-serif text-luxury-gold mt-0.5 font-semibold truncate">{m.val}</h5>
                    </div>
                  ))}
                </div>

              </motion.div>

            </div>

            {/* PROJECT 2: Employee Management System + MODEL ARENA */}
            <div id="terminal" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-white/5 scroll-mt-28">
              
              {/* Project Card Text */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 flex flex-col space-y-6"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-neutral-500 font-medium">Python, Flask, Scikit-learn, Pandas</span>
                <h3 className="font-serif text-3xl text-white font-light leading-tight">
                  EMS &mdash; Employee Attrition Analytics (Full DS Edition)
                </h3>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                  A comprehensive full-stack analytics platform built to predict and evaluate employee attrition risk. Features an interactive Model Arena where 8 machine learning classifiers are fitted, evaluated, and contrasted live.
                </p>
                <ul className="list-disc list-inside text-neutral-500 text-xs font-light space-y-2 pl-1">
                  <li>Compared 8 classifiers: Random Forest, SVM, Gradient Boosting, etc.</li>
                  <li>PCA 2D visualization & K-Means clustering modules.</li>
                  <li>Automated pre-processing pipelines for raw CSV handling.</li>
                </ul>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  <a 
                    href="https://github.com/Dhruv139555/ems_flask" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-luxury-gold hover:text-white font-semibold transition-colors duration-300 group"
                  >
                    <span>Inspect Code on GitHub</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://huggingface.co/spaces/Dhruv139555/ems-flask" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-luxury-gold hover:text-white font-semibold transition-colors duration-300 group"
                  >
                    <span>Go to Live Space</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* MODEL ARENA WIDGET CONTAINER */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="lg:col-span-7 p-6 rounded-2xl bg-neutral-900/80 border border-white/5 shadow-2xl flex flex-col space-y-6"
              >
                
                {/* Widget Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2 text-luxury-gold">
                    <Terminal className="w-4 h-4" />
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold">Model Arena Dashboard</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-light mt-1 sm:mt-0">Live Simulation</span>
                </div>

                {/* Model Select Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(CLASSIFIERS) as ClassifierName[]).map((name) => (
                    <button
                      key={name}
                      onClick={() => {
                        setSelectedModel(name);
                        setShowResults(false);
                      }}
                      disabled={isTraining}
                      className={`px-3 py-2 rounded-xl text-[10px] uppercase font-sans tracking-wider border transition-all duration-300 font-medium ${
                        selectedModel === name 
                          ? 'bg-luxury-gold/10 border-luxury-gold text-luxury-gold' 
                          : 'bg-neutral-950 border-white/5 text-neutral-400 hover:border-white/10'
                      } ${isTraining ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                {/* Simulation Canvas & Console Area */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[220px]">
                  
                  {/* Console Logs */}
                  <div className="md:col-span-6 bg-black rounded-xl p-4 font-mono text-[10px] text-neutral-400 overflow-y-auto max-h-[200px] border border-white/5 flex flex-col justify-between">
                    <div>
                      {logs.map((log, idx) => (
                        <div key={idx} className="mb-1 leading-relaxed text-neutral-300">
                          {log}
                        </div>
                      ))}
                      {isTraining && (
                        <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden mt-4">
                          <motion.div 
                            className="bg-luxury-gold h-full animate-pulse"
                            style={{ width: `${trainingProgress}%` }}
                          />
                        </div>
                      )}
                      {!isTraining && logs.length === 0 && (
                        <div className="text-neutral-600 italic">
                          Click "Train & Evaluate" below to run simulated optimization loop.
                        </div>
                      )}
                    </div>

                    {!isTraining && (
                      <button
                        onClick={handleModelTrain}
                        className="w-full mt-4 py-2 bg-luxury-gold text-black rounded-lg text-[10px] uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                      >
                        Train & Evaluate
                      </button>
                    )}
                  </div>

                  {/* Decision Boundary Visual Representation */}
                  <div className="md:col-span-6 flex flex-col items-center justify-center bg-black/40 border border-white/5 rounded-xl p-4 relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[9px] font-sans tracking-wider uppercase text-neutral-500">2D PCA Projection</span>
                    
                    <svg viewBox="0 0 300 300" className="w-48 h-48 select-none">
                      {/* Grid Lines */}
                      <line x1="150" y1="0" x2="150" y2="300" stroke="rgba(255,255,255,0.05)" />
                      <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.05)" />
                      
                      {/* Scatter points - Class 0 (Stayed) */}
                      <circle cx="60" cy="180" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="90" cy="220" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="120" cy="190" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="70" cy="260" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="160" cy="230" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="140" cy="270" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="50" cy="110" r="4" fill="rgba(34, 197, 94, 0.6)" />
                      <circle cx="110" cy="130" r="4" fill="rgba(34, 197, 94, 0.6)" />

                      {/* Scatter points - Class 1 (Left) */}
                      <circle cx="210" cy="80" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="240" cy="120" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="180" cy="90" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="260" cy="60" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="220" cy="140" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="170" cy="180" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="280" cy="190" r="4" fill="rgba(239, 68, 68, 0.6)" />
                      <circle cx="230" cy="220" r="4" fill="rgba(239, 68, 68, 0.6)" />

                      {/* Render morphing boundary overlay */}
                      {renderDecisionBoundary()}
                    </svg>

                    {/* Legend */}
                    <div className="flex space-x-4 mt-2 text-[9px] font-sans uppercase tracking-widest text-neutral-400">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                        <span>Retained</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        <span>Attrited</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Score Indicators */}
                <AnimatePresence mode="wait">
                  {showResults && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-4 gap-4 bg-black/60 p-4 rounded-xl border border-white/5"
                    >
                      {[
                        { label: 'Accuracy', val: CLASSIFIERS[selectedModel].accuracy },
                        { label: 'Precision', val: CLASSIFIERS[selectedModel].precision },
                        { label: 'Recall', val: CLASSIFIERS[selectedModel].recall },
                        { label: 'F1 Score', val: CLASSIFIERS[selectedModel].f1 }
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <span className="font-sans text-[8px] uppercase tracking-wider text-neutral-500">{item.label}</span>
                          <h4 className="text-sm font-serif text-luxury-gold mt-1 font-semibold">{item.val}%</h4>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </div>

            {/* PROJECT 2: Restaurant Rating Prediction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Project Card Text */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 lg:order-2 flex flex-col space-y-6"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-neutral-500 font-medium">Python, Scikit-learn, Seaborn</span>
                <h3 className="font-serif text-3xl text-white font-light leading-tight">
                  Restaurant Rating Prediction & Cuisine Classification
                </h3>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                  A supervised machine learning system engineered to classify cuisines and forecast restaurant ratings. Handled advanced feature engineering, imputations, and predictive scoring, visualized via high-end correlation maps.
                </p>
                <ul className="list-disc list-inside text-neutral-500 text-xs font-light space-y-2 pl-1">
                  <li>Evaluated predictor variable correlation for feature selection.</li>
                  <li>Leveraged Random Forest classifiers for rating predictions.</li>
                  <li>Conducted extensive EDA using Seaborn matrices.</li>
                </ul>
                
                <div className="pt-2">
                  <a 
                    href="https://github.com/Dhruv139555" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-luxury-gold hover:text-white font-semibold transition-colors duration-300 group"
                  >
                    <span>Explore GitHub Project</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Static Representation of Seaborn correlation matrix (premium look) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="lg:col-span-7 p-8 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col space-y-4"
              >
                <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500">Feature Importance Output Map</span>
                <div className="grid grid-cols-4 gap-2 text-center text-[9px] font-mono text-neutral-500">
                  <span />
                  <span>Cost</span>
                  <span>Rating</span>
                  <span>Votes</span>
                  
                  <span>Cost</span>
                  <span className="bg-luxury-gold text-black rounded p-2 font-bold font-sans">1.00</span>
                  <span className="bg-luxury-gold/50 text-white rounded p-2">0.52</span>
                  <span className="bg-luxury-gold/30 text-white rounded p-2">0.34</span>
                  
                  <span>Rating</span>
                  <span className="bg-luxury-gold/50 text-white rounded p-2">0.52</span>
                  <span className="bg-luxury-gold text-black rounded p-2 font-bold font-sans">1.00</span>
                  <span className="bg-luxury-gold/60 text-white rounded p-2">0.68</span>
                  
                  <span>Votes</span>
                  <span className="bg-luxury-gold/30 text-white rounded p-2">0.34</span>
                  <span className="bg-luxury-gold/60 text-white rounded p-2">0.68</span>
                  <span className="bg-luxury-gold text-black rounded p-2 font-bold font-sans">1.00</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-sans text-neutral-400">
                  <span>Method: Pearson Coefficient Matrix</span>
                  <span className="text-luxury-gold">High Importance &bull; Cost vs. Rating</span>
                </div>
              </motion.div>

            </div>

            {/* PROJECT 3: The Decor Duo - Live Venture & Web Platform */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-white/5">
              
              {/* Project Card Text */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 flex flex-col space-y-6"
              >
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs uppercase tracking-widest text-luxury-gold font-medium">Live Startup Venture</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans tracking-wide">
                    Production
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-white font-light leading-tight">
                  The Decor Duo &mdash; Bespoke Event Decor & Interactive Cost Estimator
                </h3>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                  A high-end web platform and interactive estimation engine engineered for a bespoke event design startup. Delivers real-time package customization, instant automated cost estimation, and streamlined WhatsApp booking dispatch.
                </p>
                <ul className="list-disc list-inside text-neutral-500 text-xs font-light space-y-2 pl-1">
                  <li>Engineered dynamic multi-tier celebration packages (Royal Weddings, Haldi ceremonies, Mandaps, Corporate events).</li>
                  <li>Built real-time cost calculation algorithms with modular floral, lighting, and stage configurations.</li>
                  <li>Integrated instant WhatsApp quote routing and high-performance mobile-first responsive architecture.</li>
                </ul>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="https://the-decor-duo.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-luxury-gold text-black hover:bg-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg group"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Live Platform</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Interactive Showcase Preview Widget for The Decor Duo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="lg:col-span-7 p-8 rounded-2xl bg-neutral-900/50 border border-white/5 flex flex-col space-y-6 relative overflow-hidden group hover:border-luxury-gold/30 transition-all duration-500"
              >
                {/* Header with emblem */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold p-1">
                      <CustomDecorDuoLogo className="w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm text-white font-medium">The Decor Duo Architecture</h4>
                      <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-wider">the-decor-duo.vercel.app</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-luxury-gold font-mono px-2.5 py-1 rounded bg-luxury-gold/10 border border-luxury-gold/20">
                    Vercel Edge &bull; React
                  </span>
                </div>

                {/* Simulated Service Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Royal Mandaps", desc: "Luxury floral & drapery", tag: "Signature" },
                    { title: "Haldi & Mehendi", desc: "Vibrant custom themes", tag: "Trending" },
                    { title: "Corporate Galas", desc: "Minimalist executive styling", tag: "Bespoke" },
                    { title: "Theme Birthdays", desc: "Immersive concept setups", tag: "Custom" },
                    { title: "Live Estimator", desc: "Dynamic pricing formula", tag: "Feature" },
                    { title: "WhatsApp Connect", desc: "Instant quote dispatch", tag: "Direct" }
                  ].map((svc, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between hover:border-luxury-gold/30 transition-colors">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-luxury-gold font-mono">{svc.tag}</span>
                        <h5 className="font-serif text-xs text-white font-medium mt-1">{svc.title}</h5>
                        <p className="font-sans text-[10px] text-neutral-500 font-light mt-0.5">{svc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Metric Summary */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-luxury-gold animate-pulse" />
                    <div>
                      <span className="text-xs font-serif text-white">Interactive Estimation Workflow</span>
                      <p className="text-[10px] text-neutral-500 font-sans">Empowering clients with instant transparent pricing</p>
                    </div>
                  </div>
                  <a 
                    href="https://the-decor-duo.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-luxury-gold hover:text-white flex items-center gap-1 font-sans uppercase tracking-wider font-semibold"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. PUBLICATIONS & RESEARCH */}
      <section id="publications" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div 
            {...fadeInUp}
            className="flex flex-col space-y-4 mb-16"
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">Scholarly Work</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Publications & Research</h2>
            <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 flex flex-col lg:flex-row gap-8 items-start justify-between"
          >
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center space-x-3 text-neutral-400 text-[10px] font-sans uppercase tracking-widest">
                <span>Paper Publication</span>
                <span>&bull;</span>
                <span className="text-luxury-gold font-semibold">ISJEM Journal</span>
                <span>&bull;</span>
                <span>April 2026</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-light tracking-wide leading-tight">
                EMS-DS: Browser-Native Data Science Workflow Engine for Employee Attrition Prediction
              </h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                Developed a browser-native workflow engine for employee attrition prediction using ensemble ML models and K-Means clustering. Integrated data pre-processing, EDA, model training, clustering, and visualization into a unified web-based analytics platform.
              </p>
            </div>
            
            <div className="lg:self-center">
              <a 
                href="https://isjem.com/download/ems-ds-design-and-implementation-of-a-browser-native-data-science-workflow-engine-for-employee-attrition-prediction-using-ensemble-classification-and-k-means-segmentation/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-luxury-gold text-black hover:bg-white hover:text-black font-semibold text-xs tracking-wider uppercase px-6 py-4 rounded-xl shadow-lg transition-colors duration-300 font-sans whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Publication</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS & EXTRA DETAILS */}
      <section id="skills" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#080808] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Certifications (Col 1 & 2) */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                {...fadeInUp}
                className="flex flex-col space-y-4"
              >
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">Credentials</span>
                <h3 className="font-serif text-3xl font-light text-white">Verified Certifications</h3>
                <div className="w-12 h-[1px] bg-luxury-gold" />
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { name: "Data Analytics Essentials", issuer: "Cisco" },
                  { name: "Google AI for K12 Educators", issuer: "Google" },
                  { name: "Internet of Things (IoT)", issuer: "NPTEL" }
                ].map((cert, idx) => (
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }}
                    key={idx} 
                    className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 flex items-center justify-between transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-luxury-gold stroke-[1.25] mt-1" />
                      <div>
                        <h4 className="font-serif text-sm text-white font-medium">{cert.name}</h4>
                        <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Languages & Interests (Col 3) */}
            <motion.div 
              {...fadeInUp}
              className="space-y-8"
            >
              <div className="flex flex-col space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">Additional Details</span>
                <h3 className="font-serif text-3xl font-light text-white">Profile Context</h3>
                <div className="w-12 h-[1px] bg-luxury-gold" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Gujarati', 'Hindi'].map((lang) => (
                      <span key={lang} className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 text-xs font-sans tracking-wide">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Sports', 'Travelling'].map((interest) => (
                      <span key={interest} className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 text-xs font-sans tracking-wide">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c] scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Column A: Statement */}
          <motion.div 
            {...fadeInUp}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">Initiate Collaboration</span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-tight">
                Let's construct <span className="italic text-luxury-gold">intelligence</span> together.
              </h2>
              <p className="font-sans text-neutral-400 max-w-md leading-relaxed mt-4 font-light text-sm">
                Have a machine learning project, data science puzzle, or full-stack pipeline request? Reach out and let's explore high-impact ML solutions.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col space-y-4 mt-12 lg:mt-0 pt-6 border-t border-white/5">
              <a href="mailto:dhruvsathawara85@gmail.com" className="inline-flex items-center space-x-3 text-neutral-400 hover:text-luxury-gold transition-colors duration-300">
                <Mail className="w-5 h-5 stroke-[1.5]" />
                <span className="font-sans text-sm tracking-wide">dhruvsathawara85@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/dhruv-sathvara-64461b352/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-neutral-400 hover:text-luxury-gold transition-all duration-300 bg-neutral-950" title="LinkedIn">
                  <CustomLinkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/Dhruv139555" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-neutral-400 hover:text-luxury-gold transition-all duration-300 bg-neutral-950" title="GitHub">
                  <CustomGithub className="w-4 h-4" />
                </a>
                <a href="https://happenstance.ai/u/Dhruvsathvara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-neutral-400 hover:text-luxury-gold transition-all duration-300 bg-neutral-950" title="Happenstance">
                  <CustomHappenstance className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column B: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="p-8 md:p-10 rounded-2xl bg-neutral-900/40 border border-white/5 shadow-xl"
          >
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmitForm}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col space-y-6"
                >
                  {/* Name Input */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full py-3 bg-transparent border-b border-white/10 focus:border-luxury-gold outline-none text-white font-sans text-sm tracking-wide transition-colors duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 top-3 text-neutral-500 font-sans text-xs tracking-wider pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-luxury-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                      YOUR NAME
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full py-3 bg-transparent border-b border-white/10 focus:border-luxury-gold outline-none text-white font-sans text-sm tracking-wide transition-colors duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-0 top-3 text-neutral-500 font-sans text-xs tracking-wider pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-luxury-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                      EMAIL ADDRESS
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full py-3 bg-transparent border-b border-white/10 focus:border-luxury-gold outline-none text-white font-sans text-sm tracking-wide transition-colors duration-300 peer resize-none"
                      placeholder=" "
                    />
                    <label className="absolute left-0 top-3 text-neutral-500 font-sans text-xs tracking-wider pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-luxury-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                      MESSAGE
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-luxury-gold hover:bg-white text-black font-semibold font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Send Dispatch</span>
                    <Check className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-neutral-950 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shadow-sm">
                    <Check className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-xl text-white mt-6 font-medium">Message Dispatched</h4>
                  <p className="font-sans text-neutral-500 text-xs mt-2 tracking-wide font-light max-w-xs leading-relaxed">
                    Thank you. I have received your vision and will correspond shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default PortfolioSections;
