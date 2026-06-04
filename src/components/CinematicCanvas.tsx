import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Total frames count (50 frames: ezgif-frame-001.jpg to ezgif-frame-050.jpg)
const TOTAL_FRAMES = 50;

// Text narrative based on scroll thresholds (from 0 to 1)
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
  
  // Glowing ambient refs for direct GSAP styling (high performance)
  const nightGlowRef = useRef<HTMLDivElement>(null);
  const moonGlowRef = useRef<HTMLDivElement>(null);
  const sunGlowRef = useRef<HTMLDivElement>(null);
  const studioGlowRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0); // For loader percentage
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeText, setActiveText] = useState("Scroll to wake me up");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Refs to avoid redundant React state updates on every scroll pixel tick
  const activeTextRef = useRef("Scroll to wake me up");
  const showScrollIndicatorRef = useRef(true);

  // Store preloaded image elements
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  // Preload image frames
  useEffect(() => {
    let active = true;
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        // Construct frame filename matching the pattern: ezgif-frame-001.jpg
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
            console.error(`Error loading image frame: ${url}`);
            // Resolve anyway to prevent blocking the loader
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

    return () => {
      active = false;
    };
  }, []);

  // Main Canvas Render Logic
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img) return;

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cover scale math (similar to CSS object-fit: cover)
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

  // Handle resizing
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
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  // GSAP ScrollTrigger Integration
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    // 1. Initial frame draw
    drawFrame(0);

    // 2. Setup scroll variables
    const scrollObj = { frame: 0 };
    const totalDurationHeight = window.innerHeight * 4; // 400vh scroll height for smooth pacing

    // 3. Main Frame Scrub Timeline
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
          
          // Map progress directly to narrative text change
          const matchedNarrative = NARRATIVE.find(
            (item) => progressVal >= item.min && progressVal <= item.max
          );
          if (matchedNarrative && matchedNarrative.text !== activeTextRef.current) {
            activeTextRef.current = matchedNarrative.text;
            setActiveText(matchedNarrative.text);
          }

          // Show/Hide mouse indicator (only set state when crossing the threshold)
          const shouldShowIndicator = progressVal <= 0.05;
          if (shouldShowIndicator !== showScrollIndicatorRef.current) {
            showScrollIndicatorRef.current = shouldShowIndicator;
            setShowScrollIndicator(shouldShowIndicator);
          }
        }
      }
    });

    // Animate frame variable
    canvasTl.to(scrollObj, {
      frame: TOTAL_FRAMES - 1,
      ease: 'none',
      onUpdate: () => {
        const index = Math.round(scrollObj.frame);
        drawFrame(index);
      }
    });

    // 4. Ambient Lighting Timeline (synchronized with scroll progress)
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalDurationHeight}`,
        scrub: 0.8
      }
    })
    .to(nightGlowRef.current, { opacity: 0, ease: 'power1.inOut' }, 0.2) // Night sky fades
    .to(moonGlowRef.current, { opacity: 0.6, ease: 'power1.inOut' }, 0.15) // Moon halo appears
    .to(moonGlowRef.current, { opacity: 0, ease: 'power1.inOut' }, 0.45) // Moon halo fades
    .to(sunGlowRef.current, { opacity: 0.8, ease: 'power2.inOut' }, 0.4) // Sun glow appears
    .to(sunGlowRef.current, { opacity: 0.1, ease: 'power2.inOut' }, 0.85) // Sun glow blends out
    .to(studioGlowRef.current, { opacity: 1, ease: 'power1.inOut' }, 0.8); // Studio background lights up

    return () => {
      // Clean up ScrollTrigger bindings
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoaded]);

  // Floating background stars (pre-render setup)
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    delay: `${Math.random() * 4}s`
  }));

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black select-none">
      
      {/* 1. Loader Layer */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-darker"
          >
            <div className="relative flex flex-col items-center">
              {/* Luxury Loader Ring */}
              <div className="w-24 h-24 rounded-full border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 border-t border-luxury-gold rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                <span className="font-sans text-xs tracking-[0.2em] text-neutral-400 font-light">{progress}%</span>
              </div>
              
              {/* Premium Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 font-serif text-lg tracking-[0.3em] text-luxury-cream uppercase"
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

      {/* 2. Background Stars (Fades out during dawn transition) */}
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

      {/* 3. Ambient Lighting Glow Layers (Direct DOM control by GSAP) */}
      <div 
        ref={nightGlowRef} 
        className="absolute inset-0 pointer-events-none opacity-100 z-0 bg-[radial-gradient(circle_at_center,_rgba(13,12,29,0.7)_0%,_rgba(0,0,0,1)_100%)]"
      />
      <div 
        ref={moonGlowRef} 
        className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_75%_45%,_rgba(255,255,255,0.18)_0%,_rgba(13,12,29,0)_50%)]"
      />
      <div 
        ref={sunGlowRef} 
        className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(212,175,55,0.22)_0%,_rgba(205,127,50,0.12)_35%,_rgba(13,12,29,0)_70%)]"
      />
      <div 
        ref={studioGlowRef} 
        className="absolute inset-0 pointer-events-none opacity-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(249,249,246,0.06)_0%,_rgba(8,8,8,1)_100%)]"
      />

      {/* 4. HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="relative block w-full h-full object-cover z-10 opacity-90 mix-blend-screen"
      />

      {/* 5. Cinematic Overlay Narrative Texts */}
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

      {/* 6. Scroll Indicator (Hero start page only) */}
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

      {/* Ambient particles for dreamy atmosphere */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-color-dodge">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-luxury-gold/5 blur-[120px] animate-aurora-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-luxury-indigoDeep/20 blur-[150px] animate-aurora-reverse" />
      </div>
      
    </div>
  );
};

export default CinematicCanvas;
