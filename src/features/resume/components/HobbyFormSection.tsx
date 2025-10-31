import { memo } from "react";
import type { Control, UseFieldArrayReturn } from "react-hook-form";

import { Plus } from "lucide-react";

import { useHobbyActions } from "@/features/resume/hooks";
import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

import HobbyFormCard from "./HobbyFormCard";

type HobbyFormSectionProps = {
  control: Control<Resume>;
  hobbyArray: UseFieldArrayReturn<Resume, "hobbies">;
};

const HobbyFormSection = memo(({ control, hobbyArray }: HobbyFormSectionProps) => {
  const { handleAdd, handleRemove } = useHobbyActions({
    append: hobbyArray.append,
    remove: hobbyArray.remove,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>趣味</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {hobbyArray.fields.map((field, index) => (
          <HobbyFormCard
            key={field.id}
            control={control}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
        <Button type="button" variant="outline" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          趣味を追加
        </Button>
      </CardContent>
    </Card>
  );
});

HobbyFormSection.displayName = "HobbyFormSection";

export default HobbyFormSection;
