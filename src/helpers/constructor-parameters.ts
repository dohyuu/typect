import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _ConstructorParametersOf } from "../lambdas/constructor-parameters-of"
import type { MergeError } from "./error"

export interface _ConstructorParameters<F0 extends LambdaArg1<any, unknown>>
  extends Compose<F0, _ConstructorParametersOf> {
  readonly text: MergeError<"constructor parameters", F0>
}
