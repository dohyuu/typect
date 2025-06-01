import type { _Asserts } from "./helpers/asserts"
import type { _ConstructorParameters } from "./helpers/constructor-parameters"
import type { _Guards } from "./helpers/guards"
import type { _Instance } from "./helpers/instance"
import type { _Items } from "./helpers/items"
import type { _Parameters } from "./helpers/parameters"
import type { _Resolves } from "./helpers/resolves"
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
  type Fn<F extends Lambda<any, boolean>> = Reverse<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>
}

// biome-ignore format: ""
export namespace Returns {
  type Fn<F extends Lambda<any, unknown>> = _Returns<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Resolves {
  type Fn<F extends Lambda<any, unknown>> = _Resolves<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Parameters {
  type Fn<F extends Lambda<any, unknown>> = _Parameters<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Items {
  type Fn<F extends Lambda<any, unknown>> = _Items<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Instance {
  type Fn<F extends Lambda<any, unknown>> = _Instance<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Guards {
  type Fn<F extends Lambda<any, unknown>> = _Guards<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace ConstructorParameters {
  type Fn<F extends Lambda<any, unknown>> = _ConstructorParameters<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}

// biome-ignore format: ""
export namespace Asserts {
  type Fn<F extends Lambda<any, unknown>> = _Asserts<F>

  export type ToEqual<A> = Fn<_ToEqual<A>>
  export type ToBeInstanceOf<A extends Class> = Fn<_ToBeInstanceOf<A>>
  export type ToBeDefined = Fn<_ToBeDefined>
  export type ToBeUndefined = Fn<_ToBeUndefined>
  export type ToBeNull = Fn<_ToBeNull>
  export type ToBeFalsy = Fn<_ToBeFalsy>
  export type ToBeTruthy = Fn<_ToBeTruthy>
  export type ToBeLessThan<A extends number> = Fn<_ToBeLessThan<A>>
  export type ToBeLessThanOrEqual<A extends number> = Fn<_ToBeLessThanOrEqual<A>>
  export type ToBeGreaterThan<A extends number> = Fn<_ToBeGreaterThan<A>>
  export type ToBeGreaterThanOrEqual<A extends number> = Fn<_ToBeGreaterThanOrEqual<A>>
  export type ToContain<A extends unknown[]> = Fn<_ToContain<A>>
  export type ToHaveLength<A extends number> = Fn<_ToHaveLength<A>>
  export type ToHaveProperty<K extends string> = Fn<_ToHaveProperty<K>>
  export type ToMatch<A extends object> = Fn<_ToMatch<A>>
  export type ToBeOneOf<A extends unknown[]> = Fn<_ToBeOneOf<A>>

  export namespace Not {
    type _Fn<F extends Lambda<any, boolean>> = Reverse<Fn<F>>

    export type ToEqual<A> = _Fn<_ToEqual<A>>
    export type ToBeInstanceOf<A extends Class> = _Fn<_ToBeInstanceOf<A>>
    export type ToBeDefined = _Fn<_ToBeDefined>
    export type ToBeUndefined = _Fn<_ToBeUndefined>
    export type ToBeNull = _Fn<_ToBeNull>
    export type ToBeFalsy = _Fn<_ToBeFalsy>
    export type ToBeTruthy = _Fn<_ToBeTruthy>
    export type ToBeLessThan<A extends number> = _Fn<_ToBeLessThan<A>>
    export type ToBeLessThanOrEqual<A extends number> = _Fn<_ToBeLessThanOrEqual<A>>
    export type ToBeGreaterThan<A extends number> = _Fn<_ToBeGreaterThan<A>>
    export type ToBeGreaterThanOrEqual<A extends number> = _Fn<_ToBeGreaterThanOrEqual<A>>
    export type ToContain<A extends unknown[]> = _Fn<_ToContain<A>>
    export type ToHaveLength<A extends number> = _Fn<_ToHaveLength<A>>
    export type ToHaveProperty<K extends string> = _Fn<_ToHaveProperty<K>>
    export type ToMatch<A extends object> = _Fn<_ToMatch<A>>
    export type ToBeOneOf<A extends unknown[]> = _Fn<_ToBeOneOf<A>>
  }
}
