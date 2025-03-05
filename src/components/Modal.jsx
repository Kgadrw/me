import { useState } from "react";

const RequestWebsiteForm = () => {
  const [formData, setFormData] = useState({
    websiteDetails: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here, you can send the formData to an API, database, or email service.
    alert("Request submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-400 text-center mb-6">
          Tell Us About Your Dream Website
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Website Details */}
          <div>
            <label className="block text-gray-300">
              Describe Your Website:
            </label>
            <textarea
              name="websiteDetails"
              value={formData.websiteDetails}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              placeholder="What kind of website do you need?"
              required
            ></textarea>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-300">Full Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestWebsiteForm;
