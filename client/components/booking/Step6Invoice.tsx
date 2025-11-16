import { useEffect, useState } from "react";
import { CheckCircle, Download, Mail, Printer, Home } from "lucide-react";
import { Link } from "react-router-dom";
import type { BookingData } from "../../pages/Booking";

interface Step6Props {
  formData: BookingData;
}

export default function Step6Invoice({ formData }: Step6Props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [invoiceNumber] = useState(
    `INV-${Date.now().toString().slice(-6).toUpperCase()}`
  );
  const bookingDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowSuccess(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadPDF = () => {
    const invoiceContent = `
LearnHub Invoice
Invoice Number: ${invoiceNumber}
Date: ${bookingDate}

PROGRAM INFORMATION
Program: Coding 101
Description: Learn the basics of programming with block-based coding and interactive projects.
Age: 10-13
Fee: $499.00

STUDENT INFORMATION
Name: ${formData.student.firstName} ${formData.student.secondName} ${formData.student.thirdName} ${formData.student.fourthName}
Age: ${formData.student.age}
Gender: ${formData.student.gender}

PARENT INFORMATION
Country: ${formData.country}
Address: ${formData.parent.address}

PAYMENT INFORMATION
Method: ${formData.payment.method}
Transaction ID: ${formData.payment.transactionId}
Amount: $499.00
Date: ${bookingDate}

Thank you for enrolling with LearnHub!
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(invoiceContent)
    );
    element.setAttribute("download", `${invoiceNumber}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      {/* Success Animation */}
      {showSuccess && (
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <CheckCircle
                className="text-soft-blue w-full h-full animate-bounce"
                fill="currentColor"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-black mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-lg text-dark-black/70 font-inter mb-4">
            Your enrollment has been successfully processed
          </p>
          <p className="text-sm text-dark-black/50 font-inter">
            Confirmation email has been sent to you and your parents
          </p>
        </div>
      )}

      {/* Invoice Section */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8">
        <div className="mb-8">
          <h3 className="text-2xl font-poppins font-bold text-dark-black mb-2">
            LearnHub
          </h3>
          <p className="text-dark-black/60 font-inter">
            Empowering Young Minds Through Quality Education
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b-2 border-gray-200">
          <div>
            <p className="text-xs text-dark-black/60 font-inter mb-1">
              Invoice Number
            </p>
            <p className="font-poppins font-bold text-dark-black">
              {invoiceNumber}
            </p>
          </div>
          <div>
            <p className="text-xs text-dark-black/60 font-inter mb-1">
              Invoice Date
            </p>
            <p className="font-poppins font-bold text-dark-black">
              {bookingDate}
            </p>
          </div>
        </div>

        {/* Program Information */}
        <div className="mb-8">
          <h4 className="font-poppins font-bold text-dark-black mb-4">
            Program Information
          </h4>
          <div className="space-y-2 text-dark-black font-inter">
            <div className="flex justify-between">
              <span>Program:</span>
              <span className="font-semibold">Coding 101</span>
            </div>
            <div className="flex justify-between">
              <span>Age Group:</span>
              <span className="font-semibold">10-13 years</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="font-semibold">2 months</span>
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="mb-8">
          <h4 className="font-poppins font-bold text-dark-black mb-4">
            Student Information
          </h4>
          <div className="space-y-2 text-dark-black font-inter">
            <div className="flex justify-between">
              <span>Name:</span>
              <span className="font-semibold">
                {formData.student.firstName} {formData.student.secondName}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Age:</span>
              <span className="font-semibold">{formData.student.age}</span>
            </div>
            <div className="flex justify-between">
              <span>Gender:</span>
              <span className="font-semibold">{formData.student.gender}</span>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-8 pb-8 border-b-2 border-gray-200">
          <h4 className="font-poppins font-bold text-dark-black mb-4">
            Payment Information
          </h4>
          <div className="space-y-2 text-dark-black font-inter">
            <div className="flex justify-between">
              <span>Payment Method:</span>
              <span className="font-semibold">{formData.payment.method}</span>
            </div>
            <div className="flex justify-between">
              <span>Transaction ID:</span>
              <span className="font-semibold">
                {formData.payment.transactionId}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Amount:</span>
              <span className="font-semibold">$499.00</span>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-8 p-4 bg-cream rounded-lg">
          <span className="font-poppins font-bold text-dark-black text-lg">
            Total Amount Paid:
          </span>
          <span className="font-poppins font-bold text-soft-blue text-2xl">
            $499.00
          </span>
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-blue-50 border-2 border-soft-blue rounded-lg">
          <p className="text-sm text-dark-black font-inter">
            ✓ Thank you for your enrollment! You'll receive a confirmation email with next steps and program details.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all"
        >
          <Download size={20} />
          Download PDF
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all">
          <Mail size={20} />
          Email Invoice
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all">
          <Printer size={20} />
          Print
        </button>
      </div>

      {/* Return Home Button */}
      <Link
        to="/"
        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all"
      >
        <Home size={20} />
        Return to Home
      </Link>
    </div>
  );
}
