import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BulkOrder() {
  return (
    <section className="py-20 bg-brand-navy text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Planning an Event? <br className="hidden md:block" />
            <span className="text-brand-cyan">Let's Bottle Your Brand.</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you need hundreds of bottles or a large event order, BrandSip helps create a professional branded hydration experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#quote" className="inline-flex items-center gap-2 bg-brand-cyan text-brand-navy font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20">
              Request Bulk Quote <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
