"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, PRACTICE } from "@/lib/constants";

interface FormData {
  service: string;
  preferredDate: string;
  preferredTime: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  insurance: string;
  notes: string;
}

const timeSlots = [
  { value: "morning", label: "Morning", detail: "8:00 – 10:00 AM" },
  { value: "midday", label: "Midday", detail: "10:00 AM – 12:00 PM" },
  { value: "afternoon", label: "Afternoon", detail: "12:00 – 3:00 PM" },
];

const allServices = [
  ...SERVICES.map((s) => ({ value: s.slug, label: s.name })),
  { value: "general", label: "General / Walk-In" },
  { value: "other", label: "Other / Not Sure" },
];

interface AppointmentFormProps {
  compact?: boolean;
}

export default function AppointmentForm({ compact = false }: AppointmentFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      service: "",
      preferredDate: "",
      preferredTime: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      insurance: "",
      notes: "",
    },
  });

  const selectedService = watch("service");
  const selectedTime = watch("preferredTime");

  const totalSteps = compact ? 1 : 4;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // fail silently for now
    }
    setIsSubmitting(false);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-5">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
          Request Received!
        </h3>
        <p className="text-navy-600 max-w-md mx-auto">
          We&apos;ll call you within 1 business hour to confirm your appointment.
          For immediate assistance, call{" "}
          <a href={PRACTICE.phoneHref} className="text-teal-600 font-semibold hover:underline">
            {PRACTICE.phone}
          </a>.
        </p>
      </motion.div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              {...register("firstName", { required: true })}
              placeholder="First Name *"
              className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>
          <div>
            <input
              {...register("phone", { required: true })}
              placeholder="Phone Number *"
              type="tel"
              className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>
        </div>
        <select
          {...register("service")}
          className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
        >
          <option value="">Select a service (optional)</option>
          {allServices.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3.5 bg-amber-600 text-white font-heading font-semibold rounded-xl shadow-lg shadow-amber-600/20 hover:bg-amber-700 transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Request Appointment"}
        </button>
        <p className="text-xs text-navy-500 text-center">
          We&apos;ll call you within 1 business hour to confirm.
        </p>
      </form>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex-1 flex items-center gap-2">
            <div
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                i + 1 <= step ? "bg-teal-500" : "bg-navy-100"
              }`}
            />
          </div>
        ))}
        <span className="text-xs text-navy-500 font-medium ml-2">
          Step {step} of {totalSteps}
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
                What do you need help with?
              </h3>
              <p className="text-navy-600 text-sm mb-6">
                Select a service below. Not sure? Pick &ldquo;Other&rdquo; and we&apos;ll help you figure it out.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allServices.map((service) => (
                  <button
                    key={service.value}
                    type="button"
                    onClick={() => {
                      setValue("service", service.value);
                      nextStep();
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                      selectedService === service.value
                        ? "border-teal-500 bg-teal-50 text-teal-800"
                        : "border-navy-100 hover:border-navy-200 hover:bg-navy-50 text-navy-700"
                    }`}
                  >
                    <span className="font-heading font-semibold text-sm">{service.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date/Time */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
                When works best for you?
              </h3>
              <p className="text-navy-600 text-sm mb-6">
                Pick your preferred date and time of day. We&apos;ll confirm availability when we call.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Preferred Date
                  </label>
                  <input
                    {...register("preferredDate", { required: true })}
                    type="date"
                    min={today}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  />
                  {errors.preferredDate && (
                    <p className="text-red-500 text-xs mt-1">Please select a date</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => setValue("preferredTime", slot.value)}
                        className={`p-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                          selectedTime === slot.value
                            ? "border-teal-500 bg-teal-50"
                            : "border-navy-100 hover:border-navy-200"
                        }`}
                      >
                        <div className="font-heading font-semibold text-sm text-navy-800">{slot.label}</div>
                        <div className="text-xs text-navy-500 mt-0.5">{slot.detail}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 text-navy-600 font-heading font-semibold rounded-xl hover:bg-navy-50 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 px-6 py-3 bg-teal-600 text-white font-heading font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-[0.98] cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
                Your contact information
              </h3>
              <p className="text-navy-600 text-sm mb-6">
                We&apos;ll call you to confirm your appointment. Your info is safe and never shared.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                      First Name *
                    </label>
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    {...register("phone", { required: "Phone number is required" })}
                    type="tel"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="(610) 555-0123"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                    Email (optional)
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                    Insurance Provider (optional)
                  </label>
                  <input
                    {...register("insurance")}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="e.g., Blue Shield, Delta Dental"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    {...register("notes")}
                    rows={3}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                    placeholder="Any concerns, questions, or special needs..."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 text-navy-600 font-heading font-semibold rounded-xl hover:bg-navy-50 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 px-6 py-3 bg-teal-600 text-white font-heading font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-[0.98] cursor-pointer"
                >
                  Review &amp; Submit
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
                Review your request
              </h3>
              <p className="text-navy-600 text-sm mb-6">
                Confirm the details below and we&apos;ll call you to finalize your appointment.
              </p>

              <div className="bg-navy-50 rounded-xl p-5 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-navy-500">Service</span>
                  <span className="font-semibold text-navy-800">
                    {allServices.find((s) => s.value === watch("service"))?.label || "Not selected"}
                  </span>
                </div>
                {watch("preferredDate") && (
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Preferred Date</span>
                    <span className="font-semibold text-navy-800">{watch("preferredDate")}</span>
                  </div>
                )}
                {watch("preferredTime") && (
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Preferred Time</span>
                    <span className="font-semibold text-navy-800 capitalize">{watch("preferredTime")}</span>
                  </div>
                )}
                <div className="border-t border-navy-200 pt-3 flex justify-between text-sm">
                  <span className="text-navy-500">Name</span>
                  <span className="font-semibold text-navy-800">
                    {watch("firstName")} {watch("lastName")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-500">Phone</span>
                  <span className="font-semibold text-navy-800">{watch("phone")}</span>
                </div>
                {watch("email") && (
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Email</span>
                    <span className="font-semibold text-navy-800">{watch("email")}</span>
                  </div>
                )}
                {watch("insurance") && (
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Insurance</span>
                    <span className="font-semibold text-navy-800">{watch("insurance")}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 text-navy-600 font-heading font-semibold rounded-xl hover:bg-navy-50 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                  className="flex-1 px-6 py-3.5 bg-amber-600 text-white font-heading font-semibold rounded-xl hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Appointment Request"
                  )}
                </button>
              </div>

              <p className="text-xs text-navy-500 text-center mt-4">
                By submitting, you agree to be contacted by phone to confirm your appointment.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
