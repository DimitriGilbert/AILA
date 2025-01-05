export interface LicenseVariation {
  code: string;
  title: string;
  description: string;
}

export const LICENSE_TARGETS = ["C", "F", "B"] as const;
export const BIT_VALUES = [0, 1, 2, 3, 4, 5, 6, 7] as const;

export function generateLicenseVariations(): LicenseVariation[] {
  const generateVariations = (target: string) => {
    const variations: LicenseVariation[] = [];
    for (const i of BIT_VALUES) {
      for (const j of BIT_VALUES) {
        for (const k of BIT_VALUES) {
          const code = `AILA-${i}${j}${k}-${target}`;
          variations.push({
            code,
            title: getLicenseTitle(code),
            description: getLicenseDescription(code),
          });
        }
      }
    }
    return variations;
  };

  // Generate variations for each target type
  const variations = LICENSE_TARGETS.flatMap(generateVariations);

  // Add C-1 variants
  const c1Variations = generateVariations("C").map((variation) => ({
    code: `${variation.code}-1`,
    title: `${getLicenseTitle(variation.code)} with exceptions`,
    description: `${getLicenseDescription(variation.code)} with case-by-case exceptions`,
  }));

  // Add special cases
  const specialCases: LicenseVariation[] = [
    {
      code: "AILA-999-C",
      title: "No AI Usage License",
      description: "Content explicitly not available for AI training.",
    },
  ];

  return [...variations, ...c1Variations, ...specialCases];
}

function getLicenseTitle(code: string): string {
  const [_, weights, model, data, type] = code.match(/AILA-(\d)(\d)(\d)-([CBF])/) || [];
  
  switch (type) {
    case "C":
      return "Creator License";
    case "F":
      return "Facteur License";
    case "B":
      return "Built with AI License";
    default:
      return code;
  }
}

function getLicenseDescription(code: string): string {
  const [_, weights, model, data, type] = code.match(/AILA-(\d)(\d)(\d)-([CBF])/) || [];
  
  switch (type) {
    case "C":
      return "Specifies how this content can be used for AI training.";
    case "F":
      return "Defines the availability of model weights, trained model, and training data.";
    case "B":
      return `Content created using a model compliant with AILA-${weights}${model}${data}-F.`;
    default:
      return "AILA License";
  }
} 