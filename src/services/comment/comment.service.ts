import { Injectable } from '@nestjs/common';
import { FunctionalityLevel } from 'src/enums/functionality-level';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';

@Injectable()
export class CommentService {
  getWaterproofFunctionComment(
    calculatedWaterproofFunction: Omit<
      WaterproofFunctionEntity,
      'id' | 'comment'
    >,
  ): string {
    const cwf = calculatedWaterproofFunction;

    let materialBlottingPressure_lvl = FunctionalityLevel.UNDEFINED;

    let waterproof_lvl = FunctionalityLevel.UNDEFINED;

    let materialBlottingTime_lvl = FunctionalityLevel.UNDEFINED;

    let waterproofRealizationCriteria_lvl = FunctionalityLevel.UNDEFINED;

    let dynamicWaterproofCriteria_lvl = FunctionalityLevel.UNDEFINED;

    //-----

    if (
      cwf.materialBlottingPressure_recommended >= 3 &&
      cwf.materialBlottingPressure_recommended <= 8
    ) {
      materialBlottingPressure_lvl = FunctionalityLevel.MIN;
    } else if (
      cwf.materialBlottingPressure_recommended > 8 &&
      cwf.materialBlottingPressure_recommended <= 50
    ) {
      materialBlottingPressure_lvl = FunctionalityLevel.LOW;
    } else if (
      cwf.materialBlottingPressure_recommended > 50 &&
      cwf.materialBlottingPressure_recommended <= 98
    ) {
      materialBlottingPressure_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      cwf.materialBlottingPressure_recommended > 98 &&
      cwf.materialBlottingPressure_recommended <= 200
    ) {
      materialBlottingPressure_lvl = FunctionalityLevel.HIGH;
    } else if (cwf.materialBlottingPressure_recommended > 200) {
      materialBlottingPressure_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    if (cwf.waterproof_recommended >= 3 && cwf.waterproof_recommended <= 8) {
      waterproof_lvl = FunctionalityLevel.MIN;
    } else if (
      cwf.waterproof_recommended > 8 &&
      cwf.waterproof_recommended <= 50
    ) {
      waterproof_lvl = FunctionalityLevel.LOW;
    } else if (
      cwf.waterproof_recommended > 50 &&
      cwf.waterproof_recommended <= 98
    ) {
      waterproof_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      cwf.waterproof_recommended > 98 &&
      cwf.waterproof_recommended <= 200
    ) {
      waterproof_lvl = FunctionalityLevel.HIGH;
    } else if (cwf.waterproof_recommended > 200) {
      waterproof_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    if (
      cwf.materialBlottingTime_recommended >= 5 &&
      cwf.materialBlottingTime_recommended <= 10
    ) {
      materialBlottingTime_lvl = FunctionalityLevel.MIN;
    } else if (
      cwf.materialBlottingTime_recommended > 10 &&
      cwf.materialBlottingTime_recommended <= 30
    ) {
      materialBlottingTime_lvl = FunctionalityLevel.LOW;
    } else if (
      cwf.materialBlottingTime_recommended > 30 &&
      cwf.materialBlottingTime_recommended <= 60
    ) {
      materialBlottingTime_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      cwf.materialBlottingTime_recommended > 60 &&
      cwf.materialBlottingTime_recommended <= 480
    ) {
      materialBlottingTime_lvl = FunctionalityLevel.HIGH;
    } else if (cwf.materialBlottingTime_recommended > 480) {
      materialBlottingTime_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    if (
      cwf.waterproofRealizationCriteria_recommended >= 0.3 &&
      cwf.waterproofRealizationCriteria_recommended <= 0.37
    ) {
      waterproofRealizationCriteria_lvl = FunctionalityLevel.MIN;
    } else if (
      cwf.waterproofRealizationCriteria_recommended > 0.37 &&
      cwf.waterproofRealizationCriteria_recommended <= 0.62
    ) {
      waterproofRealizationCriteria_lvl = FunctionalityLevel.LOW;
    } else if (
      cwf.waterproofRealizationCriteria_recommended > 0.62 &&
      cwf.waterproofRealizationCriteria_recommended <= 0.8
    ) {
      waterproofRealizationCriteria_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      cwf.waterproofRealizationCriteria_recommended > 0.8 &&
      cwf.waterproofRealizationCriteria_recommended <= 0.9
    ) {
      waterproofRealizationCriteria_lvl = FunctionalityLevel.HIGH;
    } else if (
      cwf.waterproofRealizationCriteria_recommended > 0.9 &&
      cwf.waterproofRealizationCriteria_recommended <= 1
    ) {
      waterproofRealizationCriteria_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    if (
      cwf.dynamicWaterproofCriteria_recommended >= 0.3 &&
      cwf.dynamicWaterproofCriteria_recommended <= 0.37
    ) {
      dynamicWaterproofCriteria_lvl = FunctionalityLevel.MIN;
    } else if (
      cwf.dynamicWaterproofCriteria_recommended > 0.37 &&
      cwf.dynamicWaterproofCriteria_recommended <= 0.62
    ) {
      dynamicWaterproofCriteria_lvl = FunctionalityLevel.LOW;
    } else if (
      cwf.dynamicWaterproofCriteria_recommended > 0.62 &&
      cwf.dynamicWaterproofCriteria_recommended <= 0.8
    ) {
      dynamicWaterproofCriteria_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      cwf.dynamicWaterproofCriteria_recommended > 0.8 &&
      cwf.dynamicWaterproofCriteria_recommended <= 0.9
    ) {
      dynamicWaterproofCriteria_lvl = FunctionalityLevel.HIGH;
    } else if (
      cwf.dynamicWaterproofCriteria_recommended > 0.9 &&
      cwf.dynamicWaterproofCriteria_recommended <= 1
    ) {
      dynamicWaterproofCriteria_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    //-----

    const materialBlottingPressure_comment =
      cwf.materialBlottingPressure_recommended
        ? `- по показателю Рп ${materialBlottingPressure_lvl} уровень водозащиты\n`
        : '';

    const waterproof_comment = cwf.waterproof_recommended
      ? `- по показателю В ${waterproof_lvl} уровень водозащиты\n`
      : '';

    const materialBlottingTime_comment = cwf.materialBlottingTime_recommended
      ? `- по показателю tп ${materialBlottingTime_lvl} уровень водозащиты\n`
      : '';

    const waterproofRealizationCriteria_comment =
      cwf.waterproofRealizationCriteria_recommended
        ? `- по показателю Кв ${waterproofRealizationCriteria_lvl} уровень водозащиты\n`
        : '';

    const dynamicWaterproofCriteria_comment =
      cwf.dynamicWaterproofCriteria_recommended
        ? `- по показателю Квд ${dynamicWaterproofCriteria_lvl} уровень водозащиты\n`
        : '';

    const resComment =
      materialBlottingPressure_comment +
      waterproof_comment +
      materialBlottingTime_comment +
      waterproofRealizationCriteria_comment +
      dynamicWaterproofCriteria_comment;

    return resComment;
  }

  getHomeostasisFunctionComment(
    calculatedHomeostasisFunction: Omit<
      HomeostasisFunctionEntity,
      'id' | 'comment'
    >,
  ): string {
    const chf = calculatedHomeostasisFunction;

    let waterPermeability_lvl = FunctionalityLevel.UNDEFINED;

    let waterPermeabilityDynamicCriteria_lvl = FunctionalityLevel.UNDEFINED;

    let totalThermalResistance_lvl = FunctionalityLevel.UNDEFINED;

    if (
      chf.waterPermeability_recommended >= 600 &&
      chf.waterPermeability_recommended <= 3000
    ) {
      waterPermeability_lvl = FunctionalityLevel.MIN;
    } else if (
      chf.waterPermeability_recommended > 3000 &&
      chf.waterPermeability_recommended <= 6000
    ) {
      waterPermeability_lvl = FunctionalityLevel.LOW;
    } else if (
      chf.waterPermeability_recommended > 6000 &&
      chf.waterPermeability_recommended <= 12000
    ) {
      waterPermeability_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      chf.waterPermeability_recommended > 12000 &&
      chf.waterPermeability_recommended <= 20000
    ) {
      waterPermeability_lvl = FunctionalityLevel.HIGH;
    } else if (
      chf.waterPermeability_recommended > 20000 &&
      chf.waterPermeability_recommended <= 26000
    ) {
      waterPermeability_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    if (
      chf.waterPermeabilityDynamicCriteria_recommended >= 0 &&
      chf.waterPermeabilityDynamicCriteria_recommended <= 1
    ) {
      waterPermeabilityDynamicCriteria_lvl = FunctionalityLevel.MIN;
    } else if (
      chf.waterPermeabilityDynamicCriteria_recommended > 1 &&
      chf.waterPermeabilityDynamicCriteria_recommended <= 2.1
    ) {
      waterPermeabilityDynamicCriteria_lvl = FunctionalityLevel.LOW;
    } else if (
      chf.waterPermeabilityDynamicCriteria_recommended > 2.1 &&
      chf.waterPermeabilityDynamicCriteria_recommended <= 5.5
    ) {
      waterPermeabilityDynamicCriteria_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      chf.waterPermeabilityDynamicCriteria_recommended > 5.5 &&
      chf.waterPermeabilityDynamicCriteria_recommended <= 8.9
    ) {
      waterPermeabilityDynamicCriteria_lvl = FunctionalityLevel.HIGH;
    } else if (
      chf.waterPermeabilityDynamicCriteria_recommended > 8.9 &&
      chf.waterPermeabilityDynamicCriteria_recommended <= 15
    ) {
      waterPermeabilityDynamicCriteria_lvl = FunctionalityLevel.EXTRA_HIGH;
    }

    if (chf.totalThermalResistance_relativeValuation < 0.8) {
      totalThermalResistance_lvl = FunctionalityLevel.INSUFFICIENT;
    } else if (
      chf.totalThermalResistance_relativeValuation >= 0.8 &&
      chf.totalThermalResistance_relativeValuation <= 1.2
    ) {
      totalThermalResistance_lvl = FunctionalityLevel.SUFFICIENT;
    } else if (chf.totalThermalResistance_relativeValuation > 1.2) {
      totalThermalResistance_lvl = FunctionalityLevel.OVERSUPPLY;
    }

    //----

    const waterPermeability_comment = chf.waterPermeability_recommended
      ? `- по показателю WVPc ${waterPermeability_lvl} уровень гомеостаза\n`
      : '';

    const waterPermeabilityDynamicCriteria_comment =
      chf.waterPermeabilityDynamicCriteria_recommended
        ? `- по показателю Kвпп ${waterPermeabilityDynamicCriteria_lvl} уровень гомеостаза \n`
        : '';

    const totalThermalResistance_comment =
      chf.totalThermalResistance_relativeValuation
        ? `- по показателю Rсум ${totalThermalResistance_lvl} уровень теплового сопротивления \n`
        : '';

    const resComment =
      waterPermeability_comment +
      waterPermeabilityDynamicCriteria_comment +
      totalThermalResistance_comment;

    return resComment;
  }

  getReliabilityFunctionComment(
    calculatedReliabilityFunction: Omit<
      ReliabilityFunctionEntity,
      'id' | 'comment'
    >,
  ): string {
    const crf = calculatedReliabilityFunction;

    let relativeBlottingPressureAfterLoad_lvl = FunctionalityLevel.UNDEFINED;

    let relativeWaterResistanceAfterLoad_lvl = FunctionalityLevel.UNDEFINED;

    let relativeBlottingTimeAfterLoad_lvl = FunctionalityLevel.UNDEFINED;

    let waterproofRealizationCriteriaAfterLoad_lvl =
      FunctionalityLevel.UNDEFINED;

    if (
      crf.relativeBlottingPressureAfterLoad_recommended >= 0.37 &&
      crf.relativeBlottingPressureAfterLoad_recommended <= 0.62
    ) {
      relativeBlottingPressureAfterLoad_lvl = FunctionalityLevel.LOW;
    } else if (
      crf.relativeBlottingPressureAfterLoad_recommended > 0.62 &&
      crf.relativeBlottingPressureAfterLoad_recommended <= 0.8
    ) {
      relativeBlottingPressureAfterLoad_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      crf.relativeBlottingPressureAfterLoad_recommended > 0.8 &&
      crf.relativeBlottingPressureAfterLoad_recommended <= 1
    ) {
      relativeBlottingPressureAfterLoad_lvl = FunctionalityLevel.HIGH;
    }

    if (
      crf.relativeBlottingTimeAfterLoad_recommended >= 0.37 &&
      crf.relativeBlottingTimeAfterLoad_recommended <= 0.62
    ) {
      relativeBlottingTimeAfterLoad_lvl = FunctionalityLevel.LOW;
    } else if (
      crf.relativeBlottingTimeAfterLoad_recommended > 0.62 &&
      crf.relativeBlottingTimeAfterLoad_recommended <= 0.8
    ) {
      relativeBlottingTimeAfterLoad_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      crf.relativeBlottingTimeAfterLoad_recommended > 0.8 &&
      crf.relativeBlottingTimeAfterLoad_recommended <= 1
    ) {
      relativeBlottingTimeAfterLoad_lvl = FunctionalityLevel.HIGH;
    }

    if (
      crf.relativeWaterResistanceAfterLoad_recommended >= 0.37 &&
      crf.relativeWaterResistanceAfterLoad_recommended <= 0.62
    ) {
      relativeWaterResistanceAfterLoad_lvl = FunctionalityLevel.LOW;
    } else if (
      crf.relativeWaterResistanceAfterLoad_recommended > 0.62 &&
      crf.relativeWaterResistanceAfterLoad_recommended <= 0.8
    ) {
      relativeWaterResistanceAfterLoad_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      crf.relativeWaterResistanceAfterLoad_recommended > 0.8 &&
      crf.relativeWaterResistanceAfterLoad_recommended <= 1
    ) {
      relativeWaterResistanceAfterLoad_lvl = FunctionalityLevel.HIGH;
    }

    if (
      crf.waterproofRealizationCriteriaAfterLoad_recommended >= 0.37 &&
      crf.waterproofRealizationCriteriaAfterLoad_recommended <= 0.62
    ) {
      waterproofRealizationCriteriaAfterLoad_lvl = FunctionalityLevel.LOW;
    } else if (
      crf.waterproofRealizationCriteriaAfterLoad_recommended > 0.62 &&
      crf.waterproofRealizationCriteriaAfterLoad_recommended <= 0.8
    ) {
      waterproofRealizationCriteriaAfterLoad_lvl = FunctionalityLevel.AVERAGE;
    } else if (
      crf.waterproofRealizationCriteriaAfterLoad_recommended > 0.8 &&
      crf.waterproofRealizationCriteriaAfterLoad_recommended <= 1
    ) {
      waterproofRealizationCriteriaAfterLoad_lvl = FunctionalityLevel.HIGH;
    }

    const relativeBlottingPressureAfterLoad_comment =
      crf.relativeBlottingPressureAfterLoad_recommended
        ? `- по показателю Рпо ${relativeBlottingPressureAfterLoad_lvl} уровень надежности\n`
        : '';

    const relativeWaterResistanceAfterLoad_comment =
      crf.relativeBlottingTimeAfterLoad_recommended
        ? `- по показателю Во ${relativeWaterResistanceAfterLoad_lvl} уровень надежности\n`
        : '';

    const relativeBlottingTimeAfterLoad_comment =
      crf.relativeBlottingTimeAfterLoad_recommended
        ? `- по показателю tпо ${relativeBlottingTimeAfterLoad_lvl} уровень надежности\n`
        : '';

    const waterproofRealizationCriteriaAfterLoad_comment =
      crf.waterproofRealizationCriteriaAfterLoad_recommended
        ? `- по показателю Kво ${waterproofRealizationCriteriaAfterLoad_lvl} уровень надежности`
        : '';

    const resComment =
      relativeBlottingPressureAfterLoad_comment +
      relativeWaterResistanceAfterLoad_comment +
      relativeBlottingTimeAfterLoad_comment +
      waterproofRealizationCriteriaAfterLoad_comment;

    return resComment;
  }
}
