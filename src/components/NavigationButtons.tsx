import React from 'react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  onSkip,
  isFirst,
  isLast,
}) => {
  return (
    <div className="navigation-buttons">
      {!isFirst && <button onClick={onPrevious}>Previous</button>}
      <button onClick={onSkip}>Skip</button>
      {!isLast && <button onClick={onNext}>Next</button>}
      {isLast && <button onClick={onNext}>Finish</button>}
    </div>
  );
};

export default NavigationButtons;