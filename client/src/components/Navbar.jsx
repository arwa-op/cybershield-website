import { useState } from "react";

import {
  Link,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const userInfo = JSON.parse(
    localStorage.getItem(
      "userInfo"
    )
  );

  const handleLogout = () => {
    localStorage.removeItem(
      "userInfo"
    );

    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-black text-white"
        >
          Cyber
          <span className="text-cyan-400">
            Shield
          </span>
        </Link>

        {/* Desktop Nav */}

        <nav className="hidden items-center gap-8 md:flex">
          
          <Link
            to="/"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Contact
          </Link>

        </nav>

        {/* Desktop Auth */}

        <div className="hidden items-center gap-4 md:flex">
          
          {userInfo ? (
            <>
              
              <p className="text-sm text-slate-400">
                {userInfo.name}
              </p>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
              >
                Logout
              </button>

            </>
          ) : (
            <>
              
              <Link
                to="/login"
                className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Register
              </Link>

            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="text-white md:hidden"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-6 md:hidden">
          
          <div className="flex flex-col gap-5">
            
            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-slate-300 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-slate-300 hover:text-cyan-400"
            >
              Dashboard
            </Link>

            <Link
              to="/about"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-slate-300 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-slate-300 hover:text-cyan-400"
            >
              Contact
            </Link>

            <div className="pt-4">
              
              {userInfo ? (
                <button
                  onClick={
                    handleLogout
                  }
                  className="w-full rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-red-400"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  
                  <Link
                    to="/login"
                    className="rounded-xl border border-slate-700 px-5 py-3 text-center text-white"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
                  >
                    Register
                  </Link>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;