import { Switch } from "~/components/ui/switch";
import { HelpCircle } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

interface BitPickerProps {
  title: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  options: {
    value: 1 | 2 | 4;
    label: string;
    description: string;
  }[];
}

function getBitMaskExplanation(value: number): string {
  if (value === 0) return "(No restrictions)";
//   if (value === 7) return "All";

  const parts: string[] = [];
  if (value & 1) parts.push("Personal");
  if (value & 2) parts.push("Research");
  if (value & 4) parts.push("Commercial");
  return `(${parts.join(" + ")})`;
}

export function BitPicker({
  title,
  description,
  value,
  onChange,
  options,
}: BitPickerProps) {
  const handleToggle = (optionValue: number, checked: boolean) => {
    if (checked) {
      onChange(value | optionValue); // Set bit using OR
    } else {
      onChange(value & ~optionValue); // Clear bit using AND with inverted mask
    }
  };

  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description} {value}</p>
        <p className="ml-2 font-mono text-sm text-muted-foreground">
          {getBitMaskExplanation(value)}
        </p>
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">{option.label}</span>
              <HoverCard>
                <HoverCardTrigger>
                  <HelpCircle className="h-4 w-4 cursor-help text-muted-foreground hover:text-foreground" />
                </HoverCardTrigger>
                <HoverCardContent side="right" align="start" className="w-80">
                  <div className="space-y-2">
                    <p className="text-sm">{option.description}</p>
                    <p className="text-xs text-muted-foreground">
                      Bit value:{" "}
                      <span className="font-mono">{option.value}</span>
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <Switch
              checked={(value & option.value) !== 0}
              onCheckedChange={(checked) => handleToggle(option.value, checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
