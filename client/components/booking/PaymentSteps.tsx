import { QrCode, CreditCard, MessageCircle } from "lucide-react";
import { useState } from "react";

interface PaymentStepsProps {
  paymentMethod: string;
  onConfirm: () => void;
  onBack: () => void;
}

export default function PaymentSteps({
  paymentMethod,
  onConfirm,
  onBack,
}: PaymentStepsProps) {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const methodName =
    paymentMethod === "vodafone"
      ? "Vodafone Cash"
      : paymentMethod === "endc"
        ? "e& Cash"
        : "InstaPay";

  const steps = [
    {
      number: 1,
      title: "Scan QR Code",
      description: "A QR code will be displayed for you to scan using your phone camera",
      icon: QrCode,
    },
    {
      number: 2,
      title: "Complete Payment",
      description: "Follow the payment app instructions to complete your transaction",
      icon: CreditCard,
    },
    {
      number: 3,
      title: "Confirm with WhatsApp",
      description: "Scan a WhatsApp QR code to send us your payment confirmation",
      icon: MessageCircle,
    },
  ];

  const handleNextStep = () => {
    if (activeStep === 1) setActiveStep(2);
    else if (activeStep === 2) setActiveStep(3);
    else if (activeStep === 3) onConfirm();
  };

  const currentStepData = steps[activeStep - 1];
  const StepIcon = currentStepData.icon;

  return (
      <div>
        <div className="flex items-center gap-3 mb-8">
          <StepIcon className="text-soft-blue" size={28} />
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
            {currentStepData.title}
          </h2>
        </div>

        <div className="mb-8 p-8 bg-cream rounded-xl text-center">
          <StepIcon className="mx-auto mb-6 text-soft-blue" size={64} />
          <p className="text-lg text-dark-black/80 font-inter mb-4">
            {currentStepData.description}
          </p>
          {activeStep === 1 && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-sm text-dark-black/60 font-inter mb-3">
                QR Code would be displayed here
              </p>
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-dark-black/40 font-inter">QR Code</span>
              </div>
            </div>
          )}
          {activeStep === 2 && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-sm text-dark-black/60 font-inter">
                Complete the payment in your {methodName} app
              </p>
            </div>
          )}
          {activeStep === 3 && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-sm text-dark-black/60 font-inter mb-3">
                WhatsApp QR Code would be displayed here
              </p>
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-dark-black/40 font-inter">WhatsApp QR</span>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-soft-blue rounded">
          <p className="text-sm text-dark-black font-inter">
            <span className="font-semibold">Step {activeStep} of 3:</span>{" "}
            {currentStepData.description}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {
              if (activeStep > 1) setActiveStep((activeStep - 1) as 1 | 2 | 3);
              else onBack();
            }}
            className="flex-1 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all"
          >
            {activeStep === 1 ? "Back" : "Previous"}
          </button>
          <button
            onClick={handleNextStep}
            className="flex-1 px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all"
          >
            {activeStep === 3 ? "Complete Payment" : "Next"}
          </button>
        </div>
      </div>
  );
}
