import { Droplets } from 'lucide-react';
import { contactData } from '../data/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1 text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start gap-2 group mb-4">
              <Droplets className="h-8 w-8 text-brand-cyan" />
              <span className="text-2xl font-bold tracking-tight text-white">BrandSip</span>
            </a>
            <p className="text-white/60 mb-6 font-medium">Your Brand. On Every Sip.</p>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href={contactData.social.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-colors">
                IG
              </a>
              <a href={contactData.social.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-colors">
                IN
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-cyan">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#solutions" className="text-white/70 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#bottle-options" className="text-white/70 hover:text-white transition-colors">Bottle Options</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-cyan">Support</h4>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#quote" className="text-white/70 hover:text-white transition-colors">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-cyan">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-white/70">{contactData.phone}</li>
              <li className="text-white/70">{contactData.email}</li>
              <li className="text-white/70">{contactData.location}</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>&copy; {currentYear} BrandSip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
