import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  HelpCircle, 
  Crown, 
  Send 
} from 'lucide-react';

const BookMehndiAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Bridal Mehndi',
    eventDate: '',
    location: '',
    peopleCount: '',
    mehndiStyle: 'Bridal Full Hand',
    additionalRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your Mehndi appointment request has been submitted successfully. We will get back to you shortly.');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      eventType: 'Bridal Mehndi',
      eventDate: '',
      location: '',
      peopleCount: '',
      mehndiStyle: 'Bridal Full Hand',
      additionalRequirements: ''
    });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans min-h-screen bg-[#FAF7F2] text-[#315C3A]">
      
      {/* 1. HERO / HEADER SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F0E6] via-[#FAF7F2] to-[#FAF7F2] overflow-hidden border-b border-[#D4AF37]/20">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D4AF37]/10 rounded blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase bg-[#315C3A]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Book Your Mehndi Appointment
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#315C3A] leading-tight sm:leading-tight">
            Your Special Day Deserves <br className="hidden sm:inline" />
            <span className="text-[#A07E2F] italic font-normal">Beautiful Mehndi</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#315C3A]/85 max-w-2xl mx-auto leading-relaxed pt-2">
            Your wedding and celebrations are made of moments you'll remember forever — let your Mehndi be one of the most beautiful parts of them. ✨
          </p>

          <p className="text-xs sm:text-sm text-[#8C6D23] max-w-xl mx-auto font-medium leading-relaxed">
            Whether you're looking for elegant bridal Mehndi, traditional patterns, modern Arabic designs, or Mehndi for a special celebration, Shital Artist is here to create a design that feels uniquely yours.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={scrollToForm}
              className="px-8 py-3.5 bg-[#A07E2F] hover:bg-[#8C6D23] text-white font-semibold text-sm rounded shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES HIGHLIGHT SECTION */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#315C3A]">
            Make Your Celebration Extra Special
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto rounded mt-3 mb-3"></div>
          <p className="text-xs sm:text-sm text-[#315C3A]/80">
            From intimate ceremonies to grand wedding celebrations, every occasion deserves Mehndi that matches its beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bridal Mehndi */}
          <div className="bg-white p-6 sm:p-8 rounded border border-[#D4AF37]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-[#F5F0E6] rounded flex items-center justify-center mb-5 group-hover:bg-[#315C3A] transition-colors duration-300">
              <Crown className="w-7 h-7 text-[#A07E2F] group-hover:text-[#D4AF37] transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#315C3A] mb-2">💍 Bridal Mehndi</h3>
            <p className="text-xs sm:text-sm text-[#315C3A]/80 leading-relaxed">
              Intricate and personalized bridal designs created especially for your big day.
            </p>
          </div>

          {/* Engagement & Special Events */}
          <div className="bg-white p-6 sm:p-8 rounded border border-[#D4AF37]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-[#F5F0E6] rounded flex items-center justify-center mb-5 group-hover:bg-[#315C3A] transition-colors duration-300">
              <Heart className="w-7 h-7 text-[#A07E2F] group-hover:text-[#D4AF37] transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#315C3A] mb-2">🌿 Engagement & Events</h3>
            <p className="text-xs sm:text-sm text-[#315C3A]/80 leading-relaxed">
              Elegant Mehndi designs perfect for engagements, roka, haldi, festivals, and celebrations.
            </p>
          </div>

          {/* Guest Mehndi */}
          <div className="bg-white p-6 sm:p-8 rounded border border-[#D4AF37]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-[#F5F0E6] rounded flex items-center justify-center mb-5 group-hover:bg-[#315C3A] transition-colors duration-300">
              <Users className="w-7 h-7 text-[#A07E2F] group-hover:text-[#D4AF37] transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#315C3A] mb-2">✨ Guest Mehndi</h3>
            <p className="text-xs sm:text-sm text-[#315C3A]/80 leading-relaxed">
              Beautiful and quick designs for bridesmaids, family members, friends, and wedding guests.
            </p>
          </div>
        </div>
      </section>

      {/* 3. APPOINTMENT FORM SECTION */}
      <section id="booking-form-section" className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded border border-[#D4AF37]/40 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Top Decorative Border accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#315C3A] via-[#A07E2F] to-[#315C3A]"></div>

          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#A07E2F] text-xs uppercase tracking-widest font-bold">Tell Us About Your Event</span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#315C3A] mt-1">
              Plan Your Mehndi Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#315C3A]/80 mt-2">
              Please share a few details about your event so we can understand your requirements and provide the right booking information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Personal Details */}
            <div className="space-y-4">
              <h3 className="text-base font-serif font-bold text-[#A07E2F] border-b border-[#D4AF37]/20 pb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> Personal Details
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp / contact number"
                    className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-serif font-bold text-[#A07E2F] border-b border-[#D4AF37]/20 pb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Event Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                  >
                    <option value="Bridal Mehndi">Bridal Mehndi</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Haldi">Haldi</option>
                    <option value="Party / Celebration">Party / Celebration</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your venue or city"
                    className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                    Number of People
                  </label>
                  <input
                    type="text"
                    name="peopleCount"
                    value={formData.peopleCount}
                    onChange={handleChange}
                    placeholder="Approximate number requiring Mehndi"
                    className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Mehndi Requirements */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-serif font-bold text-[#A07E2F] border-b border-[#D4AF37]/20 pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Mehndi Requirements
              </h3>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                  Preferred Mehndi Style
                </label>
                <select
                  name="mehndiStyle"
                  value={formData.mehndiStyle}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors"
                >
                  <option value="Bridal Full Hand">Bridal Full Hand</option>
                  <option value="Bridal Full Leg">Bridal Full Leg</option>
                  <option value="Traditional Indian">Traditional Indian</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Minimal / Elegant">Minimal / Elegant</option>
                  <option value="Custom Design">Custom Design</option>
                  <option value="Not Sure — Need Suggestions">Not Sure — Need Suggestions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#315C3A] mb-1.5">
                  Additional Requirements
                </label>
                <textarea
                  name="additionalRequirements"
                  rows="4"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Tell us about your preferred design, function timings, special requests, or anything else you would like us to know."
                  className="w-full px-4 py-2.5 rounded border border-[#D4AF37]/40 text-sm text-[#315C3A] bg-[#FAF7F2] focus:outline-none focus:border-[#A07E2F] transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#315C3A] hover:bg-[#25472d] text-white font-semibold rounded text-sm sm:text-base transition-all duration-300 shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" /> Submit Appointment Request
            </button>

          </form>
        </div>
      </section>

      {/* 4. YOUR DREAM MEHNDI STARTS HERE & WHY BOOK WITH US */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column: Ideas & Inspiration */}
          <div className="bg-gradient-to-br from-[#315C3A] to-[#1F3D2B] text-white p-8 sm:p-10 rounded shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded blur-2xl pointer-events-none"></div>
            
            <div>
              <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Your Dream Mehndi Starts Here</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF8E7] mt-2 mb-4">
                Let's Turn Your Ideas Into Beautiful Designs
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed space-y-2">
                Have a Pinterest-inspired design? Want something completely customized? Or simply need help choosing the right style?
              </p>
              <p className="text-xs sm:text-sm text-[#D4AF37] leading-relaxed mt-3">
                Share your ideas with us and Shital Artist will help you create a Mehndi experience that perfectly complements your occasion.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Organic Henna Paste
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Deep & Dark Stain
              </div>
            </div>
          </div>

          {/* Right Column: Why Book With Us */}
          <div className="bg-white p-8 sm:p-10 rounded border border-[#D4AF37]/30 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#315C3A] mb-6">
                Why Book With Us?
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-[#FAF7F2] text-[#A07E2F] shrink-0 border border-[#D4AF37]/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#315C3A]">✨ Customized Designs</h4>
                    <p className="text-xs sm:text-sm text-[#315C3A]/80 mt-0.5">Your Mehndi should reflect your personality and occasion.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-[#FAF7F2] text-[#A07E2F] shrink-0 border border-[#D4AF37]/30">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#315C3A]">💍 Bridal-Focused Service</h4>
                    <p className="text-xs sm:text-sm text-[#315C3A]/80 mt-0.5">Special attention to bridal requirements and wedding celebrations.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-[#FAF7F2] text-[#A07E2F] shrink-0 border border-[#D4AF37]/30">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#315C3A]">🌿 Detailed & Elegant Work</h4>
                    <p className="text-xs sm:text-sm text-[#315C3A]/80 mt-0.5">Beautiful designs created with patience and attention to detail.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-[#FAF7F2] text-[#A07E2F] shrink-0 border border-[#D4AF37]/30">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#315C3A]">📅 Easy Appointment Booking</h4>
                    <p className="text-xs sm:text-sm text-[#315C3A]/80 mt-0.5">Simply share your event details and we'll get back to you with availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. IMPORTANT BOOKING INFORMATION & NEED HELP */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-[#F5F0E6] p-6 sm:p-8 rounded border border-[#D4AF37]/30">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#315C3A] mb-6 text-center">
            Important Booking Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded border border-[#D4AF37]/20 shadow-sm">
              <div className="flex items-center gap-2 text-[#A07E2F] font-serif font-bold text-base mb-2">
                <Calendar className="w-4 h-4" /> Advance Booking
              </div>
              <p className="text-xs text-[#315C3A]/80 leading-relaxed">
                We recommend booking your Mehndi appointment in advance, especially for wedding dates and peak seasons.
              </p>
            </div>

            <div className="bg-white p-5 rounded border border-[#D4AF37]/20 shadow-sm">
              <div className="flex items-center gap-2 text-[#A07E2F] font-serif font-bold text-base mb-2">
                <MapPin className="w-4 h-4" /> Location
              </div>
              <p className="text-xs text-[#315C3A]/80 leading-relaxed">
                Services are available in Gorakhpur and selected nearby locations.
              </p>
            </div>

            <div className="bg-white p-5 rounded border border-[#D4AF37]/20 shadow-sm">
              <div className="flex items-center gap-2 text-[#A07E2F] font-serif font-bold text-base mb-2">
                <CheckCircle2 className="w-4 h-4" /> Confirmation
              </div>
              <p className="text-xs text-[#315C3A]/80 leading-relaxed">
                Your appointment will be considered confirmed after availability and booking details are discussed with you.
              </p>
            </div>

            <div className="bg-white p-5 rounded border border-[#D4AF37]/20 shadow-sm">
              <div className="flex items-center gap-2 text-[#A07E2F] font-serif font-bold text-base mb-2">
                <Phone className="w-4 h-4" /> Need Help?
              </div>
              <p className="text-xs text-[#315C3A]/80 leading-relaxed">
                For urgent enquiries or date availability, contact us directly through WhatsApp or phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL FOOTER CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E6] border-t border-[#D4AF37]/20">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="text-[#A07E2F] text-xs uppercase tracking-widest font-bold">🌸 Special Day Awaits</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#315C3A]">
            Ready to Make Your Special Day Beautiful?
          </h2>
          <p className="text-sm sm:text-base text-[#315C3A]/80 max-w-xl mx-auto leading-relaxed">
            Your perfect Mehndi journey starts with one simple step. Reserve your date with Shital Artist and let your hands become a beautiful part of your celebration.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#A07E2F] hover:bg-[#8C6D23] text-white font-semibold text-xs sm:text-sm rounded shadow-md transition-all duration-300"
            >
              Book My Appointment
            </button>
            <a
              href="https://wa.me/+91 6393430756"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#315C3A] hover:bg-[#25472d] text-white font-semibold text-xs sm:text-sm rounded shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BookMehndiAppointment;