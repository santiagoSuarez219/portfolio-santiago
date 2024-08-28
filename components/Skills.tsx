"use client";

import SkillItem from "./SkillItem";
import useStore from "@/store/store";
import { data } from "../data/data";

export default function Skills() {
  const language = useStore((state) => state.language);
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        {language === "en" ? "My skills" : "Mis habilidades"}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        {language === "en" ? "Skills" : "Habilidades"}
      </h2>
      <div className="w-full max-w-5xl mt-8 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 [&>div>h2]:text-3xl [&>div>h2]:text-color-text [&>div>h2]:font-bold [&>div>h2]:text-center [&>div>h2]:tracking-wide">
        <div className="w-full flex flex-col md:gap-12 gap-6">
          <h2>
            {language === "en"
              ? "Development skills"
              : "Habilidades de desarrollo"}
          </h2>
          {data.english.skills.developmentSkills.map((skill, index) => (
            <SkillItem
              key={index}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <div className="w-full flex flex-col gap-6 md:gap-12">
          <h2>{language === "en" ? "Languages" : "Idiomas"}</h2>
          {language === "en"
            ? data.english.skills.languages.map((skill, index) => (
                <SkillItem
                  key={index}
                  title={skill.title}
                  percentage={skill.percentage}
                />
              ))
            : data.spanish.skills.languages.map((skill, index) => (
                <SkillItem
                  key={index}
                  title={skill.title}
                  percentage={skill.percentage}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
