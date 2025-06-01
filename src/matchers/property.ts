import type { ErrorText } from "../helpers/error"
import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { HasProperty } from "../predicate/has-property"

export interface _ToHaveProperty<K extends string>
  extends Lambda<[s: unknown], boolean> {
  readonly return: HasProperty<Arg0Of<this>, K>
  readonly text: ErrorText<"to have property", K>
}
