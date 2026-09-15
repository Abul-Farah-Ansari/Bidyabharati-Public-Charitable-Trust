import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-[#0b261b] text-white">

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.5fr_0.5fr_0.5fr]">

          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400 text-[#0b261b]">
                <Icon
                  icon="mdi:sprout-outline"
                  className="text-2xl"
                />
              </div>

              <div>
                <p className="font-serif text-2xl font-bold">
                  Bidyabharati
                </p>

                <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                  Public Charitable Trust
                </p>
              </div>
            </a>

            <p className="mt-8 max-w-lg font-serif text-3xl leading-tight text-white/80">
              Building opportunities through education,
              participation and community.
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-300">
              Navigate
            </p>

            <div className="mt-6 space-y-3">
              <a href="#about" className="block text-sm text-white/40 hover:text-white">
                About
              </a>

              <a href="#programs" className="block text-sm text-white/40 hover:text-white">
                Programs
              </a>

              <a href="#impact" className="block text-sm text-white/40 hover:text-white">
                Impact
              </a>

              <a href="#gallery" className="block text-sm text-white/40 hover:text-white">
                Gallery
              </a>

              <a href="#contact" className="block text-sm text-white/40 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-300">
              Connect
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-green-400 hover:text-[#0b261b]"
              >
                <Icon icon="mdi:facebook" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-green-400 hover:text-[#0b261b]"
              >
                <Icon icon="mdi:instagram" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-green-400 hover:text-[#0b261b]"
              >
                <Icon icon="mdi:youtube" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 py-7 text-[10px] text-white/30 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Bidyabharati Public Charitable Trust.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a
              href="#home"
              className="flex items-center gap-2 hover:text-white"
            >
              Back to top
              <Icon icon="mdi:arrow-up" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;