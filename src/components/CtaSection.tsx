import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-blue/30 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-aqua/20 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Put Your Brand <br />
            <span className="text-brand-aqua">On Every Sip?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
            Create your bottle design today and request a customized quote for your business, event, or community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#customizer" className="bg-brand-aqua text-brand-navy px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white transition-colors shadow-[0_0_20px_rgba(24,182,217,0.4)]">
              Design My Bottle <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919276805468" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white hover:text-brand-navy transition-colors">
              <MessageCircle className="w-5 h-5" /> Talk to BrandSip
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
