import { HasPartialMatch, NeedsSuggestions, SuggestionMsg } from "../utilityTypes";
export type ValidateType<Type extends string, TypeLookUp extends Record<string, {
    parseValue: (value: string) => unknown;
    isDefault: boolean;
}>> = NeedsSuggestions<Type> extends true ? SuggestionMsg<keyof TypeLookUp & string> : HasPartialMatch<Type, keyof TypeLookUp & string> extends true ? SuggestionMsg<keyof TypeLookUp & string & `${Type}${string}`> : SuggestionMsg<keyof TypeLookUp & string>;
