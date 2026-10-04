import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { pricingData } from '../data/pricing';

export default function QuoteCalculator() {
  const [size, setSize] = useState('500ml');
  const [quantity, setQuantity] = useState(500);
  const [branding, setBranding] = useState('standard');
  const [delivery, setDelivery] = useState('pickup');
  
  const [pricePerBottle, setPricePerBottle] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const baseProduct = pricingData.products.find(p => p.id === size);
    const brandingOption = pricingData.brandingOptions.find(b => b.id === branding);
    const deliveryOption = pricingData.deliveryOptions.find(d => d.id === delivery);

    if (baseProduct && brandingOption && deliveryOption) {
      let unitPrice = baseProduct.basePrice * brandingOption.multiplier;
      
      // Volume discount logic (example)
      if (quantity >= 5000) unitPrice *= 0.85;
      else if (quantity >= 1000) unitPrice *= 0.9;
      
      setPricePerBottle(Number(unitPrice.toFixed(2)));
      
      const subtotal = unitPrice * quantity;
      setTotalPrice(subtotal + deliveryOption.cost);
    }
  }, [size, quantity, branding, delivery]);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-brand-navy rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Form Side */}
          <div className="flex-1 p-8 md:p-12 bg-white rounded-r-[2.5rem] md:rounded-r-none md:rounded-l-[2.5rem]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-navy">
                <Calculator className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Quote Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Bottle Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {pricingData.products.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => setSize(p.id)}
                      className={`py-2 px-1 text-sm rounded-lg border font-medium transition-all ${size === p.id ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-brand-accent'}`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                <input 
                  type="number" 
                  min="100"
                  step="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(100, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Branding</label>
                <select 
                  value={branding}
                  onChange={(e) => setBranding(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent appearance-none bg-white"
                >
                  {pricingData.brandingOptions.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery</label>
                <select 
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent appearance-none bg-white"
                >
                  {pricingData.deliveryOptions.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Result Side */}
          <div className="flex-1 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-white/80 mb-6">Estimated Pricing</h3>
              
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">₹{totalPrice.toLocaleString('en-IN')}</div>
                <div className="text-brand-cyan font-medium">Estimated Total</div>
              </div>

              <div className="mb-8 border-t border-white/10 pt-8">
                <div className="text-3xl font-bold mb-1">₹{pricePerBottle}</div>
                <div className="text-white/70 text-sm">Price Per Bottle</div>
              </div>

              <div className="bg-white/10 p-4 rounded-xl text-xs text-white/80 leading-relaxed backdrop-blur-sm">
                Estimated pricing — final quotation depends on quantity, branding, bottle type and delivery.
              </div>
              
              <div className="mt-8">
                <a href="#quote" className="inline-block bg-brand-cyan text-brand-navy font-bold px-8 py-3 rounded-full hover:bg-white transition-colors duration-300">
                  Request Official Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
