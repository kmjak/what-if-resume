export const apiResponse = {
  SUCCESS: {
    message: "成功しました",
    status: 200,
  },
  BAD_REQUEST: {
    message: "不正なリクエストです",
    status: 400,
  },
  UNAUTHORIZED: {
    message: "認証に失敗しました",
    status: 401,
  },
  FORBIDDEN: {
    message: "アクセスが禁止されています",
    status: 403,
  },
  NOT_FOUND: {
    message: "リソースが見つかりません",
    status: 404,
  },
  INTERNAL_SERVER_ERROR: {
    message: "サーバー内部でエラーが発生しました",
    status: 500,
  },
} as const;
