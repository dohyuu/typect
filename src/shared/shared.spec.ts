import { Test } from "../test"
import type { Equal } from "./equal"
import type { Not } from "./not"
import type { Or } from "./or"

Test<Not<false>>

Test<
  Equal<true, true>,
  Equal<false, false>,
  Not<Equal<true, false>>,
  Not<Equal<false, true>>
>

// biome-ignore format: ""
Test<
  Or<true, false>,
  Or<false, true>,
  Or<true, true>,
  Not<Or<false, false>>
>
