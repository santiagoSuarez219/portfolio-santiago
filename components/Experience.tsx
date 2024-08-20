export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center"
    >
      <p className="text-primary md:text-lg uppercase tracking-widest">
        1 year of experience
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        Experience
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
                  Web Developer
                </h3>
                <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
                  Colegio Mayor de Antioquia
                </h4>
                <time className="p-0 m-0 text-white/80">
                  February 2024 - July 2024
                </time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
              <p>
                I developed a web application to manage and visualize
                information related to a research project on the study of
                conflict in the city of Medellin. This application consists of a
                landing page for the project and different functionalities that
                allow the user to manage the information, as well as an
                authentication and roles module to improve the security of the
                system and the information hosted. For this project I used
                React, TailwindCSS, MongoDB, Node and Express.
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
                  Web Developer
                </h3>
                <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
                  Instituto Tecnólogico Metropolitano
                </h4>
                <time className="p-0 m-0 text-white/80">
                  February 2023 - December 2023
                </time>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
              <p>
                Develop a web and IoT application to monitor and manage a
                hydroponic growing system. This application allows you to
                visualize real-time data, create graphs of the behavior of the
                variables and interact directly with the system hardware. Use
                technologies such as MongoDB for creating time series, MQTT for
                sending data, NodeJS and Express to create the backend, ReactJS
                and TailwindCSS to create an interactive user interface.
              </p>
            </div>
          </div>
        </ul>
      </li>
    </section>
  );
}
