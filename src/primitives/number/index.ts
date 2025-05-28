import type { ArrayContains } from "../array/contains";

export type SignedNumber<T extends number | bigint = number> = 
  ArrayContains<T, [number, bigint]> extends true
  ? {
    sign: Sign;
    nums: Digit[];
  } 
  : `${T}` extends `-${infer N}`
  ? {
    sign: NegativeSign;
    nums: DigitsFrom<N>;
  }
  : PositiveNumber<T>

export type PositiveNumber<T extends number | bigint = number> = 
  ArrayContains<T, [number, bigint]> extends true 
    ? {
      sign: PositiveSign;
      nums: Digit[];
    } 
    : {
      sign: PositiveSign;
      nums: DigitsFrom<`${T}`>;
    }

export type PositiveNumber2<T extends number | bigint = number> = {
  sign: PositiveSign;
  nums: ArrayContains<T, [number, bigint]> extends true  ? Digit[] : DigitsFrom<`${T}`>;
} 

export type SignOf<T extends SignedNumber> = T extends { sign: infer S } ? S : never;

export type Sign = PositiveSign | NegativeSign;

export type PositiveSign = "";

export type NegativeSign = "-";

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type DigitsFrom<T extends string, Acc extends Digit[] = []> = 
  T extends `${infer Head extends Digit}${infer Rest}` 
    ? DigitsFrom<Rest, [...Acc, Head]>
    : Acc;


