import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f3f7f4] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

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
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
            Contact
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-gray-950 sm:text-6xl lg:text-8xl">
            Let's start
            <span className="italic text-green-700">
              {" "}with a conversation.
            </span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">

          {/* Information */}
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
            }}
            className="rounded-[2rem] bg-[#123d2b] p-8 text-white sm:p-10"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
              Reach out
            </p>

            <p className="mt-7 font-serif text-3xl leading-tight">
              Whether you have a question, proposal or idea, we'd like to
              hear from you.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Email
                </p>

                <p className="mt-2 text-sm text-white/70">
                  your-email@example.com
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Phone
                </p>

                <p className="mt-2 text-sm text-white/70">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Office
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/70">
                  Add the Trust's registered office address here.
                </p>
              </div>

            </div>

            <div className="mt-14 border-t border-white/10 pt-7">
              <p className="text-xs leading-6 text-white/40">
                Please replace the placeholder contact information with
                verified Trust details before publishing.
              </p>
            </div>
          </motion.div>

          {/* Form */}
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
            }}
            className="rounded-[2rem] bg-white p-8 sm:p-10 lg:p-12"
          >
            <form className="space-y-7">

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Purpose
                </label>

                <select
                  defaultValue=""
                  className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm text-gray-600 outline-none focus:border-green-700"
                >
                  <option value="" disabled>
                    Select one
                  </option>

                  <option>Volunteer</option>
                  <option>Partnership</option>
                  <option>Support</option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your enquiry..."
                  className="w-full resize-none border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between rounded-full bg-[#123d2b] px-7 py-4 text-sm font-bold text-white transition hover:bg-green-700"
              >
                Send enquiry

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400 text-[#123d2b] transition group-hover:translate-x-1">
                  <Icon icon="mdi:arrow-top-right" />
                </span>
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;