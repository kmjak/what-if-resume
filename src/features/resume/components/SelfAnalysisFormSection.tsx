import type { Resume } from "@/features/resume/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/shadcn/components/ui/form";
import { Textarea } from "@/shared/shadcn/components/ui/textarea";
import { memo } from "react";
import type { Control } from "react-hook-form";

type SelfAnalysisFormSectionProps = {
  control: Control<Resume>;
};

const SelfAnalysisFormSection = memo(({ control }: SelfAnalysisFormSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>自己分析</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="strength"
          render={({ field }) => (
            <FormItem>
              <FormLabel>強み</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="あなたの強みを記入してください"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>400文字以内で入力してください</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="weaknesses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>弱み</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="あなたの弱みと改善への取り組みを記入してください"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>400文字以内で入力してください</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
});

SelfAnalysisFormSection.displayName = "SelfAnalysisFormSection";

export default SelfAnalysisFormSection;
