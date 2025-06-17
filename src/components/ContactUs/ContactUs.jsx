import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500 rounded-lg transform rotate-12 hidden md:block"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-orange-400 rounded-lg transform -rotate-12 hidden md:block"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-yellow-400 rounded-full hidden md:block"></div>
        <div className="absolute bottom-20 right-60 w-16 h-16 bg-red-400 rounded-lg transform rotate-45 hidden md:block"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-600 text-sm font-medium mb-2">Contact Us</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            HAVE A <span className="text-red-500">QUESTION?</span>
          </h1>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <Phone className="text-red-500 w-5 h-5" />
              <span className="text-gray-700 text-sm sm:text-base">
                9870459197 / 8080604135
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-red-500 w-5 h-5" />
              <span className="text-gray-700 text-sm sm:text-base">
                info@priyanshgarments.com
              </span>
            </div>
          </div>

          <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
            Priyansh Garments provides expert garment manufacturing for startups
            and brands—quality clothing, timely delivery, and nationwide
            support. Contact us today!
          </p>
        </div>

        {/* Main Content */}
        <div className="px-0 sm:px-4 md:px-20 lg:px-40 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 shadow-xl">
            <div className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Subject and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Describe your issue"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm sm:text-base"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right decorative circle */}
      <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-20 hidden sm:block"></div>
    </div>
  );
};

export default ContactSection;
