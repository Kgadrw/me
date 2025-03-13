import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const ContactInfo = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_15gmamg",
        "template_jxbea9r",
        templateParams,
        "0t7uS81N1_DAuGVjE"
      )
      .then(
        () => {
          setStatus("Thanks for reaching out! I'll get back to you soon.");
          setEmail("");
          setMessage("");
          setIsSending(false);
          setShowModal(true);
          setTimeout(() => setShowModal(false), 3000);
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-gray-900 text-white px-6 md:px-12 lg:px-20 py-12 md:py-20">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-500">Get in Touch</h2>
        <p className="text-gray-300 max-w-md">
          Have questions or want to work together? Drop me a message.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-500" />
            <span>+250 791998 365</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-green-500" />
            <span>kalisagad05@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-red-500" />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input
            type="email"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition disabled:opacity-50"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p className="text-green-400 mt-4">{status}</p>}
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/now.png"
          alt="Contact Banner"
          className="w-full max-w-sm lg:max-w-md"
        />
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-green-500 text-white py-4 px-8 rounded-lg flex items-center space-x-3 shadow-lg">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold">Message Sent!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
