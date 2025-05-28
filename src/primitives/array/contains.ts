import type { Equal } from "../../shared/equal"

export type ArrayContains<T, U extends unknown[]> = U extends readonly [
  U[0],
  ...infer rest,
]
  ? Equal<U[0], T> extends true
    ? true
    : ArrayContains<T, rest>
  : false
