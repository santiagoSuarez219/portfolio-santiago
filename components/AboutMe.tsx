import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import AboutMeHeader from "./AboutMeHeader";
import AboutMeContent from "./AboutMeContent";

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
      <AboutMeHeader />
      <div className="w-full max-w-5xl mt-8 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="text-color-text text-lg">
          <AboutMeContent />
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
