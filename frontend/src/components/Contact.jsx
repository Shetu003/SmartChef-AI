const Contact = ({ onBack }) => (
  <section id="contact" className="mt-10 bg-white p-6 rounded shadow">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="mb-4 text-gray-700">
      We'd love to hear from you! Whether you have feedback, feature suggestions, questions about the technology,
      or just want to share your SmartChef AI cooking experience—we're all ears.
    </p>

    <p className="mb-4 text-gray-700">
      📩 You can reach out to us directly at{' '}
      <a href="mailto:SmartChef@example.com" className="text-blue-600 underline">
        SmartChef@example.com
      </a>{' '}
      for any inquiries, bug reports, or feature requests.
    </p>

    <p className="mb-4 text-gray-700">
      🤝 We’re also open to collaboration! If you're a developer, content creator, nutritionist, or just someone
      passionate about food and AI, feel free to connect—we're always exploring new ways to enhance the platform.
    </p>

    <p className="mb-4 text-gray-700">
      💬 Want to stay in touch? Future versions may include a newsletter, community forum, or more interactive features.
      Your suggestions help shape the roadmap.
    </p>

    <p className="mb-4 text-gray-700">
      Thank you for supporting SmartChef AI—we’re excited to grow with you!
    </p>

    <button
      onClick={onBack}
      className="mt-4 inline-block text-blue-600 hover:underline"
    >
      ← Back to Home
    </button>
  </section>
);

export default Contact;
