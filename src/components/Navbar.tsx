"use client";

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-indigo-600 dark:bg-indigo-900 shadow-lg py-4 px-4 md:px-8 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 text-white"
        >
          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16v-6h2v6h-2zm0-8V8h2v2h-2z" clipRule="evenodd" />
        </svg>
        <h1 className="text-xl font-bold text-white">NextAuth App</h1>
      </Link>

      {session?.user ? (
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard" 
            className="text-indigo-100 hover:text-white hidden md:block transition-colors"
          >
            Dashboard
          </Link>
          
          <div className="hidden md:flex items-center gap-2 bg-indigo-700 dark:bg-indigo-800 py-1 px-3 rounded-full">
            {session.user.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || ''} 
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center">
                {session.user.name?.charAt(0) || session.user.email?.charAt(0) || '?'}
              </div>
            )}
            <span className="text-white text-sm truncate max-w-[150px]">
              {session.user.name || session.user.email?.split('@')[0]}
            </span>
          </div>

          <button 
            onClick={async () => {
              await signOut({
                callbackUrl: "/",
              });
            }}
            className="bg-white text-indigo-700 hover:bg-indigo-50 dark:bg-indigo-200 dark:text-indigo-900 dark:hover:bg-indigo-100 font-medium px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            href="/register"
            className="text-white hover:text-indigo-200 py-2 px-3 transition-colors"
          >
            Register
          </Link>
          <button 
            onClick={() => signIn()}
            className="bg-white text-indigo-700 hover:bg-indigo-50 dark:bg-indigo-200 dark:text-indigo-900 dark:hover:bg-indigo-100 font-medium px-4 py-2 rounded-md transition-colors"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
