import ReactDOM from "react-dom"

function Modal({ children, onClose }) {
  return (
    <div>
        <div>
            <button onClick={onClose}>❎</button>
            {children}
        </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("modal-root"))
}