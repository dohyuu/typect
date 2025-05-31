import type { CompareLength } from "./compare"

export type StringToArray<S extends string> =
  S extends `${infer Head}${infer Rest}` ? [Head, ...StringToArray<Rest>] : []

export type TypedArray<
  A extends unknown[],
  B extends unknown[],
> = A extends unknown[]
  ? CompareLength<A, B> extends 1
    ? TypedArrayShortInput<A, B>
    : TypedArrayLongInput<A, B>
  : never

export type TypedArrayLongInput<
  A extends unknown[],
  Types extends unknown[],
> = {
  [K in keyof A]: K extends keyof Types
    ? A[K] extends Types[K]
      ? A[K]
      : never
    : never
}

export type TypedArrayShortInput<
  A extends unknown[],
  Types extends unknown[],
> = {
  [K in keyof Types]: K extends keyof A
    ? A[K] extends Types[K]
      ? A[K]
      : never
    : never
}
