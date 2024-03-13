import Modal from "react-modal";
import { SlClose } from "react-icons/sl";
/

const customStyles = ({ maxWidth, maxHeight }) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    top: "10%", 
    left: "10%",
    right: "10%",
    bottom: "10%",
    border: "2px solid var(--primary-color)",
    backgroundColor: "red", 
    opacity: "1",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "16px",
    outline: "none",
    padding: "20px",
    maxWidth,
    maxHeight,
    margin: "auto",
  },
});

const ModalComponent = ({
  isOpen,
  onRequestClose,
  children,
  maxWidth,
  maxHeight,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles({ maxWidth, maxHeight })}
      contentLabel="Modal"
    >
      {children}
      <button
        onClick={closeModal}
        className="text-3xl absolute top-0 right-0 mt-2.5 pt-2.5 pr-5 text-white hover:text-gray-300"
      >
        <SlClose />
      </button>
    </Modal>
  );
};

export default ModalComponent;
