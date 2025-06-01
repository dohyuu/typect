import {
  type Asserts,
  type ConstructorParameters,
  Expect,
  type Guards,
  type Instance,
  type Items,
  type Not,
  type Parameters,
  type Resolves,
  type Returns,
  type To,
} from "./expect"

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

Expect<() => 1, Returns.ToEqual<1>>
Expect<() => 2, Returns.Not.ToEqual<1>>

Expect<(a: number, b: string) => 2, Parameters.ToEqual<[number, string]>>
Expect<(a: number, b: string) => 2, Parameters.Not.ToEqual<[1, string]>>

// biome-ignore format: ""
Expect<{new (a: number, b: string): 2}, ConstructorParameters.ToEqual<[number, string]>>
// biome-ignore format: ""
Expect<{new (a: number, b: string): 2}, ConstructorParameters.Not.ToEqual<[1, string]>>

Expect<typeof One, Instance.ToEqual<One>>
Expect<typeof One, Instance.Not.ToEqual<Other>>

const promise = Promise.resolve(1 as const)
Expect<typeof promise, Resolves.ToEqual<1>>
Expect<typeof promise, Resolves.Not.ToEqual<2>>

Expect<[1, "2", true], Items.ToEqual<1 | "2" | true>>
Expect<[1, "2", true], Items.Not.ToEqual<number | string | boolean>>

Expect<(input: any) => input is { a: 1 }, Guards.ToEqual<{ a: 1 }>>
Expect<(input: any) => input is { a: 1 }, Guards.Not.ToEqual<{ a: 2 }>>

Expect<(input: any) => asserts input is { a: 1 }, Asserts.ToEqual<{ a: 1 }>>
Expect<(input: any) => asserts input is { a: 1 }, Asserts.Not.ToEqual<{ a: 2 }>>
