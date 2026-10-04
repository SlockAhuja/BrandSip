import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

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
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Bottle Options', href: '#bottle-options' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <Droplets className="h-8 w-8 text-brand-accent group-hover:text-brand-navy transition-colors duration-300" />
          <span className="text-2xl font-bold tracking-tight text-brand-navy">BrandSip</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-gray-600 hover:text-brand-accent transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#quote" className="btn-primary py-2 px-5 text-sm">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block text-base font-medium text-gray-800 hover:text-brand-accent" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#quote" className="btn-primary block text-center w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
