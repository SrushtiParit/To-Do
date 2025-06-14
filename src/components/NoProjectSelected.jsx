import img from "../assets/no-projects.png";
import ProjectAddButton from "./ProjectAddButton";

export default function NoProjectSelected({ addProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={img} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a mew one
      </p>
      <p className="mt-8">
        <ProjectAddButton label="+ Create Project" onClick={() => addProject()} />
      </p>
    </div>
  );
}
