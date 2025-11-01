import { personalHistorySchema } from "@/features/personal/schemas";
import type { PersonalHistory } from "@/features/personal/types";
import { errorMessage } from "@/shared/utils/error";

/**
 * 個人史のデータを取得するサービス
 * TODO: 現在はローカルストレージから取得しているが、将来的にはサーバーから取得する
 */
async function fetchPersonalHistory(): Promise<PersonalHistory | null> {
  try {
    const stored = window.localStorage.getItem("data");
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored);
    return personalHistorySchema.parse(parsed);
  } catch (error) {
    errorMessage({ title: "個人史データの取得中にエラーが発生しました。", error });
    throw new Error("個人史データの取得に失敗しました。");
  }
}

export default fetchPersonalHistory;
