import { Palette, Truck, Star, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyBrandSip() {
  const features = [
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: 'Custom Branding',
      description: 'Your logo, colors and message on every bottle.',
      color: 'bg-brand-accent'
    },
    {
      icon: <Truck className="h-6 w-6 text-white" />,
      title: 'Bulk Ordering',
      description: 'Perfect for events, businesses and celebrations.',
      color: 'bg-brand-navy'
    },
    {
      icon: <Star className="h-6 w-6 text-white" />,
      title: 'Professional Presentation',
      description: 'Make your event or business look polished.',
      color: 'bg-indigo-500'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: 'Convenient Delivery',
      description: 'Get your customized bottles ready for your requirement.',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            More Than a Bottle. <br className="md:hidden" /> It's Your Brand in Their Hands.
          </h2>
          <p className="text-gray-600 text-lg">
            We transform everyday hydration into a premium branding opportunity for your business or event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
