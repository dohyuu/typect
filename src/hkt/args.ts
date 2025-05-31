import type { TypedArray } from "../primitives/array/array"
import type { Lambda } from "./lambda"

export type ArgsOf<F extends Lambda<never, unknown>> = F extends {
  readonly args: (_: infer Args extends Params<F["sig"]>) => void
}
  ? Args
  : F extends { readonly Args: (_: infer Args) => void }
    ? TypeArgs<Args, Params<F["sig"]>>
    : never

export type UnsafeArgsOf<F extends Lambda<never, unknown>> = F extends {
  readonly args: (_: infer Args extends unknown[]) => void
}
  ? Args
  : never

export type UnsafeArgs0Of<F extends Lambda<never, unknown>> = UnsafeArgsOf<F>[0]

export type Arg0Of<F extends Lambda<never, unknown>> = ArgsOf<F>[0]
export type Arg1Of<F extends Lambda<never, unknown>> = ArgsOf<F>[1]
export type Arg2Of<F extends Lambda<never, unknown>> = ArgsOf<F>[2]

export type Params<T> = T extends (...args: infer P) => any ? P : never

export type PassArgs<F extends Lambda<never, unknown>, Args> = F & {
  readonly args: (_: Args) => void
}

export type PassArgs1<F extends Lambda<never, unknown>, Args> = F & {
  readonly args: (_: [Args]) => void
}

export type TypeArgs<Args, Types extends unknown[]> = Args extends unknown[]
  ? TypedArray<Args, Types>
  : never
