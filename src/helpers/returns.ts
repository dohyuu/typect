import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _ReturnOf } from "../lambdas/return-of"
import type { MergeError } from "./error"

export interface _Returns<F0 extends LambdaArg1<unknown, unknown>>
  extends Compose<F0, _ReturnOf> {
  readonly text: MergeError<"returns", F0>
}
