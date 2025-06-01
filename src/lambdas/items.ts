import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"

export interface _Items extends Lambda<[f: unknown[]], unknown> {
  readonly return: Arg0Of<this> extends infer F extends unknown[]
    ? F[number]
    : never
}
