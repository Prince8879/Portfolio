import { profile } from "@/data/profile";

const cardStyles = [
  {
    number: "01",
    title: "Data Analytics",
    color: "text-cyan-300",
    border: "hover:border-cyan-400/40",
    glow: "bg-cyan-400",
  },
  {
    number: "02",
    title: "Data Science",
    color: "text-blue-300",
    border: "hover:border-blue-400/40",
    glow: "bg-blue-400",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    color: "text-green-300",
    border: "hover:border-green-400/40",
    glow: "bg-green-400",
  },
  {
    number: "04",
    title: "Machine Learning",
    color: "text-purple-300",
    border: "hover:border-purple-400/40",
    glow: "bg-purple-400",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="neon-section bg-[#030a1c] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="section-kicker text-xs font-semibold uppercase">
              About Me
            </p>

            <h2 className="gradient-heading mt-5 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
              Learning by building.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-slate-200/75 sm:text-xl sm:leading-9">
              {profile.introduction}
            </p>

            <div className="mt-8 space-y-4">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-sm leading-7 text-slate-400/75 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {profile.focusAreas.map((area, index) => {
                const style = cardStyles[index];

                return (
                  <div
                    key={area}
                    className={`neon-card rounded-2xl p-6 ${style.border}`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-medium ${style.color} opacity-70`}
                        >
                          {style.number}
                        </span>

                        <span
                          className={`h-2 w-2 rounded-full ${style.glow} shadow-[0_0_12px_currentColor]`}
                        />
                      </div>

                      <h3 className="mt-8 text-base font-semibold text-white">
                        {area}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}