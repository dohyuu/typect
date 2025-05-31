import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { CompareNumber } from "../primitives/number/compare"
import type { Text } from "./text"
export interface _ToBeLessThanOrEqual<T extends number>
  extends Lambda<[s: number | bigint], boolean> {
  readonly return: CompareNumber<Arg0Of<this>, T> extends 0 | -1 ? true : false
  readonly text: Text<"to be less than or equal", T>
}
