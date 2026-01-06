import React, { useState } from 'react';

interface EmailSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailSignupModal({ isOpen, onClose }: EmailSignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    // Form will submit naturally to Aweber
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl animate-slideUp">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white px-8 py-6 rounded-t-lg">
          <h2 className="text-2xl font-bold mb-2">Join The AI Revolution</h2>
          <p className="text-blue-100 text-sm">
            Get exclusive AI strategies, tools, and insights delivered to your inbox
          </p>
        </div>

        {/* Form */}
        <form
          method="post"
          action="https://www.aweber.com/scripts/addlead.pl"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
          className="px-8 py-6"
        >
          {/* Hidden fields for Aweber */}
          <input type="hidden" name="meta_web_form_id" value="401120887" />
          <input type="hidden" name="meta_split_id" value="" />
          <input type="hidden" name="listname" value="awlist6933328" />
          <input type="hidden" name="redirect" value="https://www.aweber.com/thankyou.htm?m=default" />
          <input type="hidden" name="meta_adtracking" value="IJB_-_Join_The_Revolution" />
          <input type="hidden" name="meta_message" value="1" />
          <input type="hidden" name="meta_required" value="name,email" />
          <input type="hidden" name="meta_tooltip" value="" />

          {/* Name field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
              placeholder="Enter your name"
            />
          </div>

          {/* Email field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-800 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join The AI Revolution
          </button>

          {/* Privacy policy */}
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your{' '}
            <a
              href="https://www.aweber.com/permission.htm"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              email privacy
            </a>
          </p>
        </form>

        {/* Tracking pixel */}
        <img
          src="https://forms.aweber.com/form/displays.htm?id=LAyMjEwMHBzs"
          alt=""
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}
