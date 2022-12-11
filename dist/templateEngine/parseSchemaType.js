"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSchemaType = void 0;
function parseSchemaType(type, schema) {
    if (type && schema.typeDefinition[type])
        return type;
    if (!schema.typeDefinition.DEFAULT)
        throw new Error("No default type defined");
    return schema.typeDefinition.DEFAULT.key;
}
exports.parseSchemaType = parseSchemaType;
