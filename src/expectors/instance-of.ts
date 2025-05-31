import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsInstanceOf } from "../predicate/is-instance-of"
import type { Class } from "../primitives/class"

export interface _ToBeInstanceOf<T extends Class>
  extends Lambda<[s: unknown], boolean> {
  readonly return: IsInstanceOf<Arg0Of<this>, T>
  readonly text: {
    "to be instance of": T
  }
}
