import type { ErrorText } from "../helpers/error"
import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { HasLength } from "../predicate/has-length"

export interface _ToHaveLength<N extends number>
  extends Lambda<[s: unknown[]], boolean> {
  readonly return: HasLength<Arg0Of<this>, N>
  readonly text: ErrorText<"to have length", N>
}
