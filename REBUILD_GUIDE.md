# Cinematic Scroll Portfolio - Rebuild & Customization Guide

This guide details the exact steps, system specifications, and code files required to rebuild and customize the luxury cinematic scrolling portfolio. 

---

## 📋 Table of Contents
1. [Prerequisites & Development Environment](#1-prerequisites--development-environment)
2. [Step-by-Step Implementation Flow](#2-step-by-step-implementation-flow)
3. [Face Animation Frame Generation Guide](#3-face-animation-frame-generation-guide)
4. [Project Directory Structure](#4-project-directory-structure)
5. [Source Code Files](#5-source-code-files)
6. [Customization Checklists](#6-customization-checklists)

---

## 1. Prerequisites & Development Environment

To build this application, ensure the following tools are installed:
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)
* **A Code Editor** (e.g., VS Code or Cursor)

---

## 2. Step-by-Step Implementation Flow

### Step 2.1: Initialize the React Vite Project
Run the following commands in your terminal to set up a brand new React application with TypeScript:
```bash
# Create the Vite React app
npm create vite@latest portfolio-app --template react-ts

# Navigate to the project directory
cd portfolio-app

# Install project dependencies
npm install

# Install the required animations, smooth scrolling, and icon packages
npm install framer-motion gsap lenis lucide-react
```

### Step 2.2: Add Dev Packages
Ensure Tailwind CSS is configured. In modern projects, you can install Tailwind CSS v4 or v3. For standard Tailwind installations:
```bash
npm install -D tailwindcss postcss autoprefixer
```

---

## 3. Face Animation Frame Generation Guide

The hero section uses a high-performance HTML5 Canvas synchronized with the mouse scroll to scrub through a sequence of 50 images of your face. 

### Instructions:
1. **Record a Video**: Record a 2 to 3-second video of your face (1920x1080 resolution is recommended). A great animation flow is starting with your eyes closed, slowly opening them, and focusing on the camera.
2. **Convert to 50 sequential frames**:
   * **Online Option**: Use [ezgif.com/video-to-jpg](https://ezgif.com/video-to-jpg). Upload the video, set the frame rate to output exactly **50 frames**, and download the ZIP file containing the JPG images.
   * **Offline Option (ffmpeg)**: If you have `ffmpeg` installed on your system, run this command in your terminal to extract exactly 50 frames:
     ```bash
     ffmpeg -i input_video.mp4 -vf "fps=20,scale=1920:-1" -vframes 50 public/frames/ezgif-frame-%03d.jpg
     ```
3. **Save Location**: Create a folder named `frames` inside the `public` directory (`/public/frames/`) and place the 50 images in it. 
   * **Important**: Ensure they are named exactly `ezgif-frame-001.jpg` to `ezgif-frame-050.jpg`.

---

## 4. Project Directory Structure

Your project should look like this:
```
portfolio-app/
├── public/
│   └── frames/
│       ├── ezgif-frame-001.jpg
│       ├── ...
│       └── ezgif-frame-050.jpg
├── src/
│   ├── components/
│   │   ├── CinematicCanvas.tsx
│   │   ├── PortfolioSections.tsx
│   │   └── SmoothScroll.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
└── tsconfig.json
```

---

## 5. Source Code Files

Create or replace the following files in your project:

### 📄 `src/index.css`
This file configures Google Fonts, installs Tailwind, and sets up custom variables, scrollbars, and ambient animations.
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Cinzel:wght@400..900&display=swap');

@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: auto;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #080808;
    color: #F9F9F6;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: #080808;
    color: #F9F9F6;
    transition: background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1), color 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  }

  ::selection {
    background-color: rgba(212, 175, 55, 0.2);
    color: #D4AF37;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: rgba(8, 8, 8, 0.95);
}
::-webkit-scrollbar-thumb {
  background: rgba(212, 175, 55, 0.3);
  border-radius: 3px;
  transition: background 0.3s ease;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(212, 175, 55, 0.6);
}

/* Lenis Smooth Scroll Configuration */
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overflow: clip;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

/* Premium Animations & Glows */
@keyframes aurora {
  0% {
    transform: translate(0px, 0px) scale(1) rotate(0deg);
  }
  33% {
    transform: translate(30px, -50px) scale(1.2) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.8) rotate(240deg);
  }
  100% {
    transform: translate(0px, 0px) scale(1) rotate(360deg);
  }
}

.animate-aurora-slow {
  animation: aurora 25s infinite alternate ease-in-out;
}

.animate-aurora-reverse {
  animation: aurora 30s infinite alternate-reverse ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: twinkle 4s infinite ease-in-out;
}

.cinematic-text-glow {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

### 📄 `src/components/SmoothScroll.tsx`
Handles the Apple-inspired kinetic smooth scrolling using Lenis, synced with GSAP updates.
```tsx
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const gsapTickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(gsapTickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTickerCallback);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
```

---

### 📄 `src/components/CinematicCanvas.tsx`
Configures the frame preloader and canvas rendering, scrubbing images on scroll.
```tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 50;

// Text narrative based on scroll thresholds
const NARRATIVE = [
  { min: 0.0, max: 0.18, text: "Scroll to wake me up" },
  { min: 0.22, max: 0.42, text: "In the depth of the creative night..." },
  { min: 0.46, max: 0.68, text: "A vision begins to dawn" },
  { min: 0.72, max: 0.88, text: "Forging clarity, detail, and focus" },
  { min: 0.92, max: 1.0, text: "Awake. Refined. Ready to create." }
];

export const CinematicCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const nightGlowRef = useRef<HTMLDivElement>(null);
  const moonGlowRef = useRef<HTMLDivElement>(null);
  const sunGlowRef = useRef<HTMLDivElement>(null);
  const studioGlowRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeText, setActiveText] = useState("Scroll to wake me up");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const activeTextRef = useRef("Scroll to wake me up");
  const showScrollIndicatorRef = useRef(true);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  useEffect(() => {
    let active = true;
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const frameNum = String(i).padStart(3, '0');
        const url = `/frames/ezgif-frame-${frameNum}.jpg`;

        const img = new Image();
        img.src = url;
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages[i - 1] = img;
            loadedCount++;
            if (active) {
              setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            }
            resolve(null);
          };
          img.onerror = () => {
            resolve(null);
          };
        });
      }

      if (active) {
        imagesRef.current = loadedImages;
        setIsLoaded(true);
      }
    };

    loadImages();
    return () => { active = false; };
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.width;
    const imgHeight = img.height;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    currentFrameRef.current = index;
  };

  useEffect(() => {
    if (!isLoaded) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => { window.removeEventListener('resize', handleResize); };
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    drawFrame(0);

    const scrollObj = { frame: 0 };
    const totalDurationHeight = window.innerHeight * 4;

    const canvasTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalDurationHeight}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progressVal = self.progress;
          const matchedNarrative = NARRATIVE.find(
            (item) => progressVal >= item.min && progressVal <= item.max
          );
          if (matchedNarrative && matchedNarrative.text !== activeTextRef.current) {
            activeTextRef.current = matchedNarrative.text;
            setActiveText(matchedNarrative.text);
          }

          const shouldShowIndicator = progressVal <= 0.05;
          if (shouldShowIndicator !== showScrollIndicatorRef.current) {
            showScrollIndicatorRef.current = shouldShowIndicator;
            setShowScrollIndicator(shouldShowIndicator);
          }
        }
      }
    });

    canvasTl.to(scrollObj, {
      frame: TOTAL_FRAMES - 1,
      ease: 'none',
      onUpdate: () => {
        const index = Math.round(scrollObj.frame);
        drawFrame(index);
      }
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalDurationHeight}`,
        scrub: 0.8
      }
    })
    .to(nightGlowRef.current, { opacity: 0, ease: 'power1.inOut' }, 0.2)
    .to(moonGlowRef.current, { opacity: 0.6, ease: 'power1.inOut' }, 0.15)
    .to(moonGlowRef.current, { opacity: 0, ease: 'power1.inOut' }, 0.45)
    .to(sunGlowRef.current, { opacity: 0.8, ease: 'power2.inOut' }, 0.4)
    .to(sunGlowRef.current, { opacity: 0.1, ease: 'power2.inOut' }, 0.85)
    .to(studioGlowRef.current, { opacity: 1, ease: 'power1.inOut' }, 0.8);

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [isLoaded]);

  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    delay: `${Math.random() * 4}s`
  }));

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black select-none">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 border-t border-[#D4AF37] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                <span className="font-sans text-xs tracking-[0.2em] text-neutral-400 font-light">{progress}%</span>
              </div>
              <motion.h2 
                className="mt-8 font-serif text-lg tracking-[0.3em] text-[#F9F9F6] uppercase"
              >
                The Wakeup Sequence
              </motion.h2>
              <p className="mt-2 font-sans text-[10px] tracking-[0.15em] text-neutral-500 uppercase font-light">
                Preloading Cinematic Frames
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div ref={nightGlowRef} className="absolute inset-0 pointer-events-none opacity-100 z-0 bg-[radial-gradient(circle_at_center,_rgba(13,12,29,0.7)_0%,_rgba(0,0,0,1)_100%)]" />
      <div ref={moonGlowRef} className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_75%_45%,_rgba(255,255,255,0.18)_0%,_rgba(13,12,29,0)_50%)]" />
      <div ref={sunGlowRef} className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(212,175,55,0.22)_0%,_rgba(205,127,50,0.12)_35%,_rgba(13,12,29,0)_70%)]" />
      <div ref={studioGlowRef} className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(249,249,246,0.06)_0%,_rgba(8,8,8,1)_100%)]" />

      <canvas ref={canvasRef} className="relative block w-full h-full object-cover z-10 opacity-90 mix-blend-screen" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-32 pointer-events-none">
        <div className="w-full max-w-4xl text-center px-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeText}
              initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-serif text-2xl md:text-4xl tracking-[0.25em] text-white font-light uppercase leading-relaxed cinematic-text-glow select-none"
            >
              {activeText}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {showScrollIndicator && isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        >
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}

      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-color-dodge">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] animate-aurora-slow" />
      </div>
    </div>
  );
};

export default CinematicCanvas;
```

---

### 📄 `src/components/PortfolioSections.tsx`
Contains the portfolio details and the interactive Model Arena dashboard widget. **Replace the placeholder details below with your friend's details.**
```tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Database, GraduationCap, Mail, 
  Layers, Sparkles, ArrowUpRight, Terminal
} from 'lucide-react';

// Custom LinkedIn, Kaggle, GitHub Icons
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

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

export const PortfolioSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [selectedModel, setSelectedModel] = useState<ClassifierName>('Random Forest');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(true);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleModelTrain = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    setShowResults(false);
    setLogs([]);

    const logMessages = [
      `[INFO] Initializing Model Arena evaluation for ${selectedModel}...`,
      `[INFO] Fetching records...`,
      `[INFO] Target column detected (attrition employee ratio)`,
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

  const renderDecisionBoundary = () => {
    switch (selectedModel) {
      case 'Logistic Regression':
        return (
          <>
            <motion.line initial={{ x1: 0, y1: 50, x2: 300, y2: 250 }} animate={{ x1: 0, y1: 60, x2: 300, y2: 240 }} transition={{ duration: 0.6 }} stroke="#D4AF37" strokeWidth="4" strokeDasharray="4 4" />
            <path d="M 0,60 L 300,240 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
      case 'Support Vector Machine':
        return (
          <>
            <motion.path initial={{ d: "M 0,90 Q 150,220 300,120" }} animate={{ d: "M 0,80 Q 150,200 300,100" }} transition={{ duration: 0.6 }} fill="none" stroke="#D4AF37" strokeWidth="4" />
            <path d="M 0,80 Q 150,200 300,100 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
      case 'Gradient Boosting':
        return (
          <>
            <motion.path initial={{ d: "M 0,110 H 90 V 150 H 220 V 60 H 300" }} animate={{ d: "M 0,100 H 100 V 160 H 200 V 80 H 300" }} transition={{ duration: 0.6 }} fill="none" stroke="#D4AF37" strokeWidth="4" />
            <path d="M 0,100 H 100 V 160 H 200 V 80 H 300 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
      case 'Random Forest':
      default:
        return (
          <>
            <motion.path initial={{ d: "M 0,80 H 140 V 180 H 250 V 90 H 300" }} animate={{ d: "M 0,90 H 120 V 170 H 260 V 100 H 300" }} transition={{ duration: 0.6 }} fill="none" stroke="#D4AF37" strokeWidth="4" />
            <path d="M 0,90 H 120 V 170 H 260 V 100 H 300 L 300,300 L 0,300 Z" fill="rgba(212, 175, 55, 0.05)" />
          </>
        );
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden select-none z-30 bg-[#080808] text-[#F9F9F6]">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-20 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-serif text-sm md:text-lg font-light tracking-[0.2em] uppercase text-white hover:text-[#D4AF37] transition-colors duration-300">
            [FRIEND NAME]
          </a>
          <div className="hidden md:flex items-center space-x-8 text-xs tracking-wider uppercase font-light text-neutral-400">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-[#D4AF37] transition-colors duration-200">Experience</a>
            <a href="#education" className="hover:text-[#D4AF37] transition-colors duration-200">Education</a>
            <a href="#projects" className="hover:text-[#D4AF37] transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* INTRO HERO OVERLAY */}
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 md:px-20 pb-16 pt-32 bg-gradient-to-b from-transparent to-[#080808] z-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col space-y-4 max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-white uppercase leading-none">
              [FIRST NAME] <span className="text-[#D4AF37]">[LAST NAME]</span>
            </h1>
            <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-400 font-light pl-1">
              [ROLE OR FIELD OF WORK] &bull; [LOCATION]
            </p>
            <div className="flex items-center gap-x-6 gap-y-3 pt-4 pl-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300">
                <CustomLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300">
                <CustomGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 text-[#D4AF37]">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-light">About Me</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide leading-tight">
              [PERSONAL PHILOSOPHY OR SUMMARY SLOGAN]
            </h2>
            <p className="font-sans text-neutral-400 leading-relaxed font-light text-base">
              [LONG RESUME/ABOUT DESCRIPTION GOES HERE. Talk about your passion, specialization, achievements, and technical strengths.]
            </p>
          </motion.div>

          {/* Skill Blocks */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }} className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col justify-between h-56 transition-all duration-500">
              <Cpu className="w-8 h-8 text-[#D4AF37] stroke-[1.25]" />
              <div>
                <h3 className="font-serif text-lg tracking-wider text-white font-medium">[Specialization Core A]</h3>
                <p className="font-sans text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                  [Skill bullet summary A]
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }} className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col justify-between h-56 transition-all duration-500">
              <Database className="w-8 h-8 text-[#D4AF37] stroke-[1.25]" />
              <div>
                <h3 className="font-serif text-lg tracking-wider text-white font-medium">[Specialization Core B]</h3>
                <p className="font-sans text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                  [Skill bullet summary B]
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }} className="p-8 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col justify-between h-56 transition-all duration-500 col-span-1 md:col-span-2">
              <Layers className="w-8 h-8 text-[#D4AF37] stroke-[1.25]" />
              <div className="mt-4">
                <h3 className="font-serif text-lg tracking-wider text-white font-medium">Technical Stack</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['React', 'TypeScript', 'TailwindCSS', 'Python', 'SQL', 'Git', 'Framer Motion', 'GSAP'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-neutral-950 border border-white/10 text-neutral-400 text-[10px] font-sans tracking-wide uppercase font-light hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp} className="flex flex-col space-y-4 mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Career Milestones</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Professional Experience</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mt-4" />
          </motion.div>

          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16">
            {/* Experience Node */}
            <motion.div {...fadeInUp} className="relative group">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#080808] border-2 border-[#D4AF37] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <span className="text-[#D4AF37] text-xs font-sans tracking-widest uppercase font-semibold">[Company Name]</span>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-light mt-1">[Job Role / Title]</h3>
                </div>
                <span className="text-neutral-500 font-sans text-xs tracking-wider uppercase mt-2 md:mt-0 font-light">[Date Period]</span>
              </div>
              <ul className="list-disc list-inside text-neutral-400 text-sm font-light space-y-2 leading-relaxed">
                <li>[Key achievement 1 - Describe what was accomplished, toolkits used, or system impact]</li>
                <li>[Key achievement 2 - Describe performance boosts or core metrics achieved]</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp} className="flex flex-col space-y-4 mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Academic Foundation</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Education History</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mt-4" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.3)" }} className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/60 transition-all duration-500 flex flex-col justify-between h-64">
              <div>
                <div className="flex items-center justify-between">
                  <GraduationCap className="w-8 h-8 text-[#D4AF37] stroke-[1.25]" />
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-sans font-light">[Years Active]</span>
                </div>
                <h3 className="font-serif text-xl text-white font-light mt-6">[University/College Name]</h3>
                <p className="font-sans text-xs text-neutral-400 tracking-wide uppercase mt-1">[Degree Program / Major]</p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500">Standings</span>
                <span className="text-[#D4AF37] font-serif text-lg font-light">[CGPA or Grade]</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION WITH INTERACTIVE DATA WIDGET */}
      <section id="projects" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div {...fadeInUp} className="flex flex-col space-y-4 mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Practical Innovation</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">Featured Projects</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-5 flex flex-col space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-neutral-500 font-medium">[Project Tags e.g., React, AI, Node]</span>
              <h3 className="font-serif text-3xl text-white font-light leading-tight">[Featured Project Name]</h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                [Detailed explanation of the project features, system integrations, and backend structure.]
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#D4AF37] hover:text-white font-semibold transition-colors duration-300 group">
                  <span>Inspect Code on GitHub</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Model Arena Simulator widget */}
            <motion.div initial={{ opacity: 0, scale: 0.98, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-7 p-6 rounded-2xl bg-neutral-900/80 border border-white/5 shadow-2xl flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Terminal className="w-4 h-4" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">Model Arena Dashboard</span>
                </div>
                <span className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-light">Interactive ML Sandbox</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.keys(CLASSIFIERS) as ClassifierName[]).map((name) => (
                  <button
                    key={name}
                    onClick={() => { setSelectedModel(name); setShowResults(false); }}
                    disabled={isTraining}
                    className={`px-3 py-2 rounded-xl text-[10px] uppercase font-sans tracking-wider border transition-all duration-300 font-medium ${
                      selectedModel === name 
                        ? 'bg-luxury-gold/10 border-[#D4AF37] text-[#D4AF37]' 
                        : 'bg-neutral-950 border-white/5 text-neutral-400 hover:border-white/10'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[220px]">
                <div className="md:col-span-6 bg-black rounded-xl p-4 font-mono text-[10px] text-neutral-400 overflow-y-auto max-h-[200px] border border-white/5 flex flex-col justify-between">
                  <div>
                    {logs.map((log, idx) => (
                      <div key={idx} className="mb-1 leading-relaxed text-neutral-300">{log}</div>
                    ))}
                    {isTraining && (
                      <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden mt-4">
                        <motion.div className="bg-[#D4AF37] h-full" style={{ width: `${trainingProgress}%` }} />
                      </div>
                    )}
                    {!isTraining && logs.length === 0 && (
                      <div className="text-neutral-600 italic">Click "Train & Evaluate" below to run model optimization.</div>
                    )}
                  </div>
                  {!isTraining && (
                    <button onClick={handleModelTrain} className="w-full mt-4 py-2 bg-[#D4AF37] text-black rounded-lg text-[10px] uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                      Train & Evaluate
                    </button>
                  )}
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center bg-black/40 border border-white/5 rounded-xl p-4 relative overflow-hidden">
                  <svg viewBox="0 0 300 300" className="w-48 h-48 select-none">
                    <line x1="150" y1="0" x2="150" y2="300" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.05)" />
                    <circle cx="60" cy="180" r="4" fill="rgba(34, 197, 94, 0.6)" />
                    <circle cx="210" cy="80" r="4" fill="rgba(239, 68, 68, 0.6)" />
                    {renderDecisionBoundary()}
                  </svg>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {showResults && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-4 gap-4 bg-black/60 p-4 rounded-xl border border-white/5">
                    {[
                      { label: 'Accuracy', val: CLASSIFIERS[selectedModel].accuracy },
                      { label: 'Precision', val: CLASSIFIERS[selectedModel].precision },
                      { label: 'Recall', val: CLASSIFIERS[selectedModel].recall },
                      { label: 'F1 Score', val: CLASSIFIERS[selectedModel].f1 }
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <span className="font-sans text-[8px] uppercase tracking-wider text-neutral-500">{item.label}</span>
                        <h4 className="text-sm font-serif text-[#D4AF37] mt-1 font-semibold">{item.val}%</h4>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="relative py-24 px-6 md:px-20 border-t border-white/5 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Get In Touch</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mt-4">Start a Conversation</h2>
          <form className="mt-12 space-y-6 text-left">
            <input type="text" placeholder="Name" className="w-full bg-neutral-900 border border-white/5 rounded-xl p-4 text-white text-sm focus:border-[#D4AF37] outline-none" required />
            <input type="email" placeholder="Email" className="w-full bg-neutral-900 border border-white/5 rounded-xl p-4 text-white text-sm focus:border-[#D4AF37] outline-none" required />
            <textarea placeholder="Message" rows={5} className="w-full bg-neutral-900 border border-white/5 rounded-xl p-4 text-white text-sm focus:border-[#D4AF37] outline-none" required></textarea>
            <button type="submit" className="w-full py-4 bg-[#D4AF37] text-black font-semibold uppercase text-xs tracking-widest rounded-xl hover:bg-white hover:text-black transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
```

---

### 📄 `src/App.tsx`
Orchestrates the smooth scroll, cinematic canvas, and portfolio sections in the proper stacking order.
```tsx
import SmoothScroll from './components/SmoothScroll';
import CinematicCanvas from './components/CinematicCanvas';
import PortfolioSections from './components/PortfolioSections';

function App() {
  return (
    <SmoothScroll>
      <main className="relative w-full overflow-x-hidden bg-[#080808]">
        {/* Fullscreen Cinematic Scroll Hero */}
        <section className="relative z-10">
          <CinematicCanvas />
        </section>
        
        {/* Premium Portfolio Sections */}
        <section className="relative z-20">
          <PortfolioSections />
        </section>

        {/* Cinematic Footer */}
        <footer className="w-full bg-[#F9F9F6] text-neutral-500 py-12 px-6 md:px-20 border-t border-neutral-200 select-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-widest font-light uppercase">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-1">
              <span>Aesthetics in motion</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block animate-pulse" />
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}

export default App;
```

---

## 6. Customization Checklists

Here is how your friend can make this portfolio uniquely theirs:
- [ ] **Change the name and details** in the `PortfolioSections.tsx` navigation bar and header sections.
- [ ] **Configure the social media links** inside `PortfolioSections.tsx` (the SVG tags link out to GitHub, LinkedIn, etc.).
- [ ] **Customize the About section text** and update the skill badges.
- [ ] **Populate education details** with their respective school/major dates and CGPA values.
- [ ] **Update experience lists** with their previous work/internship milestones.
- [ ] **Replace the project descriptions** and add links to their live projects.
- [ ] **Export 50 sequential frames** of their own face, name them `ezgif-frame-001.jpg` through `ezgif-frame-050.jpg`, and drop them in the `public/frames/` folder.
