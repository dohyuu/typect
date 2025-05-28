import type { Equal } from "../../shared/equal"
import type { Not } from "../../shared/not"
import { Test } from "../../test"
import type { CompareLength } from "./compare"

Test<
  Equal<CompareLength<[1, 2, 3], [1, 2, 3]>, 0>,
  Not<Equal<CompareLength<[1, 2, 3], [1, 2, 3, 4]>, 0>>,
  Not<Equal<CompareLength<[1, 2, 3, 4], [1, 2, 3]>, 0>>
>
