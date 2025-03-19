import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Logo from "./assets/logo.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // import your firebase config

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
      // Add email to "emails" collection in Firestore
      await addDoc(collection(db, "emails"), {
        email: email,
        timestamp: new Date()
      });
      
      setIsSuccess(true);
      setEmail(""); // Clear the input
    } catch (err) {
      console.error("Error adding email: ", err);
      setError("Failed to save your email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-[100vh] text-white flex flex-col justify-center items-center cursor-default">
      <div className="flex justify-center items-center mb-5">
        <img src={Logo} alt="logo" className="mr-7 rotate-50"/>
        <p className="text-7xl font-bold">Spiral Stake</p>
      </div>
      <div className="mb-8">
        <p className="text-3xl">Coming soon...</p>
      </div>
      <form className="relative flex items-center mb-10" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-blue-950 p-3 text-md outline-none rounded-md w-100 ml-7 overflow-ellipsis shadow-xl shadow-gray-900"
        />
        <button type="submit" disabled={isSubmitting}
          className="bg-gray-300 text-[#03050D] font-bold h-full absolute right-0 rounded-r-md cursor-pointer">
        <ArrowRightIcon className="h-7 w-12"/>
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {isSuccess && <p className="success">Thank you for subscribing!</p>}
    </div>
  );
}

export default App;
