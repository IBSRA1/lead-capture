import { FileText, Calendar, Clock } from "lucide-react";
import type { BookingData } from "../../pages/Booking";
import { useState, useMemo } from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-range-picker";

interface Step4Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

export default function Step4Details({
  formData,
  updateFormData,
}: Step4Props) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    if (formData.session.startDate) {
      const startDate = new Date(formData.session.startDate);
      const endDate = addDays(startDate, 21); // 4 sessions = 3 weeks = 21 days
      return {
        from: startDate,
        to: endDate,
      };
    }
    return undefined;
  });
  const [selectedTime, setSelectedTime] = useState<string>(
    formData.session.startTime || ""
  );

  const handleDetailsChange = (value: string) => {
    updateFormData({ details: value });
  };

  const generateSessions = (range: DateRange | undefined, time: string) => {
    if (!range?.from || !time) return [];

    const sessions = [];
    const startDate = range.from;
    const endDate = range.to || addDays(startDate, 21);

    // Generate sessions every 7 days from start date until end date
    let currentDate = startDate;
    let sessionNumber = 1;

    while (currentDate <= endDate && sessionNumber <= 10) {
      const dayName = format(currentDate, "EEEE");
      const formattedDate = format(currentDate, "MMM dd, yyyy");

      sessions.push({
        date: formattedDate,
        time: time,
        dayName: dayName,
      });

      currentDate = addDays(currentDate, 7);
      sessionNumber++;
    }

    return sessions;
  };

  const calculateSessions = useMemo(() => {
    return generateSessions(dateRange, selectedTime);
  }, [dateRange, selectedTime]);

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
    const newSessions = generateSessions(range, selectedTime);
    updateFormData({
      session: {
        startDate: range?.from ? format(range.from, "yyyy-MM-dd") : "",
        startTime: selectedTime,
        sessions: newSessions,
      },
    });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);

    const newSessions = generateSessions(dateRange, newTime);
    updateFormData({
      session: {
        startDate: dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : "",
        startTime: newTime,
        sessions: newSessions,
      },
    });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Program Schedule & Details
        </h2>
      </div>

      {/* Session Schedule Section */}
      <div className="mb-8 p-6 bg-cream rounded-xl">
        <h3 className="text-xl font-poppins font-bold text-dark-black mb-6">
          Select Your Session Schedule
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Date Range Picker */}
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Select Your Session Schedule <span className="text-coral">*</span>
            </label>
            <DateRangePicker
              dateRange={dateRange}
              onDateRangeChange={handleDateRangeChange}
              placeholder="Select date range for sessions"
              className="w-full"
            />
            <p className="text-xs text-dark-black/60 font-inter mt-1">
              Sessions will be scheduled every 7 days within this range
            </p>
          </div>

          {/* Time Picker */}
          <div>
            <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
              Session Time <span className="text-coral">*</span>
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-soft-blue" size={20} />
              <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
              />
            </div>
            <p className="text-xs text-dark-black/60 font-inter mt-1">
              All sessions will be at this time
            </p>
          </div>
        </div>

        {/* Session Schedule Table */}
        {calculateSessions.length > 0 && (
          <div className="mb-6">
            <h4 className="font-poppins font-semibold text-dark-black mb-3">
              Your Session Schedule
            </h4>
            <div className="overflow-x-auto rounded-lg border-2 border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-soft-blue text-white">
                    <th className="px-4 py-3 text-left font-poppins font-semibold">
                      Session
                    </th>
                    <th className="px-4 py-3 text-left font-poppins font-semibold">
                      Day
                    </th>
                    <th className="px-4 py-3 text-left font-poppins font-semibold">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left font-poppins font-semibold">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calculateSessions.map((session, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } border-t border-gray-200 hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-4 py-3 font-poppins font-semibold text-dark-black">
                        Session {index + 1}
                      </td>
                      <td className="px-4 py-3 font-inter text-dark-black">
                        {session.dayName}
                      </td>
                      <td className="px-4 py-3 font-inter text-dark-black">
                        {session.date}
                      </td>
                      <td className="px-4 py-3 font-inter text-dark-black">
                        {session.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-dark-black/60 font-inter mt-3">
              📅 Total: {calculateSessions.length} sessions over{" "}
              {calculateSessions.length > 0
                ? `${(calculateSessions.length - 1) * 7} days`
                : "0 days"}
            </p>
          </div>
        )}
      </div>

      {/* Additional Details Section */}
      <div>
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-3">
          Any Additional Details? (Optional)
        </label>
        <textarea
          value={formData.details}
          onChange={(e) => handleDetailsChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          placeholder="Example: Special learning needs, dietary restrictions, medical conditions, learning preferences, etc."
          rows={6}
        />
        <p className="text-xs text-dark-black/50 font-inter mt-2">
          Character count: {formData.details.length}
        </p>
      </div>

      {/* Helpful Tips */}
      <div className="mt-8 p-6 bg-cream rounded-xl">
        <h3 className="font-poppins font-semibold text-dark-black mb-3">
          Helpful Tips:
        </h3>
        <ul className="space-y-2 text-dark-black font-inter text-sm">
          <li>✓ Mention any learning disabilities or special needs</li>
          <li>✓ Share your preferred learning style</li>
          <li>✓ Tell us about any allergies or dietary requirements</li>
          <li>✓ Let us know about your learning goals</li>
          <li>✓ Share any concerns or questions about the program</li>
        </ul>
      </div>
    </div>
  );
}
