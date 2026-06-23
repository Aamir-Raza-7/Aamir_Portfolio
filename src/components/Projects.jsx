import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Storage System',
      date: 'Jul – Aug 2025',
      tech: ['React', 'Node.js', 'SQLite', 'AWS EC2 + S3'],
      desc: 'Google Drive-style platform with per-user access control, secure file upload/download, and folder management — deployed on EC2 with S3 object storage and scalable REST APIs.',
      repo: 'https://github.com/Aamir-Raza-7'
    },
    {
      title: 'Task Management App',
      date: 'Aug 2025',
      tech: ['React', 'Node.js', 'Express'],
      desc: 'Role-based task app (admin/member) with real-time CRUD, animated modals, optimistic UI updates, and a reusable React component library with a responsive 3-column grid.',
      repo: 'https://github.com/Aamir-Raza-7'
    },
    {
      title: 'Bank Management System',
      date: 'Apr – May 2025',
      tech: ['MERN Stack'],
      desc: 'Secure banking portal with JWT auth, bcrypt password hashing, deposit/withdrawal, and real-time balance updates — no page reloads on transactions.',
      repo: 'https://github.com/Aamir-Raza-7'
    },
    {
      title: 'Network Monitoring Dashboard',
      date: 'Mar 2025',
      tech: ['MERN', 'WebSocket', 'Chart.js'],
      desc: 'Real-time server uptime and latency monitor using WebSocket for sub-second live updates and Chart.js rolling latency graphs with dynamic status cards.',
      repo: 'https://github.com/Aamir-Raza-7'
    },
    {
      title: 'Dairy Parlour',
      date: 'June 2025',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      desc: 'Built a full-stack Dairy Management System with online ordering, subscriptions, and admin management with product catalog and with real time CRUD.',
      repo: 'https://github.com/Aamir-Raza-7'
    },
    {
      title: 'La Chrome — Design Website',
      date: 'Mar 2026',
      tech: ['WordPress', 'CSS'],
      desc: 'Minimalist architecture and interior design portfolio site emphasising clean visual hierarchy, fast loading, and aesthetic storytelling aligned with luxury design standards.',
      repo: 'https://github.com/Aamir-Raza-7'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream-soft mb-4">
            Selected <span className="italic text-emerald-deep dark:text-gold-dark">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-deep/20 dark:bg-gold-dark/20 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-deep dark:bg-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream-soft/50">{project.date}</span>
                <a href={project.repo} target="_blank" rel="noreferrer" className="text-charcoal/50 dark:text-cream-soft/50 hover:text-emerald-deep dark:hover:text-gold-dark transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-cream-soft mb-4">{project.title}</h3>
              <p className="text-charcoal/80 dark:text-cream-soft/80 font-medium leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-charcoal/10 dark:border-white/10">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-charcoal/5 dark:bg-white/5 text-charcoal/80 dark:text-cream-soft/80">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
