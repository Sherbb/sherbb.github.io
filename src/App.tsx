import React, { useState } from "react";
import ProjectListItem from "./components/projectsItem";
import { ProjectData, ProjectDatabase } from "./ProjectsDatabase";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

import TempImage from "./images/gfHoz1.png";

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData>(
    ProjectDatabase[0]
  );

  const [descriptionAnimation, setDescriptionAnimation] = useState(false);

  const setProject = (projectTitle: string) => {
    for (let i = 0; i < ProjectDatabase.length; i++) {
      if (ProjectDatabase[i].title === projectTitle) {
        setSelectedProject(ProjectDatabase[i]);
        setDescriptionAnimation(true);
        return;
      }
    }
  };

  const MainPage = () => {
    return <div></div>
  }

  return (
    <div className="absolute h-full w-full bg-black p-4 flex flex-row gap-8 overflow-clip animate-fadeIn">
      {/* Color blobs */}
      <div className="absolute bg-[#448FFF] w-[64px] h-[800px] right-[64px] rotate-[330deg] blur-[256px]" />
      <div className="absolute bg-offwhite w-[600px] h-[64px] left-0 bottom-[64px] rotate-[-30deg] blur-[256px]" />
      <div className="absolute bg-offwhite w-[1200px] h-[48px] left-0 top-[64px] rotate-[20deg] blur-[256px]" />

      <div className="w-[512px] flex flex-col gap-4">
        <div className="rounded-[32px] bg-offwhite/[0.03] p-8 border border-offwhite/[0.05]">
          <p className="font-light text-4xl">Alan Sherba</p>
          <div className="h-4" />
          <p className="font-light text-base">
            Gameplay <span className="font-black">Programmer</span>
          </p>
          <p className="font-light text-base">
            UX, Feel, Action, Game <span className="font-black">Designer</span>
          </p>
          <p className="font-light text-base">
            Unity <span className="font-black">Engineer</span>
          </p>
          <p className="font-light text-base">
            VFX, Tech <span className="font-black">Artist</span>
          </p>
        </div>

        {/* Media Gallery */}
        <div className="relative select-none min-h-0 bg-offwhite/[0.03] flex-grow rounded-[32px] pr-4">
          {/* Inside border without messing with box */}
          <div className="absolute top-0 left-0 right-0 bottom-0 border border-offwhite/[0.05] rounded-[32px]" />
          <div className="relative bg-offwhite/[0.03] w-full h-full rounded-[32px] pr-4">
            {/* Inside border without messing with box */}
            <div className="absolute top-0 left-0 right-0 bottom-0 border border-offwhite/[0.05] rounded-[32px]" />
            <img
              className="object-cover box-border w-full h-full rounded-[32px] border border-offwhite/[0.05]"
              src={TempImage}
            ></img>
            {/* Inside border without messing with box. This ones positioned well so we use it as the IMG container div*/}
            <div className="absolute flex justify-end top-0 left-0 right-[16px] bottom-0 border border-offwhite/[0.05] rounded-[32px] p-4">
              {/* Gallery Button */}
              <button className="flex shadow-xl h-min flex-row gap-4 bg-black/50 backdrop-blur-xl pl-8 pr-8 pt-4 pb-4 rounded-[25px] hover:bg-offwhite hover:text-black">
                <p>Gallery</p>
                <FullscreenIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-[2px] bg-[#30302B4D]" />

      {/* List section */}

      <div className="flex flex-col w-[512px] pt-8 pb-8">
        <p className="font-light text-4xl relative select-none">
          Projects
          <div className="absolute left-[-40px] top-0 bottom-0 m-auto h-[3px] rounded w-4 bg-offwhite"></div>
        </p>
        <div className="h-4" />

        {/* Projects list */}
        {ProjectDatabase.map((project) => (
          <ProjectListItem
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            year={project.year}
            selected={project.title === selectedProject.title}
            onClick={() => {
              setProject(project.title);
            }}
          />
        ))}

        <div className="flex-grow" />
        {/* Project Description */}
        <div
          className={
            "flex flex-col gap-4 " +
            (descriptionAnimation ? "animate-descriptionSlideIn" : "")
          }
          onAnimationEnd={() => setDescriptionAnimation(false)}
        >
          <p className="font-light text-4xl relative">
            {selectedProject.title}
            <div className="absolute left-[-40px] top-0 bottom-0 m-auto h-[3px] rounded w-4 bg-offwhite"></div>
          </p>
          <p>{selectedProject.description}</p>
          {selectedProject.link && selectedProject.linkText && (
            <a
              className="underline text-[#71BBFF]"
              target="_blank"
              href={selectedProject.link}
            >
              {selectedProject.linkText}
            </a>
          )}
        </div>
      </div>

      <div className="h-full w-[2px] bg-[#30302B4D]" />

      {/* Contact section */}

      <div className="grow grid place-items-end">
        <div className="text-right">
          <p className="font-bold right-0 text-4xl">Contact</p>
          <p className="font-light text-base">alansherba@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
