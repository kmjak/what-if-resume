import {
  createDefaultCareer,
  createDefaultCertification,
  createDefaultHobby,
  createDefaultLanguage,
} from "@/features/resume/constants";
import { Career, Certification, Hobby, Language } from "@/features/resume/types/Resume";
import { useCallback } from "react";

type UseCareerActionsProps = {
  append: (value: Career) => void;
  remove: (index: number) => void;
};

type UseHobbyActionsProps = {
  append: (value: Hobby) => void;
  remove: (index: number) => void;
};

type UseCertificationActionsProps = {
  append: (value: Certification) => void;
  remove: (index: number) => void;
};

type UseLanguageActionsProps = {
  append: (value: Language) => void;
  remove: (index: number) => void;
};

type ReturnActions = {
  handleAdd: () => void;
  handleRemove: (index: number) => void;
};

/**
 * Career用のアクション
 * @param {object} props - 引数オブジェクト
 * @param {function} props.append - フィールド配列に要素を追加する関数
 * @param {function} props.remove - フィールド配列から要素を削除する関数
 * @returns {object} - フィールド配列操作用のハンドラー関数群
 */
function useCareerActions({ append, remove }: UseCareerActionsProps): ReturnActions {
  const handleAdd = useCallback(() => {
    append(createDefaultCareer());
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  return { handleAdd, handleRemove };
}

/**
 * Hobby用のアクション
 * @param {object} props - 引数オブジェクト
 * @param {function} props.append - フィールド配列に要素を追加する関数
 * @param {function} props.remove - フィールド配列から要素を削除する関数
 * @returns {object} - フィールド配列操作用のハンドラー関数群
 */
function useHobbyActions({ append, remove }: UseHobbyActionsProps): ReturnActions {
  const handleAdd = useCallback(() => {
    append(createDefaultHobby());
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  return { handleAdd, handleRemove };
}

/**
 * Certification用のアクション
 * @param {object} props - 引数オブジェクト
 * @param {function} props.append - フィールド配列に要素を追加する関数
 * @param {function} props.remove - フィールド配列から要素を削除する関数
 * @returns {object} - フィールド配列操作用のハンドラー関数群
 */
function useCertificationActions({ append, remove }: UseCertificationActionsProps): ReturnActions {
  const handleAdd = useCallback(() => {
    append(createDefaultCertification());
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  return { handleAdd, handleRemove };
}

/**
 * Language用のアクション
 * @param {object} props - 引数オブジェクト
 * @param {function} props.append - フィールド配列に要素を追加する関数
 * @param {function} props.remove - フィールド配列から要素を削除する関数
 * @returns {object} - フィールド配列操作用のハンドラー関数群
 */
function useLanguageActions({ append, remove }: UseLanguageActionsProps): ReturnActions {
  const handleAdd = useCallback(() => {
    append(createDefaultLanguage());
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  return { handleAdd, handleRemove };
}

export { useCareerActions, useCertificationActions, useHobbyActions, useLanguageActions };
