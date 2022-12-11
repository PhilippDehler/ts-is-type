"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateBuilder = void 0;
const createTemplateFn_1 = require("../templateEngine/createTemplateFn");
const operationBuilder_1 = require("./operationBuilder");
function templateBuilder(input, operation) {
    const self = {
        operation,
        add: (key, operationDefinitions) => {
            const builder = (0, operationBuilder_1.operationBuilder)({});
            return templateBuilder(input, {
                ...self.operation,
                [key]: {
                    ...operationDefinitions(builder).build(),
                    ...(self.operation[key] ?? {}),
                },
            });
        },
        build() {
            const defaultType = Object.values(input).find((v) => v.isDefault);
            if (!defaultType)
                throw new Error("No default type defined");
            const schema = {
                typeDefinition: {
                    ...input,
                    DEFAULT: defaultType,
                },
                ...self.operation,
            };
            const templateFn = (template) => (0, createTemplateFn_1.createTemplateFn)(template, schema);
            return {
                templateFn,
                schema,
            };
        },
    };
    return self;
}
exports.templateBuilder = templateBuilder;
