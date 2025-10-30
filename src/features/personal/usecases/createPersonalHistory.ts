import { personalHistorySchema } from "@/features/personal/schemas";
import { PersonalHistory } from "@/features/personal/types";
import { Resume } from "@/features/resume/types";
import { customFetch } from "@/shared/usecases/fetch";

type CreatePersonalHistoryProps = {
  data: Resume;
};

/**
 * 履歴書のデータを元に、個人の歴史を作成する関数
 * @param {object} props - 引数オブジェクト
 * @param {Resume} props.data - 履歴書データ
 * @returns { Promise<PersonalHistory> } - 作成された個人の歴史データ
 */
async function createPersonalHistory({
  data,
}: CreatePersonalHistoryProps): Promise<PersonalHistory> {
  return await customFetch<PersonalHistory>({
    schemas: personalHistorySchema,
    url: "/api/v1/personal-histories",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  });
}

export default createPersonalHistory;
