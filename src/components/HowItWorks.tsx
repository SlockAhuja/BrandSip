import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choose Your Bottle', desc: 'Select bottle size and quantity.' },
    { num: '02', title: 'Upload Your Design', desc: 'Upload your logo, poster or artwork.' },
    { num: '03', title: 'Preview Your Bottle', desc: 'See exactly how your artwork will appear.' },
    { num: '04', title: 'Place Your Order', desc: 'Submit your details and receive a quote.' }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-softBg/50 -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">A simple, streamlined process to get your brand in their hands.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-blue/10 via-brand-blue/40 to-brand-blue/10 z-0"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-xl font-black text-brand-blue mb-8 relative transition-transform duration-300 group-hover:scale-110">
                  {step.num}
                  <div className="absolute inset-2 rounded-full border border-brand-aqua/20 animate-[spin_10s_linear_infinite]"></div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
           <a href="#customizer" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
             Start Creating Now
           </a>
        </div>
      </div>
    </section>
  );
}
