"use client";

import useStore from "@/store/store";

export default function AboutMeContent() {
  const language = useStore((state) => state.language);
  return (
    <div>
      <p>
        {language === "en"
          ? `My name is Santiago Suárez, I live in Medellín, I am ${
              new Date().getFullYear() - 1999
            } years old and I am currently studying Electronic Engineering at the Instituto Tecnológico Metropolitano. During my undergraduate studies I discovered my passion for programming, application development and teaching, which has led me to a continuous and constant learning and to share what I learn with others. This dedication has allowed me to participate in research projects, where I have contributed creating attractive and dynamic user interfaces for various applications and I have taught courses on web development and Internet of Things.`
          : `Mi nombre es Santiago Suárez, vivo en Medellín, tengo ${
              new Date().getFullYear() - 1999
            } años y actualmente estoy estudiando Ingeniería Electrónica en el Instituto Tecnológico Metropolitano. Durante mis estudios de pregrado descubrí mi pasión por la programación, el desarrollo de aplicaciones y la enseñanza, lo que me ha llevado a un aprendizaje continuo y constante y a compartir lo que aprendo con los demás. Esta dedicación me ha permitido participar en proyectos de investigación, donde he contribuido creando interfaces de usuario atractivas y dinámicas para diversas aplicaciones y he impartido cursos sobre desarrollo web e Internet de las cosas.`}
      </p>
      <p>
        <br />
        {language === "en"
          ? `Personally, my life is my family, I love my home, I'm married, my wife's name is Karol, I've been living with her for ${
              new Date().getFullYear() - 2020
            }   years, we have 2 beautiful dogs named Kiara and Zeus and 3 beautiful cats named Molly, Manchas and Salem. In my free time I like to practice sports like soccer, swimming and cycling, go to the gym, go for walks with my wife and my dogs, watch movies, go to the cinema, go to visit towns`
          : `Personalmente, mi vida es mi familia, amo mi hogar, estoy casado, mi esposa se llama Karol, llevo viviendo con ella ${
              new Date().getFullYear() - 2020
            } años, tenemos 2 hermosos perros llamados Kiara y Zeus y 3 hermosos gatos llamados Molly, Manchas y Salem. En mi tiempo libre me gusta practicar deportes como el fútbol, la natación y el ciclismo, ir al gimnasio, salir a caminar con mi esposa y mis perros, ver películas, ir al cine, ir a visitar pueblos`}
      </p>
    </div>
  );
}

{
}
