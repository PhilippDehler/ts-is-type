import { Schema } from "../schemaBuilder/extendableSchema";
import { TypeDefinitions } from "../schemaBuilder/typeSchemaBuilder";
export declare function parseOperationChain<Type extends string, TSchema extends Schema<{
    typeDefinition: TypeDefinitions;
}>>(input: string[], type: Type | null, schema: TSchema): ((input: any) => any)[];
