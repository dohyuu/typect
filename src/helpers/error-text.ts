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
