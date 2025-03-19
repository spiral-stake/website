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
          Next-gen liquidity management for Stakers
        </p>

        <div className="max-w-md mx-auto">
          <form className="relative group animate-fade-in-up delay-200" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Join the waitlist"
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <ArrowRightIcon className="h-6 w-6" />
              )}
            </button>
          </form>

          {error && <p className="mt-4 text-red-500 animate-fade-in">{error}</p>}
          {isSuccess && (
            <p className="mt-4 text-green-400 animate-fade-in">
              Thank you for subscribing! We'll keep you updated.
            </p>
          )}
        </div>

        <p className="mt-12 text-gray-400 text-sm animate-fade-in-up delay-300 font-light">
          Join us on our journey to revolutionize Liquidity management
        </p>
      </div>
    </div>
  );
}

export default App;
