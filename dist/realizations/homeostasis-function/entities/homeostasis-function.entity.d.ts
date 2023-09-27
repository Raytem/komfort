import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class HomeostasisFunctionEntity extends AbstractBaseEntity {
    material: MaterialEntity;
    m1s: number;
    m2s: number;
    s0_1: number;
    t_1: number;
    waterPermeability_calculated: number;
    waterPermeability_relativeValuation: number;
    waterPermeability_base: number;
    waterPermeability_weight: number;
    m1min: number;
    m2min: number;
    m1max: number;
    m2max: number;
    s0_2: number;
    t_2: number;
    waterPermeabilityDynamicCriteria_calculated: number;
    waterPermeabilityDynamicCriteria_relativeValuation: number;
    waterPermeabilityDynamicCriteria_base: number;
    waterPermeabilityDynamicCriteria_weight: number;
    t0s: number;
    s: number;
    m: number;
    totalThermalResistance: number;
    totalThermalResistance_сalculated: number;
    totalThermalResistance_base: number;
    totalThermalResistance_relativeValuation: number;
    totalThermalResistance_weight: number;
    minPressureDiff: number;
    maxPressureDiff: number;
    estimatedPressureDiff: number;
    avgRangePressureVal: number;
    comfTempInsideClothes: number;
    comfHumidityInsideClothes: number;
    minOutdoorTemp: number;
    maxOusideTemp: number;
    minOutdoorHumidity: number;
    maxOutdoorHumidity: number;
    avgOutdoorAirSpeed: number;
    equipment: string;
    comment: string;
    avgWeightedEstimate: number;
}
