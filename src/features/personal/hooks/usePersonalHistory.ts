"use client";

import { useCallback, useEffect, useState } from "react";

import { toast } from "sonner";

import { fetchPersonalHistory } from "@/features/personal/services";
import type { PersonalHistory } from "@/features/personal/types";
import { errorMessage } from "@/shared/utils/error";

type UsePersonalHistoryReturn = {
  history: PersonalHistory | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
};

/**
 * 個人史データを取得するカスタムフック
 * @returns {UsePersonalHistoryReturn} - 個人史データと状態、リフェッチ関数
 */
export function usePersonalHistory(): UsePersonalHistoryReturn {
  const [history, setHistory] = useState<PersonalHistory | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: 本来はサーバーから取得するが、今回はローカルストレージから取得する
      const personalHistory = await fetchPersonalHistory();
      setHistory(personalHistory);
    } catch (err) {
      errorMessage({ title: "個人史データの取得に失敗しました。", error: err });
      setError("個人史データの取得に失敗しました。");
      toast.error("個人史データの取得に失敗しました。");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // TODO: ローカルストレージを使っているのでuseEffect内で取得しているが、将来的にはサーバーで取得する
  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  return {
    history,
    isLoading,
    error,
    refetch: fetchHistory,
  };
}
