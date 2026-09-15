import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const impactPoints = [
  {
    title: "Access",
    text: "Creating or supporting opportunities that make learning and participation more accessible.",
    icon: "mdi:door-open",
  },
  {
    title: "Capability",
    text: "Helping people build knowledge, confidence and practical capacity for the next stage of their journey.",
    icon: "mdi:trending-up",
  },
  {
    title: "Participation",
    text: "Encouraging people and communities to become active participants rather than passive recipients.",
    icon: "mdi:account-voice",
  },
];

const Impact = () => {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#123d2b] px-5 py-28 text-white sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[-200px] top-[-200px] h-[650px] w-[650px] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-[1500px]">

        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

          {/* Left */}
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
              duration: 0.8,
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
              Understanding Impact
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Impact is
              <span className="block italic text-green-300">
                a process.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
              Meaningful social work cannot always be reduced to a single
              number. It can also be seen in what people learn, how they
              participate and what opportunities become possible.
            </p>
          </motion.div>

          {/* Right */}
          <div className="border-t border-white/15">

            {impactPoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 50,
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
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[80px_180px_1fr] sm:items-center"
              >
                <span className="font-serif text-3xl text-white/20">
                  0{index + 1}
                </span>

                <div className="flex items-center gap-3">
                  <Icon
                    icon={item.icon}
                    className="text-2xl text-green-300"
                  />

                  <h3 className="font-serif text-2xl">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-white/50">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verification / future metrics */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
                Measuring responsibly
              </p>

              <h3 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Verified results should tell the story.
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
                When verified beneficiary numbers, program outcomes,
                annual reports or other measurable results are available,
                they can be presented here with clear sources and context.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-400 text-[#123d2b]">
              <Icon
                icon="mdi:chart-line"
                className="text-2xl"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Impact;