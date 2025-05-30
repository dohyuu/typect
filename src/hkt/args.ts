import type { Lambda } from "./lambda"

export type ArgsOf<F extends Lambda<never, unknown>> = F extends {
  readonly Args: (_: infer Args extends Params<F["sig"]>) => void
}
  ? Args
  : Params<F["sig"]>

export type Arg0Of<F extends Lambda<never, unknown>> = ArgsOf<F>[0]
export type Arg1Of<F extends Lambda<never, unknown>> = ArgsOf<F>[1]
export type Arg2Of<F extends Lambda<never, unknown>> = ArgsOf<F>[2]

export type Params<T> = T extends (...args: infer P) => any ? P : never

export type PassArgs<F extends Lambda<never, unknown>, Args> = F & {
  readonly Args: (_: Args) => void
}

export interface Run extends Lambda<[number, string], unknown> {
  readonly return: `${Arg0Of<this>}${Arg1Of<this>}`
}

export type SigOf<F extends Lambda<never, unknown>> = F["sig"]
