import { TestEqual } from "../test"
import type {
  Arg0Of,
  Arg1Of,
  Arg2Of,
  ArgsOf,
  Params,
  PassArgs,
  SigOf,
} from "./args"
import type { Call } from "./call"
import type { Lambda } from "./lambda"

export interface TestFn extends Lambda<[number, string], unknown> {
  readonly return: `${Arg0Of<this>}${Arg1Of<this>}`
}

TestEqual<
  PassArgs<TestFn, [1, "2"]>,
  TestFn & {
    readonly Args: (_: [1, "2"]) => void
  }
>
TestEqual<ArgsOf<TestFn>, [number, string]>
TestEqual<Arg2Of<TestFn>, undefined>
TestEqual<Params<SigOf<TestFn>>, [number, string]>
TestEqual<Call<TestFn, [1, "2"]>, "12">
