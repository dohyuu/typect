import { Expect, type Not, type To } from "./expect"

Expect<1, To.Equal<1>>
Expect<1, Not.ToEqual<2>>

class One {}
class Other {
  a: 1
}
const one = new One()
Expect<typeof one, To.BeInstanceOf<typeof One>>
Expect<typeof one, Not.ToBeInstanceOf<typeof Other>>
Expect<typeof one, Not.ToBeInstanceOf<typeof Other>>

Expect<1, To.BeDefined>
Expect<"", To.BeDefined>
Expect<0, To.BeDefined>
Expect<null, To.BeDefined>
Expect<undefined, Not.ToBeDefined>

Expect<undefined, To.BeUndefined>
Expect<null, Not.ToBeUndefined>

Expect<null, To.BeNull>
Expect<undefined, Not.ToBeNull>

Expect<null, To.BeFalsy>
Expect<undefined, To.BeFalsy>
Expect<0, To.BeFalsy>
Expect<"", To.BeFalsy>
Expect<"1", Not.ToBeFalsy>

Expect<true, To.BeTruthy>
Expect<1, To.BeTruthy>
Expect<[], To.BeTruthy>
Expect<{}, To.BeTruthy>

Expect<1, To.BeLessThan<2>>
Expect<1, Not.ToBeLessThan<1>>

Expect<1, To.BeLessThanOrEqual<1>>
Expect<1, To.BeLessThanOrEqual<2>>
Expect<1, Not.ToBeLessThanOrEqual<0>>

Expect<2, To.BeGreaterThan<1>>
Expect<2, Not.ToBeGreaterThan<2>>

Expect<2, To.BeGreaterThanOrEqual<1>>
Expect<2, To.BeGreaterThanOrEqual<2>>
Expect<1, Not.To.BeGreaterThanOrEqual<4>>

Expect<[1, 2, 3], To.HaveLength<3>>
Expect<[1, 2, 3], Not.ToHaveLength<4>>

Expect<{ a: 1 }, To.HaveProperty<"a">>
Expect<{ a: 1 }, Not.ToHaveProperty<"b">>

Expect<{ a: 1 }, To.Match<{ a: 1 }>>
Expect<{ a: 1 }, Not.ToMatch<{ b: 1 }>>

Expect<1, To.BeOneOf<[1, 2, 3]>>

Expect<{ a: 1 }, To.Match<{ a: 1 }>>
