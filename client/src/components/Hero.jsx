import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6">
      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="max-w-5xl text-center">
        
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
          
          <div className="h-2 w-2 rounded-full bg-cyan-400"></div>

          Community-Powered Protection
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white lg:text-7xl">
          Understand Cyber Threats in
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  		Plain English
	  </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-8 text-slate-400 lg:text-xl">
          We protect everyday users from phishing, fake QR codes,
          and scam messages with simple human explanations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

  {/* Scan Now */}

  <a
    href="#scan-section"
    className="rounded-2xl bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
  >
    Scan Now
  </a>

  {/* View History */}

  <Link
    to="/dashboard"
    className="rounded-2xl border border-slate-700 px-8 py-4 text-center font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
  >
    View Recent History
  </Link>

</div>
        </div>

      </div>

    </section>
  );
}

export default Hero;