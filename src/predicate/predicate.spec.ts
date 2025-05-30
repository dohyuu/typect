import type { Equal } from "../shared/equal"
import type { Not } from "../shared/not"
import { Test } from "../test"
import type { Contains } from "./contains"
import type { Extends } from "./extends"
import type { GreaterThan } from "./greater-than"
import type { GreaterThanOrEqual } from "./greater-than-or-equal"
import type { HasLength } from "./has-length"
import type {
  HasProperty,
  HasPropertyOnly,
  HasPropertyWith,
} from "./has-property"
import type { IsDefined } from "./is-defined"
import type { IsInstanceOf } from "./is-instance-of"
import type { IsNever } from "./is-never"
import type { IsOneOf } from "./is-one-of"
import type { IsTruthy } from "./is-truthy"
import type { MatchObject } from "./match-object"

Test<Not<false>>

Test<
  Equal<true, true>,
  Equal<false, false>,
  Not<Equal<true, false>>,
  Not<Equal<false, true>>
>

Test<
  IsDefined<true>,
  IsDefined<false>,
  IsDefined<null>,
  IsDefined<void>,
  IsDefined<0>,
  IsDefined<"">,
  IsDefined<[]>,
  Not<IsDefined<undefined>>
>

Test<
  IsTruthy<true>,
  IsTruthy<[]>,
  IsTruthy<{}>,
  Not<IsTruthy<0>>,
  Not<IsTruthy<"">>,
  Not<IsTruthy<null>>,
  Not<IsTruthy<undefined>>
>

Test<
  IsOneOf<unknown, [unknown, never]>,
  Not<IsOneOf<"1", [unknown, "b"]>>,
  Not<IsOneOf<unknown, ["a", "b"]>>,
  Not<IsOneOf<never, ["a", "b"]>>,
  Not<IsOneOf<unknown, [never, "1"]>>,
  Not<IsOneOf<never, [unknown, "1"]>>
>

Test<
  IsNever<never>,
  Not<IsNever<unknown>>,
  Not<IsNever<void>>,
  Not<IsNever<0>>,
  Not<IsNever<"1">>,
  Not<IsNever<null>>,
  Not<IsNever<undefined>>
>

Test<
  IsOneOf<unknown, [unknown, never]>,
  IsOneOf<unknown, [never, unknown]>,
  Not<IsOneOf<1, [number, never]>>,
  Not<IsOneOf<number, [1, never]>>,
  Not<IsOneOf<1, [unknown, never]>>,
  Not<IsOneOf<unknown, [never, never]>>,
  Not<IsOneOf<"z", [unknown, never, "1"]>>,
  Not<IsOneOf<never, ["1", unknown]>>
>

Test<
  Extends<number, number>,
  Extends<number, unknown>,
  Extends<never, "1">,
  Extends<1, number>,
  Extends<"str", string>,
  Extends<{ a: 1 }, { a: number }>,
  Not<Extends<unknown, number>>,
  Not<Extends<never, "1">>,
  Not<Extends<number, 1>>,
  Not<Extends<string, "str">>
>

class Sample {}
class Other {
  x: string
}
const sample = new Sample()
const other = new Other()

Test<
  IsInstanceOf<typeof sample, typeof Sample>,
  IsInstanceOf<typeof other, typeof Other>,
  Not<IsInstanceOf<typeof sample, typeof Other>>
>

// biome-ignore format: ""
Test<
  GreaterThan<2, 1>,
  Not<GreaterThan<2, 2>>,
  Not<GreaterThan<1, 2>>
>

// biome-ignore format: ""
Test<
  GreaterThanOrEqual<2, 1>,
  GreaterThanOrEqual<2, 2>,
  Not<GreaterThanOrEqual<1, 2>>
>

Test<
  Contains<[1, 2, 3], 1>,
  Not<Contains<[1, 2, 3], 4>>,
  Not<Contains<[1, 2, 3], "1">>,
  Not<Contains<[], "4">>
>

Test<
  HasLength<[1, 2, 3], 3>,
  HasLength<[], 0>,
  Not<HasLength<[1, 2, 3], 4>>,
  Not<HasLength<[1, 2, 3], 2>>
>

// biome-ignore format: ""
Test<
  HasPropertyOnly<{ a: 1 }, "a">, 
  Not<HasPropertyOnly<{ a: 1 }, "b">>
>

Test<
  HasPropertyWith<{ a: 1 }, "a", 1>,
  Not<HasPropertyWith<{ a: 1 }, "a", 2>>,
  Not<HasPropertyWith<{ a: 1 }, "b", 1>>
>

Test<
  HasProperty<{ a: 1 }, "a">,
  HasProperty<{ a: 1 }, "a", 1>,
  Not<HasProperty<{ a: 1 }, "b">>,
  Not<HasProperty<{ a: 1 }, "a", 2>>
>

Test<
  MatchObject<{ a: 1 }, { a: 1 }>,
  MatchObject<{ a: 1; b: 2 }, { a: 1 }>,
  MatchObject<{ a: { x: 1; b: 1 }; b: 2 }, { a: { x: 1 } }>,
  Not<MatchObject<{ a: 1 }, { a: 1; b: 2 }>>,
  Not<MatchObject<{ a: 1 }, { a: 2 }>>
>
