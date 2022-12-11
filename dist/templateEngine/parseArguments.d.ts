import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
export declare function parseArguments<TSchema extends {
    typeDefinition: TypeDefinitions;
}>(operationTemplateString: string, argsDefinition: {
    key: string;
    type: keyof TSchema["typeDefinition"] & string;
}[], schema: TSchema): any;
