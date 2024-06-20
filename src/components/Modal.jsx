const Modal = ({ show, handleClose, message, codeTeam ,isError}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay z-50">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <h2 className={`font-bold text-primary ${isError && "text-red-600"}`}>{ !isError ? message : "Submission failed"}</h2>
        {!isError ?
        <h4>Your team code is: <strong className="underline">{codeTeam}</strong></h4>
: <h4>we are sorry, please repeat !</h4>
}
      </div>
    </div>
  );
};

export default Modal;
