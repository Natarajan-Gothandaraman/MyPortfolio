import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import emailjs from "emailjs-com";

export default function Contact() {
    const [response, setResponse] = useState({ message: "", isError: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        if (response.message) {
            setResponse({ message: "", isError: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Load credentials from environment variables
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            console.error("EmailJS credentials are not set in .env file.");
            setResponse({ message: "❌ Configuration error. Cannot send message.", isError: true });
            setIsSubmitting(false);
            return;
        }

        emailjs
            .send(serviceID, templateID, {
                from_name: formValues.name,
                from_email: formValues.email,
                message: formValues.message,
            }, publicKey)
            .then(
                () => {
                    setResponse({ message: "✅ Your message has been sent successfully!", isError: false });
                    setFormValues({ name: "", email: "", message: "" });
                },
                (error) => {
                    setResponse({ message: "❌ Failed to send message. Please try again.", isError: true });
                    console.error("EmailJS Error:", error);
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-20 mt-20"> {/* Removed black background gradient here */}
            <div className="px-4 md:py-10 md:w-2/3 mx-auto">

                <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Contact Me</h2>{/* Changed color here with text-glow class */}

                <form id="contactForm" className="bg-black shadow-2xl rounded-xl p-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                        <input type="text" name="name" onChange={handleInputChange} value={formValues.name} className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                        <input type="email" name="email" onChange={handleInputChange} value={formValues.email} className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                        <textarea name="message" onChange={handleInputChange} value={formValues.message} className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Your Message" rows="4" required></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-2.5 px-4 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    {response.message && (
                        <p className={`text-center mt-4 text-sm ${response.isError ? 'text-red-400' : 'text-green-400'}`}>
                            {response.message}
                        </p>
                    )}
                </form>

                <ul className="flex justify-center gap-10 mt-10">
                    <li><a href="https://github.com/Natarajan-Gothandaraman" target="_blank" rel="noopener noreferrer" className="icon-animated icon-github" aria-label="GitHub Profile"><GitHubIcon style={{ fontSize: "2.8rem" }} /></a></li>
                    <li><a href="https://www.linkedin.com/in/natarajangothandaraman/" target="_blank" rel="noopener noreferrer" className="icon-animated icon-linkedin" aria-label="LinkedIn Profile"><LinkedInIcon style={{ fontSize: "2.8rem" }} /></a></li>
                    <li><a href="https://www.instagram.com/itz_mee_natraj/" target="_blank" rel="noopener noreferrer" className="icon-animated icon-instagram" aria-label="Instagram Profile"><InstagramIcon style={{ fontSize: "2.8rem" }} /></a></li>
                </ul>
            </div>
        </section>
    );
}