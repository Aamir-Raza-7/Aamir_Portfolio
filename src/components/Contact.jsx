import { motion } from 'framer-motion';
import { Mail, Phone, Code2, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5 border-t border-charcoal/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream-soft mb-8">
            Get In <span className="italic text-emerald-deep dark:text-gold-dark">Touch</span>
          </h2>
          <p className="text-xl text-charcoal/80 dark:text-cream-soft/80 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-16">
            <a href="mailto:workwithamir711@gmail.com" className="flex items-center text-charcoal hover:text-emerald-deep dark:text-cream-soft dark:hover:text-gold-dark transition-colors group">
              <Mail className="mr-3 group-hover:-translate-y-1 transition-transform" />
              <span className="font-bold text-lg">workwithamir711@gmail.com</span>
            </a>
            <a href="https://wa.me/919828128289" target="_blank" rel="noreferrer" className="flex items-center text-charcoal hover:text-emerald-deep dark:text-cream-soft dark:hover:text-gold-dark transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mr-3 group-hover:-translate-y-1 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="font-bold text-lg">+91 9828128289</span>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Aamir-Raza-7" target="_blank" rel="noreferrer" className="p-4 bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 hover:border-emerald-deep dark:hover:border-gold-dark text-charcoal dark:text-cream-soft hover:text-emerald-deep dark:hover:text-gold-dark transition-all duration-300">
              <Code2 size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-raza-36ab74413" target="_blank" rel="noreferrer" className="p-4 bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 hover:border-emerald-deep dark:hover:border-gold-dark text-charcoal dark:text-cream-soft hover:text-emerald-deep dark:hover:text-gold-dark transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <div className="p-4 bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 flex items-center text-charcoal dark:text-cream-soft cursor-default">
              <MapPin size={24} className="mr-3 text-emerald-deep dark:text-gold-dark" />
              <span className="font-bold uppercase tracking-wider text-sm">Udaipur, Rajasthan</span>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 text-center pb-8 border-t border-charcoal/10 dark:border-white/10 pt-8 max-w-7xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-charcoal/40 dark:text-cream-soft/40">
          © {new Date().getFullYear()} Aamir Raza. Built with React & Tailwind.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
