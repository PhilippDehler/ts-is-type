"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infer = exports.typeSchemaBuilder = exports.templateBuilder = void 0;
var templateBuilder_1 = require("./schemaBuilder/templateBuilder");
Object.defineProperty(exports, "templateBuilder", { enumerable: true, get: function () { return templateBuilder_1.templateBuilder; } });
var typeSchemaBuilder_1 = require("./schemaBuilder/typeSchemaBuilder");
Object.defineProperty(exports, "typeSchemaBuilder", { enumerable: true, get: function () { return typeSchemaBuilder_1.typeSchemaBuilder; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "infer", { enumerable: true, get: function () { return utils_1.infer; } });
