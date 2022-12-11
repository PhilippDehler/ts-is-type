import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
import { ExtractOperationInformations, ValidateTemplate } from "../templateStringValidator/templateValidator";
import { Narrow } from "../utilityTypes";
export declare function createTemplateFn<Template extends string, TSchema extends {
    typeDefinition: TypeDefinitions;
}>(template: Narrow<ValidateTemplate<Template, TSchema>>, schema: TSchema): (params: Params<Template, TSchema>) => string;
export type TemplateFn<TSchema extends {
    typeDefinition: TypeDefinitions;
}> = <Template extends string>(params: Narrow<ValidateTemplate<Template, TSchema>>) => ReturnType<typeof createTemplateFn<Template, TSchema>>;
type Params<Input extends string, TSchema extends {
    typeDefinition: TypeDefinitions;
}, P extends Record<string, any> = {}> = Input extends `${string}{{${infer TemplateKey}}}${infer Rest}` ? ExtractOperationInformations<TemplateKey, TSchema["typeDefinition"]["DEFAULT"]["key"]> extends {
    key: infer Key extends string;
    type: infer Type extends string;
} ? Params<Rest, TSchema, MergeParams<P, Key, Type, TSchema>> : Params<Rest, TSchema, P> : P;
type MergeParams<P extends Record<string, any>, Key extends string, Type extends string, TSchema extends {
    typeDefinition: TypeDefinitions;
}> = (Key extends `?${infer TemplateKey}` ? {
    [K in TemplateKey]?: ReturnType<TSchema["typeDefinition"][Type]["parseValue"]>;
} : {
    [K in Key]: ReturnType<TSchema["typeDefinition"][Type]["parseValue"]>;
}) & P;
export {};
