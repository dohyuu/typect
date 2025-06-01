import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _AssertOf } from "../lambdas/assert-of"
import type { MergeError } from "./error"

export interface _Asserts<F0 extends LambdaArg1<any, unknown>>
  extends Compose<F0, _AssertOf> {
  readonly text: MergeError<"asserts", F0>
}
