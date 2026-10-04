import { motion } from 'framer-motion';
import { ArrowRight, Building2, PartyPopper, GraduationCap, Coffee } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Corporate Branding",
      desc: "Custom bottles for conferences, meetings, corporate gifting, and client events.",
      icon: <Building2 className="w-6 h-6" />,
      cta: "Explore Corporate",
      color: "bg-blue-50 text-brand-blue"
    },
    {
      title: "Events & Weddings",
      desc: "Beautiful customized bottles for weddings, birthdays, parties, and celebrations.",
      icon: <PartyPopper className="w-6 h-6" />,
      cta: "Create Event Bottles",
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "College & Campus",
      desc: "Perfect for college festivals, student clubs, hackathons, and campus events.",
      icon: <GraduationCap className="w-6 h-6" />,
      cta: "Create Campus Bottles",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Restaurants & Cafés",
      desc: "Build a consistent brand experience with customized bottles for your guests.",
      icon: <Coffee className="w-6 h-6" />,
      cta: "Brand Your Bottles",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
            Branding Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua">That Travel With You</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Turn an everyday bottle into a powerful brand touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-brand-softBg border border-gray-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 flex-grow mb-8 font-medium leading-relaxed">
                {item.desc}
              </p>
              <a href="#quote" className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-3 transition-all">
                {item.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
