"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArguments = void 0;
function parseArguments(operationTemplateString, argsDefinition, schema) {
    const res = [];
    const args = getArgsFromOperationTemplate(operationTemplateString);
    if (args.length !== argsDefinition.length)
        throw new Error("Invalid number of arguments");
    const schemaTypes = schema["typeDefinition"];
    for (let i = 0; i < argsDefinition.length; i++) {
        const definition = argsDefinition[i];
        const argString = args[i];
        if (!argString)
            throw new Error("Missing argument: " + definition.key);
        const type = schemaTypes[definition.type];
        if (!type)
            throw new Error("Invalid type: " + definition.type);
        const parsedValue = type.parseValue(argString);
        if (!type.validator(parsedValue))
            throw new Error("Invalid value: " + argString + " for type: " + definition.type + "");
        res.push({
            key: definition.key,
            value: type.parseValue(argString),
        });
    }
    return res.reduce((agg, { key, value }) => ({ ...agg, [key]: value }), {});
}
exports.parseArguments = parseArguments;
function getArgsFromOperationTemplate(operationTemplateString) {
    const [_, argString] = operationTemplateString.split("(");
    const args = argString?.slice(0, argString.length - 1);
    if (!args)
        return [];
    return args.split(",");
}
