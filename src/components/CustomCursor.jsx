import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleEnter = (event) => {
      const target = event.target;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        setHovering(true);
      }
    };

    const handleLeave = (event) => {
      const target = event.target;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        scale: hovering ? 1.7 : 1,
      }}
      transition={{
        x: {
          duration: 0.12,
          ease: "linear",
        },
        y: {
          duration: 0.12,
          ease: "linear",
        },
        scale: {
          duration: 0.25,
        },
      }}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-green-700 mix-blend-difference lg:flex ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full bg-green-400 transition-all duration-200 ${
          hovering ? "scale-75" : "scale-100"
        }`}
      />
    </motion.div>
  );
};

export default CustomCursor;