import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { Class } from "../primitives/class"

export interface _ConstructorParametersOf extends Lambda<[f: Class], unknown> {
  readonly return: Arg0Of<this> extends infer R extends Class
    ? ConstructorParameters<R>
    : "Parameter is not a Promise"
}
