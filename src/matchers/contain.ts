import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { Contains } from "../predicate/contains"

export interface _ToContain<T> extends Lambda<[s: unknown[]], boolean> {
  readonly return: Contains<Arg0Of<this>, T>
}
