import { motion } from 'framer-motion';
import { useRef } from 'react';
import type { DesignState } from '../types/design';
import { Move } from 'lucide-react';

interface Props {
  design: DesignState;
  onDesignChange: (updates: Partial<DesignState>) => void;
}

export default function BottleMockup({ design, onDesignChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Label dimensions based on orientation
  const isVertical = design.orientation === 'vertical';
  
  // Taller and narrower for vertical (e.g. 112px wide, 208px high)
  // Wider and shorter for horizontal (e.g. 100% wide, 112px high)
  const labelClass = isVertical 
    ? "w-28 h-52 bg-white/90 backdrop-blur-md shadow-lg border border-gray-200" 
    : "w-full h-28 bg-white/90 backdrop-blur-md shadow-lg border-y border-gray-200";

  return (
    <div className="relative group">
      <motion.div 
        className="relative w-48 h-96 bg-gradient-to-br from-blue-50 to-white rounded-[4rem] border-4 border-gray-100 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Bottle Cap */}
        <div className="absolute top-0 w-16 h-8 bg-brand-navy rounded-t-lg z-0"></div>
        <div className="absolute top-8 w-18 h-3 bg-gray-200 rounded-full blur-[1px] z-0"></div>
        
        {/* Water Effect */}
        <div className="absolute bottom-0 w-full h-[85%] bg-blue-50/50 backdrop-blur-[2px] z-0"></div>

        {/* Label Container - serves as drag bounds */}
        <div 
          ref={containerRef}
          className={`relative z-10 flex flex-col items-center justify-center p-2 overflow-hidden ${labelClass}`}
        >
          {design.logo ? (
            <motion.img 
              src={design.logo} 
              alt="Custom Artwork"
              drag
              dragConstraints={containerRef}
              dragElastic={0}
              dragMomentum={false}
              style={{ 
                x: design.positionX, 
                y: design.positionY, 
                scale: design.scale,
                cursor: 'grab',
                touchAction: 'none'
              }}
              onDrag={(_, info) => {
                onDesignChange({ 
                  positionX: info.point.x, 
                  positionY: info.point.y 
                });
              }}
              onDragEnd={() => {
                // When dragging ends, we might want to store exact relative coordinates, 
                // but just letting framer-motion handle the transform is often enough.
                // We'll trust framer-motion's internal state for smooth dragging, 
                // but we update the parent state just in case.
              }}
              className="max-w-full max-h-full object-contain active:cursor-grabbing"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center opacity-50">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-[10px] text-gray-500 font-bold">LOGO</span>
              </div>
              <span className="text-xs font-bold text-gray-400 text-center truncate w-full px-2">
                {design.brandName || 'Your Brand'}
              </span>
            </div>
          )}
        </div>
        
        {/* Glare effect */}
        <div className="absolute top-0 left-4 w-4 h-full bg-white/40 blur-md rounded-full transform -skew-x-12 z-20 pointer-events-none"></div>
      </motion.div>

      {/* Overlay hint when hovering */}
      {design.logo && (
        <div className="absolute top-4 right-4 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 pointer-events-none z-30">
          <Move className="w-3 h-3" /> Drag to move
        </div>
      )}
    </div>
  );
}
