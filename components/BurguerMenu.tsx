"use client";
import Image from "next/image";
import Link from "next/link";

import { HiXMark } from "react-icons/hi2";
import { LuLinkedin, LuGithub } from "react-icons/lu";

import useStore from "../store/store";
import { data } from "../data/data";

export default function BurguerMenu() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const closeMenu = useStore((state) => state.closeMenu);
  const language = useStore((state) => state.language);
  return (
    <div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-80 z-10"></div>
      )}
      <nav
        className={`fixed top-0 left-0 h-screen p-2 z-20 bg-background-color-dark w-3/4 max-w-[375px] flex flex-col transform transition-all duration-700 ${
          !isMenuOpen ? "-translate-x-full" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <figure>
            <Image src="/img/logo.png" alt="Logo" width={70} height={70} />
          </figure>
          <div
            className="p-3 bg-black/20 rounded-full"
            onClick={() => closeMenu()}
          >
            <HiXMark className="text-primary size-6" />
          </div>
        </div>
        <p className="text-color-text text-lg mt-7 font-light pb-7 border-b border-color-text">
          {language === "en" ? "Hi, I'm" : "Hola, soy"}{" "}
          <span className="text-primary">Santiago Suarez</span>,{" "}
          {language === "en" ? "a Web Developer" : "Desarrollador Web"}
        </p>
        <ul className="mt-8 uppercase text-base  text-color-navbar-item flex flex-col gap-8 tracking-wider">
          {language === "en"
            ? data.english.navbarItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${data.navbarRoutes[index]}`}
                    onClick={() => closeMenu()}
                  >
                    {item}
                  </Link>
                </li>
              ))
            : data.spanish.navbarItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${data.navbarRoutes[index]}`}
                    onClick={() => closeMenu()}
                  >
                    {item}
                  </Link>
                </li>
              ))}
        </ul>
        <div className="absolute bottom-14 pt-7 left-2 w-[calc(100%-16px)] border-t border-color-text">
          <h3 className="uppercase text-color-text mb-6 font-bold tracking-wider">
            {language === "en" ? "Find with me" : "Encuentrame en"}
          </h3>
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
      </nav>
    </div>
  );
}
