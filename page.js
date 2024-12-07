import { useState, useEffect } from 'react';

const VoiceSelector = ({ onVoiceSelect }) => {
  const [voices] = useState([
    { value: 'pt-BR-AntonioNeural', label: 'Antônio (Masculino)' },
    { value: 'pt-BR-FranciscaNeural', label: 'Francisca (Feminino)' }
  ]);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Selecione a Voz
      </label>
      <select 
        onChange={(e) => onVoiceSelect(e.target.value)}
        className="w-full p-2 border rounded-lg shadow-sm"
        defaultValue=""
      >
        <option value="" disabled>Escolha uma voz</option>
        {voices.map(voice => (
          <option key={voice.value} value={voice.value}>
            {voice.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;