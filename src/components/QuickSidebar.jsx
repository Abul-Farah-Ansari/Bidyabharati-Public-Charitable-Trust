import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const QuickSidebar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show automatically only when back at the very top
      if (currentScrollY <= 10) {
        setVisible(true);
      }
      // Hide when scrolling down
      else if (
        currentScrollY > lastScrollY &&
        currentScrollY > 80
      ) {
        setVisible(false);
      }

      // While scrolling up:
      // keep sidebar hidden until user clicks the button

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
          DESKTOP QUICK SIDEBAR
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
            className="
              fixed
              right-0
              top-1/2
              z-40
              hidden
              -translate-y-1/2
              lg:block
            "
          >
            <div
              className="
                w-[124px]
                overflow-hidden
                rounded-l-[18px]
                border
                border-r-0
                border-gray-200/80
                bg-white/95
                shadow-[0_12px_40px_rgba(0,0,0,0.07)]
                backdrop-blur-xl
              "
            >
              {/* ===============================
                  DONATE
              ================================ */}
              <a
                href="#payment"
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  border-b
                  border-gray-100
                  px-4
                  py-5
                  text-center
                  transition-all
                  duration-300
                  hover:bg-[#123d2b]
                "
              >
                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-0
                    w-[2px]
                    -translate-y-1/2
                    bg-[#ef4938]
                    transition-all
                    duration-300
                    group-hover:h-8
                  "
                />

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-green-700
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-green-400
                    group-hover:text-[#123d2b]
                  "
                >
                  <Icon
                    icon="mdi:heart-outline"
                    className="text-[19px]"
                  />
                </div>

                <span
                  className="
                    mt-2.5
                    font-serif
                    text-[14px]
                    font-bold
                    text-gray-900
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  Donate
                </span>

                <span
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    tracking-wide
                    text-gray-400
                    transition
                    duration-300
                    group-hover:text-white/50
                  "
                >
                  Support our work
                </span>
              </a>

              {/* ===============================
                  VOLUNTEER
              ================================ */}
              <a
                href="#get-involved"
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  border-b
                  border-gray-100
                  px-4
                  py-5
                  text-center
                  transition-all
                  duration-300
                  hover:bg-[#123d2b]
                "
              >
                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-0
                    w-[2px]
                    -translate-y-1/2
                    bg-[#12965c]
                    transition-all
                    duration-300
                    group-hover:h-8
                  "
                />

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-green-50
                    text-green-700
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-green-400
                    group-hover:text-[#123d2b]
                  "
                >
                  <Icon
                    icon="mdi:account-heart-outline"
                    className="text-[19px]"
                  />
                </div>

                <span
                  className="
                    mt-2.5
                    font-serif
                    text-[14px]
                    font-bold
                    text-gray-900
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  Volunteer
                </span>

                <span
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    tracking-wide
                    text-gray-400
                    transition
                    duration-300
                    group-hover:text-white/50
                  "
                >
                  Join our efforts
                </span>
              </a>

              {/* ===============================
                  SOCIAL MEDIA
              ================================ */}
              <div className="border-b border-gray-100 px-4 py-5">
                <p
                  className="
                    mb-3.5
                    text-center
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                  "
                >
                  Follow us
                </p>

                <div className="flex items-center justify-center gap-2.5">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="
                      group
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-50
                      text-gray-500
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#1877F2]
                      hover:text-white
                    "
                  >
                    <Icon
                      icon="mdi:facebook"
                      className="text-[16px]"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="
                      group
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-50
                      text-gray-500
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-pink-500
                      hover:text-white
                    "
                  >
                    <Icon
                      icon="mdi:instagram"
                      className="text-[16px]"
                    />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="
                      group
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-50
                      text-gray-500
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-red-600
                      hover:text-white
                    "
                  >
                    <Icon
                      icon="mdi:youtube"
                      className="text-[16px]"
                    />
                  </a>
                </div>
              </div>

              {/* ===============================
                  CONTACT
              ================================ */}
              <a
                href="#contact"
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  px-4
                  py-5
                  text-center
                  transition-all
                  duration-300
                  hover:bg-[#123d2b]
                "
              >
                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-0
                    w-[2px]
                    -translate-y-1/2
                    bg-[#12965c]
                    transition-all
                    duration-300
                    group-hover:h-8
                  "
                />

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-green-50
                    text-green-700
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-green-400
                    group-hover:text-[#123d2b]
                  "
                >
                  <Icon
                    icon="mdi:email-outline"
                    className="text-[19px]"
                  />
                </div>

                <span
                  className="
                    mt-2.5
                    font-serif
                    text-[14px]
                    font-bold
                    text-gray-900
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  Contact
                </span>

                <span
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    tracking-wide
                    text-gray-400
                    transition
                    duration-300
                    group-hover:text-white/50
                  "
                >
                  Get in touch
                </span>
              </a>

              {/* Bottom accent */}
              <div className="flex h-[3px] w-full">
                <div className="w-1/2 bg-[#12965c]" />
                <div className="w-1/2 bg-[#ef4938]" />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE QUICK SIDEBAR
      ====================================================== */}
      <AnimatePresence>
        {visible && (
          <motion.aside
            initial={{
              x: 70,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: 70,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              right-2
              top-1/2
              z-40
              -translate-y-1/2
              lg:hidden
            "
          >
            <div
              className="
                flex
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-gray-200/80
                bg-white/95
                shadow-[0_8px_25px_rgba(0,0,0,0.09)]
                backdrop-blur-xl
              "
            >
              {/* Donate */}
              <a
                href="#payment"
                aria-label="Donate"
                className="
                  group
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border-b
                  border-gray-100
                  text-green-700
                  transition
                  duration-300
                  hover:bg-green-50
                "
              >
                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-5
                    w-[2px]
                    -translate-y-1/2
                    bg-[#ef4938]
                  "
                />

                <Icon
                  icon="mdi:heart-outline"
                  className="text-[20px] transition-transform duration-300 group-active:scale-90"
                />
              </a>

              {/* Volunteer */}
              <a
                href="#get-involved"
                aria-label="Volunteer"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border-b
                  border-gray-100
                  text-green-700
                  transition
                  duration-300
                  hover:bg-green-50
                "
              >
                <Icon
                  icon="mdi:account-heart-outline"
                  className="text-[20px] transition-transform duration-300 group-active:scale-90"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-11
                  items-center
                  justify-center
                  border-b
                  border-gray-100
                  text-gray-500
                  transition
                  hover:bg-gray-50
                  hover:text-[#1877F2]
                "
              >
                <Icon
                  icon="mdi:facebook"
                  className="text-[18px]"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-11
                  items-center
                  justify-center
                  border-b
                  border-gray-100
                  text-gray-500
                  transition
                  hover:bg-gray-50
                  hover:text-pink-500
                "
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-[18px]"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  flex
                  h-10
                  w-11
                  items-center
                  justify-center
                  border-b
                  border-gray-100
                  text-gray-500
                  transition
                  hover:bg-gray-50
                  hover:text-red-600
                "
              >
                <Icon
                  icon="mdi:youtube"
                  className="text-[18px]"
                />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                aria-label="Contact"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-green-700
                  transition
                  hover:bg-green-50
                "
              >
                <Icon
                  icon="mdi:email-outline"
                  className="text-[19px]"
                />
              </a>

              {/* Brand accent */}
              <div className="flex h-[2px] w-full">
                <div className="w-1/2 bg-[#12965c]" />
                <div className="w-1/2 bg-[#ef4938]" />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =====================================================
          DESKTOP SHOW BUTTON
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
        className="
          fixed
          right-0
          top-1/2
          z-40
          hidden
          h-12
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-l-xl
          border
          border-r-0
          border-gray-200
          bg-white
          text-green-700
          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
          transition
          duration-300
          hover:bg-green-50
          hover:text-green-800
          lg:flex
        "
      >
        <Icon
          icon="mdi:chevron-left"
          className="text-xl"
        />
      </motion.button>

      {/* =====================================================
          MOBILE SHOW BUTTON
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
        className="
          fixed
          right-0
          top-1/2
          z-40
          flex
          h-10
          w-7
          -translate-y-1/2
          items-center
          justify-center
          rounded-l-lg
          border
          border-r-0
          border-gray-200
          bg-white/95
          text-green-700
          shadow-[0_5px_16px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          transition
          duration-300
          hover:bg-green-50
          lg:hidden
        "
      >
        <Icon
          icon="mdi:chevron-left"
          className="text-lg"
        />
      </motion.button>
    </>
  );
};

export default QuickSidebar;