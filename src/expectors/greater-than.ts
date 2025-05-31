import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { GreaterThan } from "../predicate/greater-than"

export interface _ToBeGreaterThan<T extends number | bigint>
  extends Lambda<[s: number | bigint], boolean> {
  readonly return: GreaterThan<Arg0Of<this>, T>
  readonly text: {
    "to be greater than": T
  }
}
