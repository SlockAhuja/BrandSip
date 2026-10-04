import { Smartphone, Monitor } from 'lucide-react';
import type { DesignOrientation } from '../types/design';

interface Props {
  orientation: DesignOrientation;
  onChange: (o: DesignOrientation) => void;
}

export default function DesignOrientationSelector({ orientation, onChange }: Props) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-gray-700 mb-4">Choose Your Design Orientation</label>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onChange('vertical')}
          className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${
            orientation === 'vertical'
              ? 'border-brand-accent bg-brand-accent/5 shadow-md'
              : 'border-gray-200 hover:border-brand-accent/50 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <Smartphone className={`h-6 w-6 ${orientation === 'vertical' ? 'text-brand-accent' : 'text-gray-400'}`} />
            <span className={`font-bold ${orientation === 'vertical' ? 'text-brand-navy' : 'text-gray-600'}`}>Vertical</span>
          </div>
          <p className="text-xs text-gray-500 font-medium mb-1">Portrait / Tall</p>
          <p className="text-[10px] text-gray-400 leading-tight">Best for posters, Instagram posts, and portrait artwork</p>
        </button>

        <button
          onClick={() => onChange('horizontal')}
          className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${
            orientation === 'horizontal'
              ? 'border-brand-accent bg-brand-accent/5 shadow-md'
              : 'border-gray-200 hover:border-brand-accent/50 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <Monitor className={`h-6 w-6 ${orientation === 'horizontal' ? 'text-brand-accent' : 'text-gray-400'}`} />
            <span className={`font-bold ${orientation === 'horizontal' ? 'text-brand-navy' : 'text-gray-600'}`}>Horizontal</span>
          </div>
          <p className="text-xs text-gray-500 font-medium mb-1">Landscape / Wide</p>
          <p className="text-[10px] text-gray-400 leading-tight">Best for company logos, wide branding, and taglines</p>
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <span className="font-semibold">Not sure which to choose?</span> Vertical works best for posters and portrait artwork. Horizontal works best for logos, company branding and wide designs.
      </p>
    </div>
  );
}
