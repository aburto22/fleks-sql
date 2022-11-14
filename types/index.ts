export type TQuery = Array<Record<string, any>>;

export type TApiSuccess = {
  status: "success";
  data: TQuery;
};

export type TApiError = {
  status: "error";
  message: string;
};

export type TApiResponse = TApiSuccess | TApiError;
