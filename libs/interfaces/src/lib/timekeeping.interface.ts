export interface ITimeKeepingCollection {
  key: string;
  userId?: string;
  title?: string;
  createdAt?: Date;
  id?: string;
}

export interface ITimeKeepingGetCollection {
  userId?: string;
  title?: string;
  createdAt?: Date;
  id?: string;
}
