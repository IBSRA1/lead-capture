import { CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import type { BookingData } from "../../pages/Booking";

interface OrderSummaryProps {
  formData: BookingData;
  paymentMethod: string;
  onConfirm: () => void;
  onBack: () => void;
}

const paymentMethods = [
  { id: "vodafone", name: "Vodafone Cash" },
  { id: "endc", name: "e& Cash" },
  { id: "instapay", name: "InstaPay" },
  { id: "visa", name: "Visa/Mastercard" },
  { id: "cod", name: "Cash on Delivery" },
];

export default function OrderSummary({
  formData,
  paymentMethod,
  onConfirm,
  onBack,
}: OrderSummaryProps) {
  const [understood, setUnderstood] = useState(false);
  const methodName =
    paymentMethods.find((m) => m.id === paymentMethod)?.name || paymentMethod;

  const firstSession = formData.session.sessions[0];
  const lastSession = formData.session.sessions[formData.session.sessions.length - 1];
  
  const basePrice = 499;
  const instapayDiscount = paymentMethod === "instapay" ? basePrice * 0.1 : 0;
  const totalAmount = basePrice - instapayDiscount;

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <CheckCircle className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Please review the payment process before continuing:
        </h2>
      </div>

      <div className="space-y-6">
        {/* Student Information */}
        <div className="p-6 bg-cream rounded-xl border-2 border-gray-200">
          <h3 className="font-poppins font-bold text-dark-black mb-4">
            Student Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Name
              </p>
              <p className="font-inter text-dark-black">
                {formData.student.firstName} {formData.student.secondName}{" "}
                {formData.student.thirdName} {formData.student.fourthName}
              </p>
            </div>
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Age
              </p>
              <p className="font-inter text-dark-black">
                {formData.student.age} years old
              </p>
            </div>
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Gender
              </p>
              <p className="font-inter text-dark-black">
                {formData.student.gender}
              </p>
            </div>
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Location
              </p>
              <p className="font-inter text-dark-black">
                {formData.city ? `${formData.city}, ${formData.country}` : formData.country}
              </p>
            </div>
          </div>
        </div>

        {/* Program Schedule */}
        <div className="p-6 bg-cream rounded-xl border-2 border-gray-200">
          <h3 className="font-poppins font-bold text-dark-black mb-4">
            Program Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Total Sessions
              </p>
              <p className="font-inter text-dark-black text-lg font-semibold">
                {formData.session.sessions.length} sessions
              </p>
            </div>
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Duration
              </p>
              <p className="font-inter text-dark-black text-lg font-semibold">
                {formData.session.sessions.length > 1
                  ? `${(formData.session.sessions.length - 1) * 7} days`
                  : "1 day"}
              </p>
            </div>
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                Start Date
              </p>
              <p className="font-inter text-dark-black">
                {firstSession?.date}
              </p>
            </div>
            <div>
              <p className="text-xs text-dark-black/60 font-inter mb-1">
                End Date
              </p>
              <p className="font-inter text-dark-black">
                {lastSession?.date}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-dark-black/60 font-inter mb-1">
              Session Time
            </p>
            <p className="font-inter text-dark-black font-semibold">
              {formData.session.startTime}
            </p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="p-6 bg-cream rounded-xl border-2 border-gray-200">
          <h3 className="font-poppins font-bold text-dark-black mb-4">
            Payment Information
          </h3>
          <div>
            <p className="text-xs text-dark-black/60 font-inter mb-1">
              Payment Method
            </p>
            <p className="font-inter text-dark-black font-semibold text-lg">
              {methodName}
            </p>
          </div>
        </div>

        {/* Price Summary */}
        <div className="p-6 bg-white border-2 border-gray-200 rounded-xl">
          <h3 className="font-poppins font-bold text-dark-black mb-4">
            Price Summary
          </h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-dark-black font-inter">
                Program Fee ({formData.session.sessions.length} sessions)
              </span>
              <span className="font-poppins font-semibold text-dark-black">
                $499
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-dark-black font-inter">
                Registration Fee
              </span>
              <span className="font-poppins font-semibold text-dark-black">
                $0
              </span>
            </div>
            {paymentMethod === "instapay" && (
              <div className="flex justify-between items-center text-green-600">
                <span className="font-inter">InstaPay Discount (10%)</span>
                <span className="font-poppins font-semibold">-${instapayDiscount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t-2 border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-poppins font-bold text-dark-black text-lg">
                  Total Amount
                </span>
                <span className="font-poppins font-bold text-soft-blue text-2xl">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-dark-black/60 font-inter">
            <span>🔒</span>
            <span>Your payment is secure and encrypted</span>
          </div>
        </div>

        {/* Confirmation Checkbox */}
        <div className="p-4 bg-cream rounded-lg border-2 border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={understood}
              onChange={(e) => setUnderstood(e.target.checked)}
              className="mt-1 w-5 h-5 text-soft-blue rounded border-gray-300 focus:ring-soft-blue cursor-pointer"
            />
            <span className="text-sm font-inter text-dark-black">
              I understand the payment process and confirm I'm ready to proceed
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          disabled={!understood}
          className="flex-1 px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Payment
        </button>
      </div>
    </div>
  );
}
