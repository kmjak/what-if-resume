import { z } from "zod";

import { errorMessage } from "@/shared/utils/error";

type CustomFetchProps<T> = {
  schemas: z.ZodType<T>;
  url: string;
  options: RequestInit;
};

/**
 * カスタムフェッチ関数
 * @param {object} props - 引数オブジェクト
 * @param {z.ZodType<T>} props.schemas - Zodスキーマ
 * @param {string} props.url - APIエンドポイントのURL
 * @param {RequestInit} [props.options] - フェッチオプション
 * @returns {Promise<T>} - パースされたデータ
 * @throws エラーメッセージを表示し、エラーを投げる
 */
export async function customFetch<T>({
  schemas,
  url,
  options = {},
}: CustomFetchProps<T>): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Status code: ${response.status}`);
    }

    const result = await response.json();
    return schemas.parse(result.data);
  } catch (error) {
    errorMessage({ title: "APIリクエスト中にエラーが発生しました。", error });
    throw error;
  }
}
