import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

// Helper component to scatter individual words
const ScatteredWord = ({ children, index, scrollYProgress }) => {
  // Use index to create deterministic pseudo-random scatter directions
  const seed = (index * 23) % 100;
  const dirX = seed > 50 ? 1 : -1;
  const dirY = seed % 2 === 0 ? 1 : -1;
  
  // Calculate how far they should fly apart
  const targetX = dirX * (100 + (seed % 100) * 3);
  const targetY = dirY * (100 + (seed % 80) * 3);
  const targetRotate = dirX * (10 + (seed % 60));

  // Map the scroll progress (0 to 1) to the scatter values
  const x = useTransform(scrollYProgress, [0, 1], [0, targetX]);
  const y = useTransform(scrollYProgress, [0, 1], [0, targetY]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, targetRotate]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);

  return (
    <motion.span 
      style={{ x, y, rotate, opacity, display: 'inline-block', whiteSpace: 'pre' }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

// Helper component to split text into words and wrap them
const ScatterText = ({ text, scrollYProgress, startIndex = 0 }) => {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <ScatteredWord key={i} index={startIndex + i} scrollYProgress={scrollYProgress}>
          {word}{' '}
        </ScatteredWord>
      ))}
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress specifically within the Hero section bounds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const pText = "Building production-grade web applications. Expertise in the MERN stack, React, Node.js, and AWS. Creating seamless, dynamic user experiences.";

  const buttonOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const buttonY1 = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const buttonY2 = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-deep/5 rounded-full blur-3xl dark:bg-gold-dark/5"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-muted/5 rounded-full blur-3xl dark:bg-emerald-deep/5"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-emerald-deep dark:text-gold-dark mb-4">
            <ScatterText text="Full Stack Developer" scrollYProgress={scrollYProgress} startIndex={0} />
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal dark:text-cream-soft mb-6 leading-tight flex justify-center flex-wrap gap-x-4">
            <ScatteredWord index={10} scrollYProgress={scrollYProgress}>Aamir</ScatteredWord> 
            <span className="italic text-emerald-deep dark:text-gold-dark">
              <ScatteredWord index={11} scrollYProgress={scrollYProgress}>Raza</ScatteredWord>
            </span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-charcoal/70 dark:text-cream-soft/70 max-w-2xl mx-auto font-medium leading-relaxed">
            <ScatterText text={pText} scrollYProgress={scrollYProgress} startIndex={20} />
          </p>
          
          {/* Buttons sink and fade down when scrolling */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              style={{ 
                opacity: buttonOpacity,
                y: buttonY1
              }}
              href="#projects" 
              className="group flex items-center px-8 py-4 bg-charcoal dark:bg-cream-soft text-cream dark:text-forest font-bold text-sm uppercase tracking-widest hover:bg-emerald-deep dark:hover:bg-gold-dark transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              style={{ 
                opacity: buttonOpacity,
                y: buttonY2
              }}
              href="/AmirResume.pdf" 
              download="AmirResume.pdf"
              className="group flex items-center px-8 py-4 border-2 border-charcoal dark:border-cream-soft text-charcoal dark:text-cream-soft font-bold text-sm uppercase tracking-widest hover:bg-charcoal hover:text-cream dark:hover:bg-cream-soft dark:hover:text-forest transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Resume
              <Download size={16} className="ml-2 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
