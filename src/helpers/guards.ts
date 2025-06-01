import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _GuardOf } from "../lambdas/guard-of"
import type { MergeError } from "./error"

export interface _Guards<F0 extends LambdaArg1<unknown, unknown>>
  extends Compose<F0, _GuardOf> {
  readonly text: MergeError<"guards", F0>
}
