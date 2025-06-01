import type { Lambda } from "../hkt/lambda"
import { TestEqual } from "../test"
import type {
  ErrorText,
  KeepError,
  MergeError,
  MergeErrorWithKeepPrefix,
} from "./error"

TestEqual<ErrorText<"to equal", 1>, "to equal 1">
TestEqual<ErrorText<"to equal", { a: 1 }>, { "to equal": { a: 1 } }>

interface Fn extends Lambda<never, unknown> {
  readonly text: "to equal error"
}
TestEqual<KeepError<Fn>, "to equal error">

TestEqual<MergeError<"not", Fn>, "not to equal error">

interface Fn2 extends Lambda<never, unknown> {
  readonly text: "prefix to equal error"
}
TestEqual<MergeErrorWithKeepPrefix<"not", Fn2>, "prefix not to equal error">
