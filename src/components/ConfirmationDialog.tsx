import React from 'react';

interface ConfirmationDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <p>Are you sure you want to submit the survey?</p>
      <div className="dialog-buttons">
        <button onClick={onConfirm}>Yes, Submit</button>
        <button onClick={onCancel}>Go Back</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;