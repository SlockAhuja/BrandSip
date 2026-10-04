import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-blue/20 blur-[100px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-aqua/20 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            From Plain Bottle <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua to-white">→ Brand Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
            Why hand out a plain bottle when you can put your brand in everyone's hands?
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 mt-16">
          {/* Plain Bottle */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white/50 font-bold tracking-widest uppercase mb-8">Before</div>
            <div className="w-40 h-[320px] bg-white/10 rounded-[40px] shadow-2xl border border-white/20 flex flex-col items-center overflow-hidden">
               <div className="absolute top-0 w-full h-12 bg-white/20 border-b border-white/30">
                  <div className="w-10 h-3 bg-white/30 mx-auto mt-2 rounded-t-sm"></div>
               </div>
            </div>
            <div className="mt-8 text-white/50 text-center font-medium">Just water. <br/>Forgotten in minutes.</div>
          </motion.div>

          {/* Arrow */}
          <motion.div 
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
              <ArrowRight className="w-8 h-8 text-brand-aqua" />
            </div>
          </motion.div>

          {/* Branded Bottle */}
          <motion.div 
            className="flex flex-col items-center relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-10 bg-brand-aqua/20 blur-2xl rounded-full -z-10"></div>
            <div className="text-brand-aqua font-bold tracking-widest uppercase mb-8">After</div>
            <div className="w-40 h-[320px] bg-white rounded-[40px] shadow-[0_0_50px_rgba(24,182,217,0.3)] border border-white flex flex-col items-center overflow-hidden relative">
               <div className="absolute top-0 w-full h-12 bg-gray-100 border-b-2 border-gray-200">
                  <div className="w-10 h-3 bg-gray-300 mx-auto mt-2 rounded-t-sm"></div>
               </div>
               <div className="flex-1 w-full flex flex-col items-center justify-center p-3 mt-12 bg-brand-blue">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                    <span className="text-brand-navy font-bold text-[10px] uppercase">LOGO</span>
                  </div>
                  <div className="text-white font-black text-sm uppercase tracking-widest text-center">BRAND</div>
               </div>
            </div>
            <div className="mt-8 text-white text-center font-bold">Premium Brand Experience. <br/>Remembered forever.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
