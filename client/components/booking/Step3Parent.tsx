import { Users } from "lucide-react";
import type { BookingData } from "../../pages/Booking";

interface Step3Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

export default function Step3Parent({
  formData,
  updateFormData,
}: Step3Props) {
  const validateNationalId = (id: string): boolean => {
    const digitsOnly = id.replace(/\D/g, "");
    return digitsOnly.length === 14;
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 10;
  };

  const handleParentChange = (
    parent: "dad" | "mom",
    field: string,
    value: string
  ) => {
    updateFormData({
      parent: {
        ...formData.parent,
        [parent]: {
          ...formData.parent[parent],
          [field]: value,
        },
      },
    });
  };

  const handleAddressChange = (value: string) => {
    updateFormData({
      parent: {
        ...formData.parent,
        address: value,
      },
    });
  };

  const hasDadInfo =
    formData.parent.dad.nationalId ||
    formData.parent.dad.whatsapp ||
    formData.parent.dad.phone;

  const hasMomInfo =
    formData.parent.mom.nationalId ||
    formData.parent.mom.fullName ||
    formData.parent.mom.whatsapp ||
    formData.parent.mom.phone;

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Users className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Parent Information
        </h2>
      </div>

      {/* Father Information */}
      <div className="mb-8 p-6 bg-cream rounded-xl">
        <h3 className="text-xl font-poppins font-bold text-dark-black mb-4">
          Father
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              National ID
            </label>
            <input
              type="text"
              value={formData.parent.dad.nationalId}
              onChange={(e) =>
                handleParentChange("dad", "nationalId", e.target.value)
              }
              className={`w-full px-4 py-2 border-2 rounded-lg font-inter focus:outline-none transition-colors ${
                formData.parent.dad.nationalId &&
                !validateNationalId(formData.parent.dad.nationalId)
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              placeholder="National ID (14 digits)"
            />
            {formData.parent.dad.nationalId &&
              !validateNationalId(formData.parent.dad.nationalId) && (
                <p className="text-xs text-coral font-inter mt-1">
                  National ID must be 14 digits
                </p>
              )}
          </div>
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              value={formData.parent.dad.whatsapp}
              onChange={(e) =>
                handleParentChange("dad", "whatsapp", e.target.value)
              }
              className={`w-full px-4 py-2 border-2 rounded-lg font-inter focus:outline-none transition-colors ${
                formData.parent.dad.whatsapp &&
                !validatePhoneNumber(formData.parent.dad.whatsapp)
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              placeholder="WhatsApp number (at least 10 digits)"
            />
            {formData.parent.dad.whatsapp &&
              !validatePhoneNumber(formData.parent.dad.whatsapp) && (
                <p className="text-xs text-coral font-inter mt-1">
                  WhatsApp number must be at least 10 digits
                </p>
              )}
          </div>
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.parent.dad.phone}
              onChange={(e) =>
                handleParentChange("dad", "phone", e.target.value)
              }
              className={`w-full px-4 py-2 border-2 rounded-lg font-inter focus:outline-none transition-colors ${
                formData.parent.dad.phone &&
                !validatePhoneNumber(formData.parent.dad.phone)
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              placeholder="Phone number (at least 10 digits)"
            />
            {formData.parent.dad.phone &&
              !validatePhoneNumber(formData.parent.dad.phone) && (
                <p className="text-xs text-coral font-inter mt-1">
                  Phone number must be at least 10 digits
                </p>
              )}
          </div>
        </div>
      </div>

      {/* Mother Information */}
      <div className="mb-8 p-6 bg-cream rounded-xl">
        <h3 className="text-xl font-poppins font-bold text-dark-black mb-4">
          Mother
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              National ID
            </label>
            <input
              type="text"
              value={formData.parent.mom.nationalId}
              onChange={(e) =>
                handleParentChange("mom", "nationalId", e.target.value)
              }
              className={`w-full px-4 py-2 border-2 rounded-lg font-inter focus:outline-none transition-colors ${
                formData.parent.mom.nationalId &&
                !validateNationalId(formData.parent.mom.nationalId)
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              placeholder="National ID (14 digits)"
            />
            {formData.parent.mom.nationalId &&
              !validateNationalId(formData.parent.mom.nationalId) && (
                <p className="text-xs text-coral font-inter mt-1">
                  National ID must be 14 digits
                </p>
              )}
          </div>
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.parent.mom.fullName}
              onChange={(e) =>
                handleParentChange("mom", "fullName", e.target.value)
              }
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              value={formData.parent.mom.whatsapp}
              onChange={(e) =>
                handleParentChange("mom", "whatsapp", e.target.value)
              }
              className={`w-full px-4 py-2 border-2 rounded-lg font-inter focus:outline-none transition-colors ${
                formData.parent.mom.whatsapp &&
                !validatePhoneNumber(formData.parent.mom.whatsapp)
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              placeholder="WhatsApp number (at least 10 digits)"
            />
            {formData.parent.mom.whatsapp &&
              !validatePhoneNumber(formData.parent.mom.whatsapp) && (
                <p className="text-xs text-coral font-inter mt-1">
                  WhatsApp number must be at least 10 digits
                </p>
              )}
          </div>
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.parent.mom.phone}
              onChange={(e) =>
                handleParentChange("mom", "phone", e.target.value)
              }
              className={`w-full px-4 py-2 border-2 rounded-lg font-inter focus:outline-none transition-colors ${
                formData.parent.mom.phone &&
                !validatePhoneNumber(formData.parent.mom.phone)
                  ? "border-coral focus:border-coral"
                  : "border-gray-200 focus:border-soft-blue"
              }`}
              placeholder="Phone number (at least 10 digits)"
            />
            {formData.parent.mom.phone &&
              !validatePhoneNumber(formData.parent.mom.phone) && (
                <p className="text-xs text-coral font-inter mt-1">
                  Phone number must be at least 10 digits
                </p>
              )}
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="mb-6">
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
          Full Address <span className="text-coral">*</span>
        </label>
        <textarea
          value={formData.parent.address}
          onChange={(e) => handleAddressChange(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          placeholder="Enter full address"
          rows={4}
        />
      </div>

      {/* Validation Notice */}
      {!hasDadInfo && !hasMomInfo && (
        <div className="p-4 bg-coral/10 border-2 border-coral rounded-lg">
          <p className="text-sm text-coral font-inter">
            ⚠️ Please fill in at least one parent's information.
          </p>
        </div>
      )}
    </div>
  );
}
