import { AnyFn } from "./anyFn";

export type IsWidenedNumber<T> = IsNumber<T> extends true
  ? number extends T
    ? true
    : false
  : false;

export type IsInferredNumber<T> = IsNumber<T> extends true
  ? number extends T
    ? false
    : true
  : false;

export type IsNumber<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends number
  ? true
  : false;

export type IsWidenedString<T> = IsNeverOrAny<T> extends true
  ? false
  : string extends T
  ? [keyof T] extends [never]
    ? false
    : true
  : T extends string
  ? false
  : false;

export type IsInferredString<T> = IsString<T> extends true
  ? string extends T
    ? false
    : true
  : false;

export type IsString<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends string
  ? true
  : false;

export type IsWidenedBigInt<T> = IsNeverOrAny<T> extends true
  ? false
  : bigint extends T
  ? [keyof T] extends [never]
    ? false
    : true
  : T extends bigint
  ? false
  : false;

export type IsInferredBigInt<T> = IsBigInt<T> extends true
  ? bigint extends T
    ? false
    : true
  : false;

export type IsBigInt<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends bigint
  ? true
  : false;

export type IsWidenedBoolean<T> = IsNeverOrAny<T> extends true
  ? false
  : boolean extends T
  ? [keyof T] extends [never]
    ? false
    : true
  : T extends boolean
  ? false
  : false;

export type IsInferredBoolean<T> = IsBoolean<T> extends true
  ? boolean extends T
    ? false
    : true
  : false;

export type IsBoolean<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends boolean
  ? true
  : false;

export type IsTuple<T> = IsNeverOrAny<T> extends true
  ? false
  : "length" extends keyof T
  ? IsWidenedNumber<T["length"]> extends true
    ? false
    : true
  : false;

export type IsVoid<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends undefined
  ? false
  : T extends void
  ? true
  : false;

export type IsAny<T> = unknown extends T
  ? [keyof T] extends [never]
    ? false
    : true
  : false;

export type IsUnknown<T> = unknown extends T
  ? [keyof T] extends [never]
    ? true
    : false
  : false;

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsNeverOrAny<T> = IsNever<T> extends true
  ? true
  : IsAny<T> extends true
  ? true
  : false;

export type IsUndefinied<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends undefined
  ? true
  : false;

export type IsNull<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends null
  ? true
  : false;

export type IsRecord<T, K extends PropertyKey> = IsObject<T> extends true
  ? K extends keyof T
    ? true
    : false
  : false;

export type IsArray<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends any[]
  ? true
  : false;

export type IsArrayButTuple<T> = IsArray<T> extends true
  ? IsTuple<T> extends true
    ? false
    : true
  : false;

export type IsFunction<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends AnyFn
  ? true
  : false;

export type IsSymbol<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends symbol
  ? true
  : false;

export type IsObject<T> = IsNeverOrAny<T> extends true
  ? false
  : T extends object
  ? T extends Function
    ? false
    : T extends any[]
    ? false
    : true
  : false;

export type IsEmptyObject<T> = IsObject<T> extends true
  ? [keyof T] extends [never]
    ? true
    : false
  : false;
