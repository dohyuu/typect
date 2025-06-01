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
// examples/nestjs-prisma/src/app.module.ts
import { Expect, _ } from "typect"

Expect<1, To.BeDefined>
Expect<1, To.BeLessThan<2>>
Expect<[1, 2, 3], To.HaveLength<3>>
Expect<{ a: 1 }, To.HaveProperty<"a">>
Expect<{ a: 1 }, Not.ToMatch<{ b: 1 }>>
Expect<() => 1, Returns.ToEqual<1>>

const guard = (input: any) => input is { a: 1 };
Expect<typeof guard, Guards.ToEqual<{ a: 1 }>>

const promise = Promise.resolve(1 as const)
Expect<typeof promise, Resolves.ToEqual<1>>
```