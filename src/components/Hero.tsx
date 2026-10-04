import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-softBg">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-lightAqua blur-3xl opacity-60" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-aqua/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-brand-navy mb-6">
              Your Brand. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua">On Every Sip.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Custom-branded bottles that turn every event, business and celebration into a branding opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#customizer" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-base px-8 py-4">
                Design Your Bottle <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#quote" className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-semibold text-brand-navy hover:text-brand-blue transition-colors px-8 py-4 border-2 border-brand-navy/10 rounded-xl hover:border-brand-navy/20 hover:bg-white">
                Get a Quote
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-brand-navy/80">
              <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-brand-aqua" /> Custom Designs</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-brand-aqua" /> Premium Printing</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-brand-aqua" /> Bulk Orders</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-brand-aqua" /> Fast Turnaround</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 relative w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] flex items-center justify-center p-8">
               {/* Abstract bottle mockup */}
               <div className="relative z-10 w-48 h-[400px] bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden items-center">
                 <div className="absolute top-0 w-full h-16 bg-gray-100 border-b-2 border-gray-200">
                    <div className="w-12 h-4 bg-gray-300 mx-auto mt-2 rounded-t-md"></div>
                 </div>
                 
                 <div className="flex-1 w-full flex flex-col items-center justify-center p-4 mt-16">
                    <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-md transform -rotate-3">
                      <span className="text-white font-bold text-xs uppercase tracking-wider">YOUR LOGO</span>
                    </div>
                    <div className="text-brand-navy font-bold text-xl uppercase tracking-widest text-center mb-2">YOUR BRAND</div>
                    <div className="w-16 h-1 bg-brand-aqua rounded-full mb-4"></div>
                    <div className="text-gray-500 text-sm font-medium tracking-wide text-center uppercase">YOUR MESSAGE</div>
                 </div>
               </div>
               
               {/* Floating Elements */}
               <motion.div 
                 className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 flex items-center gap-3"
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 <div className="w-10 h-10 rounded-full bg-brand-lightAqua flex items-center justify-center">
                   <span className="text-brand-blue font-bold">100%</span>
                 </div>
                 <span className="font-bold text-brand-navy text-sm">Custom<br/>Design</span>
               </motion.div>
               
               <motion.div 
                 className="absolute -left-8 bottom-1/3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 flex items-center gap-3"
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               >
                 <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center">
                   <span className="text-white font-bold">500</span>
                 </div>
                 <span className="font-bold text-brand-navy text-sm">Popular<br/>Size (ml)</span>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
