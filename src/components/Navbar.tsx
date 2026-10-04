import { useState, useEffect } from 'react';
import { Menu, X, Droplets, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Customizer', href: '#customizer' },
    { name: 'Why BrandSip', href: '#why-brandsip' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-navy p-2 rounded-xl group-hover:bg-brand-blue transition-colors">
            <Droplets className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-brand-navy">BrandSip</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[15px] font-semibold text-brand-navy/80 hover:text-brand-blue transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
            <a 
              href="https://wa.me/919276805468" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-navy font-semibold hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#customizer" className="bg-brand-navy text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-brand-blue transition-colors text-sm">
              Design Your Bottle
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-brand-navy p-2 bg-white rounded-lg shadow-sm border border-gray-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-6 py-6">
            <ul className="flex flex-col space-y-2 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block text-lg font-semibold text-brand-navy p-3 rounded-lg hover:bg-brand-softBg" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a 
                href="#customizer" 
                className="bg-brand-navy text-white text-center px-6 py-4 rounded-xl font-semibold text-lg" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Design Your Bottle
              </a>
              <a 
                href="https://wa.me/919276805468" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#25D366] font-bold py-3 bg-[#25D366]/10 rounded-xl"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
