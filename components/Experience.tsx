"use client";

import ExperienceItem from "./ExperienceItem";
import useStore from "@/store/store";
import { data } from "../data/data";

export default function Experience() {
  const language = useStore((state) => state.language);
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        {language === "en" ? "1 year of experience" : "1 año de experiencia"}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        {language === "en" ? "Experience" : "Experiencia"}
      </h2>
      <ul className="w-full max-w-5xl mt-8 lg:mt-24">
        {language === "en"
          ? data.english.experience.map((item, index) => (
              <ExperienceItem
                key={index}
                title={item.title}
                place={item.place}
                date={item.date}
                description={item.description}
              />
            ))
          : data.spanish.experience.map((item, index) => (
              <ExperienceItem
                key={index}
                title={item.title}
                place={item.place}
                date={item.date}
                description={item.description}
              />
            ))}
      </ul>
    </section>
  );
}
