import type { IsNever } from "./predicate/is-never"
import type { Equal } from "./shared/equal"

export function Test<_T0 extends true>(): void
export function Test<_T0 extends true, _T1 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true, _T15 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true, _T15 extends true, _T16 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true, _T15 extends true, _T16 extends true, _T17 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true, _T15 extends true, _T16 extends true, _T17 extends true, _T18 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true, _T15 extends true, _T16 extends true, _T17 extends true, _T18 extends true, _T19 extends true>(): void
// biome-ignore format: ""
export function Test<_T0 extends true, _T1 extends true, _T2 extends true, _T3 extends true, _T4 extends true, _T5 extends true, _T6 extends true, _T7 extends true, _T8 extends true, _T9 extends true, _T10 extends true, _T11 extends true, _T12 extends true, _T13 extends true, _T14 extends true, _T15 extends true, _T16 extends true, _T17 extends true, _T18 extends true, _T19 extends true, _T20 extends true>(): void {}

export function TestEqual<
  T extends unknown extends infer R
    ? Equal<T1, T> extends true
      ? R
      : {
          expected: T1
        }
    : never,
  T1 extends IsNever<T> extends true ? "Actual is never" : unknown,
>(): void {}

export function TestNotEqual<
  T extends unknown extends infer R
    ? Equal<T1, T> extends true
      ? {
          expected: T1
        }
      : R
    : never,
  T1 extends IsNever<T> extends true ? "Actual is never" : unknown,
>(): void {}
