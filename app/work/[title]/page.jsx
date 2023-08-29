"use client";

import { projectsData } from "../data";
import { usePathname } from "next/navigation";

const Project = () => {
  const pathname = usePathname();
  const title = pathname.split("/").pop();

  console.log(title);

  const projectData = projectsData.find((project) => project.title === title);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
    </div>
  );
};

export default Project;
