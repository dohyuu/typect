import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { GreaterThanOrEqual } from "../predicate/greater-than-or-equal"

export interface _ToBeGreaterThanOrEqual<T extends number | bigint>
  extends Lambda<[s: number | bigint], boolean> {
  readonly return: GreaterThanOrEqual<Arg0Of<this>, T>
}
