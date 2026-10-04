import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-softBg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
              Let's Put Your Brand <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua">in Every Hand.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ready to elevate your event or business? Contact us today for inquiries, custom quotes, or to request a sample.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="https://wa.me/919276805468" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a href="#quote" className="flex items-center justify-center gap-2 bg-white text-brand-navy border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-blue hover:text-brand-blue transition-colors">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg mx-auto">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-blue/5 border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-lightAqua rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Call Us</div>
                    <a href="tel:+919276805468" className="text-2xl font-black text-brand-navy hover:text-brand-blue transition-colors">
                      +91 9276805468
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-lightAqua rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">WhatsApp</div>
                    <a href="https://wa.me/919276805468" target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-brand-navy hover:text-brand-blue transition-colors">
                      +91 9276805468
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-lightAqua rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</div>
                    <a href="mailto:contact@brandsip.in" className="text-xl font-bold text-brand-navy hover:text-brand-blue transition-colors">
                      contact@brandsip.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
