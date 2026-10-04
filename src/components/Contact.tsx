import { contactData } from '../data/contact';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
              Let's Put Your Brand in Every Hand.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Ready to elevate your event or business? Contact us today for inquiries, custom quotes, or to request a sample.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a href={contactData.social.whatsapp} className="btn-accent flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href="#quote" className="btn-secondary">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="bg-brand-light p-8 rounded-3xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Call Us</div>
                    <a href={`tel:${contactData.phone}`} className="text-lg font-bold text-brand-navy hover:text-brand-accent transition-colors">{contactData.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email Us</div>
                    <a href={`mailto:${contactData.email}`} className="text-lg font-bold text-brand-navy hover:text-brand-accent transition-colors">{contactData.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Location</div>
                    <div className="text-lg font-bold text-brand-navy">{contactData.location}</div>
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
