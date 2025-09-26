"use client";
import { useEffect, useState } from "react";
import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50">
      <div className="relative w-11/12 max-w-md animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-xl font-bold text-black z-10"
        >
          &times;
        </button>

        <EnquiryForm />
      </div>
    </div>
  );
}
