"use client";
import ProjectItem from "./ProjectItem";
import useStore from "@/store/store";
import { data } from "../data/data";

export default function Projects() {
  const language = useStore((state) => state.language);
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        {language === "en" ? "My main projects" : "Mis proyectos principales"}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        {language === "en" ? "Projects" : "Proyectos"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-8 md:mt-12 lg:mt-24">
        {language === "en"
          ? data.english.projects.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                type={item.type}
              />
            ))
          : data.spanish.projects.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                type={item.type}
              />
            ))}
      </div>
    </section>
  );
}
