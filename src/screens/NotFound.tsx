import { Link } from "@/lib/router";
import { PageHeader } from "@/components/ui";

export function NotFound() {
  return (
    <div>
      <PageHeader title="Page not found" subtitle="That route doesn't exist yet." />
      <Link to="/" className="text-sm font-medium text-forge-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
