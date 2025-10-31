import { memo } from "react";
import type { Control, UseFieldArrayReturn } from "react-hook-form";

import { Plus } from "lucide-react";

import { useLanguageActions } from "@/features/resume/hooks";
import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

import LanguageFormCard from "./LanguageFormCard";

type LanguageFormSectionProps = {
  control: Control<Resume>;
  langArray: UseFieldArrayReturn<Resume, "languages">;
};

const LanguageFormSection = memo(({ control, langArray }: LanguageFormSectionProps) => {
  const { handleAdd, handleRemove } = useLanguageActions({
    append: langArray.append,
    remove: langArray.remove,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>言語</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {langArray.fields.map((field, index) => (
          <LanguageFormCard
            key={field.id}
            control={control}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
        <Button type="button" variant="outline" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          言語を追加
        </Button>
      </CardContent>
    </Card>
  );
});

LanguageFormSection.displayName = "LanguageFormSection";

export default LanguageFormSection;
