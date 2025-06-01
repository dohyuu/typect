import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"

export interface _Awaited extends Lambda<[f: Promise<any>], unknown> {
  readonly return: Arg0Of<this> extends Promise<infer R>
    ? R
    : "Parameter is not a Promise"
}
