import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"
import type { _Items as ItemsLambda } from "../lambdas/items"
import type { MergeError } from "./error"

export interface _Items<F0 extends LambdaArg1<unknown, unknown>>
  extends Compose<F0, ItemsLambda> {
  readonly text: MergeError<"items", F0>
}
