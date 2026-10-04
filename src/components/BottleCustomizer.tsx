import { useState, useRef } from 'react';
import { Upload, RotateCcw, Maximize2, Trash2 } from 'lucide-react';
import type { DesignState, DesignOrientation } from '../types/design';
import DesignOrientationSelector from './DesignOrientationSelector';
import BottleMockup from './BottleMockup';
import DesignPreview from './DesignPreview';

interface Props {
  designState: DesignState;
  setDesignState: React.Dispatch<React.SetStateAction<DesignState>>;
}

export default function BottleCustomizer({ designState, setDesignState }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileDetails, setFileDetails] = useState<{ name: string; type: string } | null>(null);
  const [suggestedOrientation, setSuggestedOrientation] = useState<DesignOrientation | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const updateDesign = (updates: Partial<DesignState>) => {
    setDesignState(prev => ({ ...prev, ...updates }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileDetails({ name: file.name, type: file.type });
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        updateDesign({ logo: result, scale: 1, positionX: 0, positionY: 0 });
        
        // Auto-detect orientation
        const img = new Image();
        img.onload = () => {
          if (img.height > img.width) {
            setSuggestedOrientation('vertical');
          } else if (img.width > img.height) {
            setSuggestedOrientation('horizontal');
          } else {
            setSuggestedOrientation(null);
          }
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    updateDesign({ logo: null, scale: 1, positionX: 0, positionY: 0 });
    setFileDetails(null);
    setSuggestedOrientation(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetDesign = () => {
    updateDesign({ scale: 1, positionX: 0, positionY: 0 });
  };

  const loadSample = (type: 'vertical' | 'horizontal') => {
    const url = type === 'vertical' 
      ? 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80' // Portrait poster abstract
      : 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80'; // Wide logo/company
    
    updateDesign({ 
      logo: url, 
      orientation: type, 
      scale: 1, 
      positionX: 0, 
      positionY: 0 
    });
    setFileDetails({ name: `sample-${type}.jpg`, type: 'image/jpeg' });
    setSuggestedOrientation(null);
  };

  return (
    <section id="customizer" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Imagine Your Brand on Every Bottle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Upload your logo and see how your customized water bottle will look.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-6xl mx-auto">
          
          {/* Controls */}
          <div className="w-full lg:w-1/2 space-y-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            
            <DesignOrientationSelector 
              orientation={designState.orientation} 
              onChange={(o) => updateDesign({ orientation: o })} 
            />

            {suggestedOrientation && suggestedOrientation !== designState.orientation && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-lg text-sm flex justify-between items-center">
                <span>We think this is a <strong>{suggestedOrientation}</strong> design.</span>
                <button 
                  onClick={() => {
                    updateDesign({ orientation: suggestedOrientation });
                    setSuggestedOrientation(null);
                  }}
                  className="bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded font-medium transition-colors"
                >
                  Switch
                </button>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Name (Optional)</label>
              <input 
                type="text" 
                value={designState.brandName}
                onChange={(e) => updateDesign({ brandName: e.target.value })}
                placeholder="Enter your brand or event name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Logo or Artwork</label>
              {designState.logo ? (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={designState.logo} alt="Logo preview" className="h-16 w-16 object-contain rounded bg-white p-1 border border-gray-200" />
                    <div className="flex-1 overflow-hidden">
                      <p className="font-semibold text-brand-navy truncate text-sm">{fileDetails?.name || 'Custom Artwork'}</p>
                      <p className="text-xs text-gray-500 capitalize">{designState.orientation} Layout</p>
                    </div>
                    <button 
                      onClick={removeLogo}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors flex flex-col items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-[10px] font-medium">Remove</span>
                    </button>
                  </div>
                  
                  {/* Scale Control */}
                  <div className="pt-2 border-t border-gray-200">
                    <label className="flex justify-between text-xs font-semibold text-gray-600 mb-2">
                      <span>Scale Artwork</span>
                      <span>{Math.round(designState.scale * 100)}%</span>
                    </label>
                    <input 
                      type="range" 
                      min="0.5" max="3" step="0.1" 
                      value={designState.scale}
                      onChange={(e) => updateDesign({ scale: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                    />
                    <div className="flex justify-between mt-3">
                      <button onClick={resetDesign} className="text-xs font-medium text-gray-500 hover:text-brand-navy flex items-center gap-1">
                        <RotateCcw className="w-3 h-3" /> Reset Position & Scale
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-10 border-2 border-dashed border-brand-accent/40 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:bg-brand-light/50 transition-colors"
                  >
                    <Upload className="h-8 w-8 text-brand-accent mb-3" />
                    <span className="font-bold text-brand-navy mb-1">Click to upload your design</span>
                    <span className="text-xs text-gray-500">PNG, JPG (Max 5MB)</span>
                  </button>
                  
                  <div className="mt-4 flex gap-3 justify-center">
                    <button 
                      onClick={() => loadSample('vertical')}
                      className="text-xs font-medium text-brand-accent hover:underline"
                    >
                      Try Vertical Sample
                    </button>
                    <span className="text-gray-300">|</span>
                    <button 
                      onClick={() => loadSample('horizontal')}
                      className="text-xs font-medium text-brand-accent hover:underline"
                    >
                      Try Horizontal Sample
                    </button>
                  </div>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleLogoUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="pt-4 flex gap-4">
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="btn-secondary flex-1 flex justify-center items-center gap-2"
                disabled={!designState.logo}
              >
                <Maximize2 className="w-4 h-4" /> Full Preview
              </button>
              <a href="#quote" className="btn-primary flex-1 text-center">
                Request Quote
              </a>
            </div>
          </div>

          {/* Live Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center sticky top-24">
            <BottleMockup design={designState} onDesignChange={updateDesign} />
          </div>
        </div>
      </div>

      <DesignPreview 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        design={designState} 
        fileDetails={fileDetails}
      />
    </section>
  );
}
