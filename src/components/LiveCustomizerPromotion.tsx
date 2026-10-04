import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Monitor } from 'lucide-react';

export default function LiveCustomizerPromotion() {
  return (
    <section className="py-24 bg-brand-softBg border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight leading-tight">
              See Your Bottle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua">Before You Order.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Upload your artwork and instantly preview how your branded bottle will look in high definition.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-12">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-brand-lightAqua p-3 rounded-xl text-brand-blue">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-brand-navy">Vertical Design</div>
                  <div className="text-xs text-gray-500 font-medium">For logos & portraits</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-brand-lightAqua p-3 rounded-xl text-brand-blue">
                  <Monitor className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-brand-navy">Horizontal Design</div>
                  <div className="text-xs text-gray-500 font-medium">For wide banners</div>
                </div>
              </div>
            </div>

            <a href="#customizer" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base shadow-xl shadow-brand-blue/20">
              Try Bottle Customizer <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-lg mx-auto relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-gradient-to-tr from-brand-blue/5 to-brand-aqua/10 rounded-[3rem] p-8 flex items-center justify-center relative">
               <div className="w-56 h-[460px] bg-white rounded-[50px] shadow-2xl flex flex-col items-center border-4 border-white relative overflow-hidden">
                 <div className="absolute top-0 w-full h-20 bg-gray-100 border-b-2 border-gray-200">
                    <div className="w-16 h-6 bg-gray-300 mx-auto mt-2 rounded-t-lg"></div>
                 </div>
                 <div className="flex-1 w-full flex items-center justify-center mt-20">
                   <div className="w-32 h-64 border-2 border-dashed border-brand-blue/30 rounded-xl bg-brand-softBg flex items-center justify-center relative">
                      <div className="text-brand-blue/60 font-bold tracking-widest uppercase transform -rotate-90">Your Design</div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
