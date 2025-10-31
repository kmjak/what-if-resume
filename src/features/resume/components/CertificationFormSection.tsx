import { memo } from "react";
import type { Control, UseFieldArrayReturn } from "react-hook-form";

import { Plus } from "lucide-react";

import { useCertificationActions } from "@/features/resume/hooks";
import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

import CertificationFormCard from "./CertificationFormCard";

type CertificationFormSectionProps = {
  control: Control<Resume>;
  certArray: UseFieldArrayReturn<Resume, "certifications">;
};

const CertificationFormSection = memo(({ control, certArray }: CertificationFormSectionProps) => {
  const { handleAdd, handleRemove } = useCertificationActions({
    append: certArray.append,
    remove: certArray.remove,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>資格</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {certArray.fields.map((field, index) => (
          <CertificationFormCard
            key={field.id}
            control={control}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
        <Button type="button" variant="outline" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          資格を追加
        </Button>
      </CardContent>
    </Card>
  );
});

CertificationFormSection.displayName = "CertificationFormSection";

export default CertificationFormSection;
