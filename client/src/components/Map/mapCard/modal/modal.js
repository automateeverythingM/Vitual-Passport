function Modal({ show, hideModal, children }) {
  return show ? (
    <div
      onClick={() => {
        hideModal();
      }}
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
      style={{ zIndex: 9999, background: "#302d2d99" }}
    >
      {children}
    </div>
  ) : null;
}

export default Modal;
