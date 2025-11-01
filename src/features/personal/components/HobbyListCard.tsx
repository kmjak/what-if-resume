import { memo } from "react";

import type { PersonalHistory } from "@/features/personal/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

type HobbyListCardProps = {
  hobbies: PersonalHistory["hobbies"];
};

const HobbyListCard = memo(({ hobbies }: HobbyListCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>趣味</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {hobbies.map((hobby, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span className="text-gray-700">{hobby}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
});

HobbyListCard.displayName = "HobbyListCard";

export default HobbyListCard;
