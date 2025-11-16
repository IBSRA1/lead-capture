import { CreditCard } from "lucide-react";
import type { BookingData } from "../../pages/Booking";
import PaymentSteps from "./PaymentSteps";
import CardPayment from "./CardPayment";
import CashOnDelivery from "./CashOnDelivery";
import OrderSummary from "./OrderSummary";
import { useState } from "react";

interface Step5Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

const paymentMethods = [
  {
    id: "vodafone",
    name: "Vodafone Cash",
    description: "Pay using Vodafone Cash",
    icon: "📱",
    type: "mobile",
  },
  {
    id: "endc",
    name: "e& Cash",
    description: "Pay using e& Cash",
    icon: "💳",
    type: "mobile",
  },
  {
    id: "instapay",
    name: "InstaPay",
    description: "Pay using InstaPay",
    icon: "🏦",
    type: "mobile",
    discount: 10, // 10% discount
  },
  {
    id: "visa",
    name: "Visa/Mastercard",
    description: "Pay using debit or credit card",
    icon: "💳",
    type: "card",
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when you receive your order",
    icon: "🏠",
    type: "delivery",
  },
];

export default function Step5Payment({
  formData,
  updateFormData,
}: Step5Props) {
  const [showSummary, setShowSummary] = useState(false);
  const [currentPaymentFlow, setCurrentPaymentFlow] = useState<string | null>(
    null
  );

  const handlePaymentMethodSelect = (method: string) => {
    updateFormData({
      payment: {
        ...formData.payment,
        method,
      },
    });
    // Show review screen immediately after selecting payment method
    setShowSummary(true);
  };

  const handleStartPaymentFlow = () => {
    if (formData.payment.method) {
      setShowSummary(true);
    }
  };

  const handleContinueToPayment = () => {
    setShowSummary(false);
    setCurrentPaymentFlow(formData.payment.method);
  };

  const handleBackFromSummary = () => {
    setShowSummary(false);
  };

  const handlePaymentConfirm = (transactionId: string) => {
    updateFormData({
      payment: {
        ...formData.payment,
        transactionId,
      },
    });
    setCurrentPaymentFlow(null);
  };

  const handlePaymentBack = () => {
    setCurrentPaymentFlow(null);
  };

  const handleAddressChange = (address: string) => {
    updateFormData({
      parent: {
        ...formData.parent,
        address,
      },
    });
  };

  if (showSummary && formData.payment.method) {
    return (
      <OrderSummary
        formData={formData}
        paymentMethod={formData.payment.method}
        onConfirm={handleContinueToPayment}
        onBack={handleBackFromSummary}
      />
    );
  }

  if (currentPaymentFlow === "vodafone" || currentPaymentFlow === "endc" || currentPaymentFlow === "instapay") {
    return (
      <PaymentSteps
        paymentMethod={currentPaymentFlow}
        onConfirm={() => handlePaymentConfirm(`${currentPaymentFlow.toUpperCase()}-${Date.now()}`)}
        onBack={handlePaymentBack}
      />
    );
  }

  if (currentPaymentFlow === "visa") {
    return (
      <CardPayment
        onConfirm={handlePaymentConfirm}
        onBack={handlePaymentBack}
      />
    );
  }

  if (currentPaymentFlow === "cod") {
    return (
      <CashOnDelivery
        address={formData.parent.address}
        onAddressChange={handleAddressChange}
        onConfirm={handlePaymentConfirm}
        onBack={handlePaymentBack}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <CreditCard className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Payment Method
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="font-poppins font-bold text-dark-black mb-4">
          Select a Payment Method
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handlePaymentMethodSelect(method.id)}
              className={`p-6 rounded-xl border-2 transition-all text-left relative ${
                formData.payment.method === method.id
                  ? "border-soft-blue bg-blue-50 ring-2 ring-soft-blue ring-opacity-50"
                  : "border-gray-200 bg-white hover:border-soft-blue"
              }`}
            >
              {method.id === "instapay" && (
                <span className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-poppins font-bold rounded-md">
                  InstaPay Card
                </span>
              )}
              <div className="flex items-start gap-4">
                <span className="text-3xl">{method.icon}</span>
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-dark-black mb-1">
                    {method.name}
                  </h3>
                  <p className="text-sm text-dark-black/60 font-inter">
                    {method.description}
                  </p>
                  {method.discount && formData.payment.method === method.id && (
                    <p className="text-sm text-green-600 font-poppins font-semibold mt-2">
                      🎉 {method.discount}% Discount Applied!
                    </p>
                  )}
                </div>
                <div className="ml-2">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.payment.method === method.id
                        ? "border-soft-blue bg-soft-blue"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.payment.method === method.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>


      <div className="p-6 bg-white border-2 border-gray-200 rounded-xl">
        <h3 className="font-poppins font-bold text-dark-black mb-4">
          Price Summary
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-dark-black font-inter">Program Fee</span>
            <span className="font-poppins font-semibold text-dark-black">$499</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-dark-black font-inter">Registration Fee</span>
            <span className="font-poppins font-semibold text-dark-black">$0</span>
          </div>
          {formData.payment.method === "instapay" && (
            <div className="flex justify-between items-center text-green-600">
              <span className="font-inter">InstaPay Discount (10%)</span>
              <span className="font-poppins font-semibold">-$49.90</span>
            </div>
          )}
          <div className="border-t-2 border-gray-200 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-poppins font-bold text-dark-black">
                Total Amount
              </span>
              <span className="font-poppins font-bold text-soft-blue text-lg">
                ${formData.payment.method === "instapay" ? "449.10" : "499"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-dark-black/60 font-inter">
          <span>🔒</span>
          <span>Your payment is secure and encrypted</span>
        </div>
      </div>
    </div>
  );
}
