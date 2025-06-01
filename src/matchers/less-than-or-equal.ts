import type { ErrorText } from "../helpers/error"
import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { CompareNumber } from "../primitives/number/compare"

export interface _ToBeLessThanOrEqual<T extends number>
  extends Lambda<[s: number | bigint], boolean> {
  readonly return: CompareNumber<Arg0Of<this>, T> extends 0 | -1 ? true : false
  readonly text: ErrorText<"to be less than or equal", T>
}
