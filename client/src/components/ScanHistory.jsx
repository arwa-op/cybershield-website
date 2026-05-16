import { useEffect, useState } from "react";

function ScanHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("scanHistory")) || [];

    setHistory(storedHistory);
  }, []);

  return (
    <section className="mt-16">
      
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        
        {/* Header */}

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <div>
            
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Scan Records
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Recent Scan History
            </h2>

          </div>

          <button
            onClick={() => {
              localStorage.removeItem("scanHistory");
              setHistory([]);
            }}
            className="rounded-2xl border border-red-500/30 px-6 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
          >
            Clear History
          </button>

        </div>

        {/* Empty State */}

        {history.length === 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-10 text-center">
            
            <p className="text-slate-400">
              No scan history available yet.
            </p>

          </div>
        )}

        {/* Table */}

        {history.length > 0 && (
          <div className="overflow-x-auto">
            
            <table className="min-w-full border-collapse">
              
              <thead>
                
                <tr className="border-b border-slate-800 text-left">
                  
                  <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Input
                  </th>

                  <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Category
                  </th>

                  <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Risk
                  </th>

                  <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Verdict
                  </th>

                  <th className="pb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {history.map((scan, index) => {
                  let verdictColor = "text-green-400";
                  let verdict = "Safe";

                  if (scan.risk > 30) {
                    verdictColor = "text-yellow-400";
                    verdict = "Suspicious";
                  }

                  if (scan.risk > 70) {
                    verdictColor = "text-red-400";
                    verdict = "Dangerous";
                  }

                  return (
                    <tr
                      key={index}
                      className="border-b border-slate-800/60 transition hover:bg-slate-800/30"
                    >
                      
                      <td className="max-w-xs py-5 text-white">
                        <p className="line-clamp-2">
                          {scan.input}
                        </p>
                      </td>

                      <td className="py-5 text-slate-300">
                        {scan.category}
                      </td>

                      <td className="py-5">
                        
                        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white">
                          {scan.risk}%
                        </span>

                      </td>

                      <td className={`py-5 font-semibold ${verdictColor}`}>
                        {verdict}
                      </td>

                      <td className="py-5 text-slate-400">
                        {scan.date}
                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </section>
  );
}

export default ScanHistory;