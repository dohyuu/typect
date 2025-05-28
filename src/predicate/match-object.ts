import type { Extends } from "./extends";

export type MatchObject<H extends object, N extends object> = Extends<H, N>
