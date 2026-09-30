import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const impactPoints = [
  {
    number: "01",
    title: "Creating Awareness",
    text: "Helping people become more aware of issues that affect their health, surroundings and communities, while encouraging informed and responsible participation.",
    icon: "mdi:lightbulb-on-outline",
  },
  {
    number: "02",
    title: "Bringing People Together",
    text: "Creating opportunities for individuals, volunteers and communities to come together around a shared purpose and contribute through collective effort.",
    icon: "mdi:account-group-outline",
  },
  {
    number: "03",
    title: "Encouraging Service",
    text: "Promoting a culture where people are willing to give their time, effort and support for the benefit of others and the wider community.",
    icon: "mdi:hand-heart-outline",
  },
  {
    number: "04",
    title: "Building Responsibility",
    text: "Encouraging individuals to take greater responsibility towards society, public well-being and the environment around them.",
    icon: "mdi:shield-check-outline",
  },
];

const Impact = () => {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#123d2b] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-white/[0.07]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/[0.05]" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-green-300" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
                Our Impact
              </p>
            </div>

            <h2 className="mt-7 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.88] tracking-[-0.055em]">
              Small acts.
              <span className="block italic text-green-300">
                Meaningful
              </span>
              change.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              Meaningful change is not always measured by numbers. It can also
              be seen in awareness created, people brought together and the
              willingness to contribute to something beyond ourselves.
            </p>
          </motion.div>

          {/* RIGHT INTRO */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end"
          >
            <div className="max-w-3xl border-l border-white/15 pl-7 sm:pl-10">
              <p className="font-serif text-2xl leading-[1.35] text-white sm:text-3xl lg:text-4xl">
                The work of a community grows when
                <span className="italic text-green-300">
                  {" "}people care, participate and take responsibility.
                </span>
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
                Bidyabharati Public Charitable Trust seeks to encourage this
                spirit through its community initiatives and social work,
                creating opportunities for people to come together and make a
                positive contribution.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            IMPACT PRINCIPLES
        ===================================================== */}
        <div className="mt-20 border-t border-white/15 lg:mt-28">
          {impactPoints.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-6 border-b border-white/15 py-8 transition duration-500 hover:bg-white/[0.025] sm:py-9 lg:grid-cols-[100px_320px_1fr] lg:items-center lg:px-6"
            >
              {/* Number */}
              <div>
                <span className="font-serif text-3xl text-white/20 transition duration-300 group-hover:text-green-300">
                  {item.number}
                </span>

                <span className="mt-2 block h-px w-7 bg-white/15 transition-all duration-500 group-hover:w-10 group-hover:bg-green-300" />
              </div>

              {/* Title */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-green-300 transition-all duration-300 group-hover:bg-green-300 group-hover:text-[#123d2b]">
                  <Icon
                    icon={item.icon}
                    className="text-xl"
                  />
                </div>

                <h3 className="font-serif text-2xl text-white transition duration-300 group-hover:text-green-300 sm:text-3xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="max-w-2xl text-sm leading-7 text-white/45 transition duration-300 group-hover:text-white/65 sm:text-[15px]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            CORE BELIEF
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mt-20 border-t border-white/15 pt-16 lg:mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">

            {/* Main statement */}
            <div>
              <div className="flex items-center gap-3">
                <Icon
                  icon="mdi:heart-outline"
                  className="text-xl text-green-300"
                />

                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-300">
                  What matters to us
                </p>
              </div>

              <h3 className="mt-6 max-w-5xl font-serif text-3xl leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Change becomes possible when
                <span className="italic text-green-300">
                  {" "}people choose to participate.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
                Every initiative creates an opportunity for people to connect,
                contribute and support one another. Our aim is to encourage
                this spirit of participation across the communities we serve.
              </p>
            </div>

            {/* Belief */}
            <div className="border-l border-white/15 pl-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                Our belief
              </p>

              <p className="mt-4 font-serif text-xl leading-relaxed text-white/80">
                A stronger community begins with people who are willing to
                care.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-300" />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">
                  Care · Service · Participation
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/35">
            Together, we can contribute to a more aware and caring community.
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 font-serif text-lg font-bold text-white transition duration-300 hover:text-green-300"
          >
            Connect with the Trust

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:translate-x-1 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-[#123d2b]">
              <Icon icon="mdi:arrow-right" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;