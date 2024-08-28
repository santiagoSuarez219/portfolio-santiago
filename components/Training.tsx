"use client";
import TrainingItem from "./TrainingItem";
import useStore from "@/store/store";
import { data } from "../data/data";

export default function Training() {
  const language = useStore((state) => state.language);
  return (
    <section
      id="training"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        {language === "en" ? "My training" : "Mi formación"}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        {language === "en" ? "Training" : "Formación"}
      </h2>
      <ul className="w-full max-w-5xl mt-8 lg:mt-24">
        {language === "en"
          ? data.english.training.map((training, index) => (
              <TrainingItem
                key={index}
                title={training.title}
                place={training.place}
                description={training.description}
                date={training.date}
              />
            ))
          : data.spanish.training.map((training, index) => (
              <TrainingItem
                key={index}
                title={training.title}
                place={training.place}
                description={training.description}
                date={training.date}
              />
            ))}
      </ul>
    </section>
  );
}
