import {
  Navbar,
  Banner,
  Experience,
  Projects,
  Training,
  Skills,
  AboutMe,
  ContactMe,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Banner />
      <Experience />
      <Projects />
      <Training />
      <Skills />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
