export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <h1 className="text-4xl font-bold tracking-tight">About CyberShield</h1>
      <div className="prose prose-invert border-l-4 border-cyan-500 pl-6 space-y-6 text-muted-foreground">
        <p className="text-lg">
          CyberShield Community was built to bridge the gap between complex cybersecurity jargon and everyday users.
        </p>
        <p>
          We believe that everyone deserves to feel safe online, whether you're a student, a parent, or a grandparent. Modern scams have evolved, using fake QR codes, convincing SMS messages, and sophisticated phishing sites.
        </p>
        <p>
          Our mission is to translate complicated threat analyses into simple, human language. We don't just give you a "risk score" — we tell you exactly what the scam is trying to do, so you can learn to spot it yourself next time.
        </p>
      </div>
    </div>
  );
}