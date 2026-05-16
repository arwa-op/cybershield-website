import { useState } from "react";

function ScanForm({
  onScan,
  loading,
  error,
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onScan(input);
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
      
      <div className="text-center">
        
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI Threat Scanner
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Analyze Suspicious Content
        </h2>

        <p className="mt-4 text-slate-400">
          Paste suspicious messages, URLs,
          emails, or scam text below.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10"
      >
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste suspicious content here..."
          className="h-56 w-full rounded-2xl border border-slate-700 bg-slate-950 p-6 text-white outline-none transition focus:border-cyan-400"
        />

        {/* Error Message */}

        {error && (
          <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-center">
            
            <p className="text-sm font-medium text-red-400">
              {error}
            </p>

          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Scanning..." : "Scan Now"}
        </button>

      </form>

    </div>
  );
}

export default ScanForm;