import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingContactButtons() {
  const whatsappNumber = '917440055055'; // No "+" needed for wa.me links
  const preFilledMessage = 'Hello, I am interested in investing in Dholera Smart City. Please assist me.';
  const phoneNumber = '+917440055055'; // For calling link

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-3">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaPhoneAlt className="w-5 h-5" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>

      
    </div>
  );
}
