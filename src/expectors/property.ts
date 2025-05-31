import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { HasProperty } from "../predicate/has-property"
import type { Text } from "./text"
export interface _ToHaveProperty<K extends string>
  extends Lambda<[s: unknown], boolean> {
  readonly return: HasProperty<Arg0Of<this>, K>
  readonly text: Text<"to have property", K>
}
