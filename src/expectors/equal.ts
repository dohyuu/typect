import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { Equal } from "../shared/equal"
import type { Text } from "./text"
export interface _ToEqual<A> extends Lambda<[s: unknown], boolean> {
  readonly return: Equal<A, Arg0Of<this>>
  readonly text: Text<"to equal", A>
}
