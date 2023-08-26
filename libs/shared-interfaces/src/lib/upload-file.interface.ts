export interface IParams {
  expression: string;
  sort_by: ISortBy[];
}

export interface ISortBy {
  sort_by: {
    public_id: string;
  };
}
