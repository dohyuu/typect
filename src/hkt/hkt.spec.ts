import { TestEqual, TestNotEqual } from "../test"
import type {
  Arg0Of,
  Arg1Of,
  Arg2Of,
  ArgsOf,
  Params,
  PassArgs,
  TypeArgs,
  UnsafeArgsOf,
} from "./args"
import type { Call } from "./call"
import type { Compose } from "./compose"
import type { Lambda, SignatureOf } from "./lambda"

export interface TestFn extends Lambda<[number, string], unknown> {
  readonly return: `${Arg0Of<this>}${Arg1Of<this>}`
}

export interface Length extends Lambda<[s: string[]], number> {
  readonly return: Arg0Of<this>["length"]
}

export interface NumberToString extends Lambda<[s: number], string> {
  readonly return: `${Arg0Of<this>}`
}

type TestFnWithArgs = TestFn & {
  readonly args: (_: [1, "2"]) => void
}

TestEqual<PassArgs<TestFn, [1, "2"]>, TestFnWithArgs>
TestEqual<ArgsOf<TestFnWithArgs>, [1, "2"]>
TestEqual<Arg0Of<TestFnWithArgs>, 1>
TestEqual<Arg1Of<TestFnWithArgs>, "2">
TestEqual<Arg2Of<TestFnWithArgs>, undefined>
TestEqual<Params<SignatureOf<TestFnWithArgs>>, [number, string]>
TestEqual<Call<TestFnWithArgs, [1, "2"]>, "12">
TestEqual<UnsafeArgsOf<TestFnWithArgs>, [1, "2"]>
TestEqual<TypeArgs<[1, "2"], [number, string]>, [1, "2"]>

type Composed = Compose<NumberToString, Length>
type Sig = SignatureOf<Composed>
TestEqual<Params<Sig>, [string[]]>
TestEqual<ReturnType<Sig>, string>
TestEqual<Call<Composed, [["1", "2"]]>, "2">

TestNotEqual<[1, "2"], [number, string]>
TestNotEqual<[number, string], [1, "2"]>
TestNotEqual<[number, string], [1, "2"]>
