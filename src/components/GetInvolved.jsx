import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const options = [
  {
    number: "01",
    title: "Volunteer",
    text: "Offer your time, skills or experience to support suitable Trust initiatives.",
    icon: "mdi:account-heart-outline",
  },
  {
    number: "02",
    title: "Collaborate",
    text: "Bring an educational idea, institutional connection or community initiative to the conversation.",
    icon: "mdi:handshake-outline",
  },
  {
    number: "03",
    title: "Support",
    text: "Explore appropriate ways to contribute resources towards the Trust's work.",
    icon: "mdi:hand-heart-outline",
  },
];

const GetInvolved = () => {
  return (
    <section
      id="get-involved"
      className="bg-white px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

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
          }}
          className="grid gap-10 lg:grid-cols-[1fr_0.7fr]"
        >
          <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-gray-950 sm:text-6xl lg:text-8xl">
            There is more than
            <span className="block italic text-green-700">
              one way to help.
            </span>
          </h2>

          <div className="flex items-end">
            <p className="max-w-lg text-base leading-8 text-gray-500">
              People contribute in different ways. Some give time, some
              bring expertise, while others help connect organizations and
              communities.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid border-y border-gray-200 lg:grid-cols-3">
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
              }}
              className="group border-b border-gray-200 p-8 transition duration-500 hover:bg-[#123d2b] hover:text-white lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-gray-300 group-hover:text-white/20">
                  {item.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700 transition group-hover:bg-green-400 group-hover:text-[#123d2b]">
                  <Icon icon={item.icon} className="text-xl" />
                </div>
              </div>

              <h3 className="mt-20 font-serif text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 min-h-[80px] text-sm leading-7 text-gray-500 group-hover:text-white/60">
                {item.text}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-bold">
                Start here

                <Icon
                  icon="mdi:arrow-top-right"
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
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
          }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-[#123d2b] p-8 sm:p-12 lg:p-16"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
                Start a conversation
              </p>

              <h3 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Have something useful to bring to the table?
              </h3>
            </div>

            <a
              href="#contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-gray-950 transition hover:bg-green-400 hover:text-white"
            >
              Contact the Trust

              <Icon
                icon="mdi:arrow-top-right"
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInvolved;