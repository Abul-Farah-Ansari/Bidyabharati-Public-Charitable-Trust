import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Education",
    title: "A place",
    highlight: "to begin.",
    text: "Education can give people the confidence, knowledge and opportunity to shape what comes next.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Learning",
    title: "Curiosity",
    highlight: "needs room.",
    text: "Learning grows when people have the space, encouragement and resources to explore their potential.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Opportunity",
    title: "Every learner",
    highlight: "has a story.",
    text: "Our work is guided by the belief that opportunity should help people move forward with confidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Community",
    title: "Progress is",
    highlight: "shared.",
    text: "Strong communities are built through participation, cooperation and a willingness to help one another.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [ setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previous = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-96px)] min-h-[650px] overflow-hidden bg-black lg:h-[calc(100vh-112px)]"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.title}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-end px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-5xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-green-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/80">
                {slide.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.06em] text-white">
              {slide.title}

              <span className="block pl-[5vw] italic text-green-300">
                {slide.highlight}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg">
              {slide.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-gray-950 transition hover:bg-green-400 hover:text-white"
              >
                Discover our work

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-950 text-white group-hover:bg-white group-hover:text-green-700">
                  <Icon icon="mdi:arrow-right" />
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-gray-950"
              >
                Talk to us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-5 z-30 flex items-center gap-3 sm:right-8 lg:right-12">
        <button
          onClick={previous}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"
        >
          <Icon icon="mdi:arrow-left" />
        </button>

        <div className="flex h-11 items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 backdrop-blur-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-8 bg-green-400"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"
        >
          <Icon icon="mdi:arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Hero;