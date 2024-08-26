import {
  Navbar,
  Banner,
  Experience,
  Projects,
  Training,
  Skills,
  AboutMe,
  ContactMe,
  UpArrow,
  Footer,
  BurguerMenu,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full relative pt-4 md:pt-8 px-4 md:px-16">
      <Navbar />
      <BurguerMenu />
      <Banner />
      <Experience />
      <Projects />
      <Training />
      <Skills />
      <AboutMe />
      <ContactMe />
      <UpArrow />
      <Footer />
    </main>
  );
}
