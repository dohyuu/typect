import type { IsOneOf } from "./is-one-of";

export type Contains<H extends unknown[], N> = IsOneOf<N, H>;
