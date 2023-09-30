"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateReliabilityFunctionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reliability_function_entity_1 = require("../entities/reliability-function.entity");
class CalculateReliabilityFunctionDto extends (0, swagger_1.OmitType)(reliability_function_entity_1.ReliabilityFunctionEntity, ['id', 'material', 'comment', 'avgWeightedEstimate']) {
}
exports.CalculateReliabilityFunctionDto = CalculateReliabilityFunctionDto;
//# sourceMappingURL=calculate-reliability-function.dto.js.map