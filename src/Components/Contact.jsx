import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import emailjs from "emailjs-com";
import "../index.css"; // Make sure CSS animations are loaded

export default function Contact() {
    const [responseMessage, setResponseMessage] = useState("");
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputValues = (e) => {
        const { name, value } = e.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        setResponseMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_rb9nvci", // replace with your EmailJS service ID
                "template_0hsks8c", // replace with your EmailJS template ID
                {
                    from_name: inputValues.name,
                    from_email: inputValues.email,
                    message: inputValues.message,
                },
                "8TtrUeFN5ZHp7T8c-" // replace with your EmailJS public key
            )
            .then(
                () => {
                    setResponseMessage("✅ Your message has been sent successfully!");
                    setInputValues({ name: "", email: "", message: "" });
                },
                (error) => {
                    setResponseMessage("❌ Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="px-4 md:py-10 md:w-2/3 mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10 text-glow-primary">
                    Contact Me
                </h2>

                {/* Contact Form */}
                <form
                    id="contactForm"
                    className="bg-gray-800 shadow-lg rounded-xl p-6"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-200"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleInputValues}
                            value={inputValues.name}
                            className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-200"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputValues}
                            value={inputValues.email}
                            className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-200"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            onChange={handleInputValues}
                            value={inputValues.message}
                            className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition text-white font-semibold shadow-lg"
                    >
                        Send Message
                    </button>

                    {responseMessage && (
                        <p
                            id="responseMessage"
                            className="text-center mt-4 text-sm text-green-400"
                        >
                            {responseMessage}
                        </p>
                    )}
                </form>

                {/* Social Icons */}
                <ul className="flex justify-center gap-10 mt-10">
  <li>
    <a
      href="https://github.com/Natarajan-Gothandaraman"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-animated icon-github"
    >
      <GitHubIcon style={{ fontSize: "2.8rem" }} />
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/natarajangothandaraman/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-animated icon-linkedin"
    >
      <LinkedInIcon style={{ fontSize: "2.8rem" }} />
    </a>
  </li>
  <li>
    <a
      href="https://www.instagram.com/itz_mee_natraj//"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-animated icon-instagram"
    >
      <InstagramIcon style={{ fontSize: "2.8rem" }} />
    </a>
  </li>
</ul>

            </div>
        </section>
    );
}
