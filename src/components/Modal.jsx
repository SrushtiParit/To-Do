import React, { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import ProjectAddButton from "./ProjectAddButton";


const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <ProjectAddButton label="Close"/>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
