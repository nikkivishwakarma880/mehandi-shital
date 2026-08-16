// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name:'Home', path:'/'},
    {name:'About', path:'/about'},
    {name:'Services', path:'/services'},
    {name:'Bridal Mehndi', path:'/bridal-mehndi'},
    {name:'Gallery', path:'/gallery'},
    {name:'Contact', path:'/contact'},

    ];

  return (
    <nav className="bg-[#1F3D2B] px-4 sm:px-6 lg:px-8 py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="flex items-center space-x-2">
          <span className="text-2xl">🌿</span>
          <div>
            <h1 className="text-[#D4AF37] text-2xl font-bold tracking-wider">
              Mehndi Grace
            </h1>
            <p className="text-[#FFF8E7] text-xs tracking-widest opacity-80">
              Bridal & Artistry
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <NavLink
                to={link.path}
                  className={`text-[#FFF8E7] hover:text-[#D4AF37] transition-colors duration-300 font-medium text-sm tracking-wide`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Book Appointment Button */}
          <Link to='/book-appointment' className="bg-[#D4AF37] text-[#1F3D2B] px-3 py-1.5 rounded-full font-semibold hover:bg-[#c5a032] transition-all duration-300 transform hover:scale-105 shadow-md">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#FFF8E7] hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#1F3D2B] rounded-lg border border-[#D4AF37]/20 py-4 px-6">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`text-[#FFF8E7] hover:text-[#D4AF37] transition-colors duration-300 w-full text-left text-sm tracking-wide ${
                    activeLink === link ? 'text-[#D4AF37]' : ''
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <button className="bg-[#D4AF37] text-[#1F3D2B] px-6 py-2 rounded-full font-semibold hover:bg-[#c5a032] transition-all duration-300 w-full mt-2">
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;