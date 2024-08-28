import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactMeHeader from "./ContactMeHeader";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <ContactMeHeader />
      <div className="w-full mt-8 lg:mt-24 flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-12 justify-between [&>div]:rounded-lg">
        <ContactCard />

        <div className="w-full lg:w-[42rem] ">
          <form
            action=""
            className="h-full flex flex-col lg:flex-row lg:flex-wrap md:gap-x-8 [&>div>input]:text-color-text [&>div>input]:p-3 lg:[&>div>input]:p-5"
          >
            <ContactForm />
          </form>
        </div>
      </div>
    </section>
  );
}
