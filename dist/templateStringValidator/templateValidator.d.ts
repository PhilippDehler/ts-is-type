import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
import { ErrorMsg } from "../utilityTypes";
import { ValidateOperations } from "./operationValidator";
import { ValidateType } from "./typeValidator";
type ValidateKey<Key extends string> = Key extends "" ? ErrorMsg<"Expected non-empty-value"> : Key;
export type ValidateTemplate<Input extends string, TSchema extends {
    typeDefinition: TypeDefinitions;
}> = Input extends `${infer Start}{{${infer TemplateKey}}}${infer Rest}` ? `${Start}{{${ValidateTemplateValue<TemplateKey, TSchema>}}}${ValidateTemplate<Rest, TSchema>}` : Input;
export type ExtractOperationInformations<T extends string, DefaultType> = T extends `${infer Key}#${infer Type}|${infer Operations}` ? {
    key: Key;
    type: Type;
    operations: Operations;
    hasOperations: true;
    hasType: true;
} : T extends `${infer Key}#${infer Type}` ? {
    key: Key;
    type: Type;
    operations: "";
    hasOperations: false;
    hasType: true;
} : T extends `${infer Key}|${infer Operations}` ? {
    key: Key;
    type: DefaultType;
    operations: Operations;
    hasOperations: true;
    hasType: false;
} : {
    key: T;
    type: DefaultType;
    operations: "";
    hasOperations: false;
    hasType: false;
};
export type ValidateTemplateValue<T extends string, TSchema extends {
    typeDefinition: TypeDefinitions;
}> = ExtractOperationInformations<T, TSchema["typeDefinition"]["DEFAULT"]["key"]> extends {
    key: infer Key extends string;
    type: infer Type extends string;
    operations: infer Operations extends string;
    hasType: infer HasType;
    hasOperations: infer HasOperations;
} ? `${ValidateKey<Key>}${HasType extends true ? `#${ValidateType<Type, TSchema["typeDefinition"]>}` : ""}${HasOperations extends true ? `|${ValidateOperations<Operations, TSchema, ValidateType<Type, TSchema["typeDefinition"]>>}` : ""}` : never;
export {};
