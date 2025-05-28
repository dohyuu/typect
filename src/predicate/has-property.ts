import type { IsNever } from "./is-never"

export type HasProperty<
  T,
  K extends string,
  V = never,
> = IsNever<V> extends true ? HasPropertyOnly<T, K> : HasPropertyWith<T, K, V>

export type HasPropertyOnly<T, K extends string> = T extends {
  [P in K]: unknown
}
  ? true
  : false

export type HasPropertyWith<T, K extends string, V> = T extends { [P in K]: V }
  ? true
  : false
