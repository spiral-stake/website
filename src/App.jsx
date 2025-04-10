import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        timestamp: new Date(),
      });

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Error adding email: ", err);
      setError("Failed to save your email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="flex justify-center items-center mb-12 animate-fade-in">
          <img
            src={Logo}
            alt="Spiral Stake Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 mr-4 sm:mr-6"
          />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
            Spiral Stake
          </h1>
        </div>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 animate-fade-in-up font-light">
          The next-gen liquidity management for Stakers.
        </p>

        <div className="max-w-md mx-auto animate-fade-in-up delay-200">
          <a
            href="https://t.me/+OYYtaiH9ex9kZDQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[rgb(8,79,170)] hover:bg-[rgb(7,71,153)] text-white rounded-lg transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl"
          >
            Join Beta Testers on Telegram
          </a>
        </div>

        <p className="mt-12 text-gray-400 text-sm animate-fade-in-up delay-300 font-light">
          Join us on our journey to revolutionize Liquidity management
        </p>
      </div>
    </div>
  );
}

export default App;
