"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOperationChain = void 0;
const parseArguments_1 = require("./parseArguments");
const parseSchemaType_1 = require("./parseSchemaType");
function parseOperationChain(input, type, schema) {
    const schemaType = (0, parseSchemaType_1.parseSchemaType)(type, schema);
    const operationChain = [];
    for (let i = 0; i < input.length; i++) {
        const currentOperation = input[i];
        let [operationKey, _] = currentOperation.split("(");
        if (!operationKey)
            throw new Error("Invalid operation: " + currentOperation);
        const operationOnType = schema[schemaType];
        if (!operationOnType)
            throw new Error("Invalid type: " + schemaType);
        const operationChainItem = operationOnType[operationKey];
        if (!operationChainItem)
            throw new Error("Invalid operation: " + operationKey);
        const args = (0, parseArguments_1.parseArguments)(currentOperation, operationChainItem.args, schema);
        operationChain.push((input) => operationChainItem.operation(input, args));
    }
    return operationChain;
}
exports.parseOperationChain = parseOperationChain;
