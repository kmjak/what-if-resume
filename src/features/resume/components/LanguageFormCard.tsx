import { memo } from "react";
import type { Control } from "react-hook-form";

import { Trash2 } from "lucide-react";

import { proficiencyLevelsJapanese } from "@/features/resume/constants";
import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/shadcn/components/ui/form";
import { Input } from "@/shared/shadcn/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/shadcn/components/ui/select";

type LanguageFormCardProps = {
  control: Control<Resume>;
  index: number;
  handleRemove: (index: number) => void;
};

const LanguageFormCard = memo(({ control, index, handleRemove }: LanguageFormCardProps) => {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name={`languages.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>言語名</FormLabel>
              <FormControl>
                <Input placeholder="例: 日本語" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`languages.${index}.proficiency`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>習熟度</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="レベルを選択" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(proficiencyLevelsJapanese).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {index > 0 && (
        <Button type="button" variant="destructive" size="sm" onClick={() => handleRemove(index)}>
          <Trash2 className="w-4 h-4 mr-2" />
          削除
        </Button>
      )}
    </div>
  );
});

LanguageFormCard.displayName = "LanguageFormCard";

export default LanguageFormCard;
