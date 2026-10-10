// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import shitalLogo from '../assets/shital-logo.png';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Language Context
  const { language, toggleLanguage, t } = useLanguage();

  // Navigation Links
  const navLinks = [
    {
      name: t.navbar.home,
      path: '/',
    },
    {
      name: t.navbar.about,
      path: '/about',
    },
    {
      name: t.navbar.services,
      path: '/services',
    },
    {
      name: t.navbar.bridalMehndi,
      path: '/bridal-mehndi',
    },
    {
      name: t.navbar.gallery,
      path: '/gallery',
    },
    {
      name: t.navbar.contact,
      path: '/contact',
    },
  ];

  return (
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
              Shital Vishwakarma
            </h1>

            <p className="text-[#B38F24] text-[9px] tracking-widest font-semibold uppercase">
              Mehandi Art
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
            {t.navbar.bookAppointment}
          </Link>

          {/* Language Toggle Button 
          <button
            onClick={toggleLanguage}
            className="bg-[#B38F24] text-[#FFF8E7] text-[11px] px-3 py-2 rounded font-semibold hover:bg-[#9c7a1e] transition-all duration-300 shadow-sm"
          >
            {t.navbar.languageButton}
          </button>
          */}

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
                      isActive
                        ? 'text-[#B38F24]'
                        : 'text-[#1F3D2B] hover:text-[#B38F24]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              </li>
            ))}

            {/* Mobile Book Appointment */}
            <li className="pt-2">

              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#3f5b4a] text-[#FFF8E7] text-xs px-5 py-2.5 rounded font-semibold hover:bg-[#315C3A] transition-all duration-300 w-full shadow-sm"
              >
                {t.navbar.bookAppointment}
              </Link>

            </li>

            {/* Mobile Language Button 
           <li>

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-[#B38F24] text-[#FFF8E7] text-xs px-5 py-2.5 rounded font-semibold hover:bg-[#9c7a1e] transition-all duration-300 shadow-sm"
              >
                {t.navbar.languageButton}
              </button>

            </li>  */}

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;