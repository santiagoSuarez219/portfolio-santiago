export default function Training() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center">
      <p className="text-primary md:text-lg uppercase tracking-widest">
        My training
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        Training
      </h2>
      <li className="w-full max-w-5xl mt-8 lg:mt-24">
        <ul>
          <div className="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-2 md:gap-10 md:space-x-4">
            <div className="relative pb-4 lg:pb-12 ">
              <div className="sticky top-0 ">
                <span className="text-primary -left-[44px] absolute rounded-full text-6xl">
                  &bull;
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Electronic Engineer
                </h3>
                <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
                  Instituto Tecnólogico Metropolitano (ITM)
                </h4>
                <time className="p-0 m-0 text-white/80">
                  At the moment 10th Semester
                </time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
              <p>
                During my undergraduate studies I had the opportunity to train
                in different areas of science, I acquired skills in programming,
                IoT, electrical and electronic circuits, soft skills such as
                teamwork and assertive communication and I was also able to
                participate in different academic projects on technological
                innovation.
              </p>
            </div>
          </div>
        </ul>
        <ul>
          <div className=" relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-2 md:gap-10 md:space-x-4">
            <div className="relative pb-4 lg:pb-12 ">
              <div className="sticky top-0">
                <span className="text-primary -left-[44px] absolute rounded-full text-6xl">
                  &bull;
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  English Courses
                </h3>
                <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
                  Idiomas ITM - CIA Idiomas - @Medellin
                </h4>
                <time className="p-0 m-0 text-white/80">
                  At the moment A1 level
                </time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
              <p>
                I am studying English level A1, which has allowed me to handle
                basic everyday situations in English. I can introduce myself,
                ask simple questions, and understand common phrases related to
                personal information and immediate needs. I am also able to
                understand short messages and write simple texts, such as
                postcards or forms with my personal details. Although my level
                is basic, I continue to improve my skills to communicate in
                English more fluently and effectively.
              </p>
            </div>
          </div>
        </ul>
        <ul>
          <div className=" relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-2 md:gap-10 md:space-x-4">
            <div className="relative pb-4 lg:pb-12 ">
              <div className="sticky top-0">
                <span className="text-primary -left-[44px] absolute rounded-full text-6xl">
                  &bull;
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  Web development courses
                </h3>
                <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
                  Udemy - Platzi - Alura
                </h4>
                <time className="p-0 m-0 text-white/80">2022 - 2024</time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
              <p>
                At Udemy and Platzi I have had the opportunity to delve deeper
                into development with React, JavaScript, TypeScript, Tailwind
                and NextJS. During the year 2024, I was the beneficiary of a
                scholarship from Oracle and its ONE program that allowed me to
                take courses on the Alura platform, oriented to web development.
              </p>
            </div>
          </div>
        </ul>
        <ul>
          <div className=" relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-2 md:gap-10 md:space-x-4">
            <div className="relative pb-4 lg:pb-12 ">
              <div className="sticky top-0">
                <span className="text-primary -left-[44px] absolute rounded-full text-6xl">
                  &bull;
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  Electronic Automation Technology
                </h3>
                <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
                  Instituto Tecnólogico Metropolitano
                </h4>
                <time className="p-0 m-0 text-white/80">2023</time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
              <p>
                In this program I acquired skills in programming Arduino and
                ESP32 microcontrollers for Internet of Things (IoT) applications
                using sensors and actuators of all kinds and sending this data
                through Internet.
              </p>
            </div>
          </div>
        </ul>
      </li>
    </section>
  );
}
