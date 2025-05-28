import type { Equal } from "../../shared/equal"
import { Test } from "../../test"
import type { CompareEqualLengthDigits, CompareSign } from "./compare"

Test<
  Equal<CompareSign<"", "-">, 1>,
  Equal<CompareSign<"-", "">, -1>,
  Equal<CompareSign<"", "">, 0>
>

Test<
  Equal<CompareEqualLengthDigits<[1, 2, 3], [1, 2, 3]>, 0>,
  Equal<CompareEqualLengthDigits<[3, 2, 3], [1, 2, 4]>, 1>,
  Equal<CompareEqualLengthDigits<[1, 2, 3], [4, 2, 3]>, -1>
>
