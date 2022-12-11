"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTemplateFn = void 0;
const parseTemplateValue_1 = require("./parseTemplateValue");
function createTemplateFn(template, schema) {
    if (typeof template !== "string")
        throw new Error("Template is not a string");
    const operationChain = deriveOperationChain(template, schema);
    //@ts-ignore ignores the unused parameters
    if (!operationChain)
        return (params) => template;
    return (params) => templateReplace(template, params, operationChain);
}
exports.createTemplateFn = createTemplateFn;
function deriveOperationChain(template, schema) {
    const matches = template.match(/{{.*?}}/g);
    const chains = matches?.map((m) => {
        const k = m.slice(2, -2);
        const { key, operationChain, isOptional } = (0, parseTemplateValue_1.parseTemplateValue)(k, schema);
        return {
            key,
            isOptional,
            chain: (replaceValue) => operationChain.reduce((v, chain) => chain(v), replaceValue),
        };
    }) ?? null;
    return chains;
}
function templateReplace(template, params, operationChain) {
    let i = 0;
    return template.replace(/{{.*?}}/g, () => {
        const { key, chain, isOptional } = operationChain[i++];
        const replaceValue = params[key];
        if (replaceValue !== undefined) {
            const result = chain(replaceValue);
            if (typeof result !== "string" && typeof result !== "number")
                return JSON.stringify(result);
            return result + "";
        }
        if (isOptional)
            return "";
        throw new Error("Key is missing in Translation:" + key);
    });
}
