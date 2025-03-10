import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"; // Import CheckCircle Icon
import emailjs from "emailjs-com";

const ContactInfo = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To track message sending status
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [isSending, setIsSending] = useState(false); // Button state for sending status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true); // Show "sending" state on button

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_15gmamg", // Your Service ID from EmailJS
        "template_jxbea9r", // Your Template ID
        templateParams,
        "0t7uS81N1_DAuGVjE" // Your Public Key from EmailJS
      )
      .then(
        (response) => {
          setStatus("Thanks for writing for us We'll be back to you soon !");
          setEmail(""); // Reset the email field
          setMessage(""); // Reset the message field
          setIsSending(false); // Revert button text to "Send Message"
          setShowModal(true); // Show success modal
          setTimeout(() => setShowModal(false), 3000); // Hide modal after 3 seconds
        },
        (err) => {
          setStatus("Failed to send message. Please try again.");
          setIsSending(false); // Revert button text to "Send Message" on error
        }
      );
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-gray-100 text-gray-800 px-6 md:px-12 lg:px-20 py-8 md:py-12">
      {/* Left Side - Contact Details & Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-5 lg:pl-8">
        <h2 className="text-3xl font-bold text-blue-500">Get in Touch</h2>
        <p className="text-gray-600 max-w-md text-sm leading-relaxed">
          Have questions? Reach out to us, and we'll respond as soon as
          possible.
        </p>

        {/* Contact Details (Single Line) */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 p-2 rounded-full">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium">+250 791998 365</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-full">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium">kalisagad05@gmail.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 p-2 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium">Kigali, Rwanda</span>
          </div>
        </div>

        {/* Display message status */}
        {status && (
          <p className="text-center text-lg font-semibold text-green-500 mb-4">
            {status}
          </p>
        )}

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-3">
          <textarea
            className="w-full p-3 bg-gray-200 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            type="email"
            className="w-full p-3 bg-gray-200 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Right Side - Banner Image */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
        <img
          src="/now.png"
          alt="Contact Banner"
          className="w-full max-w-md  lg:max-w-lg"
        />
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
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
