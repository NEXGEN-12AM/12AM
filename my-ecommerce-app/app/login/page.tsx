import React from "react";

export default function Login() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section - Black Background */}
      <div className="hidden md:flex w-2/5 bg-black text-white flex-col justify-center items-center relative">
        <div className="text-center">
          <h1 className="text-[240px] font-Humane font-bold">12</h1>
          {/* Replaced Text with Image */}
          <img
  src="/Login/twelve.png"
  alt="Twelve Twelve Twelve"
  className="w-[600px] max-w-[600px]"
/>
          <h1 className="text-[230px] font-Humane mt-2 rotate-180">AM</h1>
        </div>
      </div>

      {/* Right Section - Login Form (Extended Width) */}
      <div className="w-3/5 flex flex-col justify-center items-center px-12">
        <img
          src="/Login/Logo.png"
          alt="12AM Logo"
          className="w-[180px] md:w-[200px] lg:w-[220px] mb-8"
        />

        <h3 className="text-lg font-normal font-bronx mb-4 tracking-wider">
          SIGN IN WITH YOUR ACCOUNT
        </h3>

        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-8"
        />

        <button className="w-1/2 max-w-lg py-3 bg-white border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition">
          SIGN IN
        </button>

        <p className="text-gray-500 text-sm mt-2 cursor-pointer">Forgot password?</p>

        {/* OR Divider */}
        <div className="flex items-center my-6 w-full max-w-lg">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-3 font-bronx text-black">or</span>
          <div className="flex-grow border-t border-black"></div>
        </div>

        {/* Social Login Buttons */}
        <button className="w-full max-w-md flex items-center justify-center gap-3 py-2 border-2 border-black rounded-lg shadow-md bg-white text-black font-semibold font-kano active:translate-y-[2px] active:shadow-sm transition-all mb-4">
  <img 
    src="/Login/google1.png" 
    alt="Google" 
    className="w-10 h-10"
  />
  <span>Continue with Google</span>
</button>

<button className="w-full max-w-md flex items-center justify-center gap-3 py-3 border-2 border-black rounded-lg shadow-md bg-white text-black font-semibold font-kano active:translate-y-[2px] active:shadow-sm transition-all">
  <img 
    src="/Login/Facebook.png" 
    alt="Facebook" 
    className="w-8 h-8"
  />
  <span>Continue with Facebook</span>
</button>

        {/* Sign Up Link */}
        <p className="text-gray-500 text-sm mt-5">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}
