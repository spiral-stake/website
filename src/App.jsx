import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Working from "./pages/Working";
import Footer from "./components/Footer";

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
    <div className="app font-['Outfit']">
      <Navbar />
      <main>
        {/* <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="working" element={<Working/>}/>
    </Routes> */}
        <Home/>
        <AboutPage />
        <Working />
      </main>
      <Footer />
    </div>
  );
}

export default App;
