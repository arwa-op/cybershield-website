import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12">
      
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        
        {/* Left */}

        <div>
          
          <h2 className="text-3xl font-black text-white">
            Cyber
            <span className="text-cyan-400">
              Shield
            </span>
          </h2>

          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Helping users understand cyber threats in plain English through intelligent scanning and community-powered awareness.
          </p>

        </div>

        {/* Navigation */}

        <div className="flex flex-wrap gap-6 text-sm font-medium">
          
          <Link
            to="/"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Dashboard
          </Link>

          
          <Link
            to="/about"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Contact
          </Link>

        </div>

      </div>

      {/* Bottom */}

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        
        © 2026 CyberShield Community. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;