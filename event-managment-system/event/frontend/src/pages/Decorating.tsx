import React from 'react';
import { Calendar, Palette, Award, Clock } from 'lucide-react';

const Decorating = () => {
  const decorationStyles = [
    {
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      title: "Wedding Decorations",
      description: "Transform your special day into a magical experience"
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      title: "Corporate Events",
      description: "Professional and elegant settings for business events"
    },
    {
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d",
      title: "Birthday Parties",
      description: "Colorful and themed decorations for all ages"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Event Decoration Services</h1>
            <p className="text-xl">Creating stunning environments for your special occasions</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Decoration Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {decorationStyles.map((style, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={style.image} 
                alt={style.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{style.title}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Decoration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Book your preferred date and time</p>
            </div>
            <div className="text-center">
              <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Themes</h3>
              <p className="text-gray-600">Personalized decoration themes</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Top-quality materials and designs</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">On-Time Setup</h3>
              <p className="text-gray-600">Punctual and efficient service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Event?</h2>
          <p className="text-xl mb-8">Contact us for a free consultation and quote</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Decorating;