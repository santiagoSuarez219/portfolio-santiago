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
        <ul className="flex text-color-navbar-item text-sm gap-12 [&>li]:cursor-pointer">
          <Link href="#experience">
            <li className="hover:text-primary transition-all">Experience</li>
          </Link>
          <Link href="#projects">
            <li className="hover:text-primary transition-all">Projects</li>
          </Link>
          <Link href="#training">
            <li className="hover:text-primary transition-all">Training</li>
          </Link>
          <Link href="#skills">
            <li className="hover:text-primary transition-all">Skills</li>
          </Link>
          <Link href="#about">
            <li className="hover:text-primary transition-all">About me</li>
          </Link>
        </ul>
        <Link href="#contact" className=" text-primary px-3 ">
          Contact me
        </Link>
      </div>
    </nav>
  );
}
