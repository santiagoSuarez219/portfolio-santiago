import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center my-12 md:my-24">
      <figure>
        <Image src="/img/logo.png" alt="logo" width={70} height={70} />
      </figure>
      <h2 className="text-primary uppercase font-bold text-lg md:text-xl tracking-tighter">
        Santiago S.
      </h2>
      <p className="text-color-text ">{`${new Date().getFullYear()} Santiago Suarez`}</p>
    </footer>
  );
}
