import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const About = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Child Education",
      text: "Supporting learning opportunities and encouraging children to build confidence through education.",
      icon: "mdi:book-open-page-variant-outline",
    },
    {
      number: "02",
      title: "Blood Donation",
      text: "Organising and supporting blood donation initiatives to encourage people to come forward and help others.",
      icon: "mdi:water-plus-outline",
    },
    {
      number: "03",
      title: "Health",
      text: "Promoting health awareness and community participation around important health-related needs.",
      icon: "mdi:heart-pulse",
    },
    {
      number: "04",
      title: "Environment",
      text: "Encouraging awareness and responsible participation towards a cleaner and healthier environment.",
      icon: "mdi:leaf-outline",
    },
    {
      number: "05",
      title: "Social Awareness",
      text: "Creating awareness around issues that affect communities and encouraging people to participate in positive change.",
      icon: "mdi:account-voice-outline",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8faf9] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 hidden text-green-900/[0.025] lg:block">
        <Icon icon="mdi:leaf-outline" className="text-[420px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-16"
        >
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-green-700" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                About the Trust
              </span>
            </div>

            <p className="mt-6 max-w-[210px] text-sm leading-7 text-gray-400">
              Working with people and communities through education, health,
              awareness and social initiatives.
            </p>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-6xl font-serif text-[clamp(3rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-gray-950">
              Change begins

              <span className="block pl-[6vw] italic text-green-800">
                when people
              </span>

              <span className="block">
                come together.
              </span>
            </h2>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "80px",
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-8 h-[2px] bg-green-700"
            />
          </div>
        </motion.div>

        {/* =====================================================
            INTRODUCTION
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 grid gap-8 border-y border-gray-200 py-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:py-12"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Who we are
            </p>

            <h3 className="mt-3 max-w-md font-serif text-3xl leading-tight text-gray-950 sm:text-4xl">
              A trust built around service, participation and community.
            </h3>
          </div>

          <div className="max-w-3xl">
            <p className="font-serif text-xl leading-relaxed text-gray-900 sm:text-2xl">
              Bidyabharati Public Charitable Trust is a community-focused
              organisation working to create meaningful opportunities and
              contribute to the well-being of people.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-gray-500">
              Led by{" "}
              <span className="font-semibold text-gray-800">
                Biswajit Das
              </span>
              , the Trust has been involved in initiatives covering child
              education, blood donation, health, environmental awareness and
              social awareness.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-gray-500">
              Our work is based on a simple belief: when individuals,
              volunteers and communities come together with a shared sense of
              responsibility, even small efforts can become meaningful
              contributions to society.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            IMAGE + LEADERSHIP
        ===================================================== */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <motion.img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90"
                alt="Students learning together"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[480px] w-full object-cover sm:h-[560px] lg:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">
                    Our journey
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white">
                    Serving through action.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-green-800">
                  <Icon
                    icon="mdi:arrow-down-right"
                    className="text-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership + mission */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            {/* Leadership */}
            <div className="flex items-center gap-5 border-b border-gray-200 pb-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                <Icon
                  icon="mdi:account-outline"
                  className="text-2xl"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Head of the Organisation
                </p>

                <h3 className="mt-1 font-serif text-2xl font-bold text-gray-950 sm:text-3xl">
                  Biswajit Das
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Leading community-focused initiatives and social action.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="py-10">
              <div className="flex items-center gap-3">
                <Icon
                  icon="mdi:sprout-outline"
                  className="text-xl text-green-700"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-700">
                  What drives us
                </span>
              </div>

              <p className="mt-5 font-serif text-3xl leading-[1.25] text-gray-950 sm:text-4xl">
                To turn concern into
                <span className="italic text-green-800">
                  {" "}action,
                </span>
                {" "}and action into something that benefits the community.
              </p>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-gray-500">
                From a blood donation camp to supporting a child's education,
                from health awareness to environmental responsibility, our
                initiatives are shaped around practical participation and
                community needs.
              </p>
            </div>

            {/* Quote */}
            <div className="border-t border-gray-200 pt-7">
              <div className="flex gap-4">
                <Icon
                  icon="mdi:format-quote-open"
                  className="shrink-0 text-3xl text-green-700"
                />

                <div>
                  <p className="font-serif text-lg leading-relaxed text-gray-800">
                    Together, small acts of service can create meaningful
                    change in a community.
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-px w-7 bg-green-700" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-400">
                      Our belief
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FOCUS AREAS
        ===================================================== */}
        <div className="mt-28 lg:mt-36">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-700">
                Our areas of work
              </p>

              <h3 className="mt-3 font-serif text-4xl tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Where we focus our efforts.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Different initiatives, one common purpose — encouraging people
              to participate and contribute to a stronger community.
            </p>
          </motion.div>

          {/* Focus grid */}
          <div className="grid border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="group border-b border-gray-200 px-5 py-8 transition duration-500 hover:bg-white sm:border-r lg:min-h-[260px] lg:px-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-gray-300">
                    {item.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700 transition duration-300 group-hover:bg-green-700 group-hover:text-white">
                    <Icon
                      icon={item.icon}
                      className="text-base"
                    />
                  </span>
                </div>

                <h4 className="mt-12 font-serif text-xl text-gray-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24 border-t border-gray-200 pt-8 lg:mt-32"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                A shared responsibility
              </p>

              <p className="mt-3 max-w-3xl font-serif text-2xl leading-relaxed text-gray-900 sm:text-3xl">
                Every contribution matters — a helping hand, a donated unit
                of blood, an opportunity to learn, or simply the willingness
                to stand with someone who needs support.
              </p>
            </div>

            <a
              href="#activities"
              className="group flex w-fit items-center gap-3 font-serif text-lg font-bold text-gray-950"
            >
              <span>Explore our activities</span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white">
                <Icon icon="mdi:arrow-right" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;