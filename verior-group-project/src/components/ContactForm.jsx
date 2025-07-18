import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-neutral-900 rounded-xl shadow-lg p-0 overflow-hidden mx-auto justify-center items-center container">
      {/* Window bar */}
      <div
        className="relative"
        style={{
          width: '695px',
          height: '54px',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          background: '#181818',
          boxShadow: '0px -1px 0px 0px #FFFFFF08 inset',
          opacity: 1,
          border: '1px solid #222',
        }}
      >
        {/* Colored dots absolutely positioned on the left */}
        <div
          className="absolute flex items-center"
          style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        {/* New message label absolutely centered */}
        <span
          className="font-inter font-medium text-[16px] leading-[1] absolute"
          style={{
            width: '108px',
            height: '19px',
            opacity: 1,
            color: '#FFFFFF',
            letterSpacing: '0em',
            lineHeight: '1',
            fontWeight: 500,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          New message
        </span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-[#181818] rounded-b-[12px]" style={{ width: '695px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', border: '1px solid #222', borderTop: 'none' }}>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 bg-[#181818] text-white placeholder-gray-500 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1 font-medium">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-[#181818] text-white placeholder-gray-500 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-1 font-medium">Subject:</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Enter subject"
            className="w-full px-4 py-2 bg-[#181818] text-white placeholder-gray-500 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.subject || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1 font-medium">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here"
            className="w-full px-4 py-2 bg-[#181818] text-white placeholder-gray-500 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            style={{ minWidth: '90px', minHeight: '40px' }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
