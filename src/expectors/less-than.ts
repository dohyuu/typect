import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { CompareNumber } from "../primitives/number/compare"

export interface _ToBeLessThan<T extends number>
  extends Lambda<[s: number | bigint], boolean> {
  readonly return: CompareNumber<Arg0Of<this>, T> extends -1 ? true : false
  readonly text: {
    "to be less than": T
  }
}
