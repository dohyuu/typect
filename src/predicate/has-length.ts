import type { Equal } from "../shared/equal"

export type HasLength<T extends unknown[], N extends number> = Equal<
  T["length"],
  N
>
