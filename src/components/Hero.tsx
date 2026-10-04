import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-navy mb-6">
              Your Brand. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan">On Every Sip.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Custom-branded water bottles that put your brand in every hand, every event, and every conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#customizer" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                Design Your Bottle <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#quote" className="btn-secondary w-full sm:w-auto">
                Get a Bulk Quote
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-brand-accent" /> Custom Branding</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-brand-accent" /> Bulk Orders</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-brand-accent" /> Event Ready</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 relative w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] bg-gradient-to-br from-brand-light to-blue-50 rounded-3xl border border-white shadow-2xl flex items-center justify-center p-8 overflow-hidden">
               {/* Abstract bottle representation if image not available */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
               <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-3">
                   <span className="text-white font-bold text-xl">Logo</span>
                 </div>
                 <div className="h-2 w-20 bg-gray-200 rounded mx-auto mb-2"></div>
                 <div className="h-2 w-12 bg-gray-200 rounded mx-auto"></div>
               </div>
               
               {/* Floating Cards */}
               <motion.div 
                 className="absolute -right-6 top-1/4 glass p-3 rounded-xl shadow-lg"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               >
                 <span className="text-sm font-bold text-brand-navy">Premium Label</span>
               </motion.div>
               
               <motion.div 
                 className="absolute -left-6 bottom-1/4 glass p-3 rounded-xl shadow-lg"
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
               >
                 <span className="text-sm font-bold text-brand-navy">Event Ready</span>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
