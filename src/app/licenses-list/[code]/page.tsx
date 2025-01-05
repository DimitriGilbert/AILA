import { getLicenseContent } from "~/lib/markdown";
import { generateLicenseVariations } from "~/lib/licenses";
import Link from "next/link";

interface Props {
  params: {
    code: string;
  };
}

export default async function LicensePage({ params }: Props) {
  const {code} = await params
  const content = await getLicenseContent(code.toUpperCase());

  return (
    <main className="container mx-auto space-y-8 p-4">
      <nav>
        <Link
          href="/licenses"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Back to Licenses
        </Link>
      </nav>

      <article className="prose dark:prose-invert max-w-none">
        <h1 className="mb-8 text-4xl font-bold">
          License: {code.toUpperCase()}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
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
