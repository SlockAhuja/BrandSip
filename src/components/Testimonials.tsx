import { motion } from 'framer-motion';

export default function Testimonials() {
  const stats = [
    { value: 'Built for', label: 'Events' },
    { value: 'Designed for', label: 'Businesses' },
    { value: 'Perfect for', label: 'Colleges' },
    { value: 'Ideal for', label: 'Celebrations' }
  ];

  return (
    <section className="py-20 bg-brand-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Customers Will Choose BrandSip</h2>
          <p className="text-white/70 max-w-2xl mx-auto">We are building the future of branded hydration, focusing on quality, speed, and premium design.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-black text-brand-cyan mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
