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

      // Always show navbar at the top
      if (currentScrollY <= 10) {
        setNavVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setNavVisible(false);
        setMenuOpen(false);
      }

      // Show navbar when scrolling up
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
      {/* =========================================
          SHOW NAVBAR BUTTON
      ========================================== */}
      <button
        type="button"
        onClick={() => setNavVisible(true)}
        aria-label="Show navigation"
        className={`fixed right-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#151515] shadow-md backdrop-blur-xl transition-all duration-500 lg:right-7 lg:top-5 ${
          navVisible
            ? "pointer-events-none scale-75 opacity-0"
            : "pointer-events-auto scale-100 opacity-100"
        }`}
      >
        <Icon icon="mdi:menu" className="text-lg" />
      </button>

      {/* =========================================
          NAVBAR
      ========================================== */}
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
        {/* Top color line inspired by logo */}
        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#009B55] via-[#EF4938] to-[#009B55]" />

        <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 pt-[3px] sm:px-8 lg:px-10">
          {/* =========================================
              LOGO + NGO NAME
          ========================================== */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Bidyabharati Public Charitable Trust"
            className="group flex min-w-0 shrink-0 items-center gap-3"
          >
            {/* Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden sm:h-14 sm:w-14">
              <img
                src={logo}
                alt="Bidyabharati Public Charitable Trust Logo"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.04]"
              />
            </div>

            {/* NGO Name */}
            <div className="flex min-w-0 flex-col justify-center leading-none">
              <span className="font-serif text-[15px] font-bold tracking-[-0.02em] text-[#009B55] sm:text-[17px] lg:text-[18px]">
                Bidyabharati
              </span>

              <span className="mt-1 font-serif text-[10px] font-semibold uppercase tracking-[0.12em] text-[#151515] sm:text-[11px] lg:text-[12px]">
                Public Charitable Trust
              </span>
            </div>
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative font-serif text-[15px] font-semibold transition duration-300 xl:text-[16px] ${
                  index === 0
                    ? "text-[#009B55]"
                    : "text-[#151515] hover:text-[#009B55]"
                }`}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                    index === 0
                      ? "w-full bg-[#EF4938]"
                      : "w-0 bg-[#EF4938] group-hover:w-full"
                  }`}
                />
              </a>
            ))}

            {/* =========================================
                DONATE BUTTON
            ========================================== */}
            <a
              href="#payment"
              className="group ml-1 flex items-center gap-1.5 rounded-full bg-[#EF4938] px-5 py-2.5 font-serif text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#d93e30] hover:shadow-md"
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

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================== */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-[#151515] transition duration-300 hover:border-[#009B55] hover:bg-[#effaf4] hover:text-[#009B55] lg:hidden"
          >
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              className="text-lg"
            />
          </button>
        </div>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================== */}
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
                className={`group flex items-center justify-between border-b border-gray-100 py-3.5 font-serif text-base font-semibold transition ${
                  index === 0
                    ? "text-[#009B55]"
                    : "text-[#151515] hover:text-[#009B55]"
                }`}
              >
                <span>{link.label}</span>

                <Icon
                  icon="mdi:arrow-top-right"
                  className={`text-base transition duration-300 ${
                    index === 0
                      ? "text-[#EF4938]"
                      : "text-gray-300 group-hover:text-[#EF4938]"
                  }`}
                />
              </a>
            ))}

            {/* Mobile Donate */}
            <a
              href="#payment"
              onClick={closeMenu}
              className="my-3 flex items-center justify-center gap-2 rounded-full bg-[#EF4938] px-5 py-3 font-serif text-sm font-bold text-white transition duration-300 hover:bg-[#d93e30]"
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