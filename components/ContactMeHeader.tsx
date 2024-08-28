"use client";

import useStore from "@/store/store";

export default function ContactMeHeader() {
  const language = useStore((state) => state.language);
  return (
    <>
      <p className="text-primary md:text-lg uppercase tracking-widest">
        {language === "en" ? "Contact with me" : "Contacta conmigo"}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        {language === "en" ? "Contact me" : "Contacto"}
      </h2>
    </>
  );
}
