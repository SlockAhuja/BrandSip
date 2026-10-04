import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choose', desc: 'Select bottle size and quantity.' },
    { num: '02', title: 'Brand', desc: 'Upload your logo or artwork.' },
    { num: '03', title: 'Approve', desc: 'Review the branding design.' },
    { num: '04', title: 'Deliver', desc: 'Receive your customized bottles.' }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A simple, streamlined process to get your brand in their hands.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-accent/20 via-brand-accent to-brand-cyan/20 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-light shadow-xl flex items-center justify-center text-xl font-black text-brand-navy mb-6 relative">
                  {step.num}
                  <div className="absolute -inset-2 rounded-full border border-brand-accent/30 animate-[spin_10s_linear_infinite]"></div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
