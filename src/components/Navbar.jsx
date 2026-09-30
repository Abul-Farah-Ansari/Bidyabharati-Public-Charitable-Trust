import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo ngo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Always show navbar at the very top
      if (currentScrollY <= 10) {
        setNavVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setNavVisible(false);
        setMenuOpen(false);
      }

      // Show when scrolling up
      if (currentScrollY < lastScrollY) {
        setNavVisible(true);
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

  const navLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About Us",
      href: "#about",
    },
    {
      label: "Activities",
      href: "#activities",
    },
    {
      label: "Gallery",
      href: "#gallery",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Show Navbar Button */}
      <button
        type="button"
        onClick={() => setNavVisible(true)}
        aria-label="Show navigation"
        className={`fixed right-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-md backdrop-blur-xl transition-all duration-500 lg:right-7 lg:top-5 ${
          navVisible
            ? "pointer-events-none scale-75 opacity-0"
            : "pointer-events-auto scale-100 opacity-100"
        }`}
      >
        <Icon icon="mdi:menu" className="text-lg" />
      </button>

      {/* Navbar */}
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
          navVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${
          scrolled
            ? "border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Bidyabharati Public Charitable Trust"
            className="group flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Bidyabharati Public Charitable Trust"
              className="h-12 w-auto max-w-[190px] object-contain transition duration-300 group-hover:scale-[1.02] sm:h-14 sm:max-w-[220px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-serif text-[15px] font-semibold transition duration-300 xl:text-[16px] ${
                  index === 0
                    ? "text-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                {link.label}

                {/* Hover underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-green-700 transition-all duration-300 ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}

            {/* Donate */}
            <a
              href="#payment"
              className="group ml-1 flex items-center gap-1.5 rounded-full bg-green-700 px-5 py-2.5 font-serif text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md"
            >
              <Icon
                icon="mdi:heart-outline"
                className="text-base transition duration-300 group-hover:scale-110"
              />

              <span>Donate</span>

              <Icon
                icon="mdi:arrow-top-right"
                className="text-sm transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 transition duration-300 hover:border-green-700 hover:bg-green-50 hover:text-green-700 lg:hidden"
          >
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              className="text-lg"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-500 lg:hidden ${
            menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 py-2 sm:px-8">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-gray-100 py-3.5 font-serif text-base font-semibold transition ${
                  index === 0
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                <span>{link.label}</span>

                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-base text-gray-300"
                />
              </a>
            ))}

            {/* Mobile Donate */}
            <a
              href="#payment"
              onClick={closeMenu}
              className="my-3 flex items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 font-serif text-sm font-bold text-white transition duration-300 hover:bg-green-800"
            >
              <Icon
                icon="mdi:heart-outline"
                className="text-base"
              />

              <span>Donate</span>

              <Icon
                icon="mdi:arrow-top-right"
                className="text-base"
              />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;