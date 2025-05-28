import type { Equal } from "../../shared/equal"
import type {
  Digit,
  PositiveNumber,
  Sign,
  SignedNumber,
  SignOf,
} from "../number"

type E = 0
type L = -1
type G = 1

export type DigitCompareTable = [
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  [E, L, L, L, L, L, L, L, L, L], // 0
  [G, E, L, L, L, L, L, L, L, L], // 1
  [G, G, E, L, L, L, L, L, L, L], // 2
  [G, G, G, E, L, L, L, L, L, L], // 3
  [G, G, G, G, E, L, L, L, L, L], // 4
  [G, G, G, G, G, E, L, L, L, L], // 5
  [G, G, G, G, G, G, E, L, L, L], // 6
  [G, G, G, G, G, G, G, E, L, L], // 7
  [G, G, G, G, G, G, G, G, E, L], // 8
  [G, G, G, G, G, G, G, G, G, E], // 9
]

export type CompareDigit<
  D1 extends Digit,
  D2 extends Digit,
> = DigitCompareTable[D1][D2]

export type CompareNumber<
  A extends number | bigint,
  B extends number | bigint,
> = Equal<A, B> extends true
  ? 0
  : CompareSignedNumber<SignedNumber<A>, SignedNumber<B>>

export type CompareEqualLengthDigits<
  A extends Digit[] & {
    length: B["length"]
  },
  B extends Digit[],
> = [A, B] extends [
  [infer AHead extends Digit, ...infer ARest extends Digit[]],
  [infer BHead extends Digit, ...infer BRest extends Digit[]],
]
  ? CompareDigit<AHead, BHead> extends 0
    ? CompareEqualLengthDigits<ARest, BRest>
    : CompareDigit<AHead, BHead>
  : 0

export type CompareSignedNumber<
  A extends SignedNumber,
  B extends SignedNumber,
> = CompareSign<SignOf<A>, SignOf<B>> extends infer R
  ? R extends 0
    ? CompareEqualLengthDigits<A["nums"], B["nums"]>
    : R
  : false

export type ComparePositive<
  A extends number | bigint,
  B extends number | bigint,
> = Equal<A, B> extends true
  ? 0
  : ComparePositiveNumber<PositiveNumber<A>, PositiveNumber<B>>

export type ComparePositiveNumber<
  A extends PositiveNumber,
  B extends PositiveNumber,
> = CompareEqualLengthDigits<A["nums"], B["nums"]>

export type CompareSign<A extends Sign, B extends Sign> = A extends B
  ? 0
  : A extends ""
    ? 1
    : -1
