import type { Call } from "../hkt/call"
import { TestEqual } from "../test"
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

TestEqual<Call<_ToEqual<"a">, ["a"]>, true>
TestEqual<Call<_ToEqual<"a">, ["b"]>, false>

TestEqual<Call<_ToBeNull, [null]>, true>
TestEqual<Call<_ToBeNull, [undefined]>, false>

TestEqual<Call<_ToBeDefined, [undefined]>, false>
TestEqual<Call<_ToBeDefined, [0]>, true>
TestEqual<Call<_ToBeDefined, [""]>, true>
TestEqual<Call<_ToBeDefined, [false]>, true>
TestEqual<Call<_ToBeDefined, [true]>, true>
TestEqual<Call<_ToBeDefined, [null]>, true>

TestEqual<Call<_ToBeUndefined, [undefined]>, true>
TestEqual<Call<_ToBeUndefined, [0]>, false>
TestEqual<Call<_ToBeUndefined, [""]>, false>
TestEqual<Call<_ToBeUndefined, [false]>, false>
TestEqual<Call<_ToBeUndefined, [true]>, false>
TestEqual<Call<_ToBeUndefined, [null]>, false>

TestEqual<Call<_ToBeLessThan<1>, [1]>, false>

TestEqual<Call<_ToBeLessThan<1>, [0]>, true>
TestEqual<Call<_ToBeLessThan<1>, [1]>, false>
TestEqual<Call<_ToBeLessThan<1>, [2]>, false>

TestEqual<Call<_ToBeLessThanOrEqual<1>, [0]>, true>
TestEqual<Call<_ToBeLessThanOrEqual<1>, [1]>, true>
TestEqual<Call<_ToBeLessThanOrEqual<1>, [2]>, false>

TestEqual<Call<_ToBeGreaterThan<1>, [0]>, false>
TestEqual<Call<_ToBeGreaterThan<1>, [1]>, false>
TestEqual<Call<_ToBeGreaterThan<1>, [2]>, true>

TestEqual<Call<_ToBeGreaterThanOrEqual<1>, [0]>, false>
TestEqual<Call<_ToBeGreaterThanOrEqual<1>, [1]>, true>
TestEqual<Call<_ToBeGreaterThanOrEqual<1>, [20]>, true>

TestEqual<Call<_ToBeOneOf<[0, 1, 2]>, [1]>, true>
TestEqual<Call<_ToBeOneOf<[0, 2, 3]>, [1]>, false>

class Sample {}
class Other {
  a: number
}
const sample = new Sample()
const other = new Other()

TestEqual<Call<_ToBeInstanceOf<typeof Sample>, [typeof sample]>, true>
TestEqual<Call<_ToBeInstanceOf<typeof Sample>, [typeof other]>, false>

TestEqual<Call<_ToHaveLength<3>, [["a", "b", "c"]]>, true>
TestEqual<Call<_ToHaveLength<3>, [["a", "b"]]>, false>

TestEqual<Call<_ToContain<"a">, [["a", "b", "c"]]>, true>
TestEqual<Call<_ToContain<"a">, [["b", "c"]]>, false>

TestEqual<Call<_ToBeOneOf<["a", "b", "c"]>, ["a"]>, true>
TestEqual<Call<_ToBeOneOf<["a", "b", "c"]>, ["d"]>, false>

TestEqual<Call<_ToBeLessThan<1>, [0]>, true>
TestEqual<Call<_ToBeLessThan<1>, [1]>, false>
TestEqual<Call<_ToBeLessThan<1>, [2]>, false>

TestEqual<Call<_ToBeLessThanOrEqual<1>, [0]>, true>
TestEqual<Call<_ToBeLessThanOrEqual<1>, [1]>, true>
TestEqual<Call<_ToBeLessThanOrEqual<1>, [2]>, false>

TestEqual<Call<_ToHaveProperty<"a">, [{ a: 1 }]>, true>
TestEqual<Call<_ToHaveProperty<"a">, [{ b: 1 }]>, false>

TestEqual<Call<_ToMatch<{ a: 1 }>, [{ a: 1 }]>, true>
TestEqual<Call<_ToMatch<{ a: 1 }>, [{ b: 1 }]>, false>

TestEqual<Call<_ToBeFalsy, [false]>, true>
TestEqual<Call<_ToBeFalsy, [true]>, false>
TestEqual<Call<_ToBeFalsy, [1]>, false>
TestEqual<Call<_ToBeFalsy, [""]>, true>
TestEqual<Call<_ToBeFalsy, [null]>, true>
TestEqual<Call<_ToBeFalsy, [undefined]>, true>
TestEqual<Call<_ToBeFalsy, [0]>, true>

TestEqual<Call<_ToBeTruthy, [false]>, false>
TestEqual<Call<_ToBeTruthy, [true]>, true>
TestEqual<Call<_ToBeTruthy, [1]>, true>
TestEqual<Call<_ToBeTruthy, [""]>, false>
TestEqual<Call<_ToBeTruthy, [null]>, false>
TestEqual<Call<_ToBeTruthy, [undefined]>, false>
TestEqual<Call<_ToBeTruthy, [0]>, false>
