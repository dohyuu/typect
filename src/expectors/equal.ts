import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { Equal } from "../shared/equal"

export interface _ToEqual<A> extends Lambda<[s: unknown], boolean> {
  readonly return: Equal<A, Arg0Of<this>>
}
