"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTemplateValue = void 0;
const parseOperationChain_1 = require("./parseOperationChain");
function parseTemplateValue(k, schema) {
    const [def, ...operations] = k.split("|");
    const [key, type] = def?.split("#") ?? [null, null];
    if (!key)
        throw new Error("Invalid template value: " + k);
    const isOptional = key.startsWith("?");
    const templateKey = isOptional ? key.slice(1) : key;
    return {
        key: templateKey,
        isOptional,
        operationChain: (0, parseOperationChain_1.parseOperationChain)(operations, type ?? null, schema),
    };
}
exports.parseTemplateValue = parseTemplateValue;
