import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsNull } from "../predicate/is-null"

export interface _ToBeNull extends Lambda<[s: unknown], boolean> {
  readonly return: IsNull<Arg0Of<this>>
}
