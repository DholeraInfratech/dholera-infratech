"use client";
import { useState, useEffect } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Show form with animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500); // delay 0.5s
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Enquiry sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("❌ Failed to send enquiry. Try again.");
    }
  };

  return (
    <div
      className={`max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        Enquiry Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-400 rounded-md text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-400 rounded-md text-black"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-400 rounded-md text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-400 rounded-md text-black"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
        >
          Send Enquiry
        </button>
      </form>
      {status && <p className="mt-3 text-center text-black">{status}</p>}
    </div>
  );
}
