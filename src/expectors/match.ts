import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { MatchObject } from "../predicate/match-object"
import type { Text } from "./text"
export interface _ToMatch<T extends object>
  extends Lambda<[s: object], boolean> {
  readonly return: MatchObject<Arg0Of<this>, T>
  readonly text: Text<"to match", T>
}
