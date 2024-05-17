// InstructionsModal.tsx
import React from "react";
import Modal from "react-modal";

interface InstructionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onRequestClose,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Instructions Modal"
    style={{
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      },
      content: {
        position: "absolute",
        left: "21%",
        right: "20%",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        // padding: "10%",
      },
    }}
  >
    <div className="modal-content">
      <div
        className="modal-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h4 className="modal-title">How to use the map</h4>
        <button
          style={{
            backgroundColor: "transparent",
            color: "#333", // Gray but almost black
            fontSize: "25px",
            border: "none",
            cursor: "pointer",
          }}
          type="button"
          className="modal-close-btn"
          onClick={onRequestClose}
        >
          &times;
        </button>
      </div>
      <div className="modal-body">
        <h1 className="h1-instructions">Instructions</h1>
        <p className="p-instructions">Steps:</p>
        <p className="p-instructions">
          1. Pan - to pan (move) the map, simply click and hold a point on the
          map, then drag and release.
        </p>
        <p className="p-instructions">
          2. Zoom - to zoom in simply click the “+” symbol, and to zoom out
          click “-” symbol in upper left-hand corner.
        </p>
        <p className="p-instructions">
          3. Base map - to change the map background simply click on the circle
          next to “street map” or “satellite map.”
        </p>
        <p className="p-instructions">
          4. Toggle layers - to activate a layer simply click the square next to
          “mines” or “potential exposure”, and click the square again to
          deactivate.
        </p>
        <p className="p-instructions">
          5. Ensure potential exposure is toggled first, for correct layer
          overlap.
        </p>
        <p className="p-instructions">
          6. Filter mine size - simply click and drag the two rectangles on the
          slider at the bottom right of the map to select the ideal range of
          mine sizes.
        </p>
        <p className="p-instructions">
          7. Exposure popup - to observe exposure class and index for an area,
          simply click on the map.
        </p>
        <p className="p-instructions">
          8. Mine popup - to observe mine information, simply click on an orange
          point of interest, to see the mine name, and size (km<sup>2</sup>).
        </p>
        <p className="p-instructions">
          9. About the data - to learn more about the data, model, or the team,
          simply click on the “About the Data” button in the upper right-hand
          corner.
        </p>
        <p className="p-instructions">
          10. Click on the "home" symbol in the zoom-control to reset map
          extent.
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-default"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </div>
  </Modal>
);

export default InstructionsModal;
