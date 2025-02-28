import React from "react";

const LoginPage = ()=> {
  return (
    <div className= "flex- min-h-screen item-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-custom text-center mb-6">Welcome to 12AM</h2>

        
        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-custom font-medium mb-1" htmlFor="email">Email</label>
            <input 
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 " htmlFor="password">Password</label>
            <input
            id="password" 
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Remember Me */}
          <div className="flex item-center justify-between mb-4">
            <label className="flex item-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Forgot Password?</a>
          </div>
          <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          <button className="pb-2 text-gray-500 hover:text-white-500">Sign Up</button>
        </form>
        {/* Sign Up Link */}
        <div className="mt-6">
          <p className="text-sm text-center text-gray-500">Or login with</p>
          <div className="flex justify-around mt-4">
            <button className="flex items-center bg-red-500 text-white px-4 py-2 round-lg">
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            </button>
            <button className="flex item-center bg-blue-600 text-white px-4 py-2 rounded-lg">
              <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5 mr-2" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;