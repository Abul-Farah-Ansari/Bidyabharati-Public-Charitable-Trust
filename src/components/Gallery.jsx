import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

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

/* -------------------------------------------------------
   GALLERY CARD
------------------------------------------------------- */

const GalleryCard = ({ item, index, onOpen }) => {
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
      {/* Clickable image area */}
      <button
        type="button"
        onClick={() =>
          onOpen({
            item,
            imageIndex: current,
          })
        }
        aria-label={`Open ${item.title} gallery`}
        className="absolute inset-0 z-10 h-full w-full cursor-pointer text-left"
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
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />
        </AnimatePresence>

        {/* Hover dark layer */}
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

        {/* Open icon */}
        <div className="absolute right-6 bottom-24 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon icon="mdi:arrow-top-right" className="text-lg" />
        </div>
      </button>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Category */}
      <div className="pointer-events-none absolute left-6 top-6 z-30 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
        {item.category}
      </div>

      {/* Image indicators */}
      <div className="pointer-events-none absolute right-6 top-6 z-30 flex gap-1">
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

      {/* Content */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 p-7">
        <div className="flex items-end justify-between gap-4">
          <h3 className="max-w-sm font-serif text-3xl leading-tight text-white">
            {item.title}
          </h3>

          <div className="hidden shrink-0 items-center gap-2 text-white/60 sm:flex">
            <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
              View
            </span>
            <Icon icon="mdi:arrow-top-right" className="text-sm" />
          </div>
        </div>

        {/* Progress */}
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

/* -------------------------------------------------------
   FULL SCREEN GALLERY MODAL
------------------------------------------------------- */

const GalleryModal = ({
  gallery,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
  onSelect,
}) => {
  const [direction, setDirection] = useState(1);

  const totalImages = gallery.length;

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  const handlePrevious = () => {
    setDirection(-1);
    onPrevious();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const activeImage = gallery[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[300] flex h-screen w-screen flex-col bg-[#07100c]"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="relative z-30 flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7 lg:px-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400 text-[#123d2b]">
            <Icon icon="mdi:image-multiple-outline" className="text-lg" />
          </div>

          <div>
            <p className="font-serif text-lg text-white sm:text-xl">
              {activeImage.title}
            </p>

            <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
              {activeImage.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden text-right sm:block">
            <p className="font-serif text-lg text-white">
              {String(activeImage.globalIndex + 1).padStart(2, "0")}
              <span className="mx-1 text-white/20">/</span>
              {String(totalImages).padStart(2, "0")}
            </p>

            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/30">
              Gallery
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:bg-white hover:text-gray-950"
          >
            <Icon icon="mdi:close" className="text-xl" />
          </button>
        </div>
      </div>

      {/* Main image area */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-5 sm:px-10 sm:py-7 lg:px-20"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

        {/* Previous */}
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-gray-950 sm:left-6 sm:h-13 sm:w-13 lg:left-10"
        >
          <Icon icon="mdi:arrow-left" className="text-xl" />
        </button>

        {/* Image */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeImage.globalIndex}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 70 : -70,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -70 : 70,
              scale: 0.97,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex h-full w-full items-center justify-center"
          >
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="max-h-full max-w-full rounded-xl object-contain shadow-[0_25px_100px_rgba(0,0,0,0.5)] sm:rounded-2xl"
            />

            {/* Image label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
              {activeImage.category}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-gray-950 sm:right-6 sm:h-13 sm:w-13 lg:right-10"
        >
          <Icon icon="mdi:arrow-right" className="text-xl" />
        </button>
      </div>

      {/* Bottom thumbnails */}
      <div
        className="relative z-30 shrink-0 border-t border-white/10 bg-black/20 px-4 py-4 sm:px-7 lg:px-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-3">
          {/* Thumbnail scroll */}
          <div className="scrollbar-none flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
            {gallery.map((image) => (
              <button
                key={image.globalIndex}
                type="button"
                onClick={() => {
                  setDirection(
                    image.globalIndex > activeImage.globalIndex ? 1 : -1
                  );
                  onSelect(image.globalIndex);
                }}
                className={`group relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:h-16 sm:w-24 ${
                  image.globalIndex === activeImage.globalIndex
                    ? "border-green-400 ring-2 ring-green-400/20"
                    : "border-white/10 opacity-45 hover:border-white/30 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {image.globalIndex === activeImage.globalIndex && (
                  <span className="absolute inset-0 bg-green-400/10" />
                )}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="hidden shrink-0 border-l border-white/10 pl-5 sm:block">
            <p className="font-serif text-lg text-white">
              {String(activeImage.globalIndex + 1).padStart(2, "0")}
              <span className="mx-1 text-white/20">/</span>
              {String(totalImages).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------
   MAIN GALLERY
------------------------------------------------------- */

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  /*
    Flatten all gallery images into one array.

    Example:
    Card 1 image 1
    Card 1 image 2
    Card 1 image 3
    Card 2 image 1
    ...
  */

  const allImages = galleryItems.flatMap((item) =>
    item.images.map((url, imageIndex) => ({
      url,
      title: item.title,
      category: item.category,
      imageIndex,
    }))
  );

  const openGallery = ({ item, imageIndex }) => {
    const globalIndex = allImages.findIndex(
      (image) =>
        image.title === item.title &&
        image.imageIndex === imageIndex
    );

    setSelectedImage(globalIndex >= 0 ? globalIndex : 0);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : (prev + 1) % allImages.length
    );
  };

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === null
        ? 0
        : (prev - 1 + allImages.length) % allImages.length
    );
  };

  const selectImage = (index) => {
    setSelectedImage(index);
  };

  const modalGallery =
    selectedImage !== null
      ? allImages.map((image, index) => ({
          ...image,
          globalIndex: index,
        }))
      : [];

  return (
    <>
      <section
        id="gallery"
        className="bg-[#f3f7f4] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Header */}
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
                experiences behind the Trust&apos;s work.
              </p>
            </div>
          </motion.div>

          {/* Masonry Gallery */}
          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={item.title}
                item={item}
                index={index}
                onOpen={openGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <GalleryModal
            gallery={modalGallery}
            activeIndex={selectedImage}
            onClose={closeGallery}
            onNext={nextImage}
            onPrevious={previousImage}
            onSelect={selectImage}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;