import type { Call } from "../hkt/call"
import { TestEqual, TestNotEqual } from "../test"
import type { _AssertOf } from "./assert-of"
import type { _Awaited } from "./awaited"
import type { _ConstructorParametersOf } from "./constructor-parameters-of"
import type { _GuardOf } from "./guard-of"
import type { _InstanceOf } from "./instance-of"
import type { _Items } from "./items"
import type { _ParameterOf } from "./parameter-of"
import type { _ParametersOf } from "./parameters-of"
import type { _ReturnOf } from "./return-of"

TestEqual<Call<_ParameterOf<0>, [(args: number) => void]>, number>()
TestEqual<
  Call<_ParameterOf<1>, [(arg1: number, arg2: string) => void]>,
  string
>()

TestEqual<
  Call<_ParametersOf, [(arg1: number, arg2: string) => void]>,
  [number, string]
>()

TestEqual<
  Call<_ReturnOf, [(arg1: number, arg2: string) => "foobar"]>,
  "foobar"
>()

class One {}
class Two {
  constructor(b: number) {
    this.a = 1
    this.b = b
  }
  a: 1
  b: number
}
TestEqual<Call<_InstanceOf, [typeof One]>, One>()
TestNotEqual<Call<_InstanceOf, [typeof One]>, Two>()

TestEqual<Call<_ConstructorParametersOf, [typeof One]>, []>()
TestEqual<Call<_ConstructorParametersOf, [typeof Two]>, [number]>()

TestEqual<Call<_Items, [[1, "2", true]]>, 1 | "2" | true>()
TestNotEqual<Call<_Items, [[1, "2", true]]>, number | string | boolean>()

const promiseAsConst = Promise.resolve(1 as const)
const promise = Promise.resolve(1)
TestEqual<Call<_Awaited, [typeof promiseAsConst]>, 1>()
TestEqual<Call<_Awaited, [typeof promise]>, number>()

TestEqual<Call<_GuardOf, [(x: any) => x is string]>, string>()
TestEqual<Call<_GuardOf, [(x: any) => x is "1"]>, "1">()

TestEqual<Call<_AssertOf, [(x: any) => asserts x is string]>, string>()
TestEqual<Call<_AssertOf, [(x: any) => asserts x is "1"]>, "1">()
