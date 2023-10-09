import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class ReliabilityFunctionEntity extends AbstractBaseEntity {
    material: MaterialEntity;
    maxWaterResistanceLvl: number;
    relativeBlottingPressureAfterLoad_recommended: number;
    relativeBlottingPressureAfterLoad_experimental_1: number;
    relativeBlottingPressureAfterLoad_calculated: number;
    relativeBlottingPressureAfterLoad_base: number;
    relativeBlottingPressureAfterLoad_relativeValuation: number;
    relativeBlottingPressureAfterLoad_weight: number;
    relativeWaterResistanceAfterLoad_recommended: number;
    relativeWaterResistanceAfterLoad_experimental_1: number;
    relativeWaterResistanceAfterLoad_calculated: number;
    relativeWaterResistanceAfterLoad_base: number;
    relativeWaterResistanceAfterLoad_relativeValuation: number;
    relativeWaterResistanceAfterLoad_weight: number;
    relativeBlottingTimeAfterLoad_recommended: number;
    relativeBlottingTimeAfterLoad_experimental_1: number;
    relativeBlottingTimeAfterLoad_calculated: number;
    relativeBlottingTimeAfterLoad_base: number;
    relativeBlottingTimeAfterLoad_relativeValuation: number;
    relativeBlottingTimeAfterLoad_weight: number;
    waterproofRealizationCriteriaAfterLoad_recommended: number;
    waterproofRealizationCriteriaAfterLoad_experimental_1: number;
    waterproofRealizationCriteriaAfterLoad_experimental_2: number;
    waterproofRealizationCriteriaAfterLoad_calculated: number;
    waterproofRealizationCriteriaAfterLoad_base: number;
    waterproofRealizationCriteriaAfterLoad_relativeValuation: number;
    waterproofRealizationCriteriaAfterLoad_weight: number;
    waterproofFunctionResource_experimental_1: number;
    waterproofFunctionResource_experimental_2: number;
    waterproofFunctionResource_calculated: number;
    waterproofFunctionResource_base: number;
    waterproofFunctionResource_relativeValuation: number;
    waterproofFunctionResource_weight: number;
    impactCyclesCnt: number;
    comment: string;
    equipment: string;
    avgWeightedEstimate: number;
}
