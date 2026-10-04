import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingData } from '../data/pricing';

export default function BottleOptions() {
  const options = [
    {
      id: '250ml',
      name: '250 ml',
      desc: 'Events • Conferences • Short gatherings',
      price: pricingData.products.find(p => p.id === '250ml')?.basePrice || 8,
      features: ['Compact & lightweight', 'Perfect for short events', 'Budget-friendly bulk option'],
      popular: false
    },
    {
      id: '500ml',
      name: '500 ml',
      desc: 'Corporate • Colleges • Weddings • Restaurants',
      price: pricingData.products.find(p => p.id === '500ml')?.basePrice || 10,
      features: ['Standard serving size', 'Maximum brand visibility', 'Ideal for all-day events'],
      popular: true
    },
    {
      id: '1l',
      name: '1 L',
      desc: 'Hotels • Long events • Premium requirements',
      price: pricingData.products.find(p => p.id === '1l')?.basePrice || 15,
      features: ['Premium presentation', 'Extended hydration', 'High-end dining & hospitality'],
      popular: false
    }
  ];

  return (
    <section id="bottle-options" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Choose Your Canvas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Different sizes for different occasions. All designed to make your brand stand out.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <motion.div 
              key={option.id}
              className={`relative bg-white rounded-3xl p-8 flex flex-col ${option.popular ? 'border-2 border-brand-blue shadow-xl md:-translate-y-4' : 'border border-gray-100 shadow-md'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{option.name}</h3>
                <p className="text-sm text-gray-500 min-h-[40px]">{option.desc}</p>
                <div className="mt-6">
                  <span className="text-3xl font-extrabold text-brand-navy">₹{option.price}</span>
                  <span className="text-gray-500"> / bottle</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">*Base price. Varies with branding & quantity.</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="h-5 w-5 text-brand-blue shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#quote" className={`w-full text-center py-3 rounded-xl font-bold transition-all duration-300 ${option.popular ? 'bg-brand-navy text-white hover:bg-brand-blue shadow-lg' : 'bg-brand-light text-brand-navy hover:bg-gray-200'}`}>
                Request Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
