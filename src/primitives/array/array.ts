export type StringToArray<S extends string> =
  S extends `${infer Head}${infer Rest}` ? [Head, ...StringToArray<Rest>] : []
