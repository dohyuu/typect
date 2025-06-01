import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"

export interface _GuardOf
  extends Lambda<[f: (...args: any[]) => any], unknown> {
  readonly return: Arg0Of<this> extends (args: any) => args is infer R
    ? R
    : "Parameter is not a guard function"
}
