import type { Call } from "./hkt/call"
import type { Lambda } from "./hkt/lambda"

export type Match<Input, Actual, Expector> = Expector extends Lambda<
  never,
  unknown
>
  ? Call<Expector, [Input]> extends true
    ? Actual
    : Expector extends { readonly text: unknown }
      ? Expector["text"]
      : never
  : never
