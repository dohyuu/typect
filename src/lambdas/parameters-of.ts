import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"

export interface _ParametersOf
  extends Lambda<[f: (...args: any) => any], unknown> {
  readonly return: Arg0Of<this> extends infer F extends (...args: any) => any
    ? Parameters<F>
    : never
}
