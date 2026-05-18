export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-8">
      
      <h1 className="text-4xl font-bold tracking-tight">
        Contact Us
      </h1>

      <p className="text-lg text-muted-foreground">
        Have questions, feedback, or found a security issue? Feel free to reach out anytime.
      </p>

      <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-center">
        
        <p className="text-muted-foreground">
          Email us at{" "}
          
          <a
            href="mailto:securelayer.dev@gmail.com"
            className="font-medium text-cyan-400 transition hover:underline"
          >cybershield49@gmail.com
            
          </a>

        </p>

      </div>

    </div>
  );
}