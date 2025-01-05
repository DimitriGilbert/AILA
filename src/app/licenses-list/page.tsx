import Link from "next/link";
import { generateLicenseVariations, type LicenseVariation } from "~/lib/licenses";

const licenseVariations = generateLicenseVariations();

export default function LicensesPage() {
  return (
    <main className="container mx-auto space-y-8 p-4">
      <section>
        <div>
          <h2 className="text-center text-2xl font-bold">
            Licence Targets: Creator, and Model trainers
          </h2>
          <p>
            AILA offers three tailored sub-licences to address the needs of
            different stakeholders:
          </p>
          <ul>
            <li>
              <strong>C (Creator)</strong>: For content creators to specify how
              their work can be used in AI training.
              <ul>
                <li>
                  Example: <strong>AILA-777-C</strong> means content is
                  available for AI training only if weights, models, and
                  training data are fully accessible.
                </li>
                <li>
                  <strong>AILA-999-C</strong>: A firm "no" to any AI use of the
                  content.
                </li>
                <li>
                  <strong>C-1 Variant</strong>: Allows for exceptions on a
                  case-by-case basis.
                </li>
              </ul>
            </li>
            <li>
              <strong>B (Built With)</strong>: For content creators to inform
              users that their work was created using AI models under specific
              AILA terms.
              <ul>
                <li>
                  Example: <strong>AILA-777-B</strong> indicates the content was
                  built using a model compliant with <strong>AILA-777-F</strong>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>F (Facteur)</strong>: For AI model creators to communicate
              what resources (weights, models, training data) are available and
              for what purposes.
              <ul>
                <li>
                  Example: <strong>AILA-777-F</strong> specifies the
                  availability of weights, models, and training data for various
                  uses.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {licenseVariations.map((license) => (
          <Link
            key={license.code}
            href={`/licenses-list/${license.code.toLowerCase()}`}
            className="block rounded-lg border p-6 transition-colors hover:border-primary"
          >
            <h2 className="mb-2 text-xl font-semibold">{license.code}</h2>
            <h3 className="mb-2 text-lg text-muted-foreground">
              {license.title}
            </h3>
            <p className="text-sm">{license.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
