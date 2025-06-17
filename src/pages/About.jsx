import React from "react";
import { Star, Users, Award, Target } from "lucide-react";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";

const AboutUsSection = () => {
  return (
     <>
      <NavBar />
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting exceptional experiences and delivering quality solutions
            that exceed expectations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to transform the industry, we have been
              dedicated to providing exceptional service and innovative
              solutions. Our journey began with a simple belief: that quality
              and customer satisfaction should never be compromised.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over the years, we have built a reputation for excellence, working
              with clients from various industries and helping them achieve
              their goals through our expertise and commitment to quality.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Our team"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">300+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">500+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">5.0</h4>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">8+</h4>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver innovative solutions that empower our clients to
              achieve their goals while maintaining the highest standards of
              quality, integrity, and customer service.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading provider in our industry, recognized for our
              commitment to excellence, innovation, and creating lasting value
              for our clients and community.
            </p>
          </div>
        </div>
      </div>
    </section>
     <Footer />
  </>
  );
};

export default AboutUsSection;
