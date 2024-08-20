import Image from "next/image";

import { LuGithub } from "react-icons/lu";
import { HiLink } from "react-icons/hi2";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        My main projects
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-8 md:mt-12 lg:mt-24">
        <div className="w-full p-6 rounded-xl shadow-item-banner">
          <Image
            src="/img/portfolio.jpeg"
            alt="portfolio-project"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-primary uppercase text-sm">Personal Project</p>
            <div className="flex gap-2">
              <LuGithub className="text-white text-xl" />
              <HiLink className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-color-text font-bold text-2xl  mt-6">
            My Portfolio
          </h2>
        </div>
        <div className="w-full p-6 rounded-xl shadow-item-banner">
          <Image
            src="/img/ecuot.jpeg"
            alt="ecuot-project"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-primary uppercase text-sm">Development</p>
            <div className="flex gap-2">
              <LuGithub className="text-white text-xl" />
              <HiLink className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-color-text font-bold text-2xl  mt-6">
            ECUOT - Information Repository
          </h2>
        </div>
        <div className="w-full p-6 rounded-xl shadow-item-banner">
          <Image
            src="/img/smartgrow.jpeg"
            alt="smartgrow-project"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-primary uppercase text-sm">Development</p>
            <div className="flex gap-2">
              <LuGithub className="text-white text-xl" />
              <HiLink className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-color-text font-bold text-2xl  mt-6">
            Smartgrow - IoT Project
          </h2>
        </div>
        <div className="w-full p-6 rounded-xl shadow-item-banner">
          <Image
            src="/img/ecommerce.jpeg"
            alt="ecommerce-project"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-primary uppercase text-sm">Personal Project</p>
            <div className="flex gap-2">
              <LuGithub className="text-white text-xl" />
              <HiLink className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-color-text font-bold text-2xl  mt-6">
            Shopi - Ecommerce
          </h2>
        </div>

        <div className="w-full p-6 rounded-xl shadow-item-banner">
          <Image
            src="/img/todos.jpeg"
            alt="todos-project"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-primary uppercase text-sm">Personal Project</p>
            <div className="flex gap-2">
              <LuGithub className="text-white text-xl" />
              <HiLink className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-color-text font-bold text-2xl  mt-6">
            ToDo List
          </h2>
        </div>
        <div className="w-full p-6 rounded-xl shadow-item-banner">
          <Image
            src="/img/alura.jpeg"
            alt="alura-project"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="flex justify-between items-center mt-6">
            <p className="text-primary uppercase text-sm">Personal Project</p>
            <div className="flex gap-2">
              <LuGithub className="text-white text-xl" />
              <HiLink className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-color-text font-bold text-2xl  mt-6">
            Alura Week
          </h2>
        </div>
      </div>
    </section>
  );
}
