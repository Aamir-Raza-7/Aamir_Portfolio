import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="mb-4 text-emerald-deep dark:text-gold-dark" size={32} />,
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Chart.js', 'WebSocket', 'Responsive UI']
    },
    {
      title: 'Backend',
      icon: <Server className="mb-4 text-emerald-deep dark:text-gold-dark" size={32} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt']
    },
    {
      title: 'Databases',
      icon: <Database className="mb-4 text-emerald-deep dark:text-gold-dark" size={32} />,
      skills: ['MongoDB', 'MySQL', 'SQLite']
    },
    {
      title: 'Cloud / DevOps',
      icon: <Cloud className="mb-4 text-emerald-deep dark:text-gold-dark" size={32} />,
      skills: ['AWS (EC2, S3)', 'Docker', 'Linux (Ubuntu)', 'Git']
    },
    {
      title: 'Languages',
      icon: <Terminal className="mb-4 text-emerald-deep dark:text-gold-dark" size={32} />,
      skills: ['JavaScript (ES6+)', 'Python', 'SQL', 'PHP']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream-soft mb-4">
            Technical <span className="italic text-emerald-deep dark:text-gold-dark">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-deep/20 dark:bg-gold-dark/20 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="group-hover:-translate-y-2 transition-transform duration-300">
                {category.icon}
                <h3 className="text-xl font-serif font-bold text-charcoal dark:text-cream-soft mb-6 border-b border-charcoal/10 dark:border-white/10 pb-4">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-charcoal/70 dark:text-cream-soft/70 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-deep dark:bg-gold-dark rounded-full mr-3 opacity-50"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
