import { memo } from "react";

import type { PersonalHistory } from "@/features/personal/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/components/ui/card";

type MajorEventsCardProps = {
  majorEvents: PersonalHistory["majorEvents"];
};

const MajorEventsCard = memo(({ majorEvents }: MajorEventsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>人生の重要なイベント</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {majorEvents.map((event, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✦</span>
              <span className="text-gray-700">{event}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
});

MajorEventsCard.displayName = "MajorEventsCard";

export default MajorEventsCard;
