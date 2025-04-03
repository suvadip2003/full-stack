import React from 'react';
import { Utensils, Users, Clock, ChefHat } from 'lucide-react';

const Catering = () => {
  const menuCategories = [
    {
      image: "https://images.unsplash.com/photo-1555244162-803834f70033",
      title: "Corporate Catering",
      description: "Professional catering for business events and meetings"
    },
    {
      image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826",
      title: "Wedding Catering",
      description: "Elegant dining experiences for your special day"
    },
    {
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b",
      title: "Private Events",
      description: "Customized menus for intimate gatherings"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Professional Catering Services</h1>
            <p className="text-xl">Exquisite cuisine for your memorable events</p>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Catering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ChefHat className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Professional culinary team</p>
            </div>
            <div className="text-center">
              <Utensils className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Menus</h3>
              <p className="text-gray-600">Tailored to your preferences</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Any Size Event</h3>
              <p className="text-gray-600">From intimate to large gatherings</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Punctual Service</h3>
              <p className="text-gray-600">Always on time, every time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Preview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Sample Menu Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Appetizers</h3>
            <ul className="space-y-2">
              <li>Bruschetta with Fresh Tomatoes</li>
              <li>Mini Crab Cakes</li>
              <li>Stuffed Mushrooms</li>
              <li>Shrimp Cocktail</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Main Courses</h3>
            <ul className="space-y-2">
              <li>Grilled Salmon with Herbs</li>
              <li>Beef Tenderloin</li>
              <li>Chicken Marsala</li>
              <li>Vegetable Lasagna</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Desserts</h3>
            <ul className="space-y-2">
              <li>Chocolate Mousse</li>
              <li>Tiramisu</li>
              <li>Fresh Fruit Tart</li>
              <li>Cheesecake Bites</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Menu?</h2>
          <p className="text-xl mb-8">Contact us for a customized catering quote</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catering;