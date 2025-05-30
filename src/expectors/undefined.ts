import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsUndefined } from "../predicate/is-undefined"

export interface _ToBeUndefined extends Lambda<[s: unknown], boolean> {
  readonly return: IsUndefined<Arg0Of<this>>
}
