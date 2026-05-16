import {
  Shield,
  ScanSearch,
  BellRing,
} from "lucide-react";

const features = [
  {
    title: "Threat Detection",

    description:
      "Analyze suspicious URLs, phishing attempts, and scam messages instantly with intelligent detection.",

    icon: <Shield size={34} />,
  },

  {
    title: "Smart Scanning",

    description:
      "Our AI-assisted scanner evaluates suspicious content and highlights risky patterns in simple language.",

    icon: <ScanSearch size={34} />,
  },

  {
    title: "Real-Time Alerts",

    description:
      "Get immediate threat alerts and understand the danger level before interacting with suspicious content.",

    icon: <BellRing size={34} />,
  },
];

function Features() {
  return (
    <section className="px-6 py-24">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}

        <div className="text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Powerful Security Tools
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            CyberShield helps everyday users stay protected from modern cyber threats with intelligent scanning and clear explanations.
          </p>

        </div>

        {/* Features Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {features.map(
            (feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                
                {/* Icon */}

                <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                  {feature.icon}
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Features;