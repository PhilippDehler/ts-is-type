import { Narrow } from "../utilityTypes";
import { TypeDefinitions } from "./typeSchemaBuilder";
export type OperationBuilder<InputType, T extends TypeDefinitions, TOperation extends {} = {}> = {
    operation: TOperation;
    addOperation: <Key extends string, TArgs extends {
        key: string;
        type: string;
    }[], TReturn extends keyof T>(definition: {
        key: Narrow<Key> & string;
        args: TArgs;
        returnType: Narrow<TReturn>;
        operation: (input: InputType, args: ExtractArgs<TArgs, T>) => ReturnType<T[TReturn]["parseValue"]>;
    }) => OperationBuilder<InputType, T, TOperation & {
        [K in Key]: typeof definition;
    }>;
    build: () => TOperation;
};
export declare function operationBuilder<Input, T extends TypeDefinitions, TOperation extends {} = {}>(operation: TOperation): OperationBuilder<Input, T, TOperation>;
type ExtractArgs<T, X extends Record<string, {
    isDefault: boolean;
    validator: (input: unknown) => boolean;
    parseValue: (value: string) => unknown;
}>> = T extends [infer Head extends {
    key: string;
    type: keyof X;
}, ...infer Tail] ? {
    [K in Head["key"]]: ReturnType<X[Head["type"]]["parseValue"]>;
} & ExtractArgs<Tail, X> : {};
export {};
