import Image from "next/image";
import { Grey_Qo } from "next/font/google";

const greyQo = Grey_Qo({
  weight: ["400"],
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        a little about me
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        About me
      </h2>
      <div className="w-full max-w-5xl mt-8 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="text-color-text text-lg">
          <div>
            <p>
              {`My name is Santiago Suárez, I live in Medellín, I am ${
                new Date().getFullYear() - 1999
              } years old and I am currently studying Electronic Engineering at the Instituto Tecnológico Metropolitano. During my undergraduate studies I discovered my passion for programming, application development and teaching, which has led me to a continuous and constant learning and to share what I learn with others. This dedication has allowed me to participate in research projects, where I have contributed creating attractive and dynamic user interfaces for various applications and I have taught courses on web development and Internet of Things.`}
            </p>
            <p>
              <br />
              {`Personally, my life is my family, I love my home, I'm married, my wife's name is Karol, I've been living with her for ${
                new Date().getFullYear() - 2020
              }   years, we have 2 beautiful dogs named Kiara and Zeus and 3 beautiful cats named Molly, Manchas and Salem. In my free time I like to practice sports like soccer, swimming and cycling, go to the gym, go for walks with my wife and my dogs, watch movies, go to the cinema, go to visit towns`}
            </p>
          </div>

          <div className={greyQo.className}>
            <p className="text-5xl text-white text-right rotate-2 mt-8">
              <span className="border-b-2 border-white">Santiago Suarez</span>
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/img/aboutme6.png"
            alt="about-me"
            width={1000}
            height={1000}
            className="rounded-lg w-full h-full object-cover rotate-2 shadow-item-banner"
          />
        </div>
      </div>
    </section>
  );
}
