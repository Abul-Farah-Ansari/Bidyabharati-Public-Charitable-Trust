import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const QuickSidebar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY <= 10) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide when scrolling down
      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 80
      ) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* =====================================================
          RIGHT QUICK ACTIONS
      ====================================================== */}
      <AnimatePresence>
        {visible && (
          <motion.aside
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
          >
            <div className="w-[118px] overflow-hidden rounded-l-2xl border border-r-0 border-gray-200 bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              
              {/* =================================================
                  DONATE
              ================================================== */}
              <a
                href="#payment"
                className="group flex flex-col items-center border-b border-gray-100 px-3 py-4 text-center transition duration-300 hover:bg-[#123d2b]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-white transition duration-300 group-hover:scale-105 group-hover:bg-green-400 group-hover:text-[#123d2b]">
                  <Icon
                    icon="mdi:heart-outline"
                    className="text-lg"
                  />
                </div>

                <span className="mt-2 font-serif text-sm font-bold text-gray-900 transition group-hover:text-white">
                  Donate
                </span>

                <span className="mt-0.5 text-[8px] text-gray-400 transition group-hover:text-white/50">
                  Support our work
                </span>
              </a>

              {/* =================================================
                  VOLUNTEER
              ================================================== */}
              <a
                href="#get-involved"
                className="group flex flex-col items-center border-b border-gray-100 px-3 py-4 text-center transition duration-300 hover:bg-[#123d2b]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700 transition duration-300 group-hover:scale-105 group-hover:bg-green-400 group-hover:text-[#123d2b]">
                  <Icon
                    icon="mdi:account-heart-outline"
                    className="text-lg"
                  />
                </div>

                <span className="mt-2 font-serif text-sm font-bold text-gray-900 transition group-hover:text-white">
                  Volunteer
                </span>

                <span className="mt-0.5 text-[8px] text-gray-400 transition group-hover:text-white/50">
                  Join our efforts
                </span>
              </a>

              {/* =================================================
                  SOCIAL MEDIA
              ================================================== */}
              <div className="border-b border-gray-100 px-3 py-4">
                <p className="mb-3 text-center text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Follow us
                </p>

                <div className="flex items-center justify-center gap-2">
                  {/* FACEBOOK */}
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition duration-300 hover:bg-[#1877F2] hover:text-white"
                  >
                    <Icon
                      icon="mdi:facebook"
                      className="text-base"
                    />
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition duration-300 hover:bg-pink-500 hover:text-white"
                  >
                    <Icon
                      icon="mdi:instagram"
                      className="text-base"
                    />
                  </a>

                  {/* YOUTUBE */}
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition duration-300 hover:bg-red-600 hover:text-white"
                  >
                    <Icon
                      icon="mdi:youtube"
                      className="text-base"
                    />
                  </a>
                </div>
              </div>

              {/* =================================================
                  CONTACT
              ================================================== */}
              <a
                href="#contact"
                className="group flex flex-col items-center px-3 py-4 text-center transition duration-300 hover:bg-[#123d2b]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700 transition duration-300 group-hover:scale-105 group-hover:bg-green-400 group-hover:text-[#123d2b]">
                  <Icon
                    icon="mdi:email-outline"
                    className="text-lg"
                  />
                </div>

                <span className="mt-2 font-serif text-sm font-bold text-gray-900 transition group-hover:text-white">
                  Contact
                </span>

                <span className="mt-0.5 text-[8px] text-gray-400 transition group-hover:text-white/50">
                  Get in touch
                </span>
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =====================================================
          SHOW BUTTON
      ====================================================== */}
      <motion.button
        type="button"
        onClick={() => setVisible(true)}
        aria-label="Show quick actions"
        initial={false}
        animate={{
          x: visible ? 60 : 0,
          opacity: visible ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="fixed right-0 top-1/2 z-40 hidden h-12 w-9 -translate-y-1/2 items-center justify-center rounded-l-xl border border-r-0 border-gray-200 bg-white text-green-700 shadow-md transition hover:bg-green-50 lg:flex"
      >
        <Icon
          icon="mdi:chevron-left"
          className="text-xl"
        />
      </motion.button>
    </>
  );
};

export default QuickSidebar;