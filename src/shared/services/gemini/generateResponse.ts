import { geminiClient } from "@/shared/lib/gemini";
import { errorMessage } from "@/shared/utils/error";

type GenerateGeminiResponseProps = {
  prompt: string;
};

/**
 * Gemini APIを使用してレスポンスを生成する関数
 * @param {object} props - 引数オブジェクト
 * @param {string} props.prompt - Geminiに送信するプロンプト文字列
 * @returns { string } - Geminiからのレスポンス文字列
 */
export async function generateGeminiResponse({
  prompt,
}: GenerateGeminiResponseProps): Promise<string> {
  try {
    const model = geminiClient.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    errorMessage({ title: "Geminiのレスポンス生成中にエラーが発生しました。", error });

    throw error;
  }
}
