import Link from "next/link";
import { HiArrowSmallUp } from "react-icons/hi2";

export default function UpArrow() {
  return (
    <div className="lg:block fixed bottom-3 right-3 text-color-title shadow-item-banner p-2 rounded-full text-2xl cursor-pointer">
      <Link href="#nav-bar">
        <HiArrowSmallUp />
      </Link>
    </div>
  );
}
