"use client";
import useStore from "@/store/store";
import { HiArrowSmallRight } from "react-icons/hi2";

export default function ContactForm() {
  const language = useStore((state) => state.language);
  return (
    <>
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="name" className="font-medium uppercase text-color-text">
          {language === "en" ? "Name" : "Nombre"}
        </label>
        <input
          id="name"
          name="name"
          className="w-full lg:w-80 mt-2  rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="name" className="font-medium uppercase text-color-text">
          {language === "en" ? "Phone" : "Teléfono"}
        </label>
        <input
          id="name"
          name="name"
          className="w-full lg:w-80 mt-2 rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          placeholder="(+57) 321 703 7469"
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="name" className="font-medium uppercase text-color-text">
          {language === "en" ? "Email" : "Correo"}
        </label>
        <input
          id="name"
          name="name"
          className="w-full lg:w-[42rem] mt-2 rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          type="email"
          placeholder="johnDoe@email.com"
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="font-medium uppercase text-color-text"
        >
          {language === "en" ? "Subject" : "Asunto"}
        </label>
        <input
          id="subject"
          name="subject"
          className="w-full lg:w-[42rem] mt-2  rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          placeholder={language === "en" ? "Subject" : "Asunto"}
        />
      </div>
      <div className="mb-5 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-medium uppercase text-color-text"
        >
          {language === "en" ? "Message" : "Mensaje"}
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="w-full lg:w-[42rem] h-40 mt-2 p-3 md:p-5 rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder={language === "en" ? "Message" : "Mensaje"}
        ></textarea>
      </div>
      <button
        type="submit"
        className="shadow-item-banner w-full lg:w-[42rem] flex justify-center items-center gap-2 py-4 uppercase text-primary tracking-tighter md:text-lg rounded-lg"
      >
        {language === "en" ? "Send" : "Enviar"}
        <HiArrowSmallRight className="size-6" />
      </button>
    </>
  );
}
