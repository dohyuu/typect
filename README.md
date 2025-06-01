# Typect

> Documentation is currently being written.  
  The API may change during development as it is still actively being developed.

**Typect** is `Type-Level Testing Framework` based HKT (Higher Kinded Type).  
I believe the TypeScript compiler is the best test runner. (Just kidding) 

## Getting Started

```bash
pnpm add typect
```

```typescript
import { Expect, _ } from "typect"

Expect<1, _.ToBeDefined>
Expect<1, _.ToBeLessThan<2>>
Expect<[1, 2, 3], _.ToHaveLength<3>>
Expect<{ a: 1 }, _.ToHaveProperty<"a">>
Expect<{ a: 1 }, _.Not.ToMatch<{ b: 1 }>>
Expect<() => 1, _.Returns.ToEqual<1>>

const guard = (input: any) => input is { a: 1 };
Expect<typeof guard, _.Guards.ToEqual<{ a: 1 }>>

const promise = Promise.resolve(1 as const)
Expect<typeof promise, _.Resolves.ToEqual<1>>
```