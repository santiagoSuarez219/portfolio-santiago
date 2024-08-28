import Image from "next/image";

import { LuGithub } from "react-icons/lu";
import { HiLink } from "react-icons/hi2";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  type: string;
}

export default function ProjectItem({
  title,
  description,
  image,
  type,
}: ProjectItemProps) {
  return (
    <div className="w-full p-6 rounded-xl shadow-item-banner">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="rounded-lg shadow-xl"
      />
      <div className="flex justify-between items-center mt-6">
        <p className="text-primary uppercase text-sm">{type}</p>
        <div className="flex gap-2">
          <LuGithub className="text-white text-xl" />
          <HiLink className="text-white text-xl" />
        </div>
      </div>
      <h2 className="text-color-text font-bold text-2xl  mt-6">{title}</h2>
    </div>
  );
}
