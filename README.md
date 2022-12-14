# ts-is-type

Sometimes you want to make sure that your variable is a specific type, like `unknown | never | any` or you want to check if itβs a template string e.g.`"Hello Wold"` or just the `string`-type.
This library provides some helpertypes to check for a specifc type but nothing else.

Here is a table of the provided helper functions and what they are extending

| x                 | `number` | `0` | `boolean` | `true` | `false` | `string` | `"Hello World"` | `bigint` | `100n` | `never` | `unknown` | `any` | `symbol` | `(...args:any[])=>any` | `null` | `undefined` | `{ a : string}` | `Record<string,any>` | `{}` | `any[]` | `[]` | `["a"]` | `void` |
| ----------------- | -------- | --- | --------- | ------ | ------- | -------- | --------------- | -------- | ------ | ------- | --------- | ----- | -------- | ---------------------- | ------ | ----------- | --------------- | -------------------- | ---- | ------- | ---- | ------- | ------ |
| IsNumber          | β        | β   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | π      |
| IsWidenedNumber   | β        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsInferredNumber  | π        | β   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsBoolean         | π        | π   | β         | β      | β       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsWidenedBoolean  | π        | π   | β         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsInfferedBoolean | π        | π   | π         | β      | β       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsString          | π        | π   | π         | π      | π       | β        | β               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsWidenedString   | π        | π   | π         | π      | π       | β        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsInfferedString  | π        | π   | π         | π      | π       | π        | β               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsBigInt          | π        | π   | π         | π      | π       | π        | π               | β        | β      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsWidenedBigInt   | π        | π   | π         | π      | π       | π        | π               | β        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsInfferedBigInt  | π        | π   | π         | π      | π       | π        | π               | π        | β      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsNever           | π        | π   | π         | π      | π       | π        | π               | π        | π      | β       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsUnknown         | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | β         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsAny             | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | β     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsSymbol          | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | β        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsFunction        | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | β                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsNull            | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | β      | π           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsUndefined       | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | β           | π               | π                    | π    | π       | π    | π       | Β  π    |
| IsObject          | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | β               | β                    | β    | π       | π    | π       | Β  π    |
| IsRecord          | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | β                    | π    | π       | π    | π       | Β  π    |
| IsEmptyObject     | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | β    | π       | π    | π       | Β  π    |
| IsArray           | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | β       | β    | β       | Β  π    |
| IsTuple           | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | β    | β       | Β  π    |
| IsWidenedArray    | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | β       | π    | π       | Β  π    |
| IsVoid            | π        | π   | π         | π      | π       | π        | π               | π        | π      | π       | π         | π     | π        | π                      | π      | π           | π               | π                    | π    | π       | π    | π       | Β  β    |

## Examples

### Number

```typescript
type AnyFn = (...args: any[]) => any;

type TestIsNumber0 = IsNumber<{ a: number }>; // false
type TestIsNumber1 = IsNumber<Record<string, any>>; // false
type TestIsNumber2 = IsNumber<any>; // false
type TestIsNumber3 = IsNumber<never>; // false
type TestIsNumber4 = IsNumber<unknown>; // false
type TestIsNumber5 = IsNumber<[]>; // false
type TestIsNumber6 = IsNumber<undefined>; // false
type TestIsNumber7 = IsNumber<AnyFn>; // false
type TestIsNumber8 = IsNumber<null>; // false
type TestIsNumber9 = IsNumber<void>; // false
type TestIsNumber10 = IsNumber<["a", "b"]>; // false
type TestIsNumber11 = IsNumber<"a"[]>; // false
type TestIsNumber12 = IsNumber<boolean>; // false
type TestIsNumber13 = IsNumber<true>; // false
type TestIsNumber14 = IsNumber<false>; // false
type TestIsNumber15 = IsNumber<bigint>; // false
type TestIsNumber16 = IsNumber<100n>; // false
type TestIsNumber17 = IsNumber<"sda">; // false
type TestIsNumber18 = IsNumber<string>; // false
type TestIsNumber19 = IsNumber<number>; // true
type TestIsNumber20 = IsNumber<0>; // true
type TestIsNumber21 = IsInferredNumber<{}>; // false

type TestIsWidenedNumber0 = IsWidenedNumber<{ a: number }>; // false
type TestIsWidenedNumber1 = IsWidenedNumber<Record<string, any>>; // false
type TestIsWidenedNumber2 = IsWidenedNumber<any>; // false
type TestIsWidenedNumber3 = IsWidenedNumber<never>; // false
type TestIsWidenedNumber4 = IsWidenedNumber<unknown>; // false
type TestIsWidenedNumber5 = IsWidenedNumber<[]>; // false
type TestIsWidenedNumber6 = IsWidenedNumber<undefined>; // false
type TestIsWidenedNumber7 = IsWidenedNumber<AnyFn>; // false
type TestIsWidenedNumber8 = IsWidenedNumber<null>; // false
type TestIsWidenedNumber9 = IsWidenedNumber<void>; // false
type TestIsWidenedNumber10 = IsWidenedNumber<["a", "b"]>; // false
type TestIsWidenedNumber11 = IsWidenedNumber<"a"[]>; // false
type TestIsWidenedNumber12 = IsWidenedNumber<boolean>; // false
type TestIsWidenedNumber13 = IsWidenedNumber<true>; // false
type TestIsWidenedNumber14 = IsWidenedNumber<false>; // false
type TestIsWidenedNumber15 = IsWidenedNumber<bigint>; // false
type TestIsWidenedNumber16 = IsWidenedNumber<100n>; // false
type TestIsWidenedNumber17 = IsWidenedNumber<"sda">; // false
type TestIsWidenedNumber18 = IsWidenedNumber<string>; // false
type TestIsWidenedNumber19 = IsWidenedNumber<number>; // true
type TestIsWidenedNumber20 = IsWidenedNumber<0>; // false
type TestIsWidenedNumber21 = IsWidenedNumber<{}>; // false

type TestIsInferredNumber0 = IsInferredNumber<{ a: number }>; // false
type TestIsInferredNumber1 = IsInferredNumber<Record<string, any>>; // false
type TestIsInferredNumber2 = IsInferredNumber<any>; // false
type TestIsInferredNumber3 = IsInferredNumber<never>; // false
type TestIsInferredNumber4 = IsInferredNumber<unknown>; // false
type TestIsInferredNumber5 = IsInferredNumber<[]>; // false
type TestIsInferredNumber6 = IsInferredNumber<undefined>; // false
type TestIsInferredNumber7 = IsInferredNumber<AnyFn>; // false
type TestIsInferredNumber8 = IsInferredNumber<null>; // false
type TestIsInferredNumber9 = IsInferredNumber<void>; // false
type TestIsInferredNumber10 = IsInferredNumber<["a", "b"]>; // false
type TestIsInferredNumber11 = IsInferredNumber<"a"[]>; // false
type TestIsInferredNumber12 = IsInferredNumber<boolean>; // false
type TestIsInferredNumber13 = IsInferredNumber<true>; // false
type TestIsInferredNumber14 = IsInferredNumber<false>; // false
type TestIsInferredNumber15 = IsInferredNumber<bigint>; // false
type TestIsInferredNumber16 = IsInferredNumber<100n>; // false
type TestIsInferredNumber17 = IsInferredNumber<"sda">; // false
type TestIsInferredNumber18 = IsInferredNumber<string>; // false
type TestIsInferredNumber19 = IsInferredNumber<number>; // false
type TestIsInferredNumber20 = IsInferredNumber<0>; // true
type TestIsInferredNumber21 = IsInferredNumber<{}>; // false
```

### String

```typescript
type TestIsString0 = IsString<{ a: number }>; // false
type TestIsString1 = IsString<Record<string, any>>; // false
type TestIsString2 = IsString<any>; // false
type TestIsString3 = IsString<never>; // false
type TestIsString4 = IsString<unknown>; // false
type TestIsString5 = IsString<[]>; // false
type TestIsString6 = IsString<undefined>; // false
type TestIsString7 = IsString<AnyFn>; // false
type TestIsString8 = IsString<null>; // false
type TestIsString9 = IsString<void>; // false
type TestIsString10 = IsString<["a", "b"]>; // false
type TestIsString11 = IsString<"a"[]>; // false
type TestIsString12 = IsString<boolean>; // false
type TestIsString13 = IsString<true>; // false
type TestIsString14 = IsString<false>; // false
type TestIsString15 = IsString<bigint>; // false
type TestIsString16 = IsString<100n>; // false
type TestIsString17 = IsString<"sda">; // true
type TestIsString18 = IsString<string>; // true
type TestIsString19 = IsString<number>; // false
type TestIsString20 = IsString<0>; // false
type TestIsString21 = IsInferredString<{}>; // false

type TestIsWidenedString0 = IsWidenedString<{ a: number }>; // false
type TestIsWidenedString1 = IsWidenedString<Record<string, any>>; // false
type TestIsWidenedString2 = IsWidenedString<any>; // false
type TestIsWidenedString3 = IsWidenedString<never>; // false
type TestIsWidenedString4 = IsWidenedString<unknown>; // false
type TestIsWidenedString5 = IsWidenedString<[]>; // false
type TestIsWidenedString6 = IsWidenedString<undefined>; // false
type TestIsWidenedString7 = IsWidenedString<AnyFn>; // false
type TestIsWidenedString8 = IsWidenedString<null>; // false
type TestIsWidenedString9 = IsWidenedString<void>; // false
type TestIsWidenedString10 = IsWidenedString<["a", "b"]>; // false
type TestIsWidenedString11 = IsWidenedString<"a"[]>; // false
type TestIsWidenedString12 = IsWidenedString<boolean>; // false
type TestIsWidenedString13 = IsWidenedString<true>; // false
type TestIsWidenedString14 = IsWidenedString<false>; // false
type TestIsWidenedString15 = IsWidenedString<bigint>; // false
type TestIsWidenedString16 = IsWidenedString<100n>; // false
type TestIsWidenedString17 = IsWidenedString<"sda">; // false
type TestIsWidenedString18 = IsWidenedString<string>; // true
type TestIsWidenedString19 = IsWidenedString<number>; // false
type TestIsWidenedString20 = IsWidenedString<0>; // false
type TestIsWidenedString21 = IsWidenedString<{}>; // false

type TestIsInferredString0 = IsInferredString<{ a: number }>; // false
type TestIsInferredString1 = IsInferredString<Record<string, any>>; // false
type TestIsInferredString2 = IsInferredString<any>; // false
type TestIsInferredString3 = IsInferredString<never>; // false
type TestIsInferredString4 = IsInferredString<unknown>; // false
type TestIsInferredString5 = IsInferredString<[]>; // false
type TestIsInferredString6 = IsInferredString<undefined>; // false
type TestIsInferredString7 = IsInferredString<AnyFn>; // false
type TestIsInferredString8 = IsInferredString<null>; // false
type TestIsInferredString9 = IsInferredString<void>; // false
type TestIsInferredString10 = IsInferredString<["a", "b"]>; // false
type TestIsInferredString11 = IsInferredString<"a"[]>; // false
type TestIsInferredString12 = IsInferredString<boolean>; // false
type TestIsInferredString13 = IsInferredString<true>; // false
type TestIsInferredString14 = IsInferredString<false>; // false
type TestIsInferredString15 = IsInferredString<bigint>; // false
type TestIsInferredString16 = IsInferredString<100n>; // false
type TestIsInferredString17 = IsInferredString<"sda">; // true
type TestIsInferredString18 = IsInferredString<string>; // false
type TestIsInferredString19 = IsInferredString<number>; // false
type TestIsInferredString20 = IsInferredString<0>; // false
type TestIsInferredString21 = IsInferredString<{}>; // false
```

### BigInt

```typescript
type TestIsBigInt0 = IsBigInt<{ a: number }>; // false
type TestIsBigInt1 = IsBigInt<Record<string, any>>; // false
type TestIsBigInt2 = IsBigInt<any>; // false
type TestIsBigInt3 = IsBigInt<never>; // false
type TestIsBigInt4 = IsBigInt<unknown>; // false
type TestIsBigInt5 = IsBigInt<[]>; // false
type TestIsBigInt6 = IsBigInt<undefined>; // false
type TestIsBigInt7 = IsBigInt<AnyFn>; // false
type TestIsBigInt8 = IsBigInt<null>; // false
type TestIsBigInt9 = IsBigInt<void>; // false
type TestIsBigInt10 = IsBigInt<["a", "b"]>; // false
type TestIsBigInt11 = IsBigInt<"a"[]>; // false
type TestIsBigInt12 = IsBigInt<boolean>; // false
type TestIsBigInt13 = IsBigInt<true>; // false
type TestIsBigInt14 = IsBigInt<false>; // false
type TestIsBigInt15 = IsBigInt<bigint>; // true
type TestIsBigInt16 = IsBigInt<100n>; // true
type TestIsBigInt17 = IsBigInt<"sda">; // false
type TestIsBigInt18 = IsBigInt<string>; // false
type TestIsBigInt19 = IsBigInt<number>; // false
type TestIsBigInt20 = IsBigInt<0>; // false
type TestIsBigInt21 = IsInferredBigInt<{}>; // false

type TestIsWidenedBigInt0 = IsWidenedBigInt<{ a: number }>; // false
type TestIsWidenedBigInt1 = IsWidenedBigInt<Record<string, any>>; // false
type TestIsWidenedBigInt2 = IsWidenedBigInt<any>; // false
type TestIsWidenedBigInt3 = IsWidenedBigInt<never>; // false
type TestIsWidenedBigInt4 = IsWidenedBigInt<unknown>; // false
type TestIsWidenedBigInt5 = IsWidenedBigInt<[]>; // false
type TestIsWidenedBigInt6 = IsWidenedBigInt<undefined>; // false
type TestIsWidenedBigInt7 = IsWidenedBigInt<AnyFn>; // false
type TestIsWidenedBigInt8 = IsWidenedBigInt<null>; // false
type TestIsWidenedBigInt9 = IsWidenedBigInt<void>; // false
type TestIsWidenedBigInt10 = IsWidenedBigInt<["a", "b"]>; // false
type TestIsWidenedBigInt11 = IsWidenedBigInt<"a"[]>; // false
type TestIsWidenedBigInt12 = IsWidenedBigInt<boolean>; // false
type TestIsWidenedBigInt13 = IsWidenedBigInt<true>; // false
type TestIsWidenedBigInt14 = IsWidenedBigInt<false>; // false
type TestIsWidenedBigInt15 = IsWidenedBigInt<bigint>; // true
type TestIsWidenedBigInt16 = IsWidenedBigInt<100n>; // false
type TestIsWidenedBigInt17 = IsWidenedBigInt<"sda">; // false
type TestIsWidenedBigInt18 = IsWidenedBigInt<string>; // false
type TestIsWidenedBigInt19 = IsWidenedBigInt<number>; // false
type TestIsWidenedBigInt20 = IsWidenedBigInt<0>; // false
type TestIsWidenedBigInt21 = IsWidenedBigInt<{}>; // false

type TestIsInferredBigInt0 = IsInferredBigInt<{ a: number }>; // false
type TestIsInferredBigInt1 = IsInferredBigInt<Record<string, any>>; // false
type TestIsInferredBigInt2 = IsInferredBigInt<any>; // false
type TestIsInferredBigInt3 = IsInferredBigInt<never>; // false
type TestIsInferredBigInt4 = IsInferredBigInt<unknown>; // false
type TestIsInferredBigInt5 = IsInferredBigInt<[]>; // false
type TestIsInferredBigInt6 = IsInferredBigInt<undefined>; // false
type TestIsInferredBigInt7 = IsInferredBigInt<AnyFn>; // false
type TestIsInferredBigInt8 = IsInferredBigInt<null>; // false
type TestIsInferredBigInt9 = IsInferredBigInt<void>; // false
type TestIsInferredBigInt10 = IsInferredBigInt<["a", "b"]>; // false
type TestIsInferredBigInt11 = IsInferredBigInt<"a"[]>; // false
type TestIsInferredBigInt12 = IsInferredBigInt<boolean>; // false
type TestIsInferredBigInt13 = IsInferredBigInt<true>; // false
type TestIsInferredBigInt14 = IsInferredBigInt<false>; // false
type TestIsInferredBigInt15 = IsInferredBigInt<bigint>; // false
type TestIsInferredBigInt16 = IsInferredBigInt<100n>; // true
type TestIsInferredBigInt17 = IsInferredBigInt<"sda">; // false
type TestIsInferredBigInt18 = IsInferredBigInt<string>; // false
type TestIsInferredBigInt19 = IsInferredBigInt<number>; // false
type TestIsInferredBigInt20 = IsInferredBigInt<0>; // false
type TestIsInferredBigInt21 = IsInferredBigInt<{}>; // false
```

### Boolean

```typescript
type TestIsBoolean0 = IsBoolean<{ a: number }>; // false
type TestIsBoolean1 = IsBoolean<Record<string, any>>; // false
type TestIsBoolean2 = IsBoolean<any>; // false
type TestIsBoolean3 = IsBoolean<never>; // false
type TestIsBoolean4 = IsBoolean<unknown>; // false
type TestIsBoolean5 = IsBoolean<[]>; // false
type TestIsBoolean6 = IsBoolean<undefined>; // false
type TestIsBoolean7 = IsBoolean<AnyFn>; // false
type TestIsBoolean8 = IsBoolean<null>; // false
type TestIsBoolean9 = IsBoolean<void>; // false
type TestIsBoolean10 = IsBoolean<["a", "b"]>; // false
type TestIsBoolean11 = IsBoolean<"a"[]>; // true
type TestIsBoolean12 = IsBoolean<boolean>; // true
type TestIsBoolean13 = IsBoolean<true>; // true
type TestIsBoolean14 = IsBoolean<false>; // false
type TestIsBoolean15 = IsBoolean<bigint>; // false
type TestIsBoolean16 = IsBoolean<100n>; // false
type TestIsBoolean17 = IsBoolean<"sda">; // false
type TestIsBoolean18 = IsBoolean<string>; // false
type TestIsBoolean19 = IsBoolean<number>; // false
type TestIsBoolean20 = IsBoolean<0>; // false
type TestIsBoolean21 = IsInferredBoolean<{}>; // false

type TestIsWidenedBoolean0 = IsWidenedBoolean<{ a: number }>; // false
type TestIsWidenedBoolean1 = IsWidenedBoolean<Record<string, any>>; // false
type TestIsWidenedBoolean2 = IsWidenedBoolean<any>; // false
type TestIsWidenedBoolean3 = IsWidenedBoolean<never>; // false
type TestIsWidenedBoolean4 = IsWidenedBoolean<unknown>; // false
type TestIsWidenedBoolean5 = IsWidenedBoolean<[]>; // false
type TestIsWidenedBoolean6 = IsWidenedBoolean<undefined>; // false
type TestIsWidenedBoolean7 = IsWidenedBoolean<AnyFn>; // false
type TestIsWidenedBoolean8 = IsWidenedBoolean<null>; // false
type TestIsWidenedBoolean9 = IsWidenedBoolean<void>; // false
type TestIsWidenedBoolean10 = IsWidenedBoolean<["a", "b"]>; // false
type TestIsWidenedBoolean11 = IsWidenedBoolean<"a"[]>; // false
type TestIsWidenedBoolean12 = IsWidenedBoolean<boolean>; // true
type TestIsWidenedBoolean13 = IsWidenedBoolean<true>; // false
type TestIsWidenedBoolean14 = IsWidenedBoolean<false>; // false
type TestIsWidenedBoolean15 = IsWidenedBoolean<bigint>; // false
type TestIsWidenedBoolean16 = IsWidenedBoolean<100n>; // false
type TestIsWidenedBoolean17 = IsWidenedBoolean<"sda">; // false
type TestIsWidenedBoolean18 = IsWidenedBoolean<string>; // false
type TestIsWidenedBoolean19 = IsWidenedBoolean<number>; // false
type TestIsWidenedBoolean20 = IsWidenedBoolean<0>; // false
type TestIsWidenedBoolean21 = IsWidenedBoolean<{}>; // false

type TestIsInferredBoolean0 = IsInferredBoolean<{ a: number }>; // false
type TestIsInferredBoolean1 = IsInferredBoolean<Record<string, any>>; // false
type TestIsInferredBoolean2 = IsInferredBoolean<any>; // false
type TestIsInferredBoolean3 = IsInferredBoolean<never>; // false
type TestIsInferredBoolean4 = IsInferredBoolean<unknown>; // false
type TestIsInferredBoolean5 = IsInferredBoolean<[]>; // false
type TestIsInferredBoolean6 = IsInferredBoolean<undefined>; // false
type TestIsInferredBoolean7 = IsInferredBoolean<AnyFn>; // false
type TestIsInferredBoolean8 = IsInferredBoolean<null>; // false
type TestIsInferredBoolean9 = IsInferredBoolean<void>; // false
type TestIsInferredBoolean10 = IsInferredBoolean<["a", "b"]>; // false
type TestIsInferredBoolean11 = IsInferredBoolean<"a"[]>; // false
type TestIsInferredBoolean12 = IsInferredBoolean<boolean>; // false
type TestIsInferredBoolean13 = IsInferredBoolean<true>; // true
type TestIsInferredBoolean14 = IsInferredBoolean<false>; // true
type TestIsInferredBoolean15 = IsInferredBoolean<bigint>; // false
type TestIsInferredBoolean16 = IsInferredBoolean<100n>; // false
type TestIsInferredBoolean17 = IsInferredBoolean<"sda">; // false
type TestIsInferredBoolean18 = IsInferredBoolean<string>; // false
type TestIsInferredBoolean19 = IsInferredBoolean<number>; // false
type TestIsInferredBoolean20 = IsInferredBoolean<0>; // false
type TestIsInferredBoolean21 = IsInferredBoolean<{}>; // false
```

### Array

```typescript
type TestIsArray = IsArray<{ a: number }>; // false
type TestIsArray1 = IsArray<Record<string, any>>; // false
type TestIsArray2 = IsArray<any>; // false
type TestIsArray3 = IsArray<never>; // false
type TestIsArray4 = IsArray<unknown>; // false
type TestIsArray5 = IsArray<[]>; // true
type TestIsArray6 = IsArray<undefined>; // false
type TestIsArray7 = IsArray<AnyFn>; // false
type TestIsArray8 = IsArray<null>; // false
type TestIsArray9 = IsArray<void>; // false
type TestIsArray10 = IsArray<["a", "b"]>; // true
type TestIsArray11 = IsArray<"a"[]>; // true
type TestIsArray12 = IsArray<boolean>; // false
type TestIsArray13 = IsArray<true>; // false
type TestIsArray14 = IsArray<false>; // false
type TestIsArray15 = IsArray<bigint>; // false
type TestIsArray16 = IsArray<100n>; // false
type TestIsArray17 = IsArray<"sda">; // false
type TestIsArray18 = IsArray<string>; // false
type TestIsArray19 = IsArray<number>; // false
type TestIsArray20 = IsArray<0>; // false
type TestIsArray21 = IsArray<{}>; // false

type TestIsWidenedArray = IsWidenedArray<{ a: number }>; // false
type TestIsWidenedArray1 = IsWidenedArray<Record<string, any>>; // false
type TestIsWidenedArray2 = IsWidenedArray<any>; // false
type TestIsWidenedArray3 = IsWidenedArray<never>; // false
type TestIsWidenedArray4 = IsWidenedArray<unknown>; // false
type TestIsWidenedArray5 = IsWidenedArray<[]>; // false
type TestIsWidenedArray6 = IsWidenedArray<undefined>; // false
type TestIsWidenedArray7 = IsWidenedArray<AnyFn>; // false
type TestIsWidenedArray8 = IsWidenedArray<null>; // false
type TestIsWidenedArray9 = IsWidenedArray<void>; // false
type TestIsWidenedArray10 = IsWidenedArray<["a", "b"]>; // false
type TestIsWidenedArray11 = IsWidenedArray<"a"[]>; // true
type TestIsWidenedArray12 = IsWidenedArray<boolean>; // false
type TestIsWidenedArray13 = IsWidenedArray<true>; // false
type TestIsWidenedArray14 = IsWidenedArray<false>; // false
type TestIsWidenedArray15 = IsWidenedArray<bigint>; // false
type TestIsWidenedArray16 = IsWidenedArray<100n>; // false
type TestIsWidenedArray17 = IsWidenedArray<"sda">; // false
type TestIsWidenedArray18 = IsWidenedArray<string>; // false
type TestIsWidenedArray19 = IsWidenedArray<number>; // false
type TestIsWidenedArray20 = IsWidenedArray<0>; // false
type TestIsWidenedArray21 = IsWidenedArray<{}>; // false

type TestIsTuple0 = IsTuple<{ a: number }>; // false
type TestIsTuple1 = IsTuple<Record<string, any>>; // false
type TestIsTuple2 = IsTuple<any>; // false
type TestIsTuple3 = IsTuple<never>; // false
type TestIsTuple4 = IsTuple<unknown>; // false
type TestIsTuple5 = IsTuple<[]>; // true
type TestIsTuple6 = IsTuple<undefined>; // false
type TestIsTuple7 = IsTuple<AnyFn>; // false
type TestIsTuple8 = IsTuple<null>; // false
type TestIsTuple9 = IsTuple<void>; // false
type TestIsTuple10 = IsTuple<["a", "b"]>; // true
type TestIsTuple11 = IsTuple<"a"[]>; // false
type TestIsTuple12 = IsTuple<boolean>; // false
type TestIsTuple13 = IsTuple<true>; // false
type TestIsTuple14 = IsTuple<false>; // false
type TestIsTuple15 = IsTuple<bigint>; // false
type TestIsTuple16 = IsTuple<100n>; // false
type TestIsTuple17 = IsTuple<"sda">; // false
type TestIsTuple18 = IsTuple<string>; // false
type TestIsTuple19 = IsTuple<number>; // false
type TestIsTuple20 = IsTuple<0>; // false
type TestIsTuple21 = IsTuple<{}>; // false
```

### Object

Note: IsRecord will return true, if every key in the object matches exaclty the second argument,
e.g: `IsRecord<{ a:string },"a"> -> true; IsRecord<{a:string},string>->false; IsRecord<Record<string,string>,string>->true`,

```typescript
type TestIsRecord = IsRecord<{ a: number }, string>; // false
type TestIsRecord1 = IsRecord<Record<string, any>, string>; // true
type TestIsRecord2 = IsRecord<any, string>; // false
type TestIsRecord3 = IsRecord<never, string>; // false
type TestIsRecord4 = IsRecord<unknown, string>; // false
type TestIsRecord5 = IsRecord<[], number>; // false
type TestIsRecord6 = IsRecord<undefined, string>; // false
type TestIsRecord7 = IsRecord<AnyFn, string>; // false
type TestIsRecord8 = IsRecord<null, string>; // false
type TestIsRecord9 = IsRecord<void, string>; // false
type TestIsRecord10 = IsRecord<["a", "b"], string>; // false
type TestIsRecord11 = IsRecord<"a"[], string>; // false
type TestIsRecord12 = IsRecord<boolean, string>; // false
type TestIsRecord13 = IsRecord<true, string>; // false
type TestIsRecord14 = IsRecord<false, string>; // false
type TestIsRecord15 = IsRecord<bigint, string>; // false
type TestIsRecord16 = IsRecord<100n, string>; // false
type TestIsRecord17 = IsRecord<"sda", string>; // false
type TestIsRecord18 = IsRecord<string, string>; // false
type TestIsRecord19 = IsRecord<number, string>; // false
type TestIsRecord20 = IsRecord<0, string>; // false
type TestIsRecord21 = IsRecord<{}, string>; // false

type TestIsEmptyObject = IsEmptyObject<{ a: number }>; // false
type TestIsEmptyObject1 = IsEmptyObject<Record<string, any>>; // false
type TestIsEmptyObject2 = IsEmptyObject<any>; // false
type TestIsEmptyObject3 = IsEmptyObject<never>; // false
type TestIsEmptyObject4 = IsEmptyObject<unknown>; // false
type TestIsEmptyObject5 = IsEmptyObject<[]>; // false
type TestIsEmptyObject6 = IsEmptyObject<undefined>; // false
type TestIsEmptyObject7 = IsEmptyObject<AnyFn>; // false
type TestIsEmptyObject8 = IsEmptyObject<null>; // false
type TestIsEmptyObject9 = IsEmptyObject<void>; // false
type TestIsEmptyObject10 = IsEmptyObject<["a", "b"]>; // false
type TestIsEmptyObject11 = IsEmptyObject<"a"[]>; // false
type TestIsEmptyObject12 = IsEmptyObject<boolean>; // false
type TestIsEmptyObject13 = IsEmptyObject<true>; // false
type TestIsEmptyObject14 = IsEmptyObject<false>; // false
type TestIsEmptyObject15 = IsEmptyObject<bigint>; // false
type TestIsEmptyObject16 = IsEmptyObject<100n>; // false
type TestIsEmptyObject17 = IsEmptyObject<"sda">; // false
type TestIsEmptyObject18 = IsEmptyObject<string>; // false
type TestIsEmptyObject19 = IsEmptyObject<number>; // false
type TestIsEmptyObject20 = IsEmptyObject<0>; // false
type TestIsEmptyObject21 = IsEmptyObject<{}>; // true
type TestIsEmptyObject22 = IsEmptyObject<symbol>; // false

type TestIsObject = IsObject<{ a: number }>; // true
type TestIsObject1 = IsObject<Record<string, any>>; // true
type TestIsObject2 = IsObject<any>; // false
type TestIsObject3 = IsObject<never>; // false
type TestIsObject4 = IsObject<unknown>; // false
type TestIsObject5 = IsObject<[]>; // false
type TestIsObject6 = IsObject<undefined>; // false
type TestIsObject7 = IsObject<AnyFn>; // false
type TestIsObject8 = IsObject<null>; // false
type TestIsObject9 = IsObject<void>; // false
type TestIsObject10 = IsObject<["a", "b"]>; // false
type TestIsObject11 = IsObject<"a"[]>; // false
type TestIsObject12 = IsObject<boolean>; // false
type TestIsObject13 = IsObject<true>; // false
type TestIsObject14 = IsObject<false>; // false
type TestIsObject15 = IsObject<bigint>; // false
type TestIsObject16 = IsObject<100n>; // false
type TestIsObject17 = IsObject<"sda">; // false
type TestIsObject18 = IsObject<string>; // false
type TestIsObject19 = IsObject<number>; // false
type TestIsObject20 = IsObject<0>; // false
type TestIsObject21 = IsObject<{}>; // true
type TestIsObject22 = IsObject<symbol>; // false
```

### Function

```typescript
type TestIsFunction = IsFunction<{ a: number }>; // false
type TestIsFunction1 = IsFunction<Record<string, any>>; // false
type TestIsFunction2 = IsFunction<any>; // false
type TestIsFunction3 = IsFunction<never>; // false
type TestIsFunction4 = IsFunction<unknown>; // false
type TestIsFunction5 = IsFunction<[]>; // false
type TestIsFunction6 = IsFunction<undefined>; // false
type TestIsFunction7 = IsFunction<AnyFn>; // true
type TestIsFunction8 = IsFunction<null>; // false
type TestIsFunction9 = IsFunction<void>; // false
type TestIsFunction10 = IsFunction<["a", "b"]>; // false
type TestIsFunction11 = IsFunction<"a"[]>; // false
type TestIsFunction12 = IsFunction<boolean>; // false
type TestIsFunction13 = IsFunction<true>; // false
type TestIsFunction14 = IsFunction<false>; // false
type TestIsFunction15 = IsFunction<bigint>; // false
type TestIsFunction16 = IsFunction<100n>; // false
type TestIsFunction17 = IsFunction<"sda">; // false
type TestIsFunction18 = IsFunction<string>; // false
type TestIsFunction19 = IsFunction<number>; // false
type TestIsFunction20 = IsFunction<0>; // false
type TestIsFunction21 = IsFunction<{}>; // false
```

### Void, undefinied, null, never, any unknown

```typescript
type TestIsVoid0 = IsVoid<{ a: number }>; // false
type TestIsVoid1 = IsVoid<Record<string, any>>; // false
type TestIsVoid2 = IsVoid<any>; // false
type TestIsVoid3 = IsVoid<never>; // false
type TestIsVoid4 = IsVoid<unknown>; // false
type TestIsVoid5 = IsVoid<[]>; // false
type TestIsVoid6 = IsVoid<undefined>; // false
type TestIsVoid7 = IsVoid<AnyFn>; // false
type TestIsVoid8 = IsVoid<null>; // false
type TestIsVoid9 = IsVoid<void>; // true
type TestIsVoid10 = IsVoid<["a", "b"]>; // false
type TestIsVoid11 = IsVoid<"a"[]>; // false
type TestIsVoid12 = IsVoid<boolean>; // false
type TestIsVoid13 = IsVoid<true>; // false
type TestIsVoid14 = IsVoid<false>; // false
type TestIsVoid15 = IsVoid<bigint>; // false
type TestIsVoid16 = IsVoid<100n>; // false
type TestIsVoid17 = IsVoid<"sda">; // false
type TestIsVoid18 = IsVoid<string>; // false
type TestIsVoid19 = IsVoid<number>; // false
type TestIsVoid20 = IsVoid<0>; // false
type TestIsVoid21 = IsVoid<{}>; // false

type TestIsAny0 = IsAny<{ a: number }>; // false
type TestIsAny1 = IsAny<Record<string, any>>; // false
type TestIsAny2 = IsAny<any>; // true
type TestIsAny3 = IsAny<never>; // false
type TestIsAny4 = IsAny<unknown>; // false
type TestIsAny5 = IsAny<[]>; // false
type TestIsAny6 = IsAny<undefined>; // false
type TestIsAny7 = IsAny<AnyFn>; // false
type TestIsAny8 = IsAny<null>; // false
type TestIsAny9 = IsAny<void>; // false
type TestIsAny10 = IsAny<["a", "b"]>; // false
type TestIsAny11 = IsAny<"a"[]>; // false
type TestIsAny12 = IsAny<boolean>; // false
type TestIsAny13 = IsAny<true>; // false
type TestIsAny14 = IsAny<false>; // false
type TestIsAny15 = IsAny<bigint>; // false
type TestIsAny16 = IsAny<100n>; // false
type TestIsAny17 = IsAny<"sda">; // false
type TestIsAny18 = IsAny<string>; // false
type TestIsAny19 = IsAny<number>; // false
type TestIsAny20 = IsAny<0>; // false
type TestIsAny21 = IsAny<{}>; // false

type TestIsUnknown0 = IsUnknown<{ a: number }>; // false
type TestIsUnknown1 = IsUnknown<Record<string, any>>; // false
type TestIsUnknown2 = IsUnknown<any>; // false
type TestIsUnknown3 = IsUnknown<never>; // false
type TestIsUnknown4 = IsUnknown<unknown>; // true
type TestIsUnknown5 = IsUnknown<[]>; // false
type TestIsUnknown6 = IsUnknown<undefined>; // false
type TestIsUnknown7 = IsUnknown<AnyFn>; // false
type TestIsUnknown8 = IsUnknown<null>; // false
type TestIsUnknown9 = IsUnknown<void>; // false

type TestIsNever0 = IsNever<{ a: number }>; // false
type TestIsNever1 = IsNever<Record<string, any>>; // false
type TestIsNever2 = IsNever<any>; // false
type TestIsNever3 = IsNever<never>; // true
type TestIsNever4 = IsNever<unknown>; // false
type TestIsNever5 = IsNever<[]>; // false
type TestIsNever6 = IsNever<undefined>; // false
type TestIsNever7 = IsNever<AnyFn>; // false
type TestIsNever8 = IsNever<null>; // false
type TestIsNever9 = IsNever<void>; // false
type TestIsNever10 = IsNever<["a", "b"]>; // false
type TestIsNever11 = IsNever<"a"[]>; // false
type TestIsNever12 = IsNever<boolean>; // false
type TestIsNever13 = IsNever<true>; // false
type TestIsNever14 = IsNever<false>; // false
type TestIsNever15 = IsNever<bigint>; // false
type TestIsNever16 = IsNever<100n>; // false
type TestIsNever17 = IsNever<"sda">; // false
type TestIsNever18 = IsNever<string>; // false
type TestIsNever19 = IsNever<number>; // false
type TestIsNever20 = IsNever<0>; // false
type TestIsNever21 = IsNever<{}>; // false

type TestIsNeverOrAny0 = IsNeverOrAny<{ a: number }>; // false
type TestIsNeverOrAny1 = IsNeverOrAny<Record<string, any>>; // false
type TestIsNeverOrAny2 = IsNeverOrAny<any>; // true
type TestIsNeverOrAny3 = IsNeverOrAny<never>; // true
type TestIsNeverOrAny4 = IsNeverOrAny<unknown>; // false
type TestIsNeverOrAny5 = IsNeverOrAny<[]>; // false
type TestIsNeverOrAny6 = IsNeverOrAny<undefined>; // false
type TestIsNeverOrAny7 = IsNeverOrAny<AnyFn>; // false
type TestIsNeverOrAny8 = IsNeverOrAny<null>; // false
type TestIsNeverOrAny9 = IsNeverOrAny<void>; // false
type TestIsNeverOrAny10 = IsNeverOrAny<["a", "b"]>; // false
type TestIsNeverOrAny11 = IsNeverOrAny<"a"[]>; // false
type TestIsNeverOrAny12 = IsNeverOrAny<boolean>; // false
type TestIsNeverOrAny13 = IsNeverOrAny<true>; // false
type TestIsNeverOrAny14 = IsNeverOrAny<false>; // false
type TestIsNeverOrAny15 = IsNeverOrAny<bigint>; // false
type TestIsNeverOrAny16 = IsNeverOrAny<100n>; // false
type TestIsNeverOrAny17 = IsNeverOrAny<"sda">; // false
type TestIsNeverOrAny18 = IsNeverOrAny<string>; // false
type TestIsNeverOrAny19 = IsNeverOrAny<number>; // false
type TestIsNeverOrAny20 = IsNeverOrAny<0>; // false
type TestIsNeverOrAny21 = IsNeverOrAny<{}>; // false

type TestIsUndefinied0 = IsUndefinied<{ a: number }>; // false
type TestIsUndefinied1 = IsUndefinied<Record<string, any>>; // false
type TestIsUndefinied2 = IsUndefinied<any>; // false
type TestIsUndefinied3 = IsUndefinied<never>; // false
type TestIsUndefinied4 = IsUndefinied<unknown>; // false
type TestIsUndefinied5 = IsUndefinied<[]>; // false
type TestIsUndefinied6 = IsUndefinied<undefined>; // true
type TestIsUndefinied7 = IsUndefinied<AnyFn>; // false
type TestIsUndefinied8 = IsUndefinied<null>; // false
type TestIsUndefinied9 = IsUndefinied<void>; // false
type TestIsUndefinied10 = IsUndefinied<["a", "b"]>; // false
type TestIsUndefinied11 = IsUndefinied<"a"[]>; // false
type TestIsUndefinied12 = IsUndefinied<boolean>; // false
type TestIsUndefinied13 = IsUndefinied<true>; // false
type TestIsUndefinied14 = IsUndefinied<false>; // false
type TestIsUndefinied15 = IsUndefinied<bigint>; // false
type TestIsUndefinied16 = IsUndefinied<100n>; // false
type TestIsUndefinied17 = IsUndefinied<"sda">; // false
type TestIsUndefinied18 = IsUndefinied<string>; // false
type TestIsUndefinied19 = IsUndefinied<number>; // false
type TestIsUndefinied20 = IsUndefinied<0>; // false
type TestIsUndefinied21 = IsUndefinied<{}>; // false

type TestIsNull0 = IsNull<{ a: number }>; // false
type TestIsNull1 = IsNull<Record<string, any>>; // false
type TestIsNull2 = IsNull<any>; // false
type TestIsNull3 = IsNull<never>; // false
type TestIsNull4 = IsNull<unknown>; // false
type TestIsNull5 = IsNull<[]>; // false
type TestIsNull6 = IsNull<undefined>; // false
type TestIsNull7 = IsNull<AnyFn>; // false
type TestIsNull8 = IsNull<null>; // true
type TestIsNull9 = IsNull<void>; // false
type TestIsNull10 = IsNull<["a", "b"]>; // false
type TestIsNull11 = IsNull<"a"[]>; // false
type TestIsNull12 = IsNull<boolean>; // false
type TestIsNull13 = IsNull<true>; // false
type TestIsNull14 = IsNull<false>; // false
type TestIsNull15 = IsNull<bigint>; // false
type TestIsNull16 = IsNull<100n>; // false
type TestIsNull17 = IsNull<"sda">; // false
type TestIsNull18 = IsNull<string>; // false
type TestIsNull19 = IsNull<number>; // false
type TestIsNull20 = IsNull<0>; // false
type TestIsNull21 = IsNull<{}>; // false

type TestIsSymbol = IsSymbol<{ a: number }>; // false
type TestIsSymbol1 = IsSymbol<Record<string, any>>; // false
type TestIsSymbol2 = IsSymbol<any>; // false
type TestIsSymbol3 = IsSymbol<never>; // false
type TestIsSymbol4 = IsSymbol<unknown>; // false
type TestIsSymbol5 = IsSymbol<[]>; // false
type TestIsSymbol6 = IsSymbol<undefined>; // false
type TestIsSymbol7 = IsSymbol<AnyFn>; // false
type TestIsSymbol8 = IsSymbol<null>; // false
type TestIsSymbol9 = IsSymbol<void>; // false
type TestIsSymbol10 = IsSymbol<["a", "b"]>; // false
type TestIsSymbol11 = IsSymbol<"a"[]>; // false
type TestIsSymbol12 = IsSymbol<boolean>; // false
type TestIsSymbol13 = IsSymbol<true>; // false
type TestIsSymbol14 = IsSymbol<false>; // false
type TestIsSymbol15 = IsSymbol<bigint>; // false
type TestIsSymbol16 = IsSymbol<100n>; // false
type TestIsSymbol17 = IsSymbol<"sda">; // false
type TestIsSymbol18 = IsSymbol<string>; // false
type TestIsSymbol19 = IsSymbol<number>; // false
type TestIsSymbol20 = IsSymbol<0>; // false
type TestIsSymbol21 = IsSymbol<{}>; // false
type TestIsSymbol22 = IsSymbol<symbol>; // true
```
