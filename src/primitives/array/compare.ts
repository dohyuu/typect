import type { ComparePositive } from "../number/compare"

export type CompareLength<A extends any[], B extends any[]> = ComparePositive<
  A["length"],
  B["length"]
>
