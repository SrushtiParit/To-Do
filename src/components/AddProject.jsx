import Input from "./Input";
import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function AddProject({
  addProject,
  inputChangeFunc,
  projectInfo,
}) {
  const modal = useRef();

  function onSaveClick() {
    if (
      !projectInfo.Title ||
      !projectInfo.Description ||
      !projectInfo["Due Date"]
    ) {
      //console.log("empty Input");
      modal.current.open();
      return;
    }
    addProject(true);
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops.... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => addProject()}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={onSaveClick}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        <Input
          label="Title"
          value={projectInfo.Title}
          saveFun={inputChangeFunc}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600"
        />

        <Input
          label="Description"
          textarea
          value={projectInfo.Description}
          saveFun={inputChangeFunc}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600"
        />

        <Input
          label="Due Date"
          type="date"
          value={projectInfo["Due Date"]}
          saveFun={inputChangeFunc}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600"
        />
      </div>
    </>
  );
}
