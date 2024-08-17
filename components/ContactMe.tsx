import Image from "next/image";
export default function ContactMe() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center mb-24">
      <p className="text-primary md:text-lg uppercase tracking-widest">
        Contact with me
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        Contact
      </h2>
      <div className="w-full max-w-5xl mt-8 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 [&>div]:shadow-item-banner [&>div]:rounded-lg">
        <div className="p-8 flex flex-col">
          <Image
            src="/img/logo.png"
            alt="logo-contact"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-color-navbar-item font-bold text-3xl text-left tracking-tighter">
            Santiago Suarez
          </h2>
          <p className="text-color-text text-lg mb-8">Web Developer</p>
          <p className="text-color-text text-lg mb-8">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <p>Phone: 321 703 7469</p>
          <p>Email: santiago8628@gmail.com</p>
          <div>
            <h3>Find With Me</h3>
          </div>
        </div>
        <div className="col-span-2">Formulario</div>
      </div>
    </section>
  );
}
