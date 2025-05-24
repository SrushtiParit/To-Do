import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedFile from "./components/SelectedFile"
import { useState } from "react";

const blankInfo = {
  Title: null,
  Description: null,
  "Due Date": null,
};

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
 // const [isSelectProject, setIsSelectProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projectInformation, setProjectInformation] = useState(blankInfo);
  const [projects, setProjects] = useState([])

  function handleAddProjectClick(save = null) {
    setIsAddProject((prevBool) => !prevBool);
    setSelectedProjectId(null);
    if (save) {
      //Projects.push(projectInformation);
      setProjects((prevProj) => [
        ...prevProj,
        {
          ...projectInformation,
          id: crypto.randomUUID(), // or Date.now() for unique id
        },
      ]);
    }
    setProjectInformation(blankInfo);
  }

  function handleInputChange(field, value) {
    setProjectInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSelectProject(Id){
    setSelectedProjectId(Id);
    setIsAddProject(false);
  }

  function handleDeleteProject(Id){
    setProjects((prevProj)=>prevProj.filter((proj)=>proj.id !== Id))
    setSelectedProjectId(null);
    setIsAddProject(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar addProject={handleAddProjectClick} projects={projects} projSelected={handleSelectProject} selectedProject={selectedProjectId}/>
      {isAddProject && (
        <AddProject
          addProject={handleAddProjectClick}
          inputChangeFunc={handleInputChange}
          projectInfo={projectInformation}
        />
      )}
      {!isAddProject && !selectedProjectId && (
        <NoProjectSelected addProject={handleAddProjectClick} />
      )}

      {selectedProjectId && (
        <SelectedFile project={projects.find(p => p.id === selectedProjectId)} deleteProject={handleDeleteProject}/>
      )}
    </main>
  );
}

export default App;
