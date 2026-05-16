function StatCard({ number, label }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]">
      
      <h3 className="text-4xl font-bold text-cyan-400">
        {number}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>

    </div>
  );
}

export default StatCard;