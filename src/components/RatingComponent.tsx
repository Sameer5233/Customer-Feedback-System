import React from 'react';

interface RatingComponentProps {
  scale: number;
  selected: number | null;
  onSelect: (rating: number) => void;
}

const RatingComponent: React.FC<RatingComponentProps> = ({ scale, selected, onSelect }) => {
  const getRatingLabel = (rating: number, scale: number) => {
    if (scale === 5) {
      const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
      return labels[rating - 1];
    } else if (scale === 10) {
      if (rating <= 2) return 'Very Poor';
      if (rating <= 4) return 'Poor';
      if (rating <= 6) return 'Fair';
      if (rating <= 8) return 'Good';
      return 'Excellent';
    }
    return '';
  };

  const buttons = [];
  for (let i = 1; i <= scale; i++) {
    buttons.push(
      <div key={i} className="rating-item">
        <button
          className={`rating-button ${selected === i ? 'selected' : ''} ${
            selected && i <= selected ? 'filled' : ''
          }`}
          onClick={() => onSelect(i)}
          title={getRatingLabel(i, scale)}
        >
          {i}
        </button>
        {(scale === 5 || scale === 10) && (
          <span className={`rating-label ${selected === i ? 'active' : ''}`}>
            {getRatingLabel(i, scale)}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="rating-container">
      <div className="rating-scale-labels">
        <span className="rating-label-left">
          {scale === 5 ? 'Not Satisfied' : 'Not Likely'}
        </span>
        <span className="rating-label-right">
          {scale === 5 ? 'Very Satisfied' : 'Very Likely'}
        </span>
      </div>
      <div className="rating-buttons">{buttons}</div>
      {selected !== null && (
        <div className="rating-feedback">
          Selected: <strong>{getRatingLabel(selected, scale)}</strong>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;