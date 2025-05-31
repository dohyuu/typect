export interface Lambda<in Params extends unknown[] = any, out Return = any> {
  readonly sig: (...args: Params) => Return
}

export interface LambdaArg1<in A0 = any, out R = any> extends Lambda<[A0], R> {}

export type SignatureOf<F extends Lambda<never, unknown>> = F["sig"]
