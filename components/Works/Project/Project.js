"use client";
import { userData } from "@/lib/BuilderApi";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    userData()
      .then((res) => setProjects(res.user.projects))
      .catch((err) => console.log(err));
  }, []);
  console.log(projects);
  return (
    <div className=" my-14 ">
      <h4 className="text-6xl font-bold text-center py-8">My Project</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
