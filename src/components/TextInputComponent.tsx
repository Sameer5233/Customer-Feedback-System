import React from 'react';

interface TextInputComponentProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your feedback here..."
      className="text-input"
    />
  );
};

export default TextInputComponent;