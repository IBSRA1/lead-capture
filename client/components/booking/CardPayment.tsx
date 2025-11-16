import { CreditCard } from "lucide-react";
import { useState } from "react";

interface CardPaymentProps {
  onConfirm: (transactionId: string) => void;
  onBack: () => void;
}

export default function CardPayment({ onConfirm, onBack }: CardPaymentProps) {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      if (formattedValue.length > 19) return;
    }
    if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }
    if (field === "expiryMonth") {
      const num = parseInt(value) || 0;
      if (num > 12) return;
      formattedValue = value.replace(/\D/g, "").slice(0, 2);
    }
    if (field === "expiryYear") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setCardData((prev) => ({ ...prev, [field]: formattedValue }));
  };

  const validateCard = () => {
    const cardNumberDigits = cardData.cardNumber.replace(/\s/g, "");
    return (
      cardNumberDigits.length === 16 &&
      cardData.cardholderName.length > 0 &&
      cardData.expiryMonth &&
      cardData.expiryYear &&
      cardData.cvv.length === 3
    );
  };

  const handleSubmit = async () => {
    if (!validateCard()) return;

    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const transactionId = `CC-${Date.now()}`;
      onConfirm(transactionId);
    } finally {
      setIsProcessing(false);
    }
  };

  const maskCardNumber = (value: string) => {
    const digits = value.replace(/\s/g, "");
    if (digits.length <= 4) return digits;
    return `**** **** **** ${digits.slice(-4)}`;
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <CreditCard className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Card Payment
        </h2>
      </div>

      <div className="mb-8 p-6 bg-cream rounded-xl">
        <h3 className="font-poppins font-bold text-dark-black mb-6">
          Enter Your Card Details
        </h3>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Card Number <span className="text-coral">*</span>
            </label>
            <input
              type="text"
              value={cardData.cardNumber}
              onChange={(e) => handleInputChange("cardNumber", e.target.value)}
              placeholder="1234 5678 9012 3456"
              className={`w-full px-4 py-3 border-2 rounded-lg font-mono focus:outline-none transition-colors ${
                cardData.cardNumber && cardData.cardNumber.replace(/\s/g, "").length !== 16
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              maxLength={19}
            />
            {cardData.cardNumber &&
              cardData.cardNumber.replace(/\s/g, "").length !== 16 && (
                <p className="text-xs text-coral font-inter mt-1">
                  Card number must be 16 digits
                </p>
              )}
          </div>

          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Cardholder Name <span className="text-coral">*</span>
            </label>
            <input
              type="text"
              value={cardData.cardholderName}
              onChange={(e) => handleInputChange("cardholderName", e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
                Month <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                value={cardData.expiryMonth}
                onChange={(e) => handleInputChange("expiryMonth", e.target.value)}
                placeholder="MM"
                className={`w-full px-4 py-3 border-2 rounded-lg font-mono text-center focus:outline-none transition-colors ${
                  cardData.expiryMonth && parseInt(cardData.expiryMonth) > 12
                    ? "border-coral focus:border-coral"
                    : "border-gray-200 focus:border-soft-blue"
                }`}
                maxLength={2}
              />
            </div>
            <div>
              <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
                Year <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                value={cardData.expiryYear}
                onChange={(e) => handleInputChange("expiryYear", e.target.value)}
                placeholder="YYYY"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-mono text-center focus:outline-none focus:border-soft-blue transition-colors"
                maxLength={4}
              />
            </div>
            <div>
              <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
                CVV <span className="text-coral">*</span>
              </label>
              <input
                type="password"
                value={cardData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                placeholder="***"
                className={`w-full px-4 py-3 border-2 rounded-lg font-mono text-center focus:outline-none transition-colors ${
                  cardData.cvv && cardData.cvv.length !== 3
                    ? "border-coral focus:border-coral"
                    : "border-gray-200 focus:border-soft-blue"
                }`}
                maxLength={4}
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border-l-4 border-soft-blue rounded-lg mb-6">
          <p className="text-sm text-dark-black font-inter mb-2">
            <span className="font-semibold">Total Amount:</span> $499.00
          </p>
          <p className="text-xs text-dark-black/60 font-inter">
            Your payment is secure and encrypted. We do not store your card details.
          </p>
        </div>

        {cardData.cardNumber && (
          <div className="p-4 bg-white rounded-lg border-2 border-gray-200 mb-6">
            <p className="text-xs text-dark-black/60 font-inter mb-2">
              Card Preview
            </p>
            <p className="font-mono text-dark-black font-semibold">
              {maskCardNumber(cardData.cardNumber)}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          disabled={isProcessing}
          className="flex-1 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!validateCard() || isProcessing}
          className="flex-1 px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <span className="inline-block animate-spin">⏳</span>
              Processing...
            </>
          ) : (
            "Complete Payment"
          )}
        </button>
      </div>
    </div>
  );
}
