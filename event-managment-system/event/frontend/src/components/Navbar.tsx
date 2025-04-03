import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PartyPopper } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <PartyPopper className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EventPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/decorating" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md">
              Decorating
            </Link>
            <Link to="/catering" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md">
              Catering
            </Link>
            <Link to="/login" className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/decorating"
                className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Decorating
              </Link>
              <Link
                to="/catering"
                className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Catering
              </Link>
              <Link
                to="/login"
                className="block text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;