import { Icon } from "@iconify/react";

const WhatsAppButton = () => {
  const phoneNumber = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello Bidyabharati Public Charitable Trust, I would like to know more about your initiatives."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 left-5 z-[100] flex items-center gap-3 sm:left-7"
    >
      {/* Tooltip */}
      <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-full bg-gray-950 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
        {/* Soft pulse */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />

        <Icon
          icon="mdi:whatsapp"
          className="relative z-10 text-[30px]"
        />
      </span>
    </a>
  );
};

export default WhatsAppButton;