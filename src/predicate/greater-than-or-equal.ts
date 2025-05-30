import type { CompareNumber } from "../primitives/number/compare"

export type GreaterThanOrEqual<
  A extends number | bigint,
  B extends number | bigint,
> = CompareNumber<A, B> extends 0 | 1 ? true : false
