import { Schema } from "../schemaBuilder/extendableSchema";
import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
export declare function parseTemplateValue<TSchema extends Schema<{
    typeDefinition: TypeDefinitions;
}>>(k: string, schema: TSchema): {
    key: string;
    isOptional: boolean;
    operationChain: ((input: any) => any)[];
};
