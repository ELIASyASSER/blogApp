import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useUser} from '../context'
function Header() {
    const {isLoading,user,logoutUser} = useUser()
  
  return (
    <header className="bg-sky-50 flex justify-between items-center px-8 py-4 shadow-lg">
      {/* Logo */}
      <Link
        className="font-mono text-cyan-600 text-4xl font-bold tracking-wide hover:text-cyan-800 transition duration-300"
        to="/"
      >
        Bloggy
      </Link>

      <nav className="flex items-center space-x-6">
        {/* Conditionally render based on user authentication status */}
        {isLoading?<span>Loading ....</span>:user?.username?
          
          <>

        <Link
          to="/createPost"
          className="text-cyan-600 font-semibold hover:text-cyan-800 transition duration-300"
        >
          Create Post
        </Link>
        <button
          onClick={logoutUser}
          className="text-red-600 font-semibold cursor-pointer hover:text-red-800 transition duration-300"
        >
          LogOut
        </button>
          </>
        :
          <div className="flex items-center space-x-4">
            <Link
              to="/register"
              className="bg-cyan-400 text-white py-2 px-6 rounded-full border-2 border-black font-semibold hover:bg-cyan-500 transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-cyan-400 text-white py-2 px-6 rounded-full border-2 border-black font-semibold hover:bg-cyan-500 transition duration-300"
            >
              Login
            </Link>
          </div>
        }
          
      </nav>
    </header>
  );
}

export default Header;
