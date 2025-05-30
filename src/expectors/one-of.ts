import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsOneOf } from "../predicate/is-one-of"

export interface _ToBeOneOf<T extends unknown[]>
  extends Lambda<[s: unknown], boolean> {
  readonly return: IsOneOf<Arg0Of<this>, T>
}
