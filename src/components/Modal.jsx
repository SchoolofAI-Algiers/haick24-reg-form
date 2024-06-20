const Modal = ({ show, handleClose, message, codeTeam ,isError}) => {
  if (!show) {
    return null;
  }
  console.log(codeTeam)

  return (
    <div className="modal-overlay z-50">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <h2 className={`font-bold text-primary ${isError && "text-red-600"}`}>{ !isError ? message : "Submission failed"}</h2>
        {!isError ?
       ( (codeTeam &&codeTeam!="#")  ? <h4>Your team code is: <strong>{codeTeam + " "} <span  className=" underline block">share with your team members for their registrations!</span></strong></h4> :( codeTeam === "#" ? <h4>thanks, we will contact you soon !</h4> : <h4>we will contact you sooner to provide you which team you are in !</h4>))
: <h4>we are sorry, please repeat !</h4>
}
      </div>
    </div>
  );
};

export default Modal;
