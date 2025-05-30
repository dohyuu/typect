import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsTruthy } from "../predicate/is-truthy"
import type { Not } from "../shared/not"

export interface _ToBeFalsy extends Lambda<[s: unknown], boolean> {
  readonly return: Not<IsTruthy<Arg0Of<this>>>
}
