export type RecordType = Record<string | number | symbol, unknown>;

export interface IListCommonItem<T = RecordType> {
  item?: T;
}
