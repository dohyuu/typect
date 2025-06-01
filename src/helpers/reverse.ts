import type { _Not } from "../expectors/not"
import type { Compose } from "../hkt/compose"
import type { LambdaArg1 } from "../hkt/lambda"

export interface Reverse<F0 extends LambdaArg1<never, boolean>>
  extends Compose<_Not, F0> {
  readonly text: F0 extends { readonly text: infer T }
    ? T extends {
        [key in infer Text extends string]: infer Expected
      }
      ? {
          [K in `not ${Text}`]: Expected
        }
      : T extends `${infer Text extends string}`
        ? `not ${Text}`
        : never
    : never
}
