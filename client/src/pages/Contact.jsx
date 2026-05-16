export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="text-muted-foreground text-lg">
        Have a question or found a bug? We'd love to hear from you.
      </p>
      <div className="p-6 rounded-lg bg-card/50 border border-border/50 text-center">
        <p className="text-muted-foreground">
          Email us at: <a href="mailto:hello@cybershieldcommunity.com" className="text-cyan-400 hover:underline">hello@cybershieldcommunity.com</a>
        </p>
      </div>
    </div>
  );
}