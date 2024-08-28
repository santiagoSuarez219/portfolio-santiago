"use client";
import useStore from "@/store/store";
import Image from "next/image";

import { LuLinkedin, LuGithub } from "react-icons/lu";
import { RiArticleLine } from "react-icons/ri";

export default function ContactCard() {
  const language = useStore((state) => state.language);
  return (
    <div className="p-6 lg:p-8 flex flex-col shadow-item-banner">
      <Image
        src="/img/logo.png"
        alt="logo-contact"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h2 className="text-color-navbar-item font-bold text-2xl md:text-3xl text-left tracking-tighter mt-4">
        Santiago Suarez
      </h2>
      <p className="text-color-text md:text-lg mb-8">
        {language === "en" ? "Web Developer" : "Desarrollador Web"}
      </p>
      <p className="text-color-text md:text-lg mb-8">
        {language === "en"
          ? "I am available for freelance work and open to new opportunities. Connect with me through the contact information below."
          : "Estoy disponible para trabajo freelance y abierto a nuevas oportunidades. Conéctate conmigo a través de la información de contacto a continuación."}
      </p>

      <div className="[&>p]:text-color-text md:[&>p]:text-lg [&>p>span]:text-color-navbar-item">
        <p className="">
          {language === "en"
            ? "Location: Medellín, Colombia"
            : "Ubicación: Medellín, Colombia"}
        </p>
        <p className="">
          {language === "en" ? "Phone: 321 703 7469" : "Teléfono: 321 703 7469"}
        </p>
        <p className="">
          {language === "en"
            ? "Email: santiago8628@gmail.com"
            : "Correo: santiago8628@gmail.com"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-12 gap-12 lg:gap-0">
        <div className="w-full flex gap-4 justify-between">
          <div className="flex flex-col gap-4 ">
            <h3 className="uppercase text-color-text text-sm ">
              {language === "en" ? "Find with me" : "Encuéntrame en"}
            </h3>
            <div className="flex gap-4 [&>div]:text-color-navbar-item [&>div]:p-4 [&>div]:text-xl [&>div]:rounded-lg [&>div]:shadow-item-banner">
              <div>
                <LuLinkedin />
              </div>
              <div>
                <LuGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="uppercase text-color-text text-sm">
              {language === "en" ? "Download CV" : "Descargar CV"}
            </h3>
            <div className="w-full justify-end flex gap-4 [&>div]:text-color-navbar-item [&>div]:p-4 [&>div]:text-xl [&>div]:rounded-lg [&>div]:shadow-item-banner">
              <div className="self-end">
                <RiArticleLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
