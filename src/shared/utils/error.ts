type ErrorMessageProps = {
  title: string;
  error: unknown;
};

/**
 * 開発環境でのみエラーメッセージをコンソールに表示する関数
 * @param {object} props - 引数オブジェクト
 * @param {string} props.title - エラーのタイトル
 * @param {unknown} props.error - エラーの詳細
 */
function errorMessage({ title, error }: ErrorMessageProps): void {
  if (process.env.NODE_ENV !== "development") return;

  console.error(`[Error] ${title}`);
  if (error instanceof Error) {
    console.error(`${error.name}: ${error.message}`);
  } else if (typeof error === "string") {
    console.error(`${error}`);
  } else {
    console.error("[Unknown Error]", error);
  }
}

export { errorMessage };
