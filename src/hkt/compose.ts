import type { Params, UnsafeArgs0Of } from "./args"
import type { CallArg1, SigReturnOf } from "./call"
import type { Lambda, LambdaArg1 } from "./lambda"

export interface Compose<
  F1 extends LambdaArg1<SigReturnOf<F0>, unknown>,
  F0 extends LambdaArg1<never, unknown>,
> extends Lambda<Params<F0["sig"]>, SigReturnOf<F1, [SigReturnOf<F0>]>> {
  readonly return: CallArg1<F1, CallArg1<F0, UnsafeArgs0Of<this>>>
}

export interface ComposeUnsafe<
  F1 extends Lambda<[SigReturnOf<F0>], unknown>,
  F0 extends Lambda<never, unknown>,
> extends Lambda<Params<F0["sig"]>, SigReturnOf<F1, [SigReturnOf<F0>]>> {
  readonly return: CallArg1<F1, CallArg1<F0, UnsafeArgs0Of<this>>>
}
