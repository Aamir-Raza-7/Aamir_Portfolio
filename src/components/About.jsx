import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream-soft mb-8">
              About <span className="italic text-emerald-deep dark:text-gold-dark">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-charcoal/80 dark:text-cream-soft/80 font-medium leading-relaxed">
              <p>
                I am a passionate Full Stack Developer currently pursuing a B.Tech in Computer Science & Engineering at Geetanjali Institute of Technical Studies (2023–27).
              </p>
              <p>
                With hands-on experience building production-grade web applications, from real-time dashboards to cloud storage systems, I specialize in the MERN stack (MongoDB, Express.js, React, Node.js).
              </p>
              <p>
                Beyond full-stack development, I have trained in AI/ML concepts and gained working proficiency in Linux system administration, AWS core services, and Docker containerisation. My goal is to build scalable, secure, and visually exceptional digital solutions.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-emerald-deep dark:border-gold-dark pl-4">
                <h3 className="text-3xl font-serif font-bold text-charcoal dark:text-cream-soft">2+</h3>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-deep dark:text-gold-dark mt-1">Years Coding</p>
              </div>
              <div className="border-l-2 border-emerald-deep dark:border-gold-dark pl-4">
                <h3 className="text-3xl font-serif font-bold text-charcoal dark:text-cream-soft">6+</h3>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-deep dark:text-gold-dark mt-1">Projects Built</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 p-4 shadow-xl relative z-10">
              <div className="w-full h-full bg-charcoal/5 dark:bg-white/5 flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Aamir Raza" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute top-4 -right-4 w-full h-full border border-emerald-deep/30 dark:border-gold-dark/30 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
