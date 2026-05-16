import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    day: "Mon",
    threats: 120,
  },
  {
    day: "Tue",
    threats: 210,
  },
  {
    day: "Wed",
    threats: 180,
  },
  {
    day: "Thu",
    threats: 320,
  },
  {
    day: "Fri",
    threats: 260,
  },
  {
    day: "Sat",
    threats: 390,
  },
  {
    day: "Sun",
    threats: 280,
  },
];

function ThreatChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      
      <div className="mb-10">
        
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Weekly Analytics
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Threat Detection Trends
        </h2>

      </div>

      <div className="h-[350px] w-full">
        
        <ResponsiveContainer width="100%" height="100%">
          
          <LineChart data={data}>
            
            <CartesianGrid stroke="#1e293b" />

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="threats"
              stroke="#22d3ee"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ThreatChart;