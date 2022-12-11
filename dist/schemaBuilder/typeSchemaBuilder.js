"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeSchemaBuilder = void 0;
function typeSchemaBuilder(types) {
    return {
        types,
        addType: (key, typeDefinition) => {
            return typeSchemaBuilder(Object.assign(types, {
                [key]: { ...typeDefinition, key },
            }));
        },
        build() {
            return types;
        },
    };
}
exports.typeSchemaBuilder = typeSchemaBuilder;
