// import React from 'react';
// import '../App.css';

// const Login = () => {
//   const handleLogin = () => {
//     window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome to the Eventify App</h1>
//       <p>Sign in with Google to access your calendar events.</p>
//       <button className="google-login-btn" onClick={handleLogin}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { Calendar } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <div className="text-center">
          <Calendar className="mx-auto h-14 w-14 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Welcome to Eventify
          </h1>
          <p className="text-gray-600 mt-2">
            Sign in with Google to access your calendar events.
          </p>
        </div>
        <button
          onClick={handleLogin}
          className={`w-full flex items-center justify-center py-3 px-4 rounded-md text-white font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all ${
            isLoading && "cursor-not-allowed"
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
          ) : (
            "Sign in with Google"
          )}
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}


