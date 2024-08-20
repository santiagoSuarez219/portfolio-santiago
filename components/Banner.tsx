import Image from "next/image";
import Link from "next/link";

import { RiTailwindCssFill, RiArticleLine, RiNextjsFill } from "react-icons/ri";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaReact } from "react-icons/fa";

export default function Banner() {
  return (
    <section
      id="banner"
      className="w-full max-w-7xl mx-auto mt-16 flex lg:gap-24 flex-col-reverse lg:flex-row"
    >
      <div className="w-full md:w-[700px] flex  gap-4 text-color-navbar-item flex-col mt-10 md:mt-16">
        <p className="uppercase text-lg: md:text-xl tracking-widest text-color-text">
          Welcome
        </p>
        <div className="text-[2rem] md:text-5xl lg:text-6xl font-bold leading-snug">
          <h1>
            {"Hi, I'm "} <span className="text-primary">Santiago Suarez</span>
          </h1>
          <h2>a Web Developer</h2>
        </div>
        <p className="text-color-text md:text-lg">
          <span className="text-primary">
            1 year of experience developing web applications
          </span>{" "}
          using React, NextJS, TailwindCSS, MongoDB, PostgresSQL, Node.js, and
          Express.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-11 lg:mt-36 gap-12 lg:gap-0">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 justify-between ">
              <h3 className="uppercase text-color-text ">Find with me</h3>
              <div className="flex gap-4 [&>div]:text-color-navbar-item [&>div]:p-6 [&>div]:text-xl [&>div]:rounded-lg [&>div]:shadow-item-banner">
                <div>
                  <Link
                    href="https://www.linkedin.com/in/santiagosuarez219/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuLinkedin />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://github.com/santiagoSuarez219"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuGithub />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="uppercase text-color-text">Download CV</h3>
              <div className="flex gap-4  [&>div]:text-color-navbar-item [&>div]:p-6 [&>div]:text-xl [&>div]:rounded-lg [&>div]:shadow-item-banner">
                <div>
                  <Link
                    href="/pdf/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiArticleLine />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <h3 className="uppercase text-color-text">Best skills on</h3>
            <div className="flex gap-4 [&>div]:p-6 [&>div]:text-xl [&>div]:shadow-item-banner [&>div]:rounded-lg">
              <div className="text-blue-300">
                <FaReact />
              </div>
              <div className="text-blue-300">
                <RiTailwindCssFill />
              </div>
              <div className="text-white">
                <RiNextjsFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 lg:mt-0 w-full lg:w-[508px] h-[260px] small:h-[310px] md:h-[470px] self-end relative shadow-item-banner rounded-lg">
        <Image
          src="/img/me.png"
          alt="me"
          width={500}
          height={500}
          className="absolute bottom-0"
        />
      </div>
    </section>
  );
}
