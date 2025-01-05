import Link from "next/link"

interface LicenseVariation {
  code: string
  title: string
  description: string
}

const licenseVariations: LicenseVariation[] = [
  {
    code: "AILA-777-C",
    title: "Full Open Creator License",
    description: "Content available for AI training with full availability of weights, model, and training data.",
  },
  {
    code: "AILA-777-C-1",
    title: "Full Open Creator License with Exceptions",
    description: "Same as AILA-777-C but with case-by-case exceptions possible.",
  },
  {
    code: "AILA-999-C",
    title: "No AI Usage License",
    description: "Content explicitly not available for AI training.",
  },
  {
    code: "AILA-777-F",
    title: "Full Open Facteur License",
    description: "Model with full availability of weights, trained model, and training data.",
  },
  {
    code: "AILA-777-B",
    title: "Built with Full Open AI",
    description: "Content created using a model respecting AILA-777-F.",
  },
]

export default function LicensesPage() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">AILA License Variations</h1>
        <p className="text-lg text-muted-foreground">
          Explore different AILA license variations and their meanings.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {licenseVariations.map((license) => (
          <Link
            key={license.code}
            href={`/licenses/${license.code.toLowerCase()}`}
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{license.code}</h2>
            <h3 className="text-lg text-muted-foreground mb-2">{license.title}</h3>
            <p className="text-sm">{license.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
} 