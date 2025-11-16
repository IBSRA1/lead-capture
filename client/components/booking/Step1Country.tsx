import { useState, useRef, useEffect } from "react";
import { Search, Globe, MapPin, ChevronDown } from "lucide-react";
import type { BookingData } from "../../pages/Booking";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
  "South Africa",
  "Egypt",
  "Nigeria",
  "Kenya",
  "Saudi Arabia",
  "United Arab Emirates",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Indonesia",
  "Pakistan",
  "Bangladesh",
];

const countryCities: Record<string, string[]> = {
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
  "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Leeds", "Edinburgh", "Bristol", "Cardiff", "Belfast"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Sunshine Coast", "Wollongong"],
  "Germany": ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
  "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre"],
  "Mexico": ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Juárez", "Torreón", "Querétaro", "San Luis Potosí"],
  "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "East London", "Kimberley", "Polokwane", "Nelspruit"],
  "Egypt": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Mansoura", "Tanta"],
  "Nigeria": ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Benin City", "Kaduna", "Aba", "Maiduguri", "Ilorin"],
  "Kenya": ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega"],
  "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Taif", "Abha", "Tabuk", "Buraydah"],
  "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Kalba"],
  "Singapore": ["Singapore"],
  "Malaysia": ["Kuala Lumpur", "George Town", "Ipoh", "Johor Bahru", "Malacca City", "Kota Kinabalu", "Kuching", "Shah Alam", "Kota Bharu", "Alor Setar"],
  "Thailand": ["Bangkok", "Chiang Mai", "Pattaya", "Phuket", "Hat Yai", "Ubon Ratchathani", "Nakhon Ratchasima", "Khon Kaen", "Surat Thani", "Chonburi"],
  "Vietnam": ["Ho Chi Minh City", "Hanoi", "Da Nang", "Haiphong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Vung Tau", "Quy Nhon"],
  "Philippines": ["Manila", "Quezon City", "Caloocan", "Davao City", "Cebu City", "Zamboanga City", "Antipolo", "Pasig", "Taguig", "Cagayan de Oro"],
  "Indonesia": ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Palembang", "Makassar", "Tangerang", "Depok", "South Tangerang"],
  "Pakistan": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Peshawar", "Hyderabad", "Islamabad", "Quetta"],
  "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Comilla", "Rangpur", "Mymensingh", "Barisal", "Jessore"],
};

interface Step1Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

export default function Step1Country({
  formData,
  updateFormData,
}: Step1Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [citySearchTerm, setCitySearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const availableCities = formData.country ? (countryCities[formData.country] || []) : [];
  const filteredCities = availableCities.filter((city) =>
    city.toLowerCase().includes(citySearchTerm.toLowerCase())
  );

  const handleSelectCountry = (country: string) => {
    updateFormData({ country, city: "" }); // Reset city when country changes
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSelectCity = (city: string) => {
    updateFormData({ city });
    setIsCityOpen(false);
    setCitySearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Globe className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Select Your Country
        </h2>
      </div>

      {/* Custom Dropdown */}
      <div className="mb-6" ref={dropdownRef}>
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
          Country <span className="text-coral">*</span>
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 border-2 rounded-lg font-inter transition-all flex items-center justify-between ${
            formData.country
              ? "border-soft-blue bg-white text-dark-black"
              : "border-gray-200 bg-white text-dark-black/60"
          } hover:border-soft-blue focus:outline-none focus:border-soft-blue`}
        >
          <span className="text-left">
            {formData.country || "Select a country..."}
          </span>
          <ChevronDown
            size={20}
            className={`transition-transform ${
              isOpen ? "rotate-180" : ""
            } text-soft-blue`}
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute mt-2 w-full max-w-2xl bg-white border-2 border-soft-blue rounded-lg shadow-lg z-50">
            {/* Search Box */}
            <div className="p-4 border-b-2 border-gray-200">
              <div className="relative">
                <Search
                  className="absolute left-3 top-3 text-dark-black/40"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
                />
              </div>
            </div>

            {/* Countries List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleSelectCountry(country)}
                    className={`w-full px-4 py-3 text-left font-inter transition-colors border-b border-gray-100 last:border-b-0 ${
                      formData.country === country
                        ? "bg-soft-blue text-white font-semibold"
                        : "bg-white text-dark-black hover:bg-blue-50"
                    }`}
                  >
                    {country}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-dark-black/60 font-inter text-sm">
                    No countries found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* City Dropdown */}
      {formData.country && (
        <div className="mb-6" ref={cityDropdownRef}>
          <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
            City <span className="text-coral">*</span>
          </label>
          <button
            onClick={() => setIsCityOpen(!isCityOpen)}
            className={`w-full px-4 py-3 border-2 rounded-lg font-inter transition-all flex items-center justify-between ${
              formData.city
                ? "border-soft-blue bg-white text-dark-black"
                : "border-gray-200 bg-white text-dark-black/60"
            } hover:border-soft-blue focus:outline-none focus:border-soft-blue`}
          >
            <span className="text-left flex items-center gap-2">
              <MapPin className="text-soft-blue" size={18} />
              {formData.city || "Select a city..."}
            </span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isCityOpen ? "rotate-180" : ""
              } text-soft-blue`}
            />
          </button>

          {/* City Dropdown Content */}
          {isCityOpen && (
            <div className="absolute mt-2 w-full max-w-2xl bg-white border-2 border-soft-blue rounded-lg shadow-lg z-50">
              {/* Search Box */}
              <div className="p-4 border-b-2 border-gray-200">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-3 text-dark-black/40"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search city..."
                    value={citySearchTerm}
                    onChange={(e) => setCitySearchTerm(e.target.value)}
                    autoFocus
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
                  />
                </div>
              </div>

              {/* Cities List */}
              <div className="max-h-64 overflow-y-auto">
                {filteredCities.length > 0 ? (
                  filteredCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleSelectCity(city)}
                      className={`w-full px-4 py-3 text-left font-inter transition-colors border-b border-gray-100 last:border-b-0 ${
                        formData.city === city
                          ? "bg-soft-blue text-white font-semibold"
                          : "bg-white text-dark-black hover:bg-blue-50"
                      }`}
                    >
                      {city}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <p className="text-dark-black/60 font-inter text-sm">
                      {citySearchTerm
                        ? `No cities found matching "${citySearchTerm}"`
                        : "No cities available for this country"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Selected Country and City Display */}
      {formData.country && (
        <div className="p-4 bg-cream rounded-lg border-2 border-soft-blue">
          <p className="text-sm text-dark-black/60 font-inter mb-1">
            Selected Location
          </p>
          <p className="text-lg font-poppins font-semibold text-dark-black">
            {formData.city ? `${formData.city}, ${formData.country}` : formData.country}
          </p>
        </div>
      )}
    </div>
  );
}
