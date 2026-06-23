import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'AI / ML & Full Stack Development Training',
      company: 'Grras Solutions, Jaipur',
      date: 'Jul – Aug 2025',
      points: [
        'Completed intensive dual-track training covering supervised/unsupervised ML concepts, Python-based ML tooling, and introductory neural networks alongside full-stack web development.',
        'Mastered the full web development lifecycle — React frontend, Node.js/Express backend, REST API design, and MySQL/MongoDB integration through structured hands-on assignments.'
      ]
    },
    {
      title: 'Technical Intern (Linux · AWS · Docker)',
      company: 'Datayama Enterprise LLP (Virtual)',
      date: 'Jul – Oct 2025',
      points: [
        'Gained working proficiency in Linux system administration, AWS core services (EC2, S3, IAM), and Docker containerisation.',
        'Applied skills directly in the architecture and deployment of a full-stack Cloud Storage System project.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech — Computer Science & Engineering',
      institution: 'Geetanjali Institute of Technical Studies, Udaipur',
      date: '2023–2027'
    }
  ];

  const certifications = [
    { name: 'Blockchain Technology Fundamentals', date: 'Mar 2025' },
    { name: 'Ethical Hacking Foundations', date: 'Aug 2023' }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream-soft">
              Work & <span className="italic text-emerald-deep dark:text-gold-dark">Training</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-emerald-deep/20 dark:border-gold-dark/20"
              >
                <div className="absolute w-4 h-4 bg-cream dark:bg-forest border-2 border-emerald-deep dark:border-gold-dark rounded-full -left-[9px] top-1"></div>
                <div className="text-sm font-bold uppercase tracking-widest text-emerald-deep dark:text-gold-dark mb-2">{exp.date}</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-cream-soft mb-1">{exp.title}</h3>
                <h4 className="text-lg font-medium text-charcoal/60 dark:text-cream-soft/60 mb-4">{exp.company}</h4>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-charcoal/80 dark:text-cream-soft/80 font-medium leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certs Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream-soft">
              Education & <span className="italic text-emerald-deep dark:text-gold-dark">Certs</span>
            </h2>
          </motion.div>

          <div className="space-y-12 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-8 border-l-2 border-emerald-deep/20 dark:border-gold-dark/20"
              >
                <div className="absolute w-4 h-4 bg-cream dark:bg-forest border-2 border-emerald-deep dark:border-gold-dark rounded-full -left-[9px] top-1"></div>
                <div className="text-sm font-bold uppercase tracking-widest text-emerald-deep dark:text-gold-dark mb-2">{edu.date}</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-cream-soft mb-1">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-charcoal/60 dark:text-cream-soft/60">{edu.institution}</h4>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
             {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 p-6 flex justify-between items-center"
              >
                <h3 className="text-lg font-serif font-bold text-charcoal dark:text-cream-soft">{cert.name}</h3>
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-deep dark:text-gold-dark ml-4">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
