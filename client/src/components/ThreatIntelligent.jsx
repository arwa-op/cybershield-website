function ThreatIntelligence() {
  return (
    <section className="mt-16 grid gap-8 lg:grid-cols-3">
      
      {/* Risk Meter */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Risk Meter
        </p>

        <div className="mt-10 flex items-center justify-center">
          
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-[16px] border-red-500">
            
            <div className="text-center">
              
              <h2 className="text-6xl font-bold text-red-400">
                92%
              </h2>

              <p className="mt-3 text-slate-400">
                Critical Risk
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Threat Categories */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Threat Categories
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-slate-300">
                Phishing
              </span>

              <span className="text-red-400">
                84%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-800">
              <div className="h-3 w-[84%] rounded-full bg-red-400"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-slate-300">
                Malware
              </span>

              <span className="text-yellow-400">
                61%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-800">
              <div className="h-3 w-[61%] rounded-full bg-yellow-400"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-slate-300">
                Data Theft
              </span>

              <span className="text-orange-400">
                72%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-800">
              <div className="h-3 w-[72%] rounded-full bg-orange-400"></div>
            </div>
          </div>

        </div>

      </div>

      {/* Detection Timeline */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Detection Timeline
        </p>

        <div className="mt-10 space-y-8">

          <div className="flex gap-4">
            
            <div className="mt-2 h-3 w-3 rounded-full bg-red-400"></div>

            <div>
              <h3 className="font-semibold text-white">
                URL Analyzed
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Suspicious domain structure detected
              </p>
            </div>

          </div>

          <div className="flex gap-4">
            
            <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400"></div>

            <div>
              <h3 className="font-semibold text-white">
                Redirect Chain
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Multiple hidden redirects identified
              </p>
            </div>

          </div>

          <div className="flex gap-4">
            
            <div className="mt-2 h-3 w-3 rounded-full bg-cyan-400"></div>

            <div>
              <h3 className="font-semibold text-white">
                Final Assessment
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                High-risk phishing activity confirmed
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ThreatIntelligence;