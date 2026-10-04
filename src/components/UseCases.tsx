import { motion } from 'framer-motion';
import { Building2, PartyPopper, GraduationCap, Coffee, Hotel, Presentation, Rocket, Music } from 'lucide-react';

export default function UseCases() {
  const cases = [
    { name: 'Corporate', icon: <Building2 className="w-8 h-8" /> },
    { name: 'Wedding', icon: <PartyPopper className="w-8 h-8" /> },
    { name: 'College', icon: <GraduationCap className="w-8 h-8" /> },
    { name: 'Restaurant', icon: <Coffee className="w-8 h-8" /> },
    { name: 'Hotel', icon: <Hotel className="w-8 h-8" /> },
    { name: 'Event', icon: <Presentation className="w-8 h-8" /> },
    { name: 'Startup', icon: <Rocket className="w-8 h-8" /> },
    { name: 'Festival', icon: <Music className="w-8 h-8" /> }
  ];

  return (
    <section className="py-24 bg-brand-softBg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
            One Bottle. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua">Endless Possibilities.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-sm cursor-default"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="text-brand-blue group-hover:text-white transition-colors mb-4 transform group-hover:-translate-y-2 duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy group-hover:text-white transition-colors">
                {useCase.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
