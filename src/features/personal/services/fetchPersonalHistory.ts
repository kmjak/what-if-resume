import { personalHistorySchema } from "@/features/personal/schemas";
import type { PersonalHistory } from "@/features/personal/types";

/**
 * 個人史のデータを取得するサービス
 * TODO: 現在はローカルストレージから取得しているが、将来的にはサーバーから取得する
 */
async function fetchPersonalHistory(): Promise<PersonalHistory | null> {
  const stored = window.localStorage.getItem("data");
  if (!stored) {
    return null;
  }

  const parsed = JSON.parse(stored);
  return personalHistorySchema.parse(parsed);
}

export default fetchPersonalHistory;
