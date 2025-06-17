import { Phone, Mail, MapPin, Clock } from "lucide-react";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
const ContactUsSection = () => {
  return (
    <>
      <NavBar />
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is ready to help you
            with any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-8 bg-red-600 rounded-full mr-3"></span>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:9870459197"
                      className="block text-gray-600 hover:text-red-600 transition-colors"
                    >
                      +91 98704 59197
                    </a>
                    <a
                      href="tel:8080604135"
                      className="block text-gray-600 hover:text-red-600 transition-colors"
                    >
                      +91 80806 04135
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@priyanshgarments.com"
                      className="block text-gray-600 hover:text-red-600 transition-colors"
                    >
                      info@priyanshgarments.com
                    </a>
                    <a
                      href="mailto:support@priyanshgarments.com"
                      className="block text-gray-600 hover:text-red-600 transition-colors"
                    >
                      support@priyanshgarments.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      Shop No. 407, E6A Adhmeeta Texpa II
                    </p>
                    <p className="text-gray-600">
                      Kalyan Bhiwandi Industrial Area, MIDC Plot No 1
                    </p>
                    <p className="text-gray-600">Bhiwandi, Dist Thane 421308</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Map Section */}
          <div className="h-full flex flex-col">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-8 bg-red-600 rounded-full mr-3"></span>
                Our Location
              </h3>

              <div className="flex-1 rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.570190711383!2d73.0631!3d19.2967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7949bd28a5b29%3A0x8d30bfa4ef6c43f!2sAdhmeeta%20Texpa%20II!5e0!3m2!1sen!2sin!4v1718534000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://maps.google.com?q=Shop+No.+407,+E6A+Adhmeeta+Texpa+II+Kalyan+Bhiwandi+Industrial+Area,+MIDC+Plot+No+1+Bhiwandi,+Dist+Thane+421308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);
}

export default ContactUsSection;
