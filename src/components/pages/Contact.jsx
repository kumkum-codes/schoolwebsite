function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support message sent successfully! We will get back to you shortly.");
    e.target.reset(); // Auto-refresh the visual form
  };

  return (
    <div className="h-[calc(100vh-76px)] overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 px-6 flex items-center relative">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have any questions or concerns? Please reach out using the form below or contact us directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information Cards */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">
                📍
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Our Campus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plot No. 45, Knowledge Park II<br />
                New Delhi, Delhi 110016, India
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">
                📞
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Contact Us</h3>
              <p className="text-sm text-slate-600 mb-0.5">Phone: +91 98765 43210</p>
              <p className="text-sm text-slate-600">Email: support@school.edu.in</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Send us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message</label>
                <textarea
                  placeholder="How can we help you?"
                  rows="3"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors resize-none text-sm"
                  required
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-500 shadow-lg shadow-indigo-200 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-2 text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
