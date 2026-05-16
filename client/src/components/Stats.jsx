import StatCard from "./StatCard";

function Stats() {
  return (
    <section className="px-6 py-24">
      
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center">
          
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Cyber Awareness
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Protecting Communities Online
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Millions of people face phishing attacks and online scams daily.
            CyberShield Community aims to make cybersecurity understandable
            and accessible for everyone.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            number="15K+"
            label="Scam URLs Analyzed"
          />

          <StatCard
            number="8K+"
            label="Threats Prevented"
          />

          <StatCard
            number="3K+"
            label="Community Reports"
          />

          <StatCard
            number="99%"
            label="Awareness Satisfaction"
          />

        </div>

      </div>

    </section>
  );
}

export default Stats;