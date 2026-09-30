import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const options = [
  {
    number: "01",
    title: "Volunteer",
    text: "Offer your time, skills or experience to support suitable Trust initiatives and community activities.",
    icon: "mdi:account-heart-outline",
    label: "Give your time",
  },
  {
    number: "02",
    title: "Collaborate",
    text: "Bring an educational idea, institutional connection or community initiative and explore how we can work together.",
    icon: "mdi:handshake-outline",
    label: "Work together",
  },
  {
    number: "03",
    title: "Support",
    text: "Explore appropriate ways to contribute resources towards the Trust's initiatives and social work.",
    icon: "mdi:hand-heart-outline",
    label: "Contribute",
  },
];

const GetInvolved = () => {
  return (
    <section
      id="get-involved"
      className="relative overflow-hidden bg-white px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 hidden h-[500px] w-[500px] rounded-full border border-green-900/[0.04] lg:block" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[500px] w-[500px] rounded-full border border-green-900/[0.035] lg:block" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* ------------------------------------------------
            HEADER
        ------------------------------------------------ */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 lg:grid-cols-[1fr_0.65fr]"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-green-700" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                Get Involved
              </p>
            </div>

            <h2 className="mt-6 max-w-6xl font-serif text-[clamp(3rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.055em] text-gray-950">
              There is more than
              <span className="block pl-[5vw] italic text-green-700">
                one way to help.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-3">
            <div className="max-w-lg">
              <p className="font-serif text-xl leading-relaxed text-gray-900 sm:text-2xl">
                Meaningful participation can begin with something as simple as
                time, an idea, a connection or a helping hand.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                People contribute in different ways. Whether you want to
                volunteer, collaborate or support a suitable initiative, we
                welcome conversations that can create value for the community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------
            OPTIONS
        ------------------------------------------------ */}
        <div className="mt-20 border-y border-gray-200 lg:mt-24">
          {options.map((item, index) => (
            <motion.a
              key={item.number}
              href="#contact"
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden border-b border-gray-200 p-7 transition duration-500 last:border-b-0 hover:bg-[#123d2b] sm:p-9 lg:min-h-[310px] lg:border-b-0 lg:border-r lg:p-10 lg:last:border-r-0"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-400/0 blur-3xl transition duration-700 group-hover:bg-green-400/10" />

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <span className="font-serif text-4xl text-gray-300 transition duration-500 group-hover:text-white/20">
                  {item.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-green-400 group-hover:text-[#123d2b]">
                  <Icon
                    icon={item.icon}
                    className="text-xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-16">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-400 transition duration-500 group-hover:text-green-300">
                  {item.label}
                </p>

                <h3 className="mt-3 font-serif text-3xl text-gray-950 transition duration-500 group-hover:text-white sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 transition duration-500 group-hover:text-white/60">
                  {item.text}
                </p>
              </div>

              {/* Bottom action */}
              <div className="relative mt-8 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900 transition duration-500 group-hover:text-white">
                  Start a conversation
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-500 group-hover:translate-x-1 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-[#123d2b]">
                  <Icon
                    icon="mdi:arrow-top-right"
                    className="text-base"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ------------------------------------------------
            PARTICIPATION STRIP
        ------------------------------------------------ */}
        <motion.div
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
            duration: 0.8,
          }}
          className="mt-20 grid gap-8 border-b border-gray-200 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
              <Icon
                icon="mdi:account-group-outline"
                className="text-xl"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Community participation
              </p>

              <p className="mt-1 font-serif text-xl text-gray-950">
                Everyone can contribute differently.
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-sm leading-8 text-gray-500 lg:justify-self-end">
            The Trust believes that community work becomes stronger when
            people bring together their different abilities, experiences,
            resources and willingness to serve.
          </p>
        </motion.div>

        {/* ------------------------------------------------
            CTA
        ------------------------------------------------ */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#123d2b] p-8 sm:p-12 lg:mt-20 lg:p-16"
        >
          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/[0.08]" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.05]" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-green-300" />

                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-300">
                  Start a conversation
                </p>
              </div>

              <h3 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Have something useful
                <span className="block italic text-green-300">
                  to bring to the table?
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50">
                Tell us how you would like to participate, collaborate or
                support the Trust. We would be happy to understand your idea
                and explore the possibilities.
              </p>
            </div>

            <a
              href="#contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:text-white"
            >
              Contact the Trust

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-950 text-white transition duration-300 group-hover:bg-white group-hover:text-green-700">
                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-sm transition group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInvolved;