import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsUndefined } from "../predicate/is-undefined"
import type { Not } from "../shared/not"

export interface _ToBeDefined extends Lambda<[s: unknown], boolean> {
  readonly return: Not<IsUndefined<Arg0Of<this>>>
  readonly text: "to be defined"
}
