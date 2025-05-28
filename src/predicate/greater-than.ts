import type { CompareNumber } from "../primitives/number/compare"

export type GreaterThan<
  A extends number | bigint,
  B extends number | bigint,
> = CompareNumber<A, B> extends 1 ? true : false
