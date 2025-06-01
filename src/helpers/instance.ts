import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _InstanceOf } from "../lambdas/instance-of"
import type { MergeError } from "./error"

export interface _Instance<F0 extends LambdaArg1<any, unknown>>
  extends Compose<F0, _InstanceOf> {
  readonly text: MergeError<"instance", F0>
}
