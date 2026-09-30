import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const amounts = [500, 1000, 2500, 5000];

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handlePresetAmount = (value) => {
    setSelectedAmount(value);
    setAmount(String(value));
    setError("");
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;

    setAmount(value);
    setSelectedAmount(null);
    setError("");
  };

  const handleSubmit = () => {
    const numericAmount = Number(amount);

    if (!amount || numericAmount <= 0) {
      setError("Please enter a valid contribution amount.");
      return;
    }

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    setShowSuccess(true);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <section
        id="payment"
        className="relative overflow-hidden bg-[#123d2b] px-5 py-28 text-white sm:px-8 lg:px-12 lg:py-36"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full border border-white/[0.07]" />

        <div className="pointer-events-none absolute -right-20 top-20 h-[300px] w-[300px] rounded-full border border-white/[0.04]" />

        <div className="pointer-events-none absolute -left-40 bottom-[-250px] h-[600px] w-[600px] rounded-full border border-green-300/[0.08]" />

        <div className="relative mx-auto max-w-[1500px]">

          {/* ------------------------------------------------
              HEADER
          ------------------------------------------------ */}
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-10 lg:grid-cols-[0.55fr_1fr]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green-300" />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-300">
                  Make a Contribution
                </p>
              </div>

              <div className="mt-5 h-px w-20 bg-white/15" />

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                Support the work of Bidyabharati Public Charitable Trust
                through a contribution of your choice.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.055em]">
                Give with
                <span className="block pl-[5vw] italic text-green-300">
                  purpose.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                Every contribution is an opportunity to support community
                initiatives. Choose an amount below or enter a contribution
                of your choice.
              </p>
            </div>
          </motion.div>

          {/* ------------------------------------------------
              PAYMENT AREA
          ------------------------------------------------ */}
          <div className="mt-20 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

            {/* ------------------------------------------------
                LEFT INFORMATION
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10"
            >
              {/* Decorative icon */}
              <div className="absolute -right-10 -top-10 flex h-40 w-40 items-center justify-center rounded-full border border-white/[0.05]">
                <Icon
                  icon="mdi:heart-outline"
                  className="text-5xl text-white/[0.04]"
                />
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-400 text-[#123d2b]">
                  <Icon
                    icon="mdi:hand-heart-outline"
                    className="text-2xl"
                  />
                </div>

                <h3 className="mt-10 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  Every contribution begins with an intention to help.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                  Choose an amount that feels appropriate for you and share
                  your basic details so we can identify your contribution
                  request.
                </p>

                <div className="mt-10 space-y-7">

                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                      <Icon
                        icon="mdi:heart-outline"
                        className="text-lg text-green-300"
                      />
                    </div>

                    <div>
                      <p className="font-serif text-lg">
                        Every contribution matters
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        Your support can contribute towards the Trust&apos;s
                        community initiatives.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                      <Icon
                        icon="mdi:receipt-text-outline"
                        className="text-lg text-green-300"
                      />
                    </div>

                    <div>
                      <p className="font-serif text-lg">
                        Contribution details
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        Your submitted information can be used to identify
                        this contribution request.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                      <Icon
                        icon="mdi:information-outline"
                        className="text-lg text-green-300"
                      />
                    </div>

                    <div>
                      <p className="font-serif text-lg">
                        Demo payment
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        This is currently a frontend demonstration. No real
                        payment will be processed.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------
                PAYMENT FORM
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[2rem] bg-white p-7 text-gray-950 shadow-[0_25px_80px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12"
            >

              {/* Form heading */}
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">
                    Contribution
                  </p>

                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Choose an amount
                  </h3>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 sm:flex">
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
                    className={`rounded-xl border px-4 py-4 font-serif text-lg transition-all duration-300 ${
                      selectedAmount === value
                        ? "border-green-700 bg-green-700 text-white shadow-lg shadow-green-900/10"
                        : "border-gray-200 bg-gray-50 text-gray-900 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-50"
                    }`}
                  >
                    ₹{value.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mt-8">
                <label
                  htmlFor="paymentAmount"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400"
                >
                  Custom amount
                </label>

                <div
                  className={`flex items-center border-b transition ${
                    error && (!amount || Number(amount) <= 0)
                      ? "border-red-400"
                      : "border-gray-200 focus-within:border-green-700"
                  }`}
                >
                  <span className="font-serif text-xl text-gray-400">
                    ₹
                  </span>

                  <input
                    id="paymentAmount"
                    type="number"
                    min="1"
                    value={amount}
                    onChange={handleAmountChange}
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
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError("");
                  }}
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
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-200 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-green-700"
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
                    <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-xs text-red-600">
                      <Icon
                        icon="mdi:alert-circle-outline"
                        className="shrink-0 text-base"
                      />

                      <span>{error}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Selected amount preview */}
              <div className="mt-8 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Contribution
                </span>

                <span className="font-serif text-xl font-bold text-gray-950">
                  ₹
                  {amount && Number(amount) > 0
                    ? Number(amount).toLocaleString("en-IN")
                    : "0"}
                </span>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="group mt-5 flex w-full items-center justify-between rounded-full bg-[#123d2b] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
              >
                <span>Continue to Payment</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400 text-[#123d2b] transition group-hover:translate-x-1">
                  <Icon
                    icon="mdi:arrow-top-right"
                    className="text-lg"
                  />
                </span>
              </button>

              {/* Demo note */}
              <div className="mt-5 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.18em] text-gray-400">
                <Icon icon="mdi:information-outline" />

                Demo contribution · No real payment
              </div>
            </motion.div>
          </div>

          {/* ------------------------------------------------
              BOTTOM NOTE
          ------------------------------------------------ */}
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
            className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-6 py-5"
          >
            <div className="flex gap-3">
              <Icon
                icon="mdi:information-outline"
                className="mt-0.5 shrink-0 text-lg text-green-300"
              />

              <p className="text-xs leading-6 text-white/40">
                This contribution form is currently a demonstration only.
                No money is collected or transferred. A real payment gateway
                can be connected when the Trust&apos;s verified payment and
                compliance details are ready.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------
          SUCCESS / DEMO MODAL
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
            onClick={closeSuccess}
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

                {/* Success icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon
                    icon="mdi:heart-check-outline"
                    className="text-3xl"
                  />
                </div>

                <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.3em] text-green-700">
                  Demo contribution
                </p>

                <h3 className="mt-3 font-serif text-4xl leading-tight text-gray-950">
                  Thank you, {name || "for your support"}.
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  Your contribution request has been recorded as a
                  demonstration. No payment has been processed.
                </p>

                {/* Amount */}
                <div className="mt-7 flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Amount
                  </span>

                  <span className="font-serif text-2xl font-bold text-green-800">
                    ₹
                    {Number(amount).toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Demo status */}
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                  <Icon
                    icon="mdi:information-outline"
                    className="mt-0.5 shrink-0 text-lg text-amber-600"
                  />

                  <p className="text-xs leading-5 text-amber-700">
                    This is only a frontend demo. A real payment gateway has
                    not been connected yet.
                  </p>
                </div>

                {/* Close */}
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

export default Payment;