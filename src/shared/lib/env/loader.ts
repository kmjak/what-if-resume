type GetEnvProps = {
  key: string;
};

/**
 * 環境変数から文字列を取得する関数
 * @param {object} props - 引数オブジェクト
 * @param {string} props.key - 環境変数のキー
 * @returns { string } - 環境変数の値
 */
export function getEnvStr({ key }: GetEnvProps): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`${key} is not set`);
  }
  return value;
}

/**
 * 環境変数から数値を取得する関数
 * @param {object} props - 引数オブジェクト
 * @param {string} props.key - 環境変数のキー
 * @returns { number } - 環境変数の値を数値に変換したもの
 */
export function getEnvNum({ key }: GetEnvProps): number {
  const envValue = getEnvStr({ key });
  const value = Number(envValue);

  if (Number.isNaN(value)) {
    throw new Error(`${key} is not a number`);
  }
  return value;
}
