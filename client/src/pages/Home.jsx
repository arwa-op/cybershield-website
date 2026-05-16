import Hero from "../components/Hero";
import ScanForm from "../components/ScanForm";
import ThreatResults from "../components/ThreatResult";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home({
  onScan,
  loading,
  showResults,
  threatData,
  error,
}) {
  return (
    <>
      {/* Hero */}

      <Hero />

      {/* Scanner + Results */}

      <section
        id="scan-section"
        className="px-6 py-20"
      >
        
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          
          {/* Scan Form */}

          <ScanForm
            onScan={onScan}
            loading={loading}
            error={error}
          />

          {/* Threat Results */}

          <ThreatResults
            threatData={threatData}
            showResults={showResults}
            loading={loading}
          />

        </div>

      </section>

      {/* Features */}

      <Features />

      {/* Stats */}

      <Stats />

      {/* Footer */}

      <Footer />
    </>
  );
}

export default Home;