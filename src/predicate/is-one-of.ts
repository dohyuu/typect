import type { ArrayContains } from "../primitives/array/contains";

export type IsOneOf<T, U extends unknown[]> = ArrayContains<T, U>;