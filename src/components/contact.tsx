export const Contact = () => (
    <div
      id="contact"
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-20 px-6"
    >
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
        Contact
      </h2>
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg mb-4">Feel free to reach out to me via email!</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kshaaneali@gmail.com&su=Inquiry&body=Hello%20Shaan,%0A%0A"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-md text-white font-bold hover:from-indigo-400 hover:to-purple-400"
        >
          Send Email
        </a>
      </div>
    </div>
  );