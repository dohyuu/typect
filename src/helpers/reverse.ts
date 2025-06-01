import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _Not } from "../matchers/not"
import type { MergeErrorWithKeepPrefix } from "./error"

export interface Reverse<F0 extends LambdaArg1<never, boolean>>
  extends Compose<_Not, F0> {
  readonly text: MergeErrorWithKeepPrefix<"not", F0>
}
