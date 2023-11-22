import React, { useEffect, useState } from "react";
import ProjectListItem from "./components/projectsItem";
import {
  ProjectCategories,
  ProjectData,
  ProjectDatabase,
} from "./ProjectsDatabase";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initProject = () => {
    for (let i = 0; i < ProjectDatabase.length; i++) {
      console.log(searchParams.get("project"));
      if (searchParams.get("project") === ProjectDatabase[i].title) {
        return ProjectDatabase[i];
      }
    }
    return ProjectDatabase[0];
  };

  // Ummm.... basically storying the page stat in URL param. This lets you BACK our of gallery.
  // And lets you share a link to a project and gallery view
  useEffect(() => {
    if (searchParams.get("project") !== selectedProject.title) {
      //close gallery on back.
      setShowGallery(false);
    }
    setShowGallery(searchParams.get("view") === "gallery");
    for (let i = 0; i < ProjectDatabase.length; i++) {
      if (searchParams.get("project") === ProjectDatabase[i].title) {
        setSelectedProject(ProjectDatabase[i]);
        return;
      }
    }
    setSelectedProject(ProjectDatabase[0]);
  }, [searchParams]);

  const [selectedProject, setSelectedProject] = useState<ProjectData>(
    initProject()
  );

  const [newProjectAnimation, setNewProjectAnimation] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const setProject = (projectTitle: string) => {
    if (projectTitle === selectedProject.title) {
      return;
    }
    for (let i = 0; i < ProjectDatabase.length; i++) {
      if (ProjectDatabase[i].title === projectTitle) {
        //setSelectedProject(ProjectDatabase[i]);
        setNewProjectAnimation(true);
        setSearchParams({ project: ProjectDatabase[i].title });
        return;
      }
    }
  };

  const MainPage = () => {
    return (
      <>
        <div className="w-[512px] flex flex-col gap-4 animate-fadeInFast">
          <div className="rounded-[32px] bg-offwhite/[0.03] p-8 border border-offwhite/[0.05]">
            <p className="font-light text-4xl">Alan Sherba</p>
            <div className="h-4" />
            <p className="font-light text-base">
              Gameplay <span className="font-black">Programmer</span>
            </p>
            <p className="font-light text-base">
              UX, Feel, Action, Game{" "}
              <span className="font-black">Designer</span>
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
            {selectedProject.media.length > 0 && (
              <>
                <div className="relative bg-offwhite/[0.03] w-full h-full rounded-[32px] pr-4">
                  {/* Inside border without messing with box */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 border border-offwhite/[0.05] rounded-[32px]" />
                  <img
                    className={
                      "object-cover box-border w-full h-full rounded-[32px] border border-offwhite/[0.05]" +
                      (newProjectAnimation ? " animate-galleryHeroSlideIn" : "")
                    }
                    src={
                      process.env.PUBLIC_URL +
                      "/images/" +
                      selectedProject.media[0]
                    }
                    key={selectedProject.media[0]}
                  />
                  {/* Inside border without messing with box. This ones positioned well so we use it as the IMG container div*/}
                  <div className="absolute flex justify-end top-0 left-0 right-[16px] bottom-0 border border-offwhite/[0.05] rounded-[32px] p-4">
                    {/* Gallery Button */}
                    {selectedProject.media.length > 1 && (
                      <button
                        className="flex shadow-xl h-min flex-row gap-4 bg-black/50 backdrop-blur-xl pl-8 pr-8 pt-4 pb-4 rounded-[25px] hover:bg-offwhite hover:text-black"
                        onClick={() =>
                          setSearchParams({
                            project: selectedProject.title,
                            view: "gallery",
                          })
                        }
                      >
                        <p>Gallery</p>
                        <FullscreenIcon />
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="h-full w-[2px] bg-[#30302B4D] animate-fadeInFast" />

        {/* List section */}

        <div className="flex flex-col w-[512px] pt-8 pb-8 animate-fadeInFast">
          <text className="font-light text-4xl relative select-none">
            Projects
            <div className="absolute left-[-40px] top-0 bottom-0 m-auto h-[3px] rounded w-4 bg-offwhite"></div>
          </text>
          <div className="h-4" />

          {/* Projects list */}
          {ProjectCategories.map((category) => (
            <>
              <text className="font-light opacity-30 relative select-none">
                {category}
              </text>
              {ProjectDatabase.map((project) => {
                return project.category == category ? (
                  <ProjectListItem
                    key={project.title + category}
                    title={project.title}
                    subtitle={project.subtitle}
                    year={project.year}
                    selected={project.title === selectedProject.title}
                    onClick={() => {
                      setProject(project.title);
                    }}
                  />
                ) : (
                  <></>
                );
              })}
              <div className="h-3" />
            </>
          ))}

          <div className="flex-grow" />
          {/* Project Description */}
          <div
            className={
              "flex flex-col gap-4 " +
              (newProjectAnimation ? "animate-descriptionSlideIn" : "")
            }
            onAnimationEnd={() => setNewProjectAnimation(false)}
          >
            <text className="font-light text-4xl relative">
              {selectedProject.title}
              <div className="absolute left-[-40px] top-0 bottom-0 m-auto h-[3px] rounded w-4 bg-offwhite"></div>
            </text>
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
      </>
    );
  };

  const Gallery = () => {
    return (
      <div className="relative flex w-[1090px] h-full animate-fadeInFast">
        <div className="flex flex-col gap-4 overflow-auto pr-8">
          {selectedProject.media.slice(1).map((mediaString, index) => (
            <img
              key={mediaString}
              className="object-fit box-border w-full h-fit rounded-[32px] border border-offwhite/[0.05]"
              src={process.env.PUBLIC_URL + "/images/" + mediaString}
            />
          ))}
        </div>
        <button
          className="absolute drop-shadow-closeButton right-[-200px] top-0 flex shadow-xl h-min flex-row gap-4 bg-black/50 backdrop-blur-xl pl-8 pr-8 pt-4 pb-4 rounded-[25px] hover:bg-offwhite hover:text-black"
          onClick={() =>
            setSearchParams({
              project: selectedProject.title,
              view: "list",
            })
          }
        >
          <p>Close</p>
          <FullscreenExitIcon />
        </button>
      </div>
    );
  };

  const BodySection = () => {
    if (showGallery) {
      return Gallery();
    }
    return MainPage();
  };

  return (
    <div className="absolute h-full w-full bg-black p-4 flex flex-row gap-8 overflow-clip animate-fadeIn">
      {/* Color blobs */}
      <div className="absolute bg-[#448FFF] w-[64px] h-[800px] right-[64px] rotate-[330deg] blur-[256px]" />
      <div className="absolute bg-offwhite w-[600px] h-[64px] left-0 bottom-[64px] rotate-[-30deg] blur-[256px]" />
      <div className="absolute bg-offwhite w-[1200px] h-[48px] left-0 top-[64px] rotate-[20deg] blur-[256px]" />

      {BodySection()}

      <div className="h-full w-[2px] bg-[#30302B4D]" />

      {/* Contact section */}
      <div className="grow grid place-items-end">
        <div className="text-right pr-8 pb-8">
          <p className="font-bold right-0 text-4xl">Contact</p>
          <a
            className="font-light text-base select-text hover:underline text-[#71BBFF]"
            href="mailto:alansherba@gmail.com"
          >
            alansherba@gmail.com
          </a>
          <br />
          <a
            className="font-light text-base hover:underline text-[#71BBFF]"
            href="https://twitter.com/AlanSherba"
          >
            Twitter
          </a>
          <br />
          <a
            className="font-light text-base hover:underline text-[#71BBFF]"
            href="https://www.linkedin.com/in/alan-sherba-365784141/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
