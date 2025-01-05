"use client";

import { BitPicker } from "~/components/BitPicker";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { useState } from "react";
import { Copy, Download } from "lucide-react";
import { Toaster, toast } from "sonner";
import { getLicenseContent } from "~/lib/markdown";
import { useMutation } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

type BitOption = {
  value: 1 | 2 | 4;
  label: string;
  description: string;
};

const weightOptions: BitOption[] = [
  {
    value: 1,
    label: "Personal Use",
    description: "Available for personal use only",
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

const modelOptions: BitOption[] = [
  {
    value: 1,
    label: "Personal Use",
    description: "Model available for personal use only",
  },
  {
    value: 2,
    label: "Research & Academic",
    description: "Model available for research and academic purposes",
  },
  {
    value: 4,
    label: "Commercial Use",
    description: "Model available for commercial use",
  },
];

const dataOptions: BitOption[] = [
  {
    value: 1,
    label: "Open Source/Public",
    description: "Available if open source or public",
  },
  {
    value: 2,
    label: "Research & Academic",
    description: "Available for research and academic use",
  },
  {
    value: 4,
    label: "Commercial Use",
    description: "Available for commercial use",
  },
];

export default function Home() {
  const [licenseType, setLicenseType] = useState<"B" | "C" | "F" | null>(null);
  const [weights, setWeights] = useState(0);
  const [model, setModel] = useState(0);
  const [data, setData] = useState(0);
  const [isC999, setIsC999] = useState(false);
  const [isC1Variant, setIsC1Variant] = useState(false);
  const [usedAIModel, setUsedAIModel] = useState(false);
  const [licenseContent, setLicenseContent] = useState<string>("");

  const generateLicenseMutation = useMutation({
    mutationFn: async (code: string) => {
      return getLicenseContent(code);
    },
    onSuccess: (content) => {
      setLicenseContent(content);
      toast.success("License generated successfully");
    },
    onError: (error) => {
      console.error("Failed to generate license:", error);
      toast.error("Failed to generate license");
    },
  });

  const generateLicenseCode = () => {
    if (!licenseType && !usedAIModel) return "";

    if (isC999) {
      return "AILA-999-C";
    }

    const licenseCode = `${weights}${model}${data}`;

    if (usedAIModel) {
      return `AILA-${licenseCode}-B`;
    }

    let license = `AILA-${licenseCode}-${licenseType}`;
    if (licenseType === "C" && isC1Variant) {
      license += "-1";
    }

    return license;
  };

  const generateLicense = () => {
    const code = generateLicenseCode();
    generateLicenseMutation.mutate(code);
  };

  const copyToClipboard = async () => {
    const license = generateLicenseCode();
    await navigator.clipboard.writeText(licenseContent || license);
    toast.success("License copied to clipboard");
  };

  const handleBitChange =
    (setter: (value: number) => void) => (value: number) => {
      setter(value);
      setLicenseContent(""); // Clear license content when bits change
    };

  const downloadLicense = async (format: "md" | "html") => {
    const license = generateLicenseCode();
    const content = licenseContent || license;
    const mimeType = format === "md" ? "text/markdown" : "text/html";
    const extension = format === "md" ? "md" : "html";
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${license.toLowerCase()}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`License downloaded as ${format.toUpperCase()}`);
  };

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
                    model developer, AILA provides a simple yet powerful way to
                    define and communicate the terms of use for AI-related
                    resources.
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
                <h2 className="pt-4 pb-2 text-center text-2xl font-bold">
                  The AILA Bits
                </h2>
                <p className="mb-4">Each category uses the same bit values to indicate availability:</p>
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
                      <TableCell>Available for research and academic use</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">4</TableCell>
                      <TableCell>Available for commercial use</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="mt-4 text-sm text-muted-foreground">* For Training Data, bit 1 means "Available if open source or public" instead of personal use</p>
                
                <p className="mt-6 mb-2">These bits apply to three categories:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Training Weight Availability</strong>: Access to the model's training weights</li>
                  <li><strong>Trained Model Availability</strong>: Access to the trained model itself</li>
                  <li><strong>Training Data Availability</strong>: Access to the data used for training</li>
                </ul>
                
                <p className="mt-4">
                  Bits can be combined (e.g., 3 = personal + research, 7 = all uses) to form a clear, machine-readable license.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="license-generator" className="text-center text-4xl font-bold">
            AILA License Generator
          </h2>
          <div className="flex justify-center gap-4">
            <Button
              variant={licenseType === "C" ? "default" : "outline"}
              onClick={() => setLicenseType("C")}
              disabled={usedAIModel}
            >
              Creator License
            </Button>
            <Button
              variant={licenseType === "F" ? "default" : "outline"}
              onClick={() => setLicenseType("F")}
              disabled={usedAIModel}
            >
              Facteur License
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
                    <span>
                      Content was created using an AILA licensed model (B
                      license)
                    </span>
                  </div>
                  {!usedAIModel && (
                    <div className="flex items-center space-x-2">
                      <Switch checked={isC999} onCheckedChange={setIsC999} />
                      <span>Use AILA-999-C (No AI usage allowed)</span>
                    </div>
                  )}

                  {!isC999 && !usedAIModel && (
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={isC1Variant}
                        onCheckedChange={setIsC1Variant}
                      />
                      <span>Enable case-by-case exceptions (C-1 variant)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!isC999 && (
            <>
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
            </>
          )}
          <div className="space-y-4 rounded-lg p-4">
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={generateLicense}
                className="w-full max-w-md"
                disabled={
                  generateLicenseMutation.isPending ||
                  (!licenseType && !usedAIModel)
                }
              >
                {generateLicenseMutation.isPending
                  ? "Generating..."
                  : "Generate License"}
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-muted p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Current License:</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => downloadLicense("md")}>
                      As Markdown
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => downloadLicense("html")}>
                      As HTML
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <pre className="rounded border bg-background p-4 font-mono">
              {generateLicenseCode()}
            </pre>
            {licenseContent && (
              <div className="prose dark:prose-invert mt-4 max-w-none">
                <div dangerouslySetInnerHTML={{ __html: licenseContent }} />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
