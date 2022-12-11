import { Schema } from "../schemaBuilder/extendableSchema";
import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
export declare function parseSchemaType<Type extends string, TSchema extends Schema<{
    typeDefinition: TypeDefinitions;
}>>(type: Type | null, schema: TSchema): keyof TSchema["typeDefinition"] & string;
