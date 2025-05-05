import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Login from './components/Login';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const generateRecipe = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/api/recipes/generate', { ingredients });
      setRecipe(res.data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    const textToCopy = `Recipe: ${recipe?.name}
      Description: ${recipe?.description}
      Ingredients: ${recipe?.ingredients?.join(', ')}
      Steps: ${recipe?.steps?.join('\n')}
      Cooking Time: ${recipe?.cookingTime}
      Nutritional Info: ${recipe?.nutritionalInfo}
      Cooking Tips: ${recipe?.cookingTips}
    `;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Recipe copied to clipboard!');
    });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setShowFeedbackForm(true); // Show the feedback form as a modal on logout
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);

    setRating(0);
    setFeedback('');
    setShowFeedbackForm(false);
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');

    // Refresh the page after logout
    window.location.reload();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${activeSection !== 'home' ? 'bg-white' : ''}`}
      style={{
        backgroundImage: activeSection === 'home' ? `url('/images.jpg')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar setActiveSection={setActiveSection} />

      <main className="flex-grow flex flex-col items-center justify-start mt-10">
        {activeSection === 'home' && (
          <>
            {/* Prompt Input and Response Window */}
            <div className="w-full sm:w-3/4 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-4xl font-bold mb-4 text-center">SmartChef AI</h1>
              <p className="mb-6 text-gray-700 text-center">
                Enter ingredients to get a delicious AI-generated recipe.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  className="border p-2 flex-1 rounded"
                  placeholder="e.g. chicken, rice, spinach"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
                <button
                  className={`${
                    ingredients.trim() === '' || loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white px-6 py-2 rounded`}
                  onClick={generateRecipe}
                  disabled={ingredients.trim() === '' || loading}
                >
                  {loading ? 'Generating...' : 'Generate'}
                </button>
              </div>
            </div>

            {/* Response Window (AI generated recipe display) */}
            {recipe && (
              <div className="bg-white mt-8 p-6 rounded shadow-lg w-full sm:w-3/4 lg:w-1/2">
                <h2 className="text-2xl font-bold">{recipe.name}</h2>
                <p className="mt-2 text-gray-600">{recipe.description}</p>
                {recipe.imageUrl && (
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="w-full h-48 object-cover rounded mt-4"
                  />
                )}
                <h3 className="mt-6 font-semibold">Ingredients:</h3>
                <ul className="list-disc list-inside">
                  {recipe.ingredients?.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
                <h3 className="mt-4 font-semibold">Steps:</h3>
                <ol className="list-decimal list-inside">
                  {recipe.steps?.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
                <h3 className="mt-4 font-semibold">Cooking Time:</h3>
                <p>{recipe.cookingTime}</p>
                <h3 className="mt-4 font-semibold">Nutritional Info:</h3>
                <p>{recipe.nutritionalInfo}</p>
                <h3 className="mt-4 font-semibold">Cooking Tips:</h3>
                <p>{recipe.cookingTips}</p>

                <button
                  onClick={copyToClipboard}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
                >
                  Copy to Clipboard
                </button>
              </div>
            )}

            {/* Three Added Sections */}
            <div className="mt-16 w-full">
              {/* First Section */}
              <div className="w-full bg-opacity-80 bg-gray-800 p-10 rounded-xl shadow-lg flex flex-wrap justify-between border border-gray-400">
                <div className="flex-1 p-4 text-white">
                  <h2 className="text-2xl font-bold mb-4">Reduce Waste - Save Money</h2>
                  <p>The average family throws away $150/month in wasted food. DishGen helps you save money by creating intelligent and delicious ways to use up leftover ingredients. Input the ingredients you have on hand, and our AI assistant will suggest unique recipes. Less waste, more savings.</p>
                </div>
                <div className="flex-1 p-4">
                  <img src="/1.webp" alt="Reduce Waste - Save Money" className="w-full h-48 object-cover rounded-lg border border-gray-300" />
                </div>
              </div>

              {/* Second Section */}
              <div className="w-full mt-16 bg-opacity-80 bg-gray-800 p-10 rounded-xl shadow-lg flex flex-wrap justify-between border border-gray-400 flex-row-reverse">
                <div className="flex-1 p-4 text-white">
                  <h2 className="text-2xl font-bold mb-4">Generate and Modify Infinite Recipes</h2>
                  <p>With SmartChef AI, a truly infinite world of culinary possibilities is at your fingertips. Each time you search, our smart AI-driven recipe assistant invents a new recipe from scratch. If it's not perfect on the first try, you can even request changes in real-time. Use the form above, or try our Advanced Creation tool.</p>
                </div>
                <div className="flex-1 p-4">
                  <img src="/2.webp" alt="Generate and Modify Infinite Recipes" className="w-full h-48 object-cover rounded-lg border border-gray-300" />
                </div>
              </div>

              {/* Third Section */}
              <div className="w-full mt-16 bg-opacity-80 bg-gray-800 p-10 rounded-xl shadow-lg flex flex-wrap justify-between border border-gray-400">
                <div className="flex-1 p-4 text-white">
                  <h2 className="text-2xl font-bold mb-4">COOKING UP A REVOLUTION</h2>
                  <p>At the heart of SmartChef AI is a revolutionary generative AI tool that is capable of understanding your request and generating creative, custom-tailored recipes. You can enter your ingredients and dietary preferences, and SmartChef AI will handle the rest!</p>
                </div>
                <div className="flex-1 p-4">
                  <img src="/3.webp" alt="Cooking Up A Revolution" className="w-full h-48 object-cover rounded-lg border border-gray-300" />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Other Sections */}
        {activeSection === 'blog' && <Blog onBack={() => setActiveSection('home')} />}
        {activeSection === 'about' && <About onBack={() => setActiveSection('home')} />}
        {activeSection === 'contact' && <Contact onBack={() => setActiveSection('home')} />}
      </main>

      <Footer />

      {/* Feedback Modal */}
      {showFeedbackForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4 text-center">We'd love your feedback!</h2>
            <form onSubmit={handleSubmitFeedback}>
              <div className="flex gap-2 justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <textarea
                className="w-full p-2 border rounded mb-4"
                rows="4"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Submit Feedback & Logout
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Logout Button */}
      {isAuthenticated && (
        <button
          className="fixed bottom-10 right-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
