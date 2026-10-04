import { motion } from 'framer-motion';
import { Palette, Eye, Package, Zap, Briefcase, Users } from 'lucide-react';

export default function WhyBrandSip() {
  const features = [
    {
      icon: <Palette className="w-7 h-7" />,
      title: '100% Custom Designs',
      description: 'Your artwork. Your identity. Your bottle.',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: 'Live Preview',
      description: 'See your design before placing the order.',
      color: 'text-brand-blue bg-brand-lightAqua'
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Bulk Orders',
      description: 'Perfect for events, companies and organizations.',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Simple Ordering',
      description: 'Upload → Preview → Request Quote.',
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Professional Branding',
      description: 'Turn every bottle into a brand impression.',
      color: 'text-teal-600 bg-teal-50'
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Personal Support',
      description: 'Get help with your design and order.',
      color: 'text-brand-navy bg-brand-navy/10'
    }
  ];

  return (
    <section id="why-brandsip" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
            Why Choose BrandSip?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            We transform everyday hydration into a premium branding opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
