import { ArgDefinition, ValidateArgs } from "./argsValidator";
import { ErrorMsg, HasPartialMatch, NeedsSuggestions, SuggestionMsg } from "../utilityTypes";
import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
type FirstAndRest<T extends string, TSplit extends string> = T extends `${infer First}${TSplit}${infer Rest}` ? {
    first: First;
    rest: Rest;
} : {
    first: T;
    rest: "";
};
type Types<TSchema extends {
    typeDefinition: TypeDefinitions;
}> = keyof TSchema["typeDefinition"] & string;
type TypeDefault<TSchema extends {
    typeDefinition: TypeDefinitions;
}> = TSchema["typeDefinition"]["DEFAULT"]["key"];
type OperationReturnType<TSchema extends {
    typeDefinition: TypeDefinitions;
}, Type, Operation> = Type extends keyof TSchema ? Operation extends keyof TSchema[Type] ? "returnType" extends keyof TSchema[Type][Operation] ? TSchema[Type][Operation]["returnType"] extends Types<TSchema> ? TSchema[Type][Operation]["returnType"] : TypeDefault<TSchema> : TypeDefault<TSchema> : TypeDefault<TSchema> : TypeDefault<TSchema>;
export type ValidateOperationKey<Key extends string, TOperationLookUp extends OperationLookUp> = NeedsSuggestions<Key> extends true ? SuggestionMsg<keyof TOperationLookUp & string> : HasPartialMatch<Key, keyof TOperationLookUp & string> extends true ? SuggestionMsg<keyof TOperationLookUp & string & `${Key}${string}`> : ErrorMsg<`Didn't expect Operation Key |${Key}|.`>;
interface ExtendableOperationDefinition {
    key: string;
    args: ArgDefinition[];
    operation: (input: any, t: any) => any;
}
type OperationKeyAndArgs<T extends string> = T extends `${infer Operation}(${infer Args})` ? {
    operation: Operation;
    args: Args;
    hasArgs: true;
} : T extends `${infer Operation}(${infer Args}` ? {
    operation: Operation;
    args: Args;
    hasArgs: true;
} : {
    operation: T;
    args: "";
    hasArgs: false;
};
export type ValidateOperation<Operation extends string, TOperationLookUp extends OperationLookUp> = OperationKeyAndArgs<Operation> extends {
    operation: infer Key extends string;
    args: infer Args extends string;
    hasArgs: infer HasArgs extends boolean;
} ? `${ValidateOperationKey<Key, TOperationLookUp>}${HasArgs extends false ? "" : "("}${ValidateArgs<Args, TOperationLookUp[Key]["args"]>}${HasArgs extends false ? "" : ")"}` : never;
type OperationLookUp = Record<string, ExtendableOperationDefinition>;
export type ValidateOperations<Operation extends string, TSchema extends {
    typeDefinition: TypeDefinitions;
}, InitalType> = InitalType extends keyof TSchema ? FirstAndRest<Operation, "|"> extends {
    first: infer FirstOperation extends string;
    rest: infer Rest extends string;
} ? TSchema[InitalType] extends OperationLookUp ? `${ValidateOperation<FirstOperation, TSchema[InitalType]>}${Rest extends "" ? "" : "|"}${Rest extends "" ? "" : ValidateOperations<Rest, TSchema, OperationReturnType<TSchema, InitalType, ValidateOperation<FirstOperation, TSchema[InitalType]>>>}` : InitalType : never : InitalType;
export {};
