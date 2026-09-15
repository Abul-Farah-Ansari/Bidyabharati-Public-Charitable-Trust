import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const galleryItems = [
  {
    title: "Learning Together",
    category: "Education",
    direction: "left",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=90",
    ],
    height: "tall",
  },
  {
    title: "A Place to Learn",
    category: "Learning",
    direction: "up",
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=90",
    ],
    height: "medium",
  },
  {
    title: "People in Action",
    category: "Community",
    direction: "right",
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=90",
    ],
    height: "short",
  },
  {
    title: "Growing Together",
    category: "Community",
    direction: "down",
    images: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=90",
    ],
    height: "medium",
  },
  {
    title: "Hope in Practice",
    category: "Opportunity",
    direction: "zoom",
    images: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1600&q=90",
    ],
    height: "tall",
  },
  {
    title: "Looking Ahead",
    category: "Future",
    direction: "left",
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1600&q=90",
    ],
    height: "short",
  },
];

const getAnimation = (direction) => {
  if (direction === "left") {
    return {
      initial: { opacity: 0, x: 70, scale: 1.05 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -70 },
    };
  }

  if (direction === "right") {
    return {
      initial: { opacity: 0, x: -70, scale: 1.05 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 70 },
    };
  }

  if (direction === "up") {
    return {
      initial: { opacity: 0, y: 70, scale: 1.05 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -70 },
    };
  }

  if (direction === "down") {
    return {
      initial: { opacity: 0, y: -70, scale: 1.05 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 70 },
    };
  }

  return {
    initial: { opacity: 0, scale: 1.12 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.97 },
  };
};

const GalleryCard = ({ item, index }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 4300 + index * 250);

    return () => clearInterval(timer);
  }, [item.images.length, index]);

  const animation = getAnimation(item.direction);

  const heights = {
    tall: "h-[620px] sm:h-[700px]",
    medium: "h-[440px] sm:h-[500px]",
    short: "h-[340px] sm:h-[390px]",
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-[1.75rem] bg-gray-900 ${heights[item.height]}`}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={current}
          src={item.images[current]}
          alt={item.title}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
        {item.category}
      </div>

      <div className="absolute right-6 top-6 flex gap-1">
        {item.images.map((_, imageIndex) => (
          <span
            key={imageIndex}
            className={`h-1 rounded-full transition-all ${
              imageIndex === current
                ? "w-6 bg-green-400"
                : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7">
        <h3 className="max-w-sm font-serif text-3xl leading-tight text-white">
          {item.title}
        </h3>

        <div className="mt-5 h-px w-full bg-white/20">
          <motion.div
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4.3 + index * 0.25,
              ease: "linear",
            }}
            className="h-px bg-green-400"
          />
        </div>
      </div>
    </motion.article>
  );
};

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#f3f7f4] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
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
        >
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                Gallery
              </p>

              <h2 className="mt-5 font-serif text-5xl tracking-[-0.05em] text-gray-950 sm:text-6xl lg:text-8xl">
                Moments,
                <span className="italic text-green-700">
                  {" "}not just images.
                </span>
              </h2>
            </div>

            <p className="hidden max-w-sm text-sm leading-7 text-gray-500 lg:block">
              A visual collection can document the people, places and
              experiences behind the Trust's work.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;