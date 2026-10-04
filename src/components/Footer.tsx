import { Droplets } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1 text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start gap-2 group mb-4">
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-brand-blue transition-colors">
                <Droplets className="h-6 w-6 text-brand-aqua" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">BrandSip</span>
            </a>
            <p className="text-white/60 mb-6 font-medium">Your Brand. On Every Sip.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-aqua">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-white/70 hover:text-white transition-colors font-medium">Solutions</a></li>
              <li><a href="#customizer" className="text-white/70 hover:text-white transition-colors font-medium">Customizer</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors font-medium">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-aqua">Support</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors font-medium">Contact</a></li>
              <li><a href="#quote" className="text-white/70 hover:text-white transition-colors font-medium">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-aqua">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919276805468" className="text-white/70 hover:text-white transition-colors font-medium">
                  +91 9276805468
                </a>
              </li>
              <li>
                <a href="https://wa.me/919276805468" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-white transition-colors font-bold">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-center items-center text-white/50 text-sm font-medium">
          <p>&copy; 2026 BrandSip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
