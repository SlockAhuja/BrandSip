import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

export default function BottleCustomizer() {
  const [brandName, setBrandName] = useState('Your Brand');
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="customizer" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Imagine Your Brand on Every Bottle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Upload your logo and see how your customized water bottle will look.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          
          {/* Controls */}
          <div className="w-full lg:w-1/2 space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Name</label>
              <input 
                type="text" 
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your brand or event name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Logo (Optional)</label>
              {logo ? (
                <div className="relative inline-block">
                  <img src={logo} alt="Logo preview" className="h-20 object-contain rounded border border-gray-200 p-2" />
                  <button 
                    onClick={removeLogo}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-8 border-2 border-dashed border-brand-accent/40 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:bg-brand-light/50 transition-colors"
                >
                  <Upload className="h-8 w-8 text-brand-accent mb-2" />
                  <span className="font-medium text-brand-navy">Click to upload logo</span>
                  <span className="text-xs mt-1">PNG, JPG (Max 5MB)</span>
                </button>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleLogoUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="pt-4">
              <a href="#quote" className="btn-primary w-full block text-center">
                Request This Design
              </a>
            </div>
          </div>

          {/* Preview */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-48 h-96 bg-gradient-to-br from-blue-50 to-white rounded-[4rem] border-4 border-gray-100 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Bottle Cap */}
              <div className="absolute top-0 w-16 h-8 bg-brand-navy rounded-t-lg"></div>
              <div className="absolute top-8 w-18 h-3 bg-gray-200 rounded-full blur-[1px]"></div>
              
              {/* Water Effect */}
              <div className="absolute bottom-0 w-full h-[85%] bg-blue-50/50 backdrop-blur-[2px]"></div>

              {/* Label */}
              <div className="relative z-10 w-full h-32 bg-white/90 backdrop-blur-md shadow-lg border-y border-gray-200 flex flex-col items-center justify-center p-4">
                {logo ? (
                  <img src={logo} alt="Custom Logo" className="max-h-16 w-auto object-contain mb-2" />
                ) : (
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-xs text-gray-400">LOGO</span>
                  </div>
                )}
                <span className="text-sm font-bold text-brand-navy text-center truncate w-full">
                  {brandName || 'Your Brand'}
                </span>
              </div>
              
              {/* Glare effect */}
              <div className="absolute top-0 left-4 w-4 h-full bg-white/40 blur-md rounded-full transform -skew-x-12"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
