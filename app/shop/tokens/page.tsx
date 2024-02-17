import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Page() {
  return (
    <div className="flex justify-center">
      <RadioGroup defaultValue="option-one">
        <div>
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Tokens Option One</Label>
        </div>
        <div>
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Tokens Option Two</Label>
        </div>
        <div>
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Tokens Option Three</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
