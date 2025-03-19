"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; // ✅ Import Supabase client
import Image from "next/image";
import { motion } from "framer-motion";

export default function Login() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Check for logged-in user
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setSession(data.user);
      } else {
        setSession(null);
      }
    };
    checkSession();
  }, []);
  
  // ✅ Handle Login with Supabase Auth
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/"); // ✅ Redirect to Homepage
    }
  };

  // ✅ Handle Google Sign-In
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) setError(error.message);
  };

  // ✅ Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="flex h-screen w-full"
    >
      {/* Left Section - Black Background */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex w-2/5 bg-black text-white flex-col justify-center items-center relative"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <Image 
            src="/Login/12.png"
            alt="12"
            width={240} 
            height={240}
            className="w-auto h-[220px] object-contain mb-12"
          />

          <img 
            src="/twelve1.png" 
            alt="Twelve Twelve Twelve" 
            className="w-full max-w-full h-[70px] object-cover"
          />

          <img 
            src="/Login/AM.png"
            alt="AM"
            className="w-auto h-[220px] mt-12 object-contain rotate-180"
          />
        </div>
      </motion.div>

      {/* Right Section - Login Form */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-3/5 flex flex-col justify-center items-center px-12"
      >
        <motion.img 
          src="/Login/Logo.png" 
          alt="12AM Logo" 
          className="w-[200px] mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.h3
          className="text-lg font-normal font-bronx mb-4 tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {session ? `Welcome, ${session.email}!` : "SIGN IN WITH YOUR ACCOUNT"}
        </motion.h3>

        {/* If User is Logged In, Show Profile & Sign Out */}
        {session ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Image src={session.user_metadata?.avatar_url || "/profile.png"} alt="Profile" width={80} height={80} className="rounded-full" />
            <button
              onClick={handleLogout}
              className="w-1/2 max-w-lg py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition mt-4"
            >
              SIGN OUT
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
            className="w-full max-w-lg"
          >
            {/* Error Message */}
            {error && <motion.p className="text-red-500 mb-3">{error}</motion.p>}

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <motion.input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-3"
              />
              <motion.input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-6"
              />
              <motion.button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition"
              >
                LOGIN
              </motion.button>
            </form>

            <p className="text-gray-500 text-sm mt-3 text-center cursor-pointer hover:text-black transition-all">
  Forgot password?
</p>

            {/* OR Divider */}
            <div className="flex items-center my-6 w-full max-w-lg">
              <div className="flex-grow border-t border-black"></div>
              <span className="px-3 font-bronx text-black">or</span>
              <div className="flex-grow border-t border-black"></div>
            </div>

            {/* Social Login Buttons */}
            <motion.button
              onClick={handleGoogleLogin}
              className="w-full max-w-md ml-10 flex items-center justify-center gap-3 py-2 border-2 border-black rounded-lg shadow-md bg-white text-black font-semibold hover:bg-black hover:text-white transition-all mb-4"
            >
              <img src="/icon/googlle.png" alt="Google" className="w-10 h-10" />
              <span>Continue with Google</span>
            </motion.button>

            <motion.p
              className="text-gray-500 text-sm mt-3 text-center cursor-pointer hover:text-black transition-all">
              Don’t have an account? <span className="text-blue-600 cursor-pointer" onClick={() => router.push("/signup")}>Sign up</span>
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
