import { UserCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PatientInfoForm({ patientInfo, onPatientInfoChange }) {
  const handleChange = (field, value) => {
    // Validate age
    if (field === "age") {
      const ageNum = parseInt(value);
      if (value !== "" && (isNaN(ageNum) || ageNum < 1 || ageNum > 125)) {
        return; // Don't update if invalid
      }
    }
    onPatientInfoChange?.({
      ...patientInfo,
      [field]: value,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          Patient Information
        </CardTitle>
        <CardDescription>
          Enter basic details for personalized health analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Age and Gender - Single line on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Age Input */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-base">
              Age <span className="text-red-500">*</span>
            </Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="125"
              placeholder="Enter patient age"
              value={patientInfo?.age || ""}
              onChange={(e) => handleChange("age", e.target.value)}
              className="text-base"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Age must be between 1-125 years
            </p>
          </div>

          {/* Gender Select */}
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-base">
              Gender <span className="text-red-500">*</span>
            </Label>
            <Select
              value={patientInfo?.gender || ""}
              onValueChange={(value) => handleChange("gender", value)}
            >
              <SelectTrigger id="gender" className="text-base w-full">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Required for personalized diagnosis
            </p>
          </div>
        </div>

        {/* Optional: Name Input */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">
            Name (Optional)
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter patient name"
            value={patientInfo?.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            className="text-base"
          />
        </div>
      </CardContent>
    </Card>
  );
}
