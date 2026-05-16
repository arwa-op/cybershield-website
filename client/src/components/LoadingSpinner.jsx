import { useEffect, useState } from "react";

const scanSteps = [
  "Initializing threat scan...",
  "Analyzing suspicious patterns...",
  "Checking redirect chains...",
  "Scanning phishing indicators...",
  "Generating AI threat report...",
];

function LoadingSpinner() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        }

        return prev;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-24">
      
      {/* Spinner */}

      <div className="h-20 w-20 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400"></div>

      {/* Status */}

      <h2 className="mt-10 text-3xl font-bold text-white">
        AI Threat Analysis
      </h2>

      <p className="mt-5 text-lg text-cyan-400 transition">
        {scanSteps[currentStep]}
      </p>

      {/* Progress Bar */}

      <div className="mt-10 h-3 w-full max-w-xl overflow-hidden rounded-full bg-slate-800">
        
        <div
          className="h-full rounded-full bg-cyan-400 transition-all duration-500"
          style={{
            width: `${((currentStep + 1) / scanSteps.length) * 100}%`,
          }}
        ></div>

      </div>

    </div>
  );
}

export default LoadingSpinner;