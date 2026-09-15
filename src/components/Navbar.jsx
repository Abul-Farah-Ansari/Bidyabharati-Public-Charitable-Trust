import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    ["About", "#about"],
    ["Programs", "#programs"],
    ["Impact", "#impact"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:h-28 lg:px-12">
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50 text-green-700 transition duration-300 group-hover:bg-green-700 group-hover:text-white">
            <Icon
              icon="mdi:sprout-outline"
              className="text-2xl"
            />
          </div>

          <div>
            <div className="font-serif text-2xl font-bold tracking-tight text-gray-950">
              Bidyabharati
            </div>

            <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-gray-400 sm:text-[9px]">
              Public Charitable Trust
            </div>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {/* HOME */}
          <a
            href="#home"
            className="font-serif text-[15px] font-semibold text-green-700 transition duration-300 hover:text-green-800"
          >
            Home
          </a>

          {/* NORMAL LINKS */}
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="font-serif text-[15px] font-semibold text-gray-600 transition duration-300 hover:text-green-700"
            >
              {label}
            </a>
          ))}

          {/* PAYMENT */}
          <a
            href="#payment"
            className="group ml-1 flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 font-serif text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md"
          >
            <Icon
              icon="mdi:heart-outline"
              className="text-base transition duration-300 group-hover:scale-110"
            />

            <span>Make a Payment</span>
          </a>
        </nav>

        {/* GET INVOLVED */}
        <a
          href="#get-involved"
          className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 font-serif text-sm font-bold text-gray-900 transition duration-300 hover:-translate-y-0.5 hover:border-green-700 hover:bg-green-50 hover:text-green-700 xl:flex"
        >
          Get Involved

          <Icon
            icon="mdi:arrow-top-right"
            className="text-lg"
          />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 transition duration-300 hover:border-green-700 hover:bg-green-50 hover:text-green-700 lg:hidden"
        >
          <Icon
            icon={menuOpen ? "mdi:close" : "mdi:menu"}
            className="text-xl"
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-4 sm:px-8">
          {/* HOME */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-gray-100 py-4 font-serif text-lg font-semibold text-green-700"
          >
            Home

            <Icon
              icon="mdi:arrow-top-right"
              className="text-lg"
            />
          </a>

          {/* LINKS */}
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-gray-100 py-4 font-serif text-lg font-semibold text-gray-700 transition hover:text-green-700"
            >
              {label}

              <Icon
                icon="mdi:arrow-top-right"
                className="text-lg text-gray-300"
              />
            </a>
          ))}

          {/* GET INVOLVED */}
          <a
            href="#get-involved"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-4 font-serif font-bold text-gray-900 transition hover:border-green-700 hover:bg-green-50 hover:text-green-700"
          >
            Get Involved

            <Icon
              icon="mdi:arrow-top-right"
              className="text-lg"
            />
          </a>

          {/* PAYMENT */}
          <a
            href="#payment"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-4 font-serif font-bold text-white transition duration-300 hover:bg-green-800"
          >
            <Icon
              icon="mdi:heart-outline"
              className="text-lg"
            />

            Make a Payment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;