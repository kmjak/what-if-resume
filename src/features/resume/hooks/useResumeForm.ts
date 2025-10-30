"use client";

import { createPersonalHistory } from "@/features/personal/usecases";
import { createDefaultValues } from "@/features/resume/constants";
import { resumeSchema } from "@/features/resume/schemas";
import type { Resume } from "@/features/resume/types";
import { errorMessage } from "@/shared/utils/error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

/**
 * 履歴書フォームのカスタムフック
 */
export function useResumeForm() {
  const [error, setError] = useState<string | null>(null);
  const defaultValues = createDefaultValues();

  const form = useForm<Resume>({
    resolver: zodResolver(resumeSchema),
    defaultValues,
  });

  const careerArray = useFieldArray({
    control: form.control,
    name: "careers",
  });

  const hobbyArray = useFieldArray({
    control: form.control,
    name: "hobbies",
  });

  const certArray = useFieldArray({
    control: form.control,
    name: "certifications",
  });

  const langArray = useFieldArray({
    control: form.control,
    name: "languages",
  });

  const isLoading = form.formState.isSubmitting;

  /**
   * 履歴書データの送信ハンドラー
   * @param data - 送信する履歴書データ
   */
  const handleSubmit = async (data: Resume): Promise<void> => {
    setError(null);
    try {
      const result = await createPersonalHistory({ data });
      // ! TODO: ローカルストレージへの保存は一時的な対応
      try {
        window.localStorage.setItem("data", JSON.stringify(result));
      } catch (storageError) {
        throw new Error("ローカルストレージの設定に失敗しました。", { cause: storageError });
      }
    } catch (error) {
      errorMessage({ title: "履歴書データの送信中にエラーが発生しました。", error });
      setError("履歴書データの送信中にエラーが発生しました。");
    }
  };

  /**
   * フォームリセットハンドラー
   */
  const handleReset = (): void => {
    form.reset();
    setError(null);
  };

  return {
    form,
    fieldArrays: {
      careerArray,
      hobbyArray,
      certArray,
      langArray,
    },
    handlers: {
      handleSubmit,
      handleReset,
    },
    state: {
      isLoading,
    },
    error,
  };
}
