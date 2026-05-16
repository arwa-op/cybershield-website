function ThreatCard({
  title,
  status,
  description,
  risk,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]">
      
      {/* Top Section */}

      <div className="flex items-start justify-between gap-4">
        
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-slate-400">
            {status}
          </p>
        </div>

        {/* Risk Badge */}

        <div className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
          {risk}
        </div>

      </div>

      {/* Description */}

      <p className="mt-8 leading-8 text-slate-300">
        {description}
      </p>

      {/* Bottom Alert */}

      <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm leading-7 text-yellow-300">
        Avoid sharing personal information until the source is verified.
      </div>

    </div>
  );
}

export default ThreatCard;