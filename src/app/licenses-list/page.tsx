"use client";

import Link from "next/link";
import {
  generateLicenseVariations,
  type LicenseVariation,
} from "~/lib/licenses";
import { BitPicker } from "~/components/BitPicker";
import { Filter } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { useState } from "react";

const weightOptions = [
  {
    value: 1 as const,
    label: "Personal Use",
    description: "Available for personal use",
  },
  {
    value: 2 as const,
    label: "Research & Academic",
    description: "Available for research and academic purposes",
  },
  {
    value: 4 as const,
    label: "Commercial Use",
    description: "Available for commercial use",
  },
];

const modelOptions = weightOptions;

const dataOptions = [
  {
    value: 1 as const,
    label: "Open Source/Public",
    description: "Available if open source or public",
  },
  {
    value: 2 as const,
    label: "Research & Academic",
    description: "Available for research and academic purposes",
  },
  {
    value: 4 as const,
    label: "Commercial Use",
    description: "Available for commercial use",
  },
];

const allLicenseVariations = generateLicenseVariations();

export default function LicensesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<"C" | "B" | "F" | null>(null);
  const [weights, setWeights] = useState(0);
  const [model, setModel] = useState(0);
  const [data, setData] = useState(0);

  const filteredLicenses = allLicenseVariations.filter((license) => {
    if (selectedType) {
      const typeMatch = license.code.includes(`-${selectedType}`);
      const isC1Variant = selectedType === "C" && license.code.includes("-C-1");
      if (!typeMatch && !isC1Variant) return false;
    }

    if (license.code === "AILA-999-C") {
      return !selectedType || selectedType === "C";
    }

    const match = license.code.match(/AILA-(\d)(\d)(\d)/);
    if (!match) return false;

    const w = parseInt(match[1]!);
    const m = parseInt(match[2]!);
    const d = parseInt(match[3]!);

    const matchWeights = weights === 0 || (w & weights) === weights;
    const matchModel = model === 0 || (m & model) === model;
    const matchData = data === 0 || (d & data) === data;

    return matchWeights && matchModel && matchData;
  });

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

      <section className="space-y-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-end bg-muted p-4">
            <CollapsibleTrigger asChild>
              <h2 className="text-xl font-semibold">
                Filter Licenses{" "}
                <Button variant="outline" size="icon">
                  <Filter
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                  <span className="sr-only">Toggle filters</span>
                </Button>
              </h2>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="grid grid-cols-1 gap-6 bg-muted p-4 lg:grid-cols-3">
              <Button
                variant={selectedType === "C" ? "default" : "outline"}
                onClick={() => setSelectedType(selectedType === "C" ? null : "C")}
              >
                Creator Content License (C)
              </Button>
              <Button
                variant={selectedType === "B" ? "default" : "outline"}
                onClick={() => setSelectedType(selectedType === "B" ? null : "B")}
              >
                Creator Built With License (B)
              </Button>
              <Button
                variant={selectedType === "F" ? "default" : "outline"}
                onClick={() => setSelectedType(selectedType === "F" ? null : "F")}
              >
                Facteur License (F)
              </Button>
              <BitPicker
                title="Training Weight Availability"
                description="Filter by weight availability"
                value={weights}
                onChange={setWeights}
                options={weightOptions}
              />

              <BitPicker
                title="Trained Model Availability"
                description="Filter by model availability"
                value={model}
                onChange={setModel}
                options={modelOptions}
              />

              <BitPicker
                title="Training Data Availability"
                description="Filter by data availability"
                value={data}
                onChange={setData}
                options={dataOptions}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          {filteredLicenses.map((license) => (
            <Link
              key={license.code}
              href={`/licenses-list/${license.code.toLowerCase()}`}
              className="block rounded-lg border p-6 transition-colors hover:border-primary md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]"
            >
              <h2 className="mb-2 text-xl font-semibold">{license.code}</h2>
              <h3 className="mb-2 text-lg text-muted-foreground">
                {license.title}
              </h3>
              <p className="text-sm">{license.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
