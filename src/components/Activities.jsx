import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const activities = [
  {
    number: "01",
    title: "Child Education",
    shortDescription:
      "Supporting child education and creating opportunities that encourage learning, confidence and personal development.",
    icon: "mdi:book-open-page-variant-outline",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=90",

    category: "Education",

    heading:
      "Creating opportunities for children to learn, grow and move forward.",

    description: [
      "Bidyabharati Public Charitable Trust believes that education can play an important role in shaping a child's confidence, understanding and future opportunities. Our work around child education is focused on encouraging learning and creating an environment where children can develop with greater confidence.",

      "Through educational initiatives and community participation, we aim to support children and encourage the importance of learning in everyday life. We believe that education is not limited to books or classrooms — it can also help children develop curiosity, communication, awareness and a stronger sense of possibility.",

      "Our efforts are guided by the understanding that every child deserves encouragement and an opportunity to learn. By bringing people together around education, we hope to contribute in practical ways towards the development of children and the communities around them.",
    ],

    highlights: [
      "Encouraging child education",
      "Supporting learning opportunities",
      "Promoting confidence and development",
      "Creating awareness around education",
    ],
  },

  {
    number: "02",
    title: "Blood Donation Camps",
    shortDescription:
      "Organising blood donation camps and encouraging people to come forward and contribute towards helping those in need.",
    icon: "mdi:water-plus-outline",

    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1400&q=90",

    category: "Community Health",

    heading:
      "A simple act of giving can become meaningful support for someone in need.",

    description: [
      "Blood donation is a powerful example of how an individual's contribution can directly support another person. Bidyabharati Public Charitable Trust has been involved in organising blood donation camps to encourage people to participate in this important community service.",

      "Our blood donation initiatives aim to create greater awareness about the importance of voluntary blood donation and encourage eligible individuals to come forward and contribute. These camps also provide an opportunity for people from different backgrounds to come together for a shared social purpose.",

      "We believe that community service becomes stronger when people participate willingly and understand the value of helping others. Through blood donation camps, the Trust seeks to promote this spirit of responsibility, compassion and collective action.",
    ],

    highlights: [
      "Blood donation camps",
      "Encouraging voluntary participation",
      "Creating awareness around donation",
      "Promoting community responsibility",
    ],
  },

  {
    number: "03",
    title: "Health & Well-being",
    shortDescription:
      "Working around health awareness and community initiatives that encourage people to pay greater attention to health and well-being.",
    icon: "mdi:heart-pulse",

    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90",

    category: "Health",

    heading:
      "Building awareness around health, well-being and the importance of care.",

    description: [
      "Good health is an important part of a healthy and active community. Bidyabharati Public Charitable Trust works to encourage greater awareness around health and well-being through community-focused initiatives.",

      "Our approach is centred around awareness, participation and the understanding that people should have access to information that can help them make informed decisions about their well-being. Community health initiatives can also encourage conversations around prevention, care and responsible health practices.",

      "Through our activities, we aim to create opportunities for people to come together, share awareness and support one another. Our health-related work forms part of our wider commitment to contributing to the well-being of the communities we serve.",
    ],

    highlights: [
      "Health awareness",
      "Community participation",
      "Promoting well-being",
      "Encouraging responsible health practices",
    ],
  },

  {
    number: "04",
    title: "Environment",
    shortDescription:
      "Promoting environmental awareness and encouraging responsible participation towards a cleaner and healthier environment.",
    icon: "mdi:leaf-outline",

    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=90",

    category: "Environment",

    heading:
      "A healthier community also depends on the environment around us.",

    description: [
      "Environmental responsibility is closely connected with the quality of life within a community. Bidyabharati Public Charitable Trust works to promote awareness about the importance of protecting and caring for the environment.",

      "Our environmental initiatives encourage people to think about the relationship between everyday actions and the surroundings in which we live. We believe awareness is an important first step towards developing more responsible habits and encouraging collective participation.",

      "Through community-focused environmental activities, the Trust seeks to encourage a greater sense of responsibility towards nature and the spaces shared by everyone. Our aim is to make environmental awareness a part of everyday community participation.",
    ],

    highlights: [
      "Environmental awareness",
      "Community participation",
      "Responsible practices",
      "Care for shared surroundings",
    ],
  },

  {
    number: "05",
    title: "Social Awareness",
    shortDescription:
      "Creating awareness around important social issues and encouraging people to participate in positive change within their communities.",
    icon: "mdi:account-voice-outline",

    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=90",

    category: "Social Development",

    heading:
      "Awareness can inspire people to understand, participate and take action.",

    description: [
      "Social awareness is an important part of building stronger communities. Bidyabharati Public Charitable Trust works to encourage people to become more aware of issues that affect individuals, families and society as a whole.",

      "Our awareness activities are intended to create conversations, encourage participation and help people understand the importance of collective responsibility. We believe that meaningful social development begins when people are willing to learn, listen and take part.",

      "Through awareness initiatives and community engagement, the Trust seeks to encourage positive participation and a stronger sense of responsibility towards society. Our work in this area complements our efforts in education, health, blood donation and environmental awareness.",
    ],

    highlights: [
      "Social awareness initiatives",
      "Community engagement",
      "Encouraging participation",
      "Promoting collective responsibility",
    ],
  },
];

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  /* Lock background scrolling while modal is open */
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedActivity]);

  /* Close modal with Escape */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedActivity(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          ACTIVITIES SECTION
      ===================================================== */}
      <section
        id="activities"
        className="relative overflow-hidden bg-[#f8faf9] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute -left-32 top-40 hidden text-green-900/[0.025] lg:block">
          <Icon
            icon="mdi:leaf-outline"
            className="text-[400px]"
          />
        </div>

        <div className="relative mx-auto max-w-[1500px]">

          {/* =================================================
              HEADER
          ================================================= */}
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-16"
          >
            {/* Label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green-700" />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                  What We Do
                </p>
              </div>

              <p className="mt-6 max-w-[220px] text-sm leading-7 text-gray-400">
                Our work brings together education, health, community
                participation and social awareness.
              </p>
            </div>

            {/* Heading */}
            <div>
              <h2 className="max-w-6xl font-serif text-[clamp(3.2rem,7vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.055em] text-gray-950">
                Our

                <span className="block pl-[6vw] italic text-green-800">
                  activities.
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
                  delay: 0.2,
                }}
                className="mt-8 h-[2px] bg-green-700"
              />

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-gray-500 sm:text-base">
                From blood donation camps and child education to health,
                environmental and social awareness initiatives, the Trust
                works through practical efforts that encourage people to
                participate and contribute to their communities.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              ACTIVITY LIST
          ================================================= */}
          <div className="mt-20 border-t border-gray-200 lg:mt-28">
            {activities.map((activity, index) => (
              <motion.article
                key={activity.number}
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
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-gray-200 py-9 transition-all duration-500 hover:bg-white sm:py-10 lg:px-7"
              >
                <div className="grid gap-7 lg:grid-cols-[100px_320px_1fr_64px] lg:items-center">

                  {/* Number */}
                  <div>
                    <span className="font-serif text-4xl tracking-tight text-gray-300 transition-all duration-500 group-hover:text-green-700">
                      {activity.number}
                    </span>

                    <span className="mt-2 block h-px w-7 bg-gray-200 transition-all duration-500 group-hover:w-10 group-hover:bg-green-700" />
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                      <Icon
                        icon={activity.icon}
                        className="text-xl"
                      />
                    </div>

                    <h3 className="font-serif text-2xl tracking-tight text-gray-950 transition duration-300 group-hover:text-green-800 sm:text-3xl">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Description + Button */}
                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-gray-500 transition duration-300 group-hover:text-gray-600 sm:text-[15px]">
                      {activity.shortDescription}
                    </p>

                    {/* KNOW MORE BUTTON */}
                    <button
                      type="button"
                      onClick={() => setSelectedActivity(activity)}
                      className="group/button mt-5 inline-flex items-center gap-2 text-xs font-bold text-green-800 transition duration-300 hover:text-green-600"
                    >
                      <span className="border-b border-green-700/30 pb-1 transition duration-300 group-hover/button:border-green-700">
                        Click here to know more
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-green-200 transition duration-300 group-hover/button:translate-x-1 group-hover/button:border-green-700 group-hover/button:bg-green-700 group-hover/button:text-white">
                        <Icon
                          icon="mdi:arrow-top-right"
                          className="text-xs"
                        />
                      </span>
                    </button>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex">
                    <button
                      type="button"
                      onClick={() => setSelectedActivity(activity)}
                      aria-label={`Learn more about ${activity.title}`}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-400 group-hover:translate-x-1 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white"
                    >
                      <Icon
                        icon="mdi:arrow-top-right"
                        className="text-lg"
                      />
                    </button>
                  </div>

                  {/* Mobile button area */}
                  <div className="flex lg:hidden">
                    <button
                      type="button"
                      onClick={() => setSelectedActivity(activity)}
                      className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-xs font-bold text-gray-600 transition duration-300 hover:border-green-700 hover:bg-green-700 hover:text-white"
                    >
                      Know more

                      <Icon icon="mdi:arrow-top-right" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =================================================
              APPROACH
          ================================================= */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-20 grid gap-8 border-b border-gray-200 pb-16 lg:grid-cols-[260px_1fr] lg:gap-16"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Our approach
              </p>
            </div>

            <div>
              <p className="max-w-4xl font-serif text-3xl leading-[1.25] text-gray-950 sm:text-4xl lg:text-5xl">
                Different initiatives.
                <span className="italic text-green-800">
                  {" "}One shared purpose.
                </span>
              </p>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-gray-500">
                Whether it is helping create an opportunity for learning,
                bringing people together for a blood donation camp, promoting
                health awareness or encouraging environmental and social
                responsibility, our activities are centred around service and
                participation.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-700">
                Be part of the effort
              </p>

              <p className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-gray-900 sm:text-4xl">
                Meaningful change grows through
                <span className="italic text-green-700">
                  {" "}collective action.
                </span>
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
                Every volunteer, participant and supporter can play a part in
                helping community initiatives move forward.
              </p>
            </div>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#123d2b] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg"
            >
              Talk to us

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-[#123d2b] transition duration-300 group-hover:translate-x-1">
                <Icon icon="mdi:arrow-top-right" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ACTIVITY DETAIL MODAL
      ===================================================== */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6 lg:p-10"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-[1150px] flex-col overflow-hidden rounded-[1.5rem] bg-[#f8faf9] shadow-[0_30px_100px_rgba(0,0,0,0.25)] lg:flex-row"
            >
              {/* =============================================
                  CLOSE BUTTON
              ============================================= */}
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                aria-label="Close activity details"
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-md transition duration-300 hover:bg-[#123d2b] hover:text-white sm:right-5 sm:top-5"
              >
                <Icon
                  icon="mdi:close"
                  className="text-xl"
                />
              </button>

              {/* =============================================
                  LEFT IMAGE
              ============================================= */}
              <div className="relative h-[280px] shrink-0 overflow-hidden lg:h-auto lg:w-[48%]">
                <motion.img
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  className="h-full w-full object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Image information */}
                <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-green-300 backdrop-blur-md">
                      <Icon
                        icon={selectedActivity.icon}
                        className="text-xl"
                      />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/70">
                      {selectedActivity.category}
                    </span>
                  </div>

                  <p className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                    {selectedActivity.title}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-px w-8 bg-green-300" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                      Bidyabharati Public Charitable Trust
                    </span>
                  </div>
                </div>
              </div>

              {/* =============================================
                  RIGHT CONTENT
              ============================================= */}
              <div className="overflow-y-auto lg:w-[52%]">
                <div className="p-7 sm:p-9 lg:p-12">

                  {/* Number + label */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-5xl text-gray-200">
                      {selectedActivity.number}
                    </span>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-green-700">
                      Our Work
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="mt-8 max-w-xl font-serif text-3xl leading-[1.1] tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                    {selectedActivity.heading}
                  </h2>

                  {/* Divider */}
                  <div className="mt-7 h-px w-16 bg-green-700" />

                  {/* Long description */}
                  <div className="mt-8 space-y-5">
                    {selectedActivity.description.map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="text-[15px] leading-8 text-gray-500"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="mt-10 border-t border-gray-200 pt-8">
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-gray-400">
                      What this work involves
                    </p>

                    <div className="mt-5 space-y-3">
                      {selectedActivity.highlights.map(
                        (highlight, index) => (
                          <motion.div
                            key={highlight}
                            initial={{
                              opacity: 0,
                              x: 10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.06,
                            }}
                            className="flex items-center gap-3"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                              <Icon
                                icon="mdi:check"
                                className="text-sm"
                              />
                            </span>

                            <span className="text-sm text-gray-600">
                              {highlight}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  {/* =========================================
                      MODAL CTA
                  ========================================= */}
                  <div className="mt-10 border-t border-gray-200 pt-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-serif text-lg text-gray-900">
                          Want to know more?
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Get in touch with the Trust.
                        </p>
                      </div>

                      <a
                        href="#contact"
                        onClick={() => setSelectedActivity(null)}
                        className="group flex w-fit items-center gap-3 rounded-full bg-[#123d2b] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-green-700"
                      >
                        Contact us

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400 text-[#123d2b] transition group-hover:translate-x-1">
                          <Icon icon="mdi:arrow-top-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Activities;