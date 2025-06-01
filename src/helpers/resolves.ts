import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _Awaited } from "../lambdas/awaited"
import type { KeepError } from "./error"

export interface _Resolves<F0 extends LambdaArg1<unknown, unknown>>
  extends Compose<F0, _Awaited> {
  readonly text: KeepError<F0>
}
