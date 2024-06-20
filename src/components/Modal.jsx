const Modal = ({ show, handleClose, message, codeTeam ,isError}) => {
  if (!show) {
    return null;
  }
  console.log(codeTeam)

  return (
    <div className="modal-overlay z-50">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <h4 className={`font-bold text-primary ${isError && "text-red-600"}`}>{ !isError ? message : "Submission failed"}</h4>
        {!isError ?
       ( (codeTeam &&codeTeam!="#")  ? <h3>Your team code is: <strong>{codeTeam + " "} <span  className="underline block font-thin text-red-500">share with your team members for their registrations!</span></strong></h3> :<h3>thanks, we will contact you soon !</h3> )
: <h3>we are sorry, please repeat !</h3>
}
      </div>
    </div>
  );
};

export default Modal;
