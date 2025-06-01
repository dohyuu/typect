import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { Class } from "../primitives/class"

export interface _InstanceOf extends Lambda<[f: Class], unknown> {
  readonly return: Arg0Of<this> extends infer F extends Class
    ? InstanceType<F>
    : "Parameter is not a class"
}
