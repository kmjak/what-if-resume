import { memo } from "react";
import type { Control } from "react-hook-form";

import { Trash2 } from "lucide-react";

import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/shadcn/components/ui/form";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Textarea } from "@/shared/shadcn/components/ui/textarea";

type CareerFormCardProps = {
  control: Control<Resume>;
  index: number;
  handleRemove: (index: number) => void;
};

const CareerFormCard = memo(({ control, index, handleRemove }: CareerFormCardProps) => {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <FormField
        control={control}
        name={`careers.${index}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>職歴・経歴名</FormLabel>
            <FormControl>
              <Input placeholder="例: Webエンジニア" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`careers.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>説明（任意）</FormLabel>
            <FormControl>
              <Textarea
                placeholder="業務内容や具体的な成果など"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>300文字以内で入力してください</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {index > 0 && (
        <Button type="button" variant="destructive" size="sm" onClick={() => handleRemove(index)}>
          <Trash2 className="w-4 h-4 mr-2" />
          削除
        </Button>
      )}
    </div>
  );
});

CareerFormCard.displayName = "CareerFormCard";

export default CareerFormCard;
