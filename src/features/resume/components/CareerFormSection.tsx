import { memo } from "react";
import type { Control, UseFieldArrayReturn } from "react-hook-form";

import { Plus } from "lucide-react";

import CareerFormCard from "@/features/resume/components/CareerFormCard";
import { useCareerActions } from "@/features/resume/hooks";
import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

type CareerFormSectionProps = {
  control: Control<Resume>;
  careerArray: UseFieldArrayReturn<Resume, "careers">;
};

const CareerFormSection = memo(({ control, careerArray }: CareerFormSectionProps) => {
  const { handleAdd, handleRemove } = useCareerActions({
    append: careerArray.append,
    remove: careerArray.remove,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>キャリア</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {careerArray.fields.map((field, index) => (
          <CareerFormCard
            key={field.id}
            control={control}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
        <Button type="button" variant="outline" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          キャリアを追加
        </Button>
      </CardContent>
    </Card>
  );
});

CareerFormSection.displayName = "CareerFormSection";

export default CareerFormSection;
