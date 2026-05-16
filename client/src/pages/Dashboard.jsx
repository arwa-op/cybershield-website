import { useEffect, useState } from 'react'

function Dashboard() {
  const [reports, setReports] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))

        const response = await fetch(
          'http://https://cybershield-backend-74sj.onrender.com:5000/reports',
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          },
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error)
        }

        setReports(data)
      } catch (error) {
        console.log(error)

        setError('Failed to load reports')
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  // Loading State

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>

          <p className="mt-6 text-slate-400">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  // Error State

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-8 py-6 text-red-400">
          {error}
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Threat Intelligence
          </p>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Your Security Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Review your recent scans and monitor suspicious activity detected by
            CyberShield.
          </p>
        </div>
        {/* Analytics Cards */}

        <div className="mb-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {/* Total Reports */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Total Scans
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">
              {reports.length}
            </h2>
          </div>

          {/* High Risk */}

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="text-sm uppercase tracking-widest text-red-400">
              High Risk
            </p>

            <h2 className="mt-4 text-4xl font-black text-red-400">
              {reports.filter((report) => report.risk >= 80).length}
            </h2>
          </div>

          {/* Safe */}

          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="text-sm uppercase tracking-widest text-green-400">
              Safe
            </p>

            <h2 className="mt-4 text-4xl font-black text-green-400">
              {reports.filter((report) => report.risk < 50).length}
            </h2>
          </div>

          {/* Average Risk */}

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Average Risk
            </p>

            <h2 className="mt-4 text-4xl font-black text-cyan-400">
              {reports.length > 0
                ? Math.round(
                    reports.reduce((total, report) => total + report.risk, 0) /
                      reports.length,
                  )
                : 0}
              %
            </h2>
          </div>
        </div>

        {/* Empty State */}

        {reports.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-16 text-center">
            <h2 className="text-3xl font-bold text-white">No Reports Yet</h2>

            <p className="mt-4 text-slate-400">
              Start scanning suspicious content to generate your first threat
              report.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reports.map((report) => (
              <div
                key={report._id}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                {/* Risk */}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500">
                      Threat Report
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white">
                      {report.title}
                    </h2>
                  </div>

                  <div
                    className={`rounded-2xl px-4 py-3 text-xl font-black ${
                      report.risk >= 80
                        ? 'bg-red-500/10 text-red-400'
                        : report.risk >= 50
                        ? 'bg-yellow-500/10 text-yellow-400'
                        : 'bg-green-500/10 text-green-400'
                    }`}
                  >
                    {report.risk}%
                  </div>
                </div>

                {/* Description */}

                <p className="mt-6 leading-7 text-slate-400">
                  {report.description}
                </p>

                {/* Input */}

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="line-clamp-4 text-sm leading-6 text-slate-300">
                    {report.input}
                  </p>
                </div>

                {/* Categories */}

                <div className="mt-6 flex flex-wrap gap-3">
                  {report.categories.map((category, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-cyan-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-8 border-t border-slate-800 pt-5">
                  <p className="text-sm text-slate-500">
                    {new Date(report.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Dashboard
