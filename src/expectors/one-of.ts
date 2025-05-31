import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { IsOneOf } from "../predicate/is-one-of"
import type { Text } from "./text"
export interface _ToBeOneOf<T extends unknown[]>
  extends Lambda<[s: unknown], boolean> {
  readonly return: IsOneOf<Arg0Of<this>, T>
  readonly text: Text<"to be one of", T>
}
