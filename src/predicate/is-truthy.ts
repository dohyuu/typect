export type IsTruthy<T> = 
  T extends true 
  ? true 
  : T extends false 
  ? false 
  : T extends 0 
  ? false 
  : T extends "" 
  ? false 
  : T extends null 
  ? false 
  : T extends undefined 
  ? false   
  : true
