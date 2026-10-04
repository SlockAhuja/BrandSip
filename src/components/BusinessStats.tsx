import { motion } from 'framer-motion';

export default function BusinessStats() {
  const stats = [
    { value: "100%", label: "Custom Design", sub: "Fully personalized" },
    { value: "2", label: "Design Orientations", sub: "Vertical & Horizontal" },
    { value: "500ml", label: "Popular Size", sub: "Perfect for events" },
    { value: "24/7", label: "Quote Requests", sub: "Always available" }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-brand-navy mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
