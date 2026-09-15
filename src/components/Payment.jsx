import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const amounts = [500, 1000, 2500, 5000];

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handlePresetAmount = (value) => {
    setSelectedAmount(value);
    setAmount(value);
  };

  return (
    <section
      id="payment"
      className="relative overflow-hidden bg-[#123d2b] px-5 py-28 text-white sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -left-40 bottom-[-250px] h-[600px] w-[600px] rounded-full border border-green-300/10" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="grid gap-10 lg:grid-cols-[0.55fr_1fr]"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
              Make a Payment
            </p>

            <div className="mt-5 h-px w-20 bg-white/20" />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              Support the work of Bidyabharati Public Charitable Trust
              through a secure contribution.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-5xl leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Give with
              <span className="block italic text-green-300">
                purpose.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Your contribution can help support educational and community
              initiatives. Choose an amount below or enter a contribution
              of your choice.
            </p>
          </div>
        </motion.div>

        {/* Payment area */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Left information */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-400 text-[#123d2b]">
              <Icon
                icon="mdi:hand-heart-outline"
                className="text-2xl"
              />
            </div>

            <h3 className="mt-10 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
              Every contribution begins with an intention to help.
            </h3>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <Icon
                  icon="mdi:shield-check-outline"
                  className="mt-0.5 shrink-0 text-xl text-green-300"
                />

                <div>
                  <p className="font-serif text-lg">
                    Secure payment
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Payments should be processed through a trusted payment
                    gateway.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon
                  icon="mdi:receipt-text-outline"
                  className="mt-0.5 shrink-0 text-xl text-green-300"
                />

                <div>
                  <p className="font-serif text-lg">
                    Payment acknowledgement
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Appropriate payment confirmation can be provided after
                    successful verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon
                  icon="mdi:information-outline"
                  className="mt-0.5 shrink-0 text-xl text-green-300"
                />

                <div>
                  <p className="font-serif text-lg">
                    Transparency matters
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Add the Trust's verified payment and regulatory
                    information before going live.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Payment form */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[2rem] bg-white p-8 text-gray-950 sm:p-10 lg:p-12"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                  Contribution
                </p>

                <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                  Choose an amount
                </h3>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700 sm:flex">
                <Icon
                  icon="mdi:currency-inr"
                  className="text-xl"
                />
              </div>
            </div>

            {/* Preset amounts */}
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handlePresetAmount(value)}
                  className={`rounded-xl border px-4 py-4 font-serif text-lg transition ${
                    selectedAmount === value
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-gray-200 bg-gray-50 text-gray-900 hover:border-green-500 hover:bg-green-50"
                  }`}
                >
                  ₹{value.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mt-7">
              <label
                htmlFor="paymentAmount"
                className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
              >
                Custom amount
              </label>

              <div className="flex items-center border-b border-gray-200">
                <span className="font-serif text-xl text-gray-400">
                  ₹
                </span>

                <input
                  id="paymentAmount"
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(event) => {
                    setAmount(event.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full bg-transparent px-3 py-4 text-lg outline-none"
                />
              </div>
            </div>

            {/* Name */}
            <div className="mt-7">
              <label
                htmlFor="payerName"
                className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
              >
                Name
              </label>

              <input
                id="payerName"
                type="text"
                placeholder="Your name"
                className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
              />
            </div>

            {/* Email */}
            <div className="mt-7">
              <label
                htmlFor="payerEmail"
                className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
              >
                Email
              </label>

              <input
                id="payerEmail"
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => {
                if (!amount || Number(amount) <= 0) {
                  alert("Please enter a valid amount.");
                  return;
                }

                alert(
                  `Payment integration will process ₹${Number(
                    amount
                  ).toLocaleString("en-IN")}.`
                );
              }}
              className="group mt-9 flex w-full items-center justify-between rounded-full bg-[#123d2b] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-green-700"
            >
              Continue to Payment

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400 text-[#123d2b] transition group-hover:translate-x-1">
                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-lg"
                />
              </span>
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-gray-400">
              <Icon icon="mdi:lock-outline" />
              Secure payment gateway
            </div>
          </motion.div>
        </div>

        {/* Important information */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
          }}
          className="mt-8 rounded-[1.5rem] border border-white/10 px-6 py-5"
        >
          <div className="flex gap-3">
            <Icon
              icon="mdi:information-outline"
              className="mt-0.5 shrink-0 text-lg text-green-300"
            />

            <p className="text-xs leading-6 text-white/40">
              Payment details, tax-benefit eligibility, registration
              information and receipts should only be displayed after
              they have been verified for the Trust.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Payment;