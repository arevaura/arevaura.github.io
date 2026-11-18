import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
        404 — Page Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
        Lost in digital space
      </h1>
      <p className="text-muted max-w-md mb-8">
        The page you are looking for does not exist or has been moved during our architecture modernization.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border bg-surface hover:bg-surface-muted transition-colors text-foreground font-medium text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </main>
  );
}
