import { memo } from "react";

import type { PersonalHistory } from "@/features/personal/types";

type AgeHistoryCardProps = {
  age: string;
  items: PersonalHistory["ages"][number];
};

const AgeHistoryCard = memo(({ age, items }: AgeHistoryCardProps) => {
  return (
    <div className="flex items-center relative pl-8">
      <div className="absolute left-[2px] w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2" />

      <div className="flex-1">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">{age}歳</h3>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm whitespace-pre-wrap break-words leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

AgeHistoryCard.displayName = "AgeHistoryCard";

export default AgeHistoryCard;
