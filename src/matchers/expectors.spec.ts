import type { Call } from "../hkt/call"
import { TestEqual } from "../test"
import type { _ToBeAny } from "./any"
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
import type { _ToBeUnknown } from "./unknown"

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
  a = 1
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

// Type Matchers (In Progress)
TestEqual<Call<_ToBeAny, [any]>, true>
TestEqual<Call<_ToBeAny, any>, true>
TestEqual<Call<_ToBeAny, [unknown]>, false>
TestEqual<Call<_ToBeAny, [never]>, false>

TestEqual<Call<_ToBeUnknown, [unknown]>, true>
TestEqual<Call<_ToBeUnknown, [any]>, false>
TestEqual<Call<_ToBeUnknown, [never]>, false>
TestEqual<Call<_ToBeUnknown, [1]>, false>

TestEqual<Call<_ToBeNever, [never]>, true>
TestEqual<Call<_ToBeNever, [unknown]>, false>
TestEqual<Call<_ToBeNever, [any]>, false>

TestEqual<Call<_ToBeFunction, [() => void]>, true>
TestEqual<Call<_ToBeFunction, [Function]>, true>
TestEqual<Call<_ToBeFunction, [1]>, false>

TestEqual<Call<_ToBeObject, [{}]>, true>
TestEqual<Call<_ToBeObject, [{ a: 1 }]>, true>
TestEqual<Call<_ToBeObject, [1]>, false>

TestEqual<Call<_ToBeArray, [[]]>, true>
TestEqual<Call<_ToBeArray, [[1, 2, 3]]>, true>
TestEqual<Call<_ToBeArray, [{}]>, false>

TestEqual<Call<_ToBeString, [""]>, true>
TestEqual<Call<_ToBeString, ["hello"]>, true>
TestEqual<Call<_ToBeString, [1]>, false>

TestEqual<Call<_ToBeBoolean, [true]>, true>
TestEqual<Call<_ToBeBoolean, [false]>, true>
TestEqual<Call<_ToBeBoolean, [1]>, false>

TestEqual<Call<_ToBeVoid, [void]>, true>
TestEqual<Call<_ToBeVoid, [undefined]>, false>
TestEqual<Call<_ToBeVoid, [null]>, false>

TestEqual<Call<_ToBeSymbol, [symbol()]>, true>
TestEqual<Call<_ToBeSymbol, [symbol("test")]>, true>
TestEqual<Call<_ToBeSymbol, ["symbol"]>, false>

TestEqual<Call<_ToBeNullable, [null]>, true>
TestEqual<Call<_ToBeNullable, [undefined]>, true>
TestEqual<Call<_ToBeNullable, [1]>, false>

type Callable = (...args: any[]) => any
TestEqual<Call<_ToBeCallableWith<[string, number]>, [Callable]>, true>
TestEqual<Call<_ToBeCallableWith<[string]>, [Callable]>, false>

class TestClass {
  constructor(name: string, age: number) {}
}
TestEqual<
  Call<_ToBeConstructibleWith<[string, number]>, [typeof TestClass]>,
  true
>
TestEqual<Call<_ToBeConstructibleWith<[string]>, [typeof TestClass]>, false>
