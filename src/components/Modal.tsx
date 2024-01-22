import React from "react";

interface ModalProps {
  id: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ id, title }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      id={id}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">{title}</h2>
        {/* Other modal content goes here */}
      </div>
    </div>
  );
};

export default Modal;
