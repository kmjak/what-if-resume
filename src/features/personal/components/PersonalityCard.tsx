import { memo } from "react";

import type { PersonalHistory } from "@/features/personal/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

type PersonalityCardProps = {
  personality: PersonalHistory["personality"];
};

const PersonalityCard = memo(({ personality }: PersonalityCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>性格</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 whitespace-pre-wrap break-words">{personality}</p>
      </CardContent>
    </Card>
  );
});

PersonalityCard.displayName = "PersonalityCard";

export default PersonalityCard;
