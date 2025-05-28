import { Test } from "../test"
import type { Equal } from "./equal"
import type { Not } from "./not"

Test<Not<false>>

Test<
  Equal<true, true>,
  Equal<false, false>,
  Not<Equal<true, false>>,
  Not<Equal<false, true>>
>
