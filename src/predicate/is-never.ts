import type { Equal } from "../shared/equal"

export type IsNever<T> = Equal<T, never>
