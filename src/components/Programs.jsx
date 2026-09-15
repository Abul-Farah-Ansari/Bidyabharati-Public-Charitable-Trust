import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const programs = [
  {
    number: "01",
    title: "Education",
    description:
      "Initiatives that encourage access to learning, educational participation and environments where people can develop their knowledge and confidence.",
    icon: "mdi:school-outline",
  },
  {
    number: "02",
    title: "Community Development",
    description:
      "Activities that encourage participation, cooperation and stronger connections between people within their communities.",
    icon: "mdi:account-group-outline",
  },
  {
    number: "03",
    title: "Awareness",
    description:
      "Efforts that help people understand issues, discover opportunities and participate more actively in matters affecting their communities.",
    icon: "mdi:lightbulb-outline",
  },
  {
    number: "04",
    title: "Youth & Opportunity",
    description:
      "Creating pathways for young people to learn, explore possibilities and build the confidence needed to move towards their goals.",
    icon: "mdi:human-male-board-poll",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="bg-white px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
            What We Work On
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-gray-950 sm:text-6xl lg:text-8xl">
            From learning
            <span className="italic text-green-700">
              {" "}to opportunity.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            Our focus areas reflect the different ways education and
            community participation can contribute to individual and
            social development.
          </p>
        </motion.div>

        {/* Program list */}
        <div className="mt-20 border-t border-gray-200">

          {programs.map((program, index) => (
            <motion.article
              key={program.number}
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
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-gray-200 py-9 transition duration-500 hover:bg-[#f6faf7] lg:grid-cols-[100px_280px_1fr_70px] lg:items-center lg:px-6"
            >
              <span className="font-serif text-4xl text-gray-300 transition group-hover:text-green-700">
                {program.number}
              </span>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Icon
                    icon={program.icon}
                    className="text-xl"
                  />
                </div>

                <h3 className="font-serif text-2xl text-gray-950 sm:text-3xl">
                  {program.title}
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-gray-500">
                {program.description}
              </p>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white">
                <Icon icon="mdi:arrow-top-right" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex gap-4"
        >
          <Icon
            icon="mdi:information-outline"
            className="mt-0.5 shrink-0 text-xl text-green-700"
          />

          <p className="max-w-2xl text-xs leading-6 text-gray-400">
            Program descriptions should be updated with the Trust's
            actual activities, beneficiaries and current initiatives
            before publication.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;