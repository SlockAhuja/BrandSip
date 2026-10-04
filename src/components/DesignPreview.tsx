import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import type { DesignState } from '../types/design';
import BottleMockup from './BottleMockup';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  design: DesignState;
  fileDetails?: { name: string; type: string } | null;
}

export default function DesignPreview({ isOpen, onClose, design, fileDetails }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div 
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className="relative bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: large mockup */}
            <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
              {/* Reuse the mockup, but scale it up if needed. The existing BottleMockup is already quite nice. */}
              <div className="scale-110">
                <BottleMockup design={design} onDesignChange={() => {}} />
              </div>
            </div>

            {/* Right side: details */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-brand-navy mb-6">Bottle Preview</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Format</span>
                  <span className="font-bold text-brand-navy">500 ml</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Orientation</span>
                  <span className="font-bold text-brand-navy capitalize">{design.orientation}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Artwork</span>
                  <span className="font-bold text-brand-navy truncate max-w-[150px]" title={fileDetails?.name || 'None'}>
                    {fileDetails?.name || (design.brandName ? `Text: ${design.brandName}` : 'None')}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    alert("In a real app, this would trigger a canvas snapshot of the bottle to download.");
                  }}
                  className="btn-secondary flex-1 flex justify-center items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Preview
                </button>
                <button 
                  onClick={onClose}
                  className="btn-primary flex-1"
                >
                  Looks Good
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
