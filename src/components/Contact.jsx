import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.purpose) {
      setError("Please select a purpose.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return;
    }

    setError("");
    setShowSuccess(true);
  };

  const closeSuccess = () => {
    setShowSuccess(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      purpose: "",
      message: "",
    });
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f3f7f4] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-48 top-10 hidden h-[600px] w-[600px] rounded-full border border-green-900/[0.035] lg:block" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 hidden h-[600px] w-[600px] rounded-full border border-green-900/[0.035] lg:block" />

        <div className="relative mx-auto max-w-[1500px]">

          {/* ------------------------------------------------
              HEADER
          ------------------------------------------------ */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-10 lg:grid-cols-[1fr_0.55fr]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green-700" />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                  Contact
                </p>
              </div>

              <h2 className="mt-6 max-w-6xl font-serif text-[clamp(3rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.055em] text-gray-950">
                Let&apos;s start
                <span className="block pl-[5vw] italic text-green-700">
                  with a conversation.
                </span>
              </h2>
            </div>

            <div className="flex items-end lg:pb-3">
              <div className="max-w-lg">
                <p className="font-serif text-xl leading-relaxed text-gray-900 sm:text-2xl">
                  Have a question, idea or proposal? We&apos;d be happy to
                  hear from you.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  Whether you want to volunteer, collaborate, support an
                  initiative or simply make an enquiry, you can reach out to
                  the Trust directly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------
              MAIN CONTACT AREA
          ------------------------------------------------ */}
          <div className="mt-20 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">

            {/* ------------------------------------------------
                CONTACT INFORMATION
            ------------------------------------------------ */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[2rem] bg-[#123d2b] p-8 text-white sm:p-10"
            >
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/[0.07]" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full border border-white/[0.05]" />

              <div className="relative">

                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-green-300" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-300">
                    Reach out
                  </p>
                </div>

                <p className="mt-7 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  We&apos;re always open to a meaningful conversation.
                </p>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  Get in touch with Bidyabharati Public Charitable Trust for
                  enquiries, collaboration, volunteering or support.
                </p>

                {/* Contact details */}
                <div className="mt-12 space-y-7">

                  {/* Email */}
                  <a
                    href="mailto:bidyabharatipct.017@gmail.com"
                    className="group block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-green-300 transition duration-300 group-hover:bg-green-300 group-hover:text-[#123d2b]">
                        <Icon
                          icon="mdi:email-outline"
                          className="text-lg"
                        />
                      </div>

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                          Email
                        </p>

                        <p className="mt-1 text-sm text-white/75 transition group-hover:text-green-300">
                          bidyabharatipct.017@gmail.com
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919932400343"
                    className="group block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-green-300 transition duration-300 group-hover:bg-green-300 group-hover:text-[#123d2b]">
                        <Icon
                          icon="mdi:phone-outline"
                          className="text-lg"
                        />
                      </div>

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                          Phone
                        </p>

                        <p className="mt-1 text-sm text-white/75 transition group-hover:text-green-300">
                          +91 99324 00343
                        </p>
                      </div>
                    </div>
                  </a>

                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-white/10 pt-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                    Bidyabharati Public Charitable Trust
                  </p>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    Working through education, health, environment, blood
                    donation and social awareness initiatives.
                  </p>
                </div>

                {/* Quick actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:bidyabharatipct.017@gmail.com"
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white/70 transition duration-300 hover:border-green-300/30 hover:bg-green-300 hover:text-[#123d2b]"
                  >
                    <Icon icon="mdi:email-outline" />

                    Email us

                    <Icon
                      icon="mdi:arrow-top-right"
                      className="transition group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="tel:+919932400343"
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white/70 transition duration-300 hover:border-green-300/30 hover:bg-green-300 hover:text-[#123d2b]"
                  >
                    <Icon icon="mdi:phone-outline" />

                    Call us

                    <Icon
                      icon="mdi:arrow-top-right"
                      className="transition group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------
                FORM
            ------------------------------------------------ */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[2rem] bg-white p-7 shadow-[0_20px_70px_rgba(18,61,43,0.06)] sm:p-10 lg:p-12"
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-700">
                    Send an enquiry
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-gray-950 sm:text-4xl">
                    Tell us what&apos;s on your mind.
                  </h3>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 sm:flex">
                  <Icon
                    icon="mdi:message-text-outline"
                    className="text-xl"
                  />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-7"
              >

                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contactName"
                      className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
                    >
                      Name
                    </label>

                    <input
                      id="contactName"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
                    >
                      Email
                    </label>

                    <input
                      id="contactEmail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contactPhone"
                    className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
                  >
                    Phone
                  </label>

                  <input
                    id="contactPhone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label
                    htmlFor="contactPurpose"
                    className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
                  >
                    Purpose
                  </label>

                  <select
                    id="contactPurpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm text-gray-600 outline-none transition focus:border-green-700"
                  >
                    <option value="" disabled>
                      Select one
                    </option>

                    <option value="Volunteer">
                      Volunteer
                    </option>

                    <option value="Collaboration">
                      Collaboration
                    </option>

                    <option value="Support">
                      Support
                    </option>

                    <option value="General enquiry">
                      General enquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contactMessage"
                    className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="contactMessage"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your enquiry..."
                    className="w-full resize-none border-b border-gray-200 bg-transparent px-0 py-4 text-sm leading-7 outline-none transition focus:border-green-700"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-xs text-red-600">
                        <Icon
                          icon="mdi:alert-circle-outline"
                          className="shrink-0 text-base"
                        />

                        <span>{error}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-full bg-[#123d2b] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
                >
                  <span>Send enquiry</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400 text-[#123d2b] transition group-hover:translate-x-1">
                    <Icon
                      icon="mdi:arrow-top-right"
                      className="text-lg"
                    />
                  </span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.2em] text-gray-400">
                  <Icon icon="mdi:information-outline" />

                  Frontend demo · No backend connected
                </div>
              </form>
            </motion.div>
          </div>

          {/* ------------------------------------------------
              BOTTOM STATEMENT
          ------------------------------------------------ */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            className="mt-16 border-t border-gray-200 pt-8"
          >
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="max-w-3xl font-serif text-xl leading-relaxed text-gray-900 sm:text-2xl">
                Good conversations can become meaningful collaborations.
              </p>

              <a
                href="#home"
                className="group flex w-fit items-center gap-3 text-sm font-bold text-gray-700 transition hover:text-green-700"
              >
                Back to top

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition group-hover:-translate-y-1 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white">
                  <Icon icon="mdi:arrow-up" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------
          SUCCESS MODAL
      ------------------------------------------------ */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 px-5 backdrop-blur-md"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-[#f8faf9] p-8 text-gray-950 shadow-2xl sm:p-10"
            >
              {/* Decorative circle */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-green-900/[0.06]" />

              <div className="relative">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon
                    icon="mdi:check"
                    className="text-3xl"
                  />
                </div>

                <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.3em] text-green-700">
                  Enquiry received
                </p>

                <h3 className="mt-3 font-serif text-4xl leading-tight text-gray-950">
                  Thank you, {formData.name}.
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  Your enquiry has been recorded as a frontend
                  demonstration. No message has been sent to the Trust yet.
                </p>

                <div className="mt-7 space-y-3 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      Purpose
                    </span>

                    <span className="text-sm font-semibold text-gray-900">
                      {formData.purpose}
                    </span>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      Email
                    </span>

                    <span className="max-w-[240px] truncate text-sm text-gray-600">
                      {formData.email}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                  <Icon
                    icon="mdi:information-outline"
                    className="mt-0.5 shrink-0 text-lg text-amber-600"
                  />

                  <p className="text-xs leading-5 text-amber-700">
                    This is currently a frontend-only form. Connect your
                    backend/email service later to actually deliver enquiries.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeSuccess}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#123d2b] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-green-700"
                >
                  Close

                  <Icon
                    icon="mdi:check"
                    className="text-base"
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;