import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsTruthy } from "../predicate/is-truthy"

export interface _ToBeTruthy extends Lambda<[s: unknown], boolean> {
  readonly return: IsTruthy<Arg0Of<this>>
}
