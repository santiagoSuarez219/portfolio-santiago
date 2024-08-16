import Image from "next/image";
import Link from "next/link";

import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="flex justify-between uppercase items-center">
      <h1 className=" text-2xl font-bold text-primary flex items-center gap-2">
        <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        Santiago S.
      </h1>
      <div className="lg:hidden text-4xl text-primary">
        <HiBars3BottomRight />
      </div>

      <div className="hidden lg:flex items-center gap-12 ">
        <ul className="flex text-color-navbar-item text-sm gap-12 [&>li]:cursor-pointer">
          <li>Home</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Training</li>
          <li>Skills</li>
          <li>About me</li>
        </ul>
        <Link href={"/"} className=" text-primary px-3 ">
          Contact me
        </Link>
      </div>
    </nav>
  );
}
