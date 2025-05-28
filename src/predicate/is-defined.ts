import type { Equal } from "../shared/equal"
import type { Not } from "../shared/not"

export type IsDefined<T> = Not<Equal<T, undefined>>
