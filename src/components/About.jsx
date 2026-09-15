import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f8faf9] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-[300px_1fr]"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
              About the Trust
            </p>

            <div className="mt-5 h-px w-20 bg-gray-300" />
          </div>

          <div>
            <h2 className="max-w-6xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-gray-950 sm:text-6xl lg:text-8xl">
              Education is more than a classroom.
            </h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12">

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
            }}
            className="relative lg:col-span-6"
          >
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90"
                alt="Students learning"
                className="h-[550px] w-full object-cover transition duration-1000 hover:scale-105 sm:h-[650px]"
              />
            </div>

            <div className="absolute -bottom-6 right-6 hidden max-w-[260px] rounded-2xl bg-[#123d2b] p-6 text-white shadow-xl sm:block">
              <Icon
                icon="mdi:format-quote-open"
                className="text-3xl text-green-300"
              />

              <p className="mt-4 font-serif text-xl leading-snug">
                Learning should create possibility, not simply provide information.
              </p>
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
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
            }}
            className="flex flex-col justify-center lg:col-span-6 lg:pl-10"
          >
            <p className="font-serif text-2xl leading-relaxed text-gray-900 sm:text-3xl">
              Bidyabharati Public Charitable Trust works with an education
              and community-focused approach, seeking to create opportunities
              for learning, participation and personal development.
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-500">
              The Trust's work is rooted in the idea that education can
              strengthen individuals and communities. Rather than treating
              education as an isolated activity, we see learning, awareness
              and participation as connected parts of social development.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-500">
              Our initiatives can take different forms depending on the
              needs of the people and communities we work with. The common
              thread is a commitment to creating useful opportunities and
              encouraging people to take part in their own development.
            </p>

            {/* Information rows */}
            <div className="mt-12 border-t border-gray-200">
              <div className="flex items-center justify-between border-b border-gray-200 py-5">
                <span className="text-sm text-gray-400">
                  Approach
                </span>

                <span className="font-serif text-lg text-gray-900">
                  Education-led
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-5">
                <span className="text-sm text-gray-400">
                  Focus
                </span>

                <span className="font-serif text-lg text-gray-900">
                  People & community
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-5">
                <span className="text-sm text-gray-400">
                  Direction
                </span>

                <span className="font-serif text-lg text-gray-900">
                  Long-term opportunity
                </span>
              </div>
            </div>

            <a
              href="#programs"
              className="group mt-10 inline-flex w-fit items-center gap-3 font-serif text-lg font-bold text-gray-950"
            >
              See our focus areas

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-white transition group-hover:translate-x-1 group-hover:bg-green-700">
                <Icon icon="mdi:arrow-right" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;