"use client";

import { ReactElement } from "react";

import { usePersonalHistory } from "@/features/personal/hooks";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Card } from "@/shared/shadcn/components/ui/card";

import AgeHistoryCard from "./AgeHistoryCard";
import HobbyListCard from "./HobbyListCard";
import MajorEventsCard from "./MajorEventsCard";
import PersonalityCard from "./PersonalityCard";

function WhatIfView(): ReactElement {
  const { history, isLoading, error, refetch } = usePersonalHistory();

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-8 text-center">
          <p className="text-gray-500">データを読み込み中...</p>
        </Card>
      </div>
    );
  }

  if (error || !history) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-8 text-center">
          <p className="text-red-500 mb-4">{error || "データが見つかりません"}</p>
          <Button onClick={refetch}>再度読み込み</Button>
        </Card>
      </div>
    );
  }

  const { ages, hobbies, majorEvents, personality } = history;

  return (
    <div className="container mx-auto space-y-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">あなたの個人史</h1>
        <p className="text-gray-600">AIが分析したあなたのプロフィールと人生のストーリーです</p>
      </div>

      <PersonalityCard personality={personality} />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">人生の軌跡</h2>
        <div className="relative pb-8">
          <div className="absolute left-0 top-6 bottom-14 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />

          <div className="space-y-12 relative z-10">
            {Object.entries(ages).map(([age, items]) => (
              <AgeHistoryCard key={age} age={age} items={items} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.length > 0 && <HobbyListCard hobbies={hobbies} />}
        {majorEvents.length > 0 && <MajorEventsCard majorEvents={majorEvents} />}
      </div>
    </div>
  );
}

export default WhatIfView;
