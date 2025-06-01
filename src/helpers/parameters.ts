import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _ParametersOf } from "../lambdas/parameters-of"
import type { MergeError } from "./error"

export interface _Parameters<F0 extends LambdaArg1<unknown, unknown>>
  extends Compose<F0, _ParametersOf> {
  readonly text: MergeError<"parameters", F0>
}
