import Image from "next/image";
import Link from "next/link";

import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav id="nav-bar" className="flex justify-between uppercase items-center">
      <h1 className=" text-2xl font-bold text-primary flex items-center gap-2">
        <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        Santiago S.
      </h1>
      <div className="lg:hidden text-4xl text-primary">
        <HiBars3BottomRight />
      </div>

      <div className="hidden lg:flex items-center gap-12 ">
        <ul className="flex text-color-navbar-item text-sm gap-12 [&>li]:cursor-pointer z-10">
          <li className="hover:text-primary transition-all">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="hover:text-primary transition-all cursor-pointer">
            <Link href="#projects">Projects</Link>
          </li>

          <li className="hover:text-primary transition-all">
            <Link href="#training">Training</Link>
          </li>

          <li className="hover:text-primary transition-all">
            <Link href="#skills">Skills</Link>
          </li>

          <li className="hover:text-primary transition-all">
            <Link href="#about">About me</Link>
          </li>
        </ul>
        <Link href="#contact" className=" text-primary px-3 ">
          Contact me
        </Link>
      </div>
    </nav>
  );
}
