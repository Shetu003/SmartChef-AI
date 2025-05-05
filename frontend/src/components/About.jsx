const About = ({ onBack }) => (
  <section id="about" className="mt-10 bg-white p-6 rounded shadow">
    <h2 className="text-2xl font-bold mb-4">About SmartChef AI</h2>
    <p className="mb-4 text-gray-700">
      <strong>SmartChef AI</strong> is your intelligent kitchen companion that transforms everyday ingredients into creative, nutritious, and delicious recipes—instantly. Whether you're a beginner cook or a culinary enthusiast, SmartChef AI empowers you to make the most out of what's in your fridge or pantry without the need for advanced cooking skills.
    </p>
    <p className="mb-4 text-gray-700">
      At its core, SmartChef AI leverages the power of <strong>Gemini 1.5 Pro</strong>—a cutting-edge AI model—to generate tailored recipes based on the ingredients you provide. It not only suggests the recipe name and cooking steps but also includes a description, estimated cooking time, nutritional info, and expert-level cooking tips to enhance your experience.
    </p>
    <p className="mb-4 text-gray-700">
      Built with a modern, lightweight tech stack—<strong>React</strong> and <strong>Vite</strong> for the frontend, <strong>Tailwind CSS</strong> for styling, and a <strong>Spring Boot</strong> backend—SmartChef AI ensures fast performance and a smooth user experience. There’s no login system, no user tracking, and no database—keeping it simple, secure, and privacy-friendly.
    </p>
    <p className="mb-4 text-gray-700">
      Features include:
      <ul className="list-disc list-inside mt-2 ml-4">
        <li>Ingredient-based recipe generation</li>
        <li>Interactive star rating and feedback collection</li>
        <li>Clipboard copy for easy recipe sharing</li>
        <li>Blog section for food tips and AI cooking insights</li>
        <li>Fully responsive design for desktop and mobile users</li>
      </ul>
    </p>
    <p className="mb-4 text-gray-700">
      SmartChef AI aims to make daily cooking stress-free, reduce food waste, and introduce more creativity into your meals. Explore the possibilities—one ingredient list at a time!
    </p>

    <button
      onClick={onBack}
      className="mt-4 inline-block text-blue-600 hover:underline"
    >
      ← Back to Home
    </button>
  </section>
);

export default About;
