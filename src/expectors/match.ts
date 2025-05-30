import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { MatchObject } from "../predicate/match-object"

export interface _ToMatch<T extends object>
  extends Lambda<[s: object], boolean> {
  readonly return: MatchObject<Arg0Of<this>, T>
}
