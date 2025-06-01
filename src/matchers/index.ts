import type { Class } from "../primitives/class"
import type { _ToContain } from "./contain"
import type { _ToBeDefined } from "./defined"
import type { _ToEqual } from "./equal"
import type { _ToBeFalsy } from "./falsy"
import type { _ToBeGreaterThan } from "./greater-than"
import type { _ToBeGreaterThanOrEqual } from "./greater-than-or-equal"
import type { _ToBeInstanceOf } from "./instance-of"
import type { _ToHaveLength } from "./length"
import type { _ToBeLessThan } from "./less-than"
import type { _ToBeLessThanOrEqual } from "./less-than-or-equal"
import type { _ToMatch } from "./match"
import type { _ToBeNull } from "./null"
import type { _ToBeOneOf } from "./one-of"
import type { _ToHaveProperty } from "./property"
import type { _ToBeTruthy } from "./truthy"
import type { _ToBeUndefined } from "./undefined"

export type ToEqual<A> = _ToEqual<A>
export type ToBeInstanceOf<A extends Class> = _ToBeInstanceOf<A>
export type ToBeDefined = _ToBeDefined
export type ToBeUndefined = _ToBeUndefined
export type ToBeNull = _ToBeNull
export type ToBeFalsy = _ToBeFalsy
export type ToBeTruthy = _ToBeTruthy
export type ToBeLessThan<A extends number> = _ToBeLessThan<A>
export type ToBeLessThanOrEqual<A extends number> = _ToBeLessThanOrEqual<A>
export type ToBeGreaterThan<A extends number> = _ToBeGreaterThan<A>
// biome-ignore format: ""

export type ToBeGreaterThanOrEqual<A extends number> = _ToBeGreaterThanOrEqual<A>
export type ToContain<A extends unknown[]> = _ToContain<A>
export type ToHaveLength<A extends number> = _ToHaveLength<A>
// biome-ignore format: ""

export type ToHaveProperty<K extends string> = _ToHaveProperty<K>
export type ToMatch<A extends object> = _ToMatch<A>
export type ToBeOneOf<A extends unknown[]> = _ToBeOneOf<A>
