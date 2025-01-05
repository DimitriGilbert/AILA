import { getLicenseContent }from "~/lib/markdown"
import Link from "next/link"

interface Props {
  params: {
    code: string
  }
}

export default async function LicensePage({ params }: Props) {
  const content = await getLicenseContent(params.code.toUpperCase())

  return (
    <main className="container mx-auto p-4 space-y-8">
      <nav>
        <Link
          href="/licenses"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Back to Licenses
        </Link>
      </nav>

      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">License: {params.code.toUpperCase()}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </main>
  )
}

// Generate static pages for all common license variations
export async function generateStaticParams() {
  return [
    { code: "aila-777-c" },
    { code: "aila-777-c-1" },
    { code: "aila-999-c" },
    { code: "aila-777-f" },
    { code: "aila-777-b" },
  ]
} 