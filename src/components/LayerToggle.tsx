
import { useState } from 'react';
import { Check } from 'lucide-react';

interface Layer {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface LayerToggleProps {
  layers: Layer[];
  onChange: (activeLayerIds: string[]) => void;
}

const LayerToggle = ({ layers, onChange }: LayerToggleProps) => {
  const [activeLayers, setActiveLayers] = useState<string[]>(['infrastruktur']);

  const toggleLayer = (layerId: string) => {
    let newActiveLayers;
    
    if (activeLayers.includes(layerId)) {
      newActiveLayers = activeLayers.filter(id => id !== layerId);
    } else {
      newActiveLayers = [...activeLayers, layerId];
    }
    
    setActiveLayers(newActiveLayers);
    onChange(newActiveLayers);
  };

  return (
    <div className="glass-card py-2 px-1">
      <div className="flex flex-col space-y-1">
        {layers.map(layer => (
          <button
            key={layer.id}
            className={`flex items-center justify-between px-4 py-2 rounded-md ${
              activeLayers.includes(layer.id)
                ? 'bg-primary text-white'
                : 'bg-transparent text-white hover:bg-white/10'
            } transition-all duration-200`}
            onClick={() => toggleLayer(layer.id)}
          >
            <span className="flex items-center">
              {layer.icon && <span className="mr-2">{layer.icon}</span>}
              {layer.name}
            </span>
            {activeLayers.includes(layer.id) && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LayerToggle;
