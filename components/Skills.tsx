export default function Skills() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-12 md:mt-44  flex flex-col justify-center items-center">
      <p className="text-primary md:text-lg uppercase tracking-widest">
        My Skills
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-color-navbar-item mt-2 md:mt-8">
        Skills
      </h2>
      <div className="w-full max-w-5xl mt-8 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 [&>div>h2]:text-3xl [&>div>h2]:text-color-text [&>div>h2]:font-bold [&>div>h2]:text-center [&>div>h2]:tracking-wide">
        <div className="w-full flex flex-col md:gap-12 gap-6">
          <h2>Development Skills</h2>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
              <div className="flex items-center gap-2">
                <span>ReactJs</span>
              </div>
              <span>90%</span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
              <div
                className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
                style={{ width: `90%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
              <div className="flex items-center gap-2">
                <span>TailwindCSS</span>
              </div>
              <span>70%</span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
              <div
                className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
                style={{ width: `70%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
              <div className="flex items-center gap-2">
                <span>NextJS</span>
              </div>
              <span>50%</span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
              <div
                className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
                style={{ width: `50%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
              <div className="flex items-center gap-2">
                <span>TypeScript</span>
              </div>
              <span>60%</span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
              <div
                className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
                style={{ width: `60%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 md:gap-12">
          <h2>Languages</h2>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
              <div className="flex items-center gap-2">
                <span>Spanish (Native)</span>
              </div>
              <span>100%</span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
              <div
                className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
                style={{ width: `100%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
              <div className="flex items-center gap-2">
                <span>English (A1)</span>
              </div>
              <span>25%</span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
              <div
                className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
                style={{ width: `25%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
