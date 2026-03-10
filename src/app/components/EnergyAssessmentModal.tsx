"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnergyAssessmentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [dieselSpend, setDieselSpend] = useState(2000);

  const savings = Math.round(dieselSpend * 0.35);
  const yearly = savings * 12;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95 }}
            className="w-full max-w-xl bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-6 md:p-10 relative"
          >
            {/* CLOSE */}

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* STEPPER */}

            <div className="flex items-center gap-3 mb-6">
              <div
                className={`h-2 flex-1 rounded ${
                  step >= 1 ? "bg-[#D4A13E]" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-2 flex-1 rounded ${
                  step >= 2 ? "bg-[#D4A13E]" : "bg-gray-200"
                }`}
              />
            </div>

            {/* STEP CONTENT */}

            {step === 1 && (
              <>
                {/* TITLE */}

                <h2 className="text-xl md:text-2xl font-bold text-[#1A2B4C]">
                  Energy Savings Calculator
                </h2>

                <p className="text-gray-600 mt-2 mb-6 text-sm md:text-base">
                  Estimate how much your business could save by switching from
                  diesel generators to solar hybrid energy.
                </p>

                {/* SLIDER */}

                <div className="mb-8">
                  <label className="text-sm text-gray-600">
                    Monthly Diesel Spend
                  </label>

                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="100"
                    value={dieselSpend}
                    onChange={(e) =>
                      setDieselSpend(Number(e.target.value))
                    }
                    className="w-full mt-3 accent-[#D4A13E]"
                  />

                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$500</span>
                    <span>$20,000</span>
                  </div>
                </div>

                {/* RESULTS */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                  <div className="bg-[#F5F0E8] p-5 rounded-xl">
                    <p className="text-xs text-gray-500">
                      Current Diesel Spend
                    </p>
                    <p className="text-xl font-bold text-[#1A2B4C]">
                      ${dieselSpend.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-[#1A2B4C] text-white p-5 rounded-xl">
                    <p className="text-xs text-white/70">
                      Estimated Savings
                    </p>
                    <p className="text-xl font-bold text-[#D4A13E]">
                      ${savings.toLocaleString()}
                    </p>
                  </div>

                  <div className="sm:col-span-2 bg-[#F5F0E8] p-5 rounded-xl">
                    <p className="text-xs text-gray-500">
                      Estimated Annual Savings
                    </p>
                    <p className="text-2xl font-bold text-[#1A2B4C]">
                      ${yearly.toLocaleString()}
                    </p>
                  </div>

                </div>

                {/* NEXT */}

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#D4A13E] text-black py-3 rounded-lg font-medium hover:bg-[#c89435]"
                >
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-[#1A2B4C]">
                  Request Energy Assessment
                </h2>

                <p className="text-gray-600 mt-2 mb-6 text-sm md:text-base">
                  Leave your details and our energy specialists will contact
                  you with a customized solar hybrid solution.
                </p>

                {/* FORM */}

                <form className="space-y-4">

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <textarea
                    placeholder="Tell us about your energy needs"
                    className="w-full border rounded-lg px-4 py-3"
                    rows={3}
                  />

                  {/* BUTTONS */}

                  <div className="flex gap-3 pt-2">

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gray-300 py-3 rounded-lg"
                    >
                      Previous
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-[#1A2B4C] text-white py-3 rounded-lg hover:bg-[#0f1d36]"
                    >
                      Submit
                    </button>

                  </div>

                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}