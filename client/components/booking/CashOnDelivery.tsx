import { MapPin, Home } from "lucide-react";
import { useState } from "react";

interface CashOnDeliveryProps {
  address: string;
  onAddressChange: (address: string) => void;
  onConfirm: (transactionId: string) => void;
  onBack: () => void;
}

export default function CashOnDelivery({
  address,
  onAddressChange,
  onConfirm,
  onBack,
}: CashOnDeliveryProps) {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [showMap, setShowMap] = useState(false);

  const handleSelectLocation = () => {
    setShowMap(true);
  };

  const handleMapClick = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
  };

  const handleConfirm = () => {
    if (address && selectedLocation) {
      const transactionId = `COD-${Date.now()}`;
      onConfirm(transactionId);
    }
  };

  const isComplete = address && selectedLocation;

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Home className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Cash on Delivery
        </h2>
      </div>

      <div className="mb-8 p-6 bg-cream rounded-xl">
        <h3 className="font-poppins font-bold text-dark-black mb-6">
          Delivery Address
        </h3>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Full Address <span className="text-coral">*</span>
            </label>
            <textarea
              value={address}
              onChange={(e) => onAddressChange(e.target.value)}
              placeholder="Enter your complete delivery address (street, building, city, postal code)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
              rows={4}
            />
            <p className="text-xs text-dark-black/60 font-inter mt-2">
              Please include street, building number, apartment/flat number, city, and postal code
            </p>
          </div>

          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-3">
              Location on Map <span className="text-coral">*</span>
            </label>
            {!showMap ? (
              <button
                onClick={handleSelectLocation}
                className="w-full px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Select Location on Map
              </button>
            ) : (
              <div className="space-y-3">
                <div className="w-full h-80 bg-gray-100 rounded-lg border-2 border-gray-300 flex items-center justify-center relative overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-center p-4"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const lat = 30 + Math.random() * 2;
                      const lng = 31 + Math.random() * 2;
                      handleMapClick(lat, lng);
                    }}
                  >
                    <div>
                      <p className="text-dark-black/60 font-inter text-sm mb-2">
                        Google Maps would be integrated here
                      </p>
                      <p className="text-dark-black/40 font-inter text-xs">
                        Click anywhere on this area to select a location
                      </p>
                      <p className="text-dark-black/40 font-inter text-xs mt-2">
                        (In production, this would be a real map)
                      </p>
                    </div>
                  </div>
                </div>
                {selectedLocation && (
                  <div className="p-3 bg-white rounded-lg border-2 border-soft-blue">
                    <p className="text-xs text-dark-black/60 font-inter mb-1">
                      Selected Location:
                    </p>
                    <p className="font-mono text-sm text-dark-black">
                      Latitude: {selectedLocation.lat.toFixed(4)}, Longitude:{" "}
                      {selectedLocation.lng.toFixed(4)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 bg-blue-50 border-l-4 border-soft-blue rounded-lg mb-6">
          <p className="text-sm text-dark-black font-inter mb-2">
            <span className="font-semibold">Total Amount:</span> $499.00
          </p>
          <p className="text-xs text-dark-black/60 font-inter">
            You will pay in cash when your order is delivered
          </p>
        </div>

        {isComplete && (
          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <p className="text-sm text-green-700 font-inter">
              ✓ Delivery address and location confirmed
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          disabled={!isComplete}
          className="flex-1 px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
