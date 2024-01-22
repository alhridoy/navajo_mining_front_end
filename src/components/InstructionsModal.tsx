// InstructionsModal.tsx
import React from 'react';
import Modal from 'react-modal';

interface InstructionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Instructions Modal"
  >
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">How to use the map</h4>
        <button type="button" className="close" onClick={onRequestClose}>&times;</button>
      </div>
      <div className="modal-body">
        <h1 className="h1-instructions">Instructions</h1>
        <p className="p-instructions">Steps:</p>
        {/* ...other instructions... */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" onClick={onRequestClose}>Close</button>
      </div>
    </div>
  </Modal>
);

export default InstructionsModal;