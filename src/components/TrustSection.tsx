import { motion } from 'framer-motion';

export default function TrustSection() {
  const categories = [
    "Corporate Businesses",
    "Educational Institutions",
    "Premium Events",
    "Restaurants & Cafés",
    "Tech Startups",
    "Non-Profit Organizations"
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-10 tracking-widest uppercase text-sm">
          Built for Brands, Events & Communities
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="text-lg md:text-xl font-bold text-brand-navy/80 hover:text-brand-blue transition-colors cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {category}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
