export interface Lambda<in Params extends unknown[] = any, out Return = any> {
  readonly sig: (...args: Params) => Return
}
