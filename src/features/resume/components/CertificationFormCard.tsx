import type { Resume } from "@/features/resume/types";
import { Button } from "@/shared/shadcn/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/shared/shadcn/components/ui/form";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Trash2 } from "lucide-react";
import { memo } from "react";
import type { Control } from "react-hook-form";

type CertificationFormCardProps = {
  control: Control<Resume>;
  index: number;
  handleRemove: (index: number) => void;
};

const CertificationFormCard = memo(
  ({ control, index, handleRemove }: CertificationFormCardProps) => {
    return (
      <div className="flex gap-2">
        <FormField
          control={control}
          name={`certifications.${index}.name`}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="資格名を入力" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="button" variant="destructive" size="icon" onClick={() => handleRemove(index)}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    );
  }
);

CertificationFormCard.displayName = "CertificationFormCard";

export default CertificationFormCard;
