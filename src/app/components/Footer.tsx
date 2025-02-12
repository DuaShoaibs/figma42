
const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="footer-container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section: Logo and Description */}
        <div className="footer-section">
          <div className="flex items-center gap-2 mb-4">
            <img src="/Logo.png" alt="Comforty Logo" className="w-10 h-10" />
            <h3 className="text-xl font-bold">Comforty</h3>
          </div>
          <p className="text-gray-400">
            Vivamus tristique odio sit amet velit semper, <br />
            eu posuere turpis interdum. <br />
            Cras egestas purus.
          </p>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-3">CATEGORY</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-3">SUPPORT</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-3">NEWSLETTER</h4>
          <form className="flex items-center">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-l-md text-white"
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 rounded-r-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 mt-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Social Media and Bottom Footer */}
      <div className="footer-bottom mt-8 border-t border-gray-700 pt-4 text-center text-gray-600 text-sm">
        <p>
          &copy; 2021 - Blogy ~ Designed & Developed by 
          <a href="#" className="text-blue-400 hover:underline ml-1">Zokisoft</a>
        </p>
        <div className="footer-payment mt-2 flex justify-center gap-4 text-lg">
          <span>🔒 PayPal</span>
          <span>💳 VISA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
