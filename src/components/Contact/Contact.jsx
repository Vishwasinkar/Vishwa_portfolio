
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container (if used elsewhere) */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s connect! Feel free to reach out through any of the platforms below.
        </p>
      </div>

      {/* Contact Details */}
      <div className="text-center text-white space-y-4 text-lg">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:vishwasinkar9218@gmail.com"
            className="text-purple-400 hover:underline"
          >
            vishwasinkar9218@gmail.com
          </a>
        </p>
        <p>
          📞 Phone:{" "}
          <a
            href="tel:+919373387537"
            className="text-purple-400 hover:underline"
          >
            +91 9373387537
          </a>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8 text-3xl text-white">
        <a
          href="https://www.linkedin.com/in/vishwa-sinkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Vishwasinkar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <i className="fab fa-github"></i>
        </a>
        
        
      </div>
    </section>
  );
};

export default Contact;