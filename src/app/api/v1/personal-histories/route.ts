import { personalHistorySchema } from "@/features/personal/schemas";
import { whatIfPrompt } from "@/features/resume/prompts";
import { resumeSchema } from "@/features/resume/schemas";
import { apiResponse } from "@/shared/constants/api";
import { generateGeminiResponse } from "@/shared/services/gemini/";
import { errorMessage } from "@/shared/utils/error";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  let resume;
  try {
    const resumeData = await request.json();
    resume = resumeSchema.parse(resumeData);
  } catch (error) {
    errorMessage({ title: "履歴書データのパース中にエラーが発生しました。", error });
    const { message, status } = apiResponse.BAD_REQUEST;
    return NextResponse.json({ message }, { status });
  }

  try {
    const prompt = whatIfPrompt({ resume });

    const result = await generateGeminiResponse({ prompt });
    let cleanedResult = result.trim();
    if (cleanedResult.startsWith("```json") && cleanedResult.endsWith("```")) {
      cleanedResult = cleanedResult.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    }

    if (cleanedResult.startsWith("```") && cleanedResult.endsWith("```")) {
      cleanedResult = cleanedResult.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }
    const parsedResult = JSON.parse(cleanedResult);
    const zodParsedResult = personalHistorySchema.parse(parsedResult);

    const { message, status } = apiResponse.SUCCESS;
    return NextResponse.json({ message, data: zodParsedResult }, { status });
  } catch (error) {
    errorMessage({ title: "Geminiレスポンス生成中にエラーが発生しました。", error });

    const { message, status } = apiResponse.BAD_REQUEST;
    return NextResponse.json({ message }, { status });
  }
}
