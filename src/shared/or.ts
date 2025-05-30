export type Or<A extends boolean, B extends boolean> = A extends false ? B : A
