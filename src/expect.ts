import type { _Returns } from "./helpers/returns"
import type { Reverse } from "./helpers/reverse"
import type { Lambda } from "./hkt/lambda"
import type { Match } from "./match"
import type { _ToContain } from "./matchers/contain"
import type { _ToBeDefined } from "./matchers/defined"
import type { _ToEqual } from "./matchers/equal"
import type { _ToBeFalsy } from "./matchers/falsy"
import type { _ToBeGreaterThan } from "./matchers/greater-than"
import type { _ToBeGreaterThanOrEqual } from "./matchers/greater-than-or-equal"
import type { _ToBeInstanceOf } from "./matchers/instance-of"
import type { _ToHaveLength } from "./matchers/length"
import type { _ToBeLessThan } from "./matchers/less-than"
import type { _ToBeLessThanOrEqual } from "./matchers/less-than-or-equal"
import type { _ToMatch } from "./matchers/match"
import type { _ToBeNull } from "./matchers/null"
import type { _ToBeOneOf } from "./matchers/one-of"
import type { _ToHaveProperty } from "./matchers/property"
import type { _ToBeTruthy } from "./matchers/truthy"
import type { _ToBeUndefined } from "./matchers/undefined"
import type { IsNever } from "./predicate/is-never"
import type { Class } from "./primitives/class"

export function Expect<
  const E extends unknown extends infer E0 ? Match<E, E0, A1> : never,
  A1 extends IsNever<E> extends true ? "Actual never" : Lambda<never, unknown>,
>() {}

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
export type ToHaveProperty<K extends string> = _ToHaveProperty<K>
export type ToMatch<A extends object> = _ToMatch<A>
export type ToBeOneOf<A extends unknown[]> = _ToBeOneOf<A>

export type NotToEqual<A> = Reverse<_ToEqual<A>>
// biome-ignore format: ""
export type NotToBeInstanceOf<A extends Class> = Reverse<_ToBeInstanceOf<A>>
export type NotToBeDefined = Reverse<_ToBeDefined>
export type NotToBeUndefined = Reverse<_ToBeUndefined>
export type NotToBeNull = Reverse<_ToBeNull>
export type NotToBeFalsy = Reverse<_ToBeFalsy>
export type NotToBeTruthy = Reverse<_ToBeTruthy>
// biome-ignore format: ""
export type NotToBeLessThan<A extends number> = Reverse<_ToBeLessThan<A>>
// biome-ignore format: ""
export type NotToBeLessThanOrEqual<A extends number> = Reverse<_ToBeLessThanOrEqual<A>>
// biome-ignore format: ""
export type NotToBeGreaterThan<A extends number> = Reverse<_ToBeGreaterThan<A>>
// biome-ignore format: ""
export type NotToBeGreaterThanOrEqual<A extends number> = Reverse<_ToBeGreaterThanOrEqual<A>>
export type NotToContain<A extends unknown[]> = Reverse<_ToContain<A>>
export type NotToHaveLength<A extends number> = Reverse<_ToHaveLength<A>>
// biome-ignore format: ""
export type NotToHaveProperty<K extends string> = Reverse<_ToHaveProperty<K>>
export type NotToMatch<A extends object> = Reverse<_ToMatch<A>>
export type NotToBeOneOf<A extends unknown[]> = Reverse<_ToBeOneOf<A>>

// biome-ignore format: ""
export namespace To {
  export type Equal<A> = _ToEqual<A>
  export type BeInstanceOf<A extends Class> = _ToBeInstanceOf<A>
  export type BeDefined = _ToBeDefined
  export type BeUndefined = _ToBeUndefined
  export type BeNull = _ToBeNull
  export type BeFalsy = _ToBeFalsy
  export type BeTruthy = _ToBeTruthy
  export type BeLessThan<A extends number> = _ToBeLessThan<A>
  export type BeLessThanOrEqual<A extends number> = _ToBeLessThanOrEqual<A>
  export type BeGreaterThan<A extends number> = _ToBeGreaterThan<A>
  export type BeGreaterThanOrEqual<A extends number> = _ToBeGreaterThanOrEqual<A>
  export type Contain<A extends unknown[]> = _ToContain<A>
  export type HaveLength<A extends number> = _ToHaveLength<A>
  export type HaveProperty<K extends string> = _ToHaveProperty<K>
  export type Match<A extends object> = _ToMatch<A>
  export type BeOneOf<A extends unknown[]> = _ToBeOneOf<A>
}

// biome-ignore format: ""
export namespace Not {
  export type ToEqual<A> = Reverse<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Reverse<_ToBeInstanceOf<A>>
  export type ToBeDefined = Reverse<_ToBeDefined>
  export type ToBeUndefined = Reverse<_ToBeUndefined>
  export type ToBeNull = Reverse<_ToBeNull>
  export type ToBeFalsy = Reverse<_ToBeFalsy>
  export type ToBeTruthy = Reverse<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Reverse<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Reverse<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Reverse<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Reverse<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Reverse<_ToContain<A>>
  export type ToHaveLength<A extends number> = Reverse<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Reverse<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Reverse<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Reverse<_ToBeOneOf<A>>

  export namespace To {
    export type Equal<A> = Reverse<_ToEqual<A>>
    export type BeInstanceOf<A extends Class> = Reverse<_ToBeInstanceOf<A>>
    export type BeDefined = Reverse<_ToBeDefined>
    export type BeUndefined = Reverse<_ToBeUndefined>
    export type BeNull = Reverse<_ToBeNull>
    export type BeFalsy = Reverse<_ToBeFalsy>
    export type BeTruthy = Reverse<_ToBeTruthy>
    export type BeLessThan<A extends number> = Reverse<_ToBeLessThan<A>>
    export type BeLessThanOrEqual<A extends number> = Reverse<_ToBeLessThanOrEqual<A>>
    export type BeGreaterThan<A extends number> = Reverse<_ToBeGreaterThan<A>>
    export type BeGreaterThanOrEqual<A extends number> = Reverse<_ToBeGreaterThanOrEqual<A>>
    export type Contain<A extends unknown[]> = Reverse<_ToContain<A>>
    export type HaveLength<A extends number> = Reverse<_ToHaveLength<A>>
    export type HaveProperty<K extends string> = Reverse<_ToHaveProperty<K>>
    export type Match<A extends object> = Reverse<_ToMatch<A>>
    export type BeOneOf<A extends unknown[]> = Reverse<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Returns {
  export namespace Not {
    export type ToEqual<A> = Reverse<_Returns<_ToEqual<A>>>
    export type ToBeInstanceOf<A extends Class> = Reverse<_Returns<_ToBeInstanceOf<A>>>
    export type ToBeDefined = Reverse<_ToBeDefined>
    export type ToBeUndefined = Reverse<_ToBeUndefined>
    export type ToBeNull = Reverse<_ToBeNull>
    export type ToBeFalsy = Reverse<_ToBeFalsy>
    export type ToBeTruthy = Reverse<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = Reverse<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = Reverse<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = Reverse<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = Reverse<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = Reverse<_ToContain<A>>
    export type ToHaveLength<A extends number> = Reverse<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = Reverse<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = Reverse<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = Reverse<_ToBeOneOf<A>>
  }
}
