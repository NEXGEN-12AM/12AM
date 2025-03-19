"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; // ✅ Ensure the Supabase client is properly imported
import Image from "next/image";
import { motion } from "framer-motion";



export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ User Input State
  const [userInput, setUserInput] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  // ✅ Handle User Signup with Supabase
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    const { email, password, firstName, lastName, phone } = userInput;
  
    try {
      // ✅ Create the user in Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (data.user) {
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([
            {
              id: data.user.id,  // Ensure this matches Supabase Auth ID
              email,
              first_name: firstName,
              last_name: lastName,
              phone,
            },
          ]);
      
        if (profileError) {
          console.error("Error saving profile:", profileError.message);
          setError(profileError.message);
          return;
        }
      
        console.log("Profile successfully saved in database!");
      }
      
  
      // ✅ Redirect after signup
      router.push("/");
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Something went wrong. Please try again.");
    }
  
    setLoading(false);
  };
  

  // ✅ Handle Google OAuth Signup
  const handleGoogleSignup = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="flex h-screen w-full"
    >
      {/* Left Section - Black Background */}
      <div className="hidden md:flex w-2/5 bg-black text-white flex-col justify-center items-center relative">
        <div className="w-full flex flex-col justify-center items-center">
          <Image src="/Login/12.png" alt="12" width={240} height={240} className="w-auto h-[220px] object-contain mb-12" />
          <img src="/twelve1.png" alt="Twelve Twelve Twelve" className="w-full max-w-full h-[80px] object-cover" />
          <img src="/Login/AM.png" alt="AM" className="w-auto h-[220px] mt-12 object-contain rotate-180" />
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-3/5 flex flex-col justify-center items-center px-12">
        <img src="/Login/Logo.png" alt="12AM Logo" className="w-[200px] mb-8" />

        <h3 className="text-lg font-normal font-bronx mb-4 tracking-wider">
          CREATE YOUR ACCOUNT
        </h3>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* Signup Form */}
        <form className="w-full max-w-lg" onSubmit={handleSignup}>
          <input type="email" name="email" value={userInput.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3" required />
          <input type="text" name="phone" value={userInput.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3" required />
          <div className="flex gap-3">
            <input type="text" name="firstName" value={userInput.firstName} onChange={handleChange} placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3" required />
            <input type="text" name="lastName" value={userInput.lastName} onChange={handleChange} placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3" required />
          </div>
          <input type="password" name="password" value={userInput.password} onChange={handleChange} placeholder="Password (at least 8 characters)" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6" required />
          <button type="submit" disabled={loading} className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
            {loading ? "SIGNING UP..." : "SIGN UP"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6 w-full max-w-lg">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-3 font-bronx text-black">or</span>
          <div className="flex-grow border-t border-black"></div>
        </div>

        {/* Google Signup */}
        <button onClick={handleGoogleSignup} className="w-full max-w-md flex items-center justify-center gap-3 py-2 border-2 border-black rounded-lg shadow-md bg-white text-black font-semibold hover:bg-black hover:text-white transition mb-4">
          <img src="/icon/googlle.png" alt="Google" className="w-10 h-10" />
          <span>Continue with Google</span>
        </button>

        <p className="text-gray-500 text-sm mt-5">
          Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => router.push("/login")}>Log in</span>
        </p>
      </div>
    </motion.div>
  );
}
