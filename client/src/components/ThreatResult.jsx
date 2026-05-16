function ThreatResults({
  threatData,
  showResults,
  loading,
}) {

  // Loading State

  if (loading) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/70 p-10">
        
        {/* Spinner */}

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>

        <h2 className="mt-8 text-3xl font-bold text-white">
          AI Threat Analysis Running
        </h2>

        <div className="mt-8 space-y-4 text-center">
          
          <p className="text-slate-400">
            Analyzing phishing indicators...
          </p>

          <p className="text-slate-400">
            Evaluating scam probability...
          </p>

          <p className="text-slate-400">
            Detecting social engineering patterns...
          </p>

        </div>

      </div>
    );
  }

  // Empty State

  if (!showResults || !threatData) {
    return (
      <div className="flex min-h-[500px] items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-10">
        
        <div className="text-center">
          
          <p className="text-lg text-slate-500">
            Threat analysis results will appear here
          </p>

        </div>

      </div>
    );
  }

  const {
    risk,
    title,
    description,
    triggers,
    categories,
  } = threatData;

  // Risk Colors

  let riskColor = "text-green-400";

  let progressColor = "bg-green-400";

  if (risk >= 80) {
    riskColor = "text-red-400";

    progressColor = "bg-red-500";
  }

  else if (risk >= 50) {
    riskColor = "text-yellow-400";

    progressColor = "bg-yellow-400";
  }

  else if (risk >= 25) {
    riskColor = "text-orange-400";

    progressColor = "bg-orange-400";
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10">
      
      {/* Header */}

      <div className="flex flex-col gap-8">
        
        <div>
          
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Threat Analysis Result
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-4 text-slate-400">
            {description}
          </p>

        </div>

        {/* Risk Score */}

        <div className="text-center">
          
          <div
            className={`text-7xl font-black ${riskColor}`}
          >
            {risk}%
          </div>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
            Risk Score
          </p>

        </div>

      </div>

      {/* Progress Bar */}

      <div className="mt-10 h-4 overflow-hidden rounded-full bg-slate-800">
        
        <div
          className={`h-full rounded-full transition-all duration-700 ${progressColor}`}
          style={{
            width: `${risk}%`,
          }}
        ></div>

      </div>

      {/* Categories */}

      <div className="mt-10">
        
        <h3 className="text-xl font-semibold text-white">
          Detected Threat Categories
        </h3>

        <div className="mt-5 flex flex-wrap gap-4">
          
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300"
            >
              {category}
            </div>
          ))}

        </div>

      </div>

      {/* Threat Intelligence */}

      <div className="mt-12">
        
        <h3 className="text-xl font-semibold text-white">
          AI Threat Intelligence
        </h3>

        <div className="mt-6 space-y-4">
          
          {triggers.map((trigger, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              
              <p className="text-slate-300">
                {trigger}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ThreatResults;