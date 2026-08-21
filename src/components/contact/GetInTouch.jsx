import React, { useState } from 'react';
import { MapPin, Phone, Mail, Sparkles, Heart, Crown, Calendar, Send, ShieldCheck } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Bridal Mehndi',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert('Thank you! Your booking enquiry has been sent successfully.');
    setFormData({
      fullName: '',
      phone: '',
      eventType: 'Bridal Mehndi',
      eventDate: '',
      location: '',
      message: ''
    });
  };

  const whyChooseUsList = [
    {
      title: "Personalized Designs",
      desc: "Mehndi designs created according to your style, occasion, and preferences.",
      icon: <Sparkles className="w-6 h-6" style={{ color: '#A07E2F' }} />
    },
    {
      title: "Beautiful & Detailed Work",
      desc: "Elegant patterns with attention to every fine detail.",
      icon: <Heart className="w-6 h-6" style={{ color: '#A07E2F' }} />
    },
    {
      title: "Bridal Expertise",
      desc: "Specialized bridal Mehndi designs for your most memorable day.",
      icon: <Crown className="w-6 h-6" style={{ color: '#A07E2F' }} />
    },
    {
      title: "Advance Booking",
      desc: "Secure your preferred date by booking in advance.",
      icon: <Calendar className="w-6 h-6" style={{ color: '#A07E2F' }} />
    },
    {
      title: "Gorakhpur & Nearby Areas",
      desc: "Mehndi services available for events in Gorakhpur and selected nearby locations.",
      icon: <MapPin className="w-6 h-6" style={{ color: '#A07E2F' }} />
    },
    {
      title: "100% Organic Henna",
      desc: "Chemical-free, natural henna paste safe for skin with rich, deep stain output.",
      icon: <ShieldCheck className="w-6 h-6" style={{ color: '#A07E2F' }} />
    }
  ];

  return (
    <div className="font-sans min-h-screen" style={{ backgroundColor: '#f5f2eb', color: '#3F5B4A' }}>
      
      {/* 1. HERO / HEADER SECTION */}
      <section className="py-12 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(to bottom, #FAF7F2, #F5F2EB)' }}>
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="font-semibold uppercase tracking-widest text-xs" style={{ color: '#A07E2F' }}>
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-serif font-bold leading-tight" style={{ color: '#3F5B4A' }}>
            Let’s Create Beautiful Mehndi Memories Together
          </h1>
          <p className="text-sm sm:text-base max-w-1xl mx-auto leading-relaxed mt-2" style={{ color: '#526E5D' }}>
            Whether it’s your wedding day, a special celebration, or simply a love for beautiful Mehndi designs, Shital Artist is here to make your occasion even more memorable.
          </p>
          <p className="text-xs sm:text-sm font-medium" style={{ color: '#A07E2F' }}>
            Have a design in mind or need help choosing the perfect Mehndi style? Get in touch with us and let’s discuss your requirements.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID (Contact Info + Form) */}
      <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTACT INFORMATION CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: '#3F5B4A' }}>
              Contact Details
            </h2>

            {/* Visit Us */}
            <div className="bg-white p-6 rounded border shadow-sm flex items-start gap-4 transition hover:shadow-md" style={{ borderColor: '#e0dcd2' }}>
              <div className="p-3 rounded shrink-0" style={{ backgroundColor: '#f0ece3' }}>
                <MapPin className="w-6 h-6" style={{ color: '#A07E2F' }} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg" style={{ color: '#3F5B4A' }}>Visit Us</h3>
                <p className="font-semibold text-sm mt-1" style={{ color: '#A07E2F' }}>Shital Artist</p>
                <p className="text-sm font-medium text-gray-700">Gorakhpur, Uttar Pradesh</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: '#526E5D' }}>
                  Available for Mehndi bookings and event services in Gorakhpur and nearby locations.
                </p>
              </div>
            </div>

            {/* Call / WhatsApp */}
            <div className="bg-white p-6 rounded border shadow-sm flex items-start gap-4 transition hover:shadow-md" style={{ borderColor: '#e0dcd2' }}>
              <div className="p-3 rounded shrink-0" style={{ backgroundColor: '#f0ece3' }}>
                <Phone className="w-6 h-6" style={{ color: '#A07E2F' }} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg" style={{ color: '#3F5B4A' }}>Call / WhatsApp</h3>
                <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: '#A07E2F' }}>Book Your Mehndi Appointment</p>
                <p className="text-xs mt-1" style={{ color: '#526E5D' }}>
                  For availability, pricing, packages, and booking details, contact us directly.
                </p>
                <a href="tel:+919876543210" className="inline-block text-sm font-bold mt-2 hover:underline" style={{ color: '#3F5B4A' }}>
                  Call or WhatsApp: +91 6393430756
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white p-6 rounded border shadow-sm flex items-start gap-4 transition hover:shadow-md" style={{ borderColor: '#e0dcd2' }}>
              <div className="p-3 rounded shrink-0" style={{ backgroundColor: '#f0ece3' }}>
                <Mail className="w-6 h-6" style={{ color: '#A07E2F' }} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg" style={{ color: '#3F5B4A' }}>Email Us</h3>
                <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: '#A07E2F' }}>Have a question?</p>
                <p className="text-xs mt-1" style={{ color: '#526E5D' }}>
                  Send us your requirements, event details, or preferred Mehndi design and we’ll be happy to assist you.
                </p>
                <a href="mailto:shitalartist@example.com" className="inline-block text-sm font-bold mt-2 hover:underline" style={{ color: '#3F5B4A' }}>
                  shitalartist@example.com
                </a>
              </div>
            </div>
          </div>

          {/* BOOKING FORM */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded border shadow-md" style={{ borderColor: '#e0dcd2' }}>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-2xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
                Book Your Mehndi Appointment
              </h2>
              <p className="text-xs sm:text-xs mt-1" style={{ color: '#526E5D' }}>
                Planning your special day? Reserve your date in advance to ensure availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1" style={{ color: '#3F5B4A' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1"
                    style={{ borderColor: '#d4cdbe', color: '#3F5B4A', backgroundColor: '#faf7f2' }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1" style={{ color: '#3F5B4A' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1"
                    style={{ borderColor: '#d4cdbe', color: '#3F5B4A', backgroundColor: '#faf7f2' }}
                  />
                </div>
              </div>

              {/* Event Type & Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1" style={{ color: '#3F5B4A' }}>
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1"
                    style={{ borderColor: '#d4cdbe', color: '#3F5B4A', backgroundColor: '#faf7f2' }}
                  >
                    <option value="Bridal Mehndi">Bridal Mehndi</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Wedding Function">Wedding Function</option>
                    <option value="Party / Celebration">Party / Celebration</option>
                    <option value="Festival Mehndi">Festival Mehndi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1" style={{ color: '#3F5B4A' }}>
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1"
                    style={{ borderColor: '#d4cdbe', color: '#3F5B4A', backgroundColor: '#faf7f2' }}
                  />
                </div>
              </div>

              {/* Venue / Location */}
              <div>
                <label className="block text-xs font-bold uppercase mb-1" style={{ color: '#3F5B4A' }}>
                  Venue / Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your event location"
                  className="w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: '#d4cdbe', color: '#3F5B4A', backgroundColor: '#faf7f2' }}
                />
              </div>

              {/* Your Message */}
              <div>
                <label className="block text-xs font-bold uppercase mb-1" style={{ color: '#3F5B4A' }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your Mehndi requirements, preferred design, number of guests, or any special requests."
                  className="w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1 resize-none"
                  style={{ borderColor: '#d4cdbe', color: '#3F5B4A', backgroundColor: '#faf7f2' }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 text-white font-semibold rounded text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:opacity-95"
                style={{ backgroundColor: '#A07E2F' }}
              >
                <Send className="w-4 h-4" /> Send Booking Enquiry
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 3. WHY CONTACT SHITAL ARTIST? (6 Grid Cards with simple rounded style) */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
            Why Contact Shital Artist?
          </h2>
          <p className="text-xs sm:text-sm mt-1" style={{ color: '#526E5D' }}>
            We bring passion, perfection, and pure natural organic henna to every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded border shadow-sm flex flex-col items-start transition hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#e0dcd2' }}
            >
              <div className="p-3 rounded mb-3" style={{ backgroundColor: '#f0ece3' }}>
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-lg mb-1" style={{ color: '#3F5B4A' }}>{item.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#526E5D' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER CTA SECTION */}
      <section className="py-12 px-4 sm:px-6 text-center" style={{ backgroundColor: '#f0ece3' }}>
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold" style={{ color: '#A07E2F' }}>
            Let Your Hands Tell Your Story
          </h2>
          <p className="text-xs sm:text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#3F5B4A' }}>
            Every Mehndi design is more than just a pattern — it is a part of your celebration, your memories, and your story. Book your Mehndi artist today and make your special occasion beautifully unforgettable.
          </p>
          
          {/* Action Buttons */}
          <div className="pt-4 flex flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <a 
              href="#booking-form"
              onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
              className="flex-1 text-center text-white font-semibold text-xs sm:text-sm py-3 px-3 rounded transition shadow-md whitespace-nowrap overflow-hidden text-ellipsis" 
              style={{ backgroundColor: '#A07E2F' }}
            >
              Book Your Date
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center text-white font-semibold text-xs sm:text-sm py-3 px-3 rounded transition shadow-md whitespace-nowrap overflow-hidden text-ellipsis" 
              style={{ backgroundColor: '#3F5B4A' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GetInTouch;