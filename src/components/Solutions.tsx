import { motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, Coffee, Presentation, Dumbbell } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    { icon: <Building2 className="w-8 h-8" />, name: 'Corporate', desc: 'Meetings & Conferences' },
    { icon: <GraduationCap className="w-8 h-8" />, name: 'Colleges & Universities', desc: 'Events & Alumni' },
    { icon: <Heart className="w-8 h-8" />, name: 'Weddings', desc: 'Personalized Celebrations' },
    { icon: <Coffee className="w-8 h-8" />, name: 'Restaurants & Cafés', desc: 'Premium Dining' },
    { icon: <Presentation className="w-8 h-8" />, name: 'Events & Exhibitions', desc: 'Trade Shows' },
    { icon: <Dumbbell className="w-8 h-8" />, name: 'Gyms & Fitness', desc: 'Branded Hydration' },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Built for Every Occasion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Whatever your business or event, we have the perfect branded hydration solution.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-brand-light p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-brand-navy hover:text-white transition-colors duration-300 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="text-brand-accent group-hover:text-brand-cyan mb-4 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
