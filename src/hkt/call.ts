import type { PassArgs, PassArgs1 } from "./args"
import type { Lambda } from "./lambda"

export type Call<F extends Lambda<never, unknown>, Args> = PassArgs<
  F,
  Args
> extends infer F2 extends { readonly return: unknown }
  ? F2["return"] extends infer R extends SigReturnOf<F, Args>
    ? R
    : never
  : never

export type CallArg1<F extends Lambda<never, unknown>, Args> = PassArgs1<
  F,
  Args
> extends infer F2 extends { readonly return: unknown }
  ? F2["return"] extends infer R extends SigReturnOf<F, Args>
    ? R
    : never
  : never

export type SigReturnOf<
  F extends Lambda<never, unknown>,
  Known = never,
> = ReturnType<PassArgs<F, Known>["sig"]>
