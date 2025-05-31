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
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500 rounded-lg transform rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-orange-400 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-60 w-16 h-16 bg-red-400 rounded-lg transform rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm font-medium mb-2">Contact Us</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            HAVE A <span className="text-red-500">QUESTION?</span>
          </h1>

          {/* Contact Info */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Phone className="text-red-500 w-5 h-5" />
              <span className="text-gray-700">+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-red-500 w-5 h-5" />
              <span className="text-gray-700">random@mail.com</span>
            </div>
          </div>

          <p className="text-gray-600 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.527252774805454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1685123456789!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Subject and Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Describe your issue"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right decorative circle */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-20"></div>
    </div>
  );
};

export default ContactSection;
