"use client";

import { BitPicker } from "~/components/BitPicker";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { useState } from "react";
import { Toaster } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Link from "next/link";

type BitOption = {
  value: 1 | 2 | 4;
  label: string;
  description: string;
};

const weightOptions: BitOption[] = [
  {
    value: 1,
    label: "Personal Use",
    description: "Available for personal use",
  },
  {
    value: 2,
    label: "Research & Academic",
    description: "Available for research and academic purposes",
  },
  {
    value: 4,
    label: "Commercial Use",
    description: "Available for commercial use",
  },
];

const modelOptions: BitOption[] = weightOptions;

const dataOptions: BitOption[] = weightOptions;
// @ts-expect-error it exists !
dataOptions[0].description = "Available if open source or public";

export default function Home() {
  const [licenseType, setLicenseType] = useState<"B" | "C" | "F" | null>(null);
  const [weights, setWeights] = useState(0);
  const [model, setModel] = useState(0);
  const [data, setData] = useState(0);
  const [isC999, setIsC999] = useState(false);
  const [isC1Variant, setIsC1Variant] = useState(false);
  const [usedAIModel, setUsedAIModel] = useState(false);

  const generateLicenseCode = () => {
    if (!licenseType && !usedAIModel) return "";

    if (isC999) {
      return "aila-999-c";
    }

    const licenseCode = `${weights}${model}${data}`;

    if (usedAIModel) {
      return `aila-${licenseCode}-b`;
    }

    let license = `aila-${licenseCode}-${licenseType}`;
    if (licenseType === "C" && isC1Variant) {
      license += "-1";
    }

    return license.toLowerCase();
  };

  const handleBitChange = (setter: (value: number) => void) => (value: number) => {
    setter(value);
  };

  const licenseCode = generateLicenseCode();
  const licenseUrl = licenseCode ? `${process.env.NEXT_PUBLIC_BASE_URL}/licenses-list/${licenseCode}` : null;

  return (
    <>
      <Toaster />
      <main className="container mx-auto space-y-8 p-4">
        <section className="space-y-4">
          <div className="flex flex-col gap-4 text-lg text-muted-foreground">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <div className="p-4">
                  <h2 className="pb-2 text-center text-2xl font-bold">
                    What is AILA ?
                  </h2>
                  <p className="text-justify">
                    The <strong>AI Licence Agreement (AILA)</strong> is designed
                    to bring clarity and transparency to the world of AI and
                    content creation.
                  </p>
                  <p className="text-justify">
                    Whether you're a content creator, a researcher, or an AI
                    model developer, AILA provides a simple way to define and
                    communicate the terms of use for AI-related resources.
                  </p>
                </div>

                <div className="p-4">
                  <h2 className="pb-2 text-center text-2xl font-bold">
                    What Makes AILA Unique ?
                  </h2>
                  <p className="text-justify">
                    AILA uses a <strong>bitmask system</strong> to clearly
                    outline the openness and permissions of a licence.
                  </p>
                  <p className="text-justify">
                    By breaking down permissions into intuitive "bits", AILA
                    ensures that everyone knows exactly what is allowed—and
                    under what conditions.
                  </p>
                </div>

                <div className="p-4">
                  <h2 className="pb-2 text-center text-2xl font-bold">
                    Why AILA Matters
                  </h2>
                  <p className="text-justify">
                    AILA bridges the gap between human understanding and machine
                    readability, ensuring that AI development respects the
                    rights of content creators while fostering innovation.
                  </p>
                  <p>
                    Whether you're protecting your creative work or building the
                    next generation of AI models, AILA provides the clarity and
                    flexibility you need.
                  </p>
                  <p className="text-justify">
                    Join us in shaping a future where AI and creativity thrive
                    together, responsibly and transparently.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="pb-2 pt-4 text-center text-2xl font-bold">
                  The AILA Bits
                </h2>
                <p className="mb-4">
                  Each category uses the same bit values to indicate
                  availability:
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Bit</TableHead>
                      <TableHead>Meaning</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">0</TableCell>
                      <TableCell>Unavailable</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">1</TableCell>
                      <TableCell>Available for personal use*</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">2</TableCell>
                      <TableCell>
                        Available for research and academic use
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">4</TableCell>
                      <TableCell>Available for commercial use</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="mt-4 text-sm text-muted-foreground">
                  * For Training Data, bit 1 means "Available if open source or
                  public" instead of personal use
                </p>

                <p className="mb-2 mt-6">
                  These bits apply to three categories:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Training Weight Availability</strong>: Access to the
                    model's training weights
                  </li>
                  <li>
                    <strong>Trained Model Availability</strong>: Access to the
                    trained model itself
                  </li>
                  <li>
                    <strong>Training Data Availability</strong>: Access to the
                    data used for training
                  </li>
                </ul>

                <p className="mt-4">
                  Bits can be combined (e.g., 3 = personal + research, 7 = all
                  uses) to form a clear, machine-readable license.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="license-selector" className="text-center text-4xl font-bold">
            AILA License Selector
          </h2>
          <div className="flex justify-center gap-4">
            <Button
              variant={licenseType === "C" ? "default" : "outline"}
              onClick={() => setLicenseType("C")}
              disabled={usedAIModel}
              className="text-lg font-bold py-2 px-4 border-2 border-primary"
            >
              I create content
            </Button>
            <Button
              variant={licenseType === "F" ? "default" : "outline"}
              onClick={() => setLicenseType("F")}
              disabled={usedAIModel}
              className="text-lg font-bold py-2 px-4 border-2 border-primary"
            >
              I train models
            </Button>
          </div>

          {(licenseType === "C" || usedAIModel) && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-fit space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={usedAIModel}
                      onCheckedChange={(checked) => {
                        setUsedAIModel(checked);
                        if (checked) {
                          setIsC999(false);
                          setIsC1Variant(false);
                        }
                      }}
                    />
                    <span>Content was created with the help of an AI model.</span>
                  </div>

                  {!usedAIModel && (
                    <div className="flex items-center space-x-2">
                      <Switch checked={isC999} onCheckedChange={setIsC999} />
                      <span>No AI usage allowed (Use AILA-999-C)</span>
                    </div>
                  )}

                  {!isC999 && !usedAIModel && (
                    <div className="flex items-center space-x-2">
                      <Switch checked={isC1Variant} onCheckedChange={setIsC1Variant} />
                      <span>Allow case-by-case exceptions (C-1 variant)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!isC999 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <BitPicker
                title="Training Weight Availability"
                description="Specify the availability of training weights : "
                value={weights}
                onChange={handleBitChange(setWeights)}
                options={weightOptions}
              />

              <BitPicker
                title="Trained Model Availability"
                description="Specify the availability of the trained model : "
                value={model}
                onChange={handleBitChange(setModel)}
                options={modelOptions}
              />

              <BitPicker
                title="Training Data Availability"
                description="Specify the availability of training data : "
                value={data}
                onChange={handleBitChange(setData)}
                options={dataOptions}
              />
            </div>
          )}

          <div className="space-y-4 rounded-lg p-4">
            <div className="flex justify-center">
              {licenseUrl ? (
                <Link href={`/licenses-list/${licenseCode}`} className="w-full max-w-md">
                  <Button size="lg" className="w-full">
                    View License <strong>{licenseCode.toUpperCase()}</strong>
                  </Button>
                </Link>
              ) : (
                <Button size="lg" className="w-full max-w-md" disabled>
                  Select Options
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
