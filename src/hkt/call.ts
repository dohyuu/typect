import type { ArgsOf, PassArgs } from "./args"
import type { Lambda } from "./lambda"

export type Call<
  F extends Lambda<never, unknown>,
  Args extends ArgsOf<F>,
> = PassArgs<F, Args> extends infer F2 extends { readonly return: unknown }
  ? F2["return"] extends infer R extends ReturnOf<F, Args>
    ? R
    : never
  : never

export type ReturnOf<
  F extends Lambda<never, unknown>,
  Known = never,
> = ReturnType<PassArgs<F, Known>["sig"]>
