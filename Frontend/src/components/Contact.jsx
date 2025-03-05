import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // Import Lucide Icons

const ContactInfo = () => {
  return (
    <div className="bg-gray-950 py-10">
      <div className="max-w-4xl mx-auto px-2">
        {/* Container for all the contact info */}
        <div className="bg-gray-950 border-2 border-gray-900  p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center space-x-12 text-white">
            {/* Phone Info */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <Phone className="text-3xl" />
              </div>
              <span className="text-lg font-semibold truncate">
                +250 7998 365
              </span>
            </div>

            {/* Email Info */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <Mail className="text-3xl" />
              </div>
              <span className="text-lg font-semibold truncate">
                kalisagad05@gmail.com
              </span>
            </div>

            {/* Location Info */}
            <div className="flex items-center space-x-3">
              <div className="bg-red-500 text-white p-4 rounded-full">
                <MapPin className="text-3xl" />
              </div>
              <span className="text-lg font-semibold truncate">
                Kigali , Rwanda
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
