import type { Class } from "../primitives/class"
import type { Equal } from "../shared/equal"

export type IsInstanceOf<A, B extends Class> = Equal<A, InstanceType<B>>
