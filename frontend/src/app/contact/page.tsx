'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  Send,
  ShieldAlert,
  ChevronDown,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

const emergencyContacts = [
  {
    title: 'Central Control Room',
    phone: '+91 3222 282000',
    desc: '24/7 Operations Desk for Inter-IIT Contingent Leads',
  },
  {
    title: 'BC Roy Hospital Desk',
    phone: '+91 3222 282200',
    desc: 'Medical desk, emergency ambulances, and doctors on call',
  },
  {
    title: 'Transport & Security',
    phone: '+91 3222 282100',
    desc: 'Campus shuttle buses & station pickup support desk',
  },
  {
    title: 'TSG Office Helpdesk',
    phone: '+91 3222 282300',
    desc: 'General inquiry, ID cards, and sports equipment dispatch',
  },
];

const faqs = [
  {
    question: 'Where are contingent participants accommodated during the meet?',
    answer:
      'Delegates and athletes are hosted across Lal Bahadur Shastri Hall, APJ Abdul Kalam Hall, Sarojini Naidu Indira Gandhi Hall, and Sister Nivedita Hall with dedicated mess catering.',
  },
  {
    question: 'What is the schedule for campus shuttle transport to sports venues?',
    answer:
      'Shuttles operate continuously every 15 minutes between all Halls of Residence, TSG Indoor Stadium, Jnan Ghosh Stadium, Tata Sports Ground, and BC Roy Hospital from 06:00 AM to 10:00 PM.',
  },
  {
    question: 'How do athletes register for medical clearance or emergency care?',
    answer:
      'First aid stations are located at every individual venue. In case of urgent treatment, athletes will be transported immediately to BC Roy Technology Hospital with zero wait time.',
  },
  {
    question: 'Are spectators allowed at the venues?',
    answer:
      'Yes! Entry is free for all students, faculty, alumni, and sports enthusiasts upon showing a valid institute ID card.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contingent: 'IIT Kharagpur',
    category: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen py-12 space-y-12">
      <div className="max-w-container-max mx-auto px-margin-x space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-secondary-container/20 text-on-secondary-container font-label-bold px-4 py-1 rounded-full text-xs font-extrabold uppercase border border-secondary-container">
            24/7 Contingent Support Desk
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-black text-primary uppercase tracking-tight">
            CONTACT & HELPDESK
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Have questions about accommodation, match fixtures, transport, or medical support? Reach out to our TSG team.
          </p>
        </div>

        {/* Emergency Desk Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyContacts.map((contact, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-headline-lg text-base font-bold text-primary mb-1">
                  {contact.title}
                </h3>
                <p className="text-xs text-outline font-medium mb-3">{contact.desc}</p>
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="text-amber-600 font-headline-lg font-black text-sm hover:underline"
              >
                {contact.phone}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Form + FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Support Form Card */}
          <div className="bg-white rounded-3xl border border-outline-variant/30 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-label-bold text-amber-600 uppercase font-bold tracking-widest">
                Support Ticket
              </span>
              <h2 className="font-headline-xl text-xl sm:text-2xl font-black text-primary uppercase">
                SEND US A MESSAGE
              </h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-headline-lg text-lg font-bold text-green-800">
                  Message Submitted Successfully!
                </h3>
                <p className="text-xs text-green-700">
                  Thank you {formData.name}. Our TSG Control Room has received your ticket and will respond to {formData.email} shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      contingent: 'IIT Kharagpur',
                      category: 'General Inquiry',
                      message: '',
                    });
                  }}
                  className="bg-primary text-white px-5 py-2 rounded-xl text-xs font-label-bold uppercase font-bold"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label-bold text-gray-700 uppercase font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-label-bold text-gray-700 uppercase font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="athlete@kgp.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label-bold text-gray-700 uppercase font-bold mb-1">
                      IIT Contingent
                    </label>
                    <select
                      value={formData.contingent}
                      onChange={(e) => setFormData({ ...formData, contingent: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="IIT Kharagpur">IIT Kharagpur (Host)</option>
                      <option value="IIT Bombay">IIT Bombay</option>
                      <option value="IIT Delhi">IIT Delhi</option>
                      <option value="IIT Madras">IIT Madras</option>
                      <option value="IIT Kanpur">IIT Kanpur</option>
                      <option value="Other IIT">Other IIT Contingent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-label-bold text-gray-700 uppercase font-bold mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Accommodation & Mess">Accommodation & Mess</option>
                      <option value="Transport & Shuttle">Transport & Shuttle</option>
                      <option value="Medical Desk">Medical Desk</option>
                      <option value="Sports Equipment">Sports Equipment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label-bold text-gray-700 uppercase font-bold mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your issue or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-container text-white py-3 rounded-xl font-label-bold text-xs uppercase font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" /> Submit Support Ticket
                </button>
              </form>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-3">
              <span className="text-xs font-label-bold text-amber-600 uppercase font-bold tracking-widest">
                Knowledge Base
              </span>
              <h2 className="font-headline-xl text-xl sm:text-2xl font-black text-primary uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left font-headline-lg text-sm sm:text-base font-bold text-primary flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-600 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-gray-100 pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Venue Address Card */}
            <div className="bg-primary text-white rounded-3xl p-6 shadow-xl space-y-3 border border-outline-variant/30">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary-container" />
                <h3 className="font-headline-lg text-lg font-bold">Venue Address & Office</h3>
              </div>
              <p className="text-xs text-primary-fixed-dim leading-relaxed">
                Technology Students Gymkhana (TSG), Indian Institute of Technology Kharagpur, Paschim Medinipur, West Bengal - 721302.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
