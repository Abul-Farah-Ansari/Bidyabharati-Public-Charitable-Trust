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
  const [direction, setDirection] = useState(1);

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
    const timer = setInterval(() => {
      setDirection(1);

      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative mt-[72px] h-[calc(100vh-72px)] min-h-[620px] overflow-hidden bg-black sm:min-h-[650px]"
    >
      {/* =====================================================
          IMAGE CAROUSEL
      ====================================================== */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.title}
          custom={direction}
          initial={{
            opacity: 0,
            x: direction > 0 ? "6%" : "-6%",
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            x: "0%",
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: direction > 0 ? "-4%" : "4%",
            scale: 1.02,
          }}
          transition={{
            opacity: {
              duration: 0.9,
              ease: "easeInOut",
            },
            x: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            },
            scale: {
              duration: 1.6,
              ease: "easeOut",
            },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* =====================================================
          IMAGE OVERLAYS
      ====================================================== */}

      {/* General dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left content protection */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/5" />

      {/* Bottom cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Subtle green atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(74,222,128,0.10),transparent_35%)]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-end px-5 pb-20 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            {/* EYEBROW */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mb-5 flex items-center gap-3 sm:mb-6"
            >
              <span className="h-px w-10 bg-green-400 sm:w-12" />

              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/75 sm:text-[10px]">
                {slide.eyebrow}
              </span>
            </motion.div>

            {/* TITLE */}
            <h1 className="font-serif text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.06em] text-white">
              <motion.span
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="block"
              >
                {slide.title}
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="block pl-[5vw] italic text-green-300"
              >
                {slide.highlight}
              </motion.span>
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:mt-8 sm:text-base lg:text-lg"
            >
              {slide.text}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-7 flex flex-wrap gap-3 sm:mt-8"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-gray-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:text-white sm:px-6 sm:py-4"
              >
                Discover our work

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-950 text-white transition duration-300 group-hover:bg-white group-hover:text-green-700">
                  <Icon icon="mdi:arrow-right" />
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-950 sm:px-6 sm:py-4"
              >
                Talk to us
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          CAROUSEL CONTROLS
      ====================================================== */}
      <div className="absolute bottom-6 right-5 z-30 flex items-center gap-2 sm:bottom-8 sm:right-8 sm:gap-3 lg:right-12">
        {/* PREVIOUS */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-gray-950 sm:h-11 sm:w-11"
        >
          <Icon icon="mdi:arrow-left" />
        </button>

        {/* INDICATORS */}
        <div className="flex h-10 items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 backdrop-blur-md sm:h-11 sm:px-4">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className="flex h-5 items-center justify-center"
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-7 bg-green-400 sm:w-8"
                    : "w-1.5 bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>

        {/* NEXT */}
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-gray-950 sm:h-11 sm:w-11"
        >
          <Icon icon="mdi:arrow-right" />
        </button>
      </div>

      {/* =====================================================
          SLIDE COUNTER
      ====================================================== */}
      <div className="absolute bottom-7 left-5 z-20 hidden items-center gap-3 text-white/50 sm:flex lg:left-12">
        <span className="font-serif text-lg text-white">
          0{current + 1}
        </span>

        <span className="h-px w-8 bg-white/20" />

        <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
          0{slides.length}
        </span>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-white lg:flex"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </a>
    </section>
  );
};

export default Hero;