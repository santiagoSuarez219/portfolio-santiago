"use client";
import Image from "next/image";
import Link from "next/link";

import useStore from "@/store/store";
import { data } from "../data/data";

import { HiBars3BottomRight } from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";

export default function Navbar() {
  const openMenu = useStore((state) => state.openMenu);
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  const changeLanguage = () => {
    if (language === "en") {
      setLanguage("es");
    }
    if (language === "es") {
      setLanguage("en");
    }
  };

  return (
    <nav
      id="nav-bar"
      className="flex justify-between uppercase items-center z-10"
    >
      <h1 className=" text-2xl font-bold text-primary flex items-center gap-2">
        <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        Santiago S.
      </h1>
      <button
        className="flex items-center text-primary gap-2 font-bold uppercase"
        onClick={changeLanguage}
      >
        <IoLanguage className="size-5" />
        {language}
      </button>
      <div
        className="lg:hidden text-4xl text-primary"
        onClick={() => {
          openMenu();
        }}
      >
        <HiBars3BottomRight />
      </div>

      <div className="hidden lg:flex items-center gap-12 ">
        <ul className="flex text-color-navbar-item text-sm gap-12 [&>li]:cursor-pointer z-10">
          {language === "en"
            ? data.english.navbarItems.map((item, index) => (
                <li key={index} className="hover:text-primary transition-all">
                  <Link href={`#${data.navbarRoutes[index]}`}>{item}</Link>
                </li>
              ))
            : data.spanish.navbarItems.map((item, index) => (
                <li key={index} className="hover:text-primary transition-all">
                  <Link href={`#${data.navbarRoutes[index]}`}>{item}</Link>
                </li>
              ))}
        </ul>
        <Link href="#contact" className=" text-primary px-3 ">
          {language === "en" ? "Contact me" : "Contacto"}
        </Link>
        <button
          className="flex items-center text-primary gap-2 font-bold uppercase"
          onClick={changeLanguage}
        >
          <IoLanguage className="size-5" />
          {language}
        </button>
      </div>
    </nav>
  );
}
