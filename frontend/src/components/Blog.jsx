const Blog = ({ onBack }) => {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-700 mb-4">SmartChef AI Blog</h2>
        <p className="text-gray-800 mb-4">
          Welcome to our blog! Here you’ll find cooking tips, nutrition advice, AI updates, and more.
        </p>
  
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-2">🥦 5 Quick Healthy Meal Ideas</h3>
          <p className="text-gray-700">
            Looking for healthy meals you can make in under 30 minutes? These 5 recipes are delicious and AI-recommended!
          </p>
        </div>
  
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-700 mb-2">🤖 How SmartChef Uses AI to Recommend Recipes</h3>
          <p className="text-gray-700">
            Dive into how our algorithm understands your preferences and suggests meals tailored just for you.
          </p>
        </div>
  
        <button
          onClick={onBack}
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    );
  };
  
  export default Blog;
  