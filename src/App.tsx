import SmoothScroll from './components/SmoothScroll';
import CinematicCanvas from './components/CinematicCanvas';
import PortfolioSections from './components/PortfolioSections';

function App() {
  return (
    <SmoothScroll>
      <main className="relative w-full overflow-x-hidden bg-[#080808]">
        {/* Fullscreen Cinematic Scroll Hero (Frame sequence canvas) */}
        <section className="relative z-10">
          <CinematicCanvas />
        </section>
        
        {/* Dynamic Dark-to-Light Portfolio Sections */}
        <section className="relative z-20">
          <PortfolioSections />
        </section>

        {/* Global Cinematic Footer */}
        <footer className="w-full bg-[#F9F9F6] text-neutral-500 py-12 px-6 md:px-20 border-t border-neutral-250 select-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-widest font-light uppercase">
            <p>&copy; {new Date().getFullYear()} Dhruv Sathvara. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-1">
              <span>Aesthetics in motion</span>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold inline-block animate-pulse-slow" />
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}

export default App;
