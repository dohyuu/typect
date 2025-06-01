import type { Lambda } from "../hkt/lambda"

export type ErrorText<S extends string, V> = V extends
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
  ? `${S} ${V}`
  : {
      [K in S]: V
    }

export type KeepError<F extends Lambda<never, unknown>> = F extends {
  readonly text: infer Err
}
  ? Err
  : never

export type MergeError<
  Append extends string,
  F extends Lambda<never, unknown>,
> = F extends { readonly text: infer Err }
  ? Err extends {
      [key in `to ${infer Text extends string}`]: infer Expected
    }
    ? {
        [K in `${Append} to ${Text}`]: Expected
      }
    : Err extends `to ${infer Text extends string}`
      ? `${Append} to ${Text}`
      : never
  : never

export type MergeErrorWithKeepPrefix<
  Append extends string,
  F extends Lambda<never, unknown>,
> = F extends { readonly text: infer Err }
  ? Err extends {
      [key in `${infer Prefix extends string}to ${infer Text extends string}`]: infer Expected
    }
    ? {
        [K in `${Prefix}${Append} to ${Text}`]: Expected
      }
    : Err extends `${infer Prefix extends string}to ${infer Text extends string}`
      ? `${Prefix}${Append} to ${Text}`
      : never
  : never
