import ProjectAddButton from "./ProjectAddButton";

export default function ProjectSidebar({ addProject, projects, projSelected, selectedProject }) {
  let cssClasses ="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 "

  if(projects.id === selectedProject){
    cssClasses += 'bg-stone-800 text-stone-200';
  }
  else{
    cssClasses += 'text-stone-400';
  }
  
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <ul className="mt-8">
        <li className="flex justify-between my-4"></li>
      </ul>
      <div>
        <ProjectAddButton label="+ Add Project" onClick={() => addProject()} />
      </div>
      <ul className="mt-8">
        {projects.map((project)=>(
          <li key={project.id} onClick={()=>projSelected(project.id)} className={cssClasses}>{project.Title}</li>
        ))}
      </ul>
    </aside>
  );
}
