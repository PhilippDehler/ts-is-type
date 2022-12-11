import { ErrorMsg, NeedsSuggestions, SuggestionMsg } from "../utilityTypes";
export interface ArgDefinition<Type extends string = string> {
    key: string;
    type: Type;
}
export type ValidateArg<Arg extends string, ArgDef extends ArgDefinition> = Arg extends "" ? SuggestionMsg<`${Arg}[Expected Type:${ArgDef["type"] & string}]`> : NeedsSuggestions<Arg> extends true ? SuggestionMsg<`${Arg}[Expected Type:${ArgDef["type"] & string}]`> : Arg;
export type ValidateArgs<Args extends string, TArgDefinition extends ArgDefinition[]> = Args extends `${infer FirstArg},${infer Rest}` ? TArgDefinition extends [
    infer H extends ArgDefinition,
    ...infer Tail extends ArgDefinition[]
] ? `${ValidateArg<FirstArg, H>}${Rest extends "" ? Tail extends [] ? "" : "," : ","}${ValidateArgs<Rest, Tail>}` : ErrorMsg<`Didn't expect Arg ${FirstArg}`> : TArgDefinition extends [
    infer H extends ArgDefinition,
    ...infer Tail extends ArgDefinition[]
] ? `${ValidateArg<Args, H>}${Tail extends [] ? "" : ","}${ValidateArgs<"", Tail>}` : Args extends "" ? Args : ErrorMsg<`Didn't expect Arg ${Args}`>;
