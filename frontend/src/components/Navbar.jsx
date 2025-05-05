const Navbar = ({ setActiveSection }) => (
  <nav className="w-full bg-gradient-to-r from-gray-900 via-teal-700 to-green-600 text-white py-4 shadow-md">
    <div className="flex flex-col sm:flex-row justify-between items-center w-full px-6">
      <div
        className="flex items-center cursor-pointer mb-2 sm:mb-0"
        onClick={() => setActiveSection('home')}
      >
        <img
          src="/favicon.png"
          alt="SmartChef Logo"
          className="h-8 w-8 mr-2 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition duration-200">
          SmartChef AI
        </h1>
      </div>
      <div className="space-x-6 text-lg">
        <button onClick={() => setActiveSection('home')} className="hover:text-yellow-300 transition duration-150">
          Home
        </button>
        <button onClick={() => setActiveSection('about')} className="hover:text-yellow-300 transition duration-150">
          About
        </button>
        <button onClick={() => setActiveSection('blog')} className="hover:text-yellow-300 transition duration-150">
          Blog
        </button>
        <button onClick={() => setActiveSection('contact')} className="hover:text-yellow-300 transition duration-150">
          Contact
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
