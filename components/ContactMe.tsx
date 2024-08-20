import Image from "next/image";

import { LuLinkedin, LuGithub } from "react-icons/lu";
import { HiArrowSmallRight } from "react-icons/hi2";
import { RiArticleLine } from "react-icons/ri";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        Contact with me
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        Contact
      </h2>
      <div className="w-full mt-8 lg:mt-24 flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-12 justify-between [&>div]:rounded-lg">
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
          <p className="text-color-text md:text-lg mb-8">Web Developer</p>
          <p className="text-color-text md:text-lg mb-8">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>

          <div className="[&>p]:text-color-text md:[&>p]:text-lg [&>p>span]:text-color-navbar-item">
            <p className="">
              Phone: <span>321 703 7469</span>
            </p>
            <p>
              Email: <span>santiago8628@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-12 gap-12 lg:gap-0">
            <div className="w-full flex gap-4 justify-between">
              <div className="flex flex-col gap-4 ">
                <h3 className="uppercase text-color-text text-sm ">
                  Find with me
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
                  Download CV
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
        <div className="w-full lg:w-[42rem] ">
          <form
            action=""
            className="h-full flex flex-col lg:flex-row lg:flex-wrap md:gap-x-8 [&>div>input]:text-color-text [&>div>input]:p-3 lg:[&>div>input]:p-5"
          >
            <div className="mb-5 flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-medium uppercase text-color-text"
              >
                Your Name
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
              <label
                htmlFor="name"
                className="font-medium uppercase text-color-text"
              >
                Phone Number
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
              <label
                htmlFor="name"
                className="font-medium uppercase text-color-text"
              >
                Email
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
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full lg:w-[42rem] mt-2  rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-5 flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-medium uppercase text-color-text"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className="w-full lg:w-[42rem] h-40 mt-2 p-3 md:p-5 rounded-lg shadow-item-banner bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Subject"
              ></textarea>
            </div>
            <button
              type="submit"
              className="shadow-item-banner w-full lg:w-[42rem] flex justify-center items-center gap-2 py-4 uppercase text-primary tracking-tighter md:text-lg rounded-lg"
            >
              Send Message
              <HiArrowSmallRight className="size-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
