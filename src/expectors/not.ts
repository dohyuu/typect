import type { Arg0Of } from "../hkt/args"
import type { Lambda } from "../hkt/lambda"
import type { Not } from "../shared/not"

export interface _Not extends Lambda<[s: boolean], boolean> {
  readonly return: Not<Arg0Of<this>>
}
