import { getLicenseContent } from "~/lib/markdown";
import { generateLicenseVariations } from "~/lib/licenses";
import Link from "next/link";

interface Props {
  params: Promise<{
    code: string;
  }>;
}

export default async function LicensePage({ params }: Props) {
  const resolvedParams = await params;
  const content = await getLicenseContent(resolvedParams.code.toUpperCase());

  return (
    <main className="container mx-auto space-y-8 p-4">
      <nav>
        <Link
          href="/licenses-list"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Back to Licenses
        </Link>
      </nav>

      <article className="rounded-lg border bg-card p-6">
        <h1 className="mb-8 text-4xl font-bold">
          License: {resolvedParams.code.toUpperCase()}
        </h1>
        <div 
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
        />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const variations = generateLicenseVariations();
  return variations.map((variation) => ({
    code: variation.code.toLowerCase(),
  }));
}
