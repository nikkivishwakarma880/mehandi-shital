// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import shitalLogo from '../assets/shital-logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal Mehndi', path: '/bridal-mehndi' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    /* Soft/Light Gradient Left-to-Right: Clean and Subtle Theme */
    <nav className="bg-gradient-to-r from-[#faf8f3] via-[#f8f1e1] to-[#f5e7cf] px-3 sm:px-5 lg:px-5 py-2.5 shadow-sm border-b border-[#1F3D2B]/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={shitalLogo}
            alt="Shital Artist Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-[#142b1d] text-[16px] font-bold tracking-wider font-serif">
              Shital Artist
            </h1>
            <p className="text-[#B38F24] text-[9px] tracking-widest font-semibold uppercase">
              Bridal & Artistry
            </p>
          </div>
        </Link>
                   
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs tracking-wide font-semibold transition-all duration-300 pb-1 border-b-2 ${
                      isActive
                        ? 'text-[#1F3D2B] border-[#B38F24]'
                        : 'text-[#1F3D2B]/75 border-transparent hover:text-[#1F3D2B] hover:border-[#B38F24]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Book Appointment Button */}
          <Link
            to="/book-appointment"
            className="bg-[#3f5b4a] text-[#FFF8E7] text-[11px] px-4 py-2 rounded font-semibold hover:bg-[#315C3A] transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1F3D2B] hover:text-[#B38F24] transition-colors p-1"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#FFFFFF]/95 backdrop-blur-md rounded border border-[#1F3D2B]/10 py-4 px-6 shadow-lg">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-semibold tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#B38F24]' : 'text-[#1F3D2B] hover:text-[#B38F24]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#3f5b4a] text-[#FFF8E7] text-xs px-5 py-2.5 rounded font-semibold hover:bg-[#315C3A] transition-all duration-300 w-full shadow-sm"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;