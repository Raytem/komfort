/// <reference types="node" />
import { MaterialEntity } from './entities/material.entity';
import { ConditionService } from '../condition/condition.service';
import { GlueTypeService } from '../glue-type/glue-type.service';
import { MembraneLayerPolymerTypeService } from '../membrane-layer-polymer-type/membrane-layer-polymer-type.service';
import { ProductionMethodService } from '../production-method/production-method.service';
import { WaterproofFunctionService } from '../waterproof-function/waterproof-function.service';
import { HomeostasisFunctionService } from '../homeostasis-function/homeostasis-function.service';
import { ReliabilityFunctionService } from '../reliability-function/reliability-function.service';
import { EstimationService } from '../estimation/estimation.service';
import { ImageService } from '../image/image.service';
import { LayerService } from '../layer/layer.service';
import { ExelService } from 'src/services/exel/exel.service';
import { DataSource, Repository } from 'typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { CreateMaterialDto } from 'src/realizations/material/dto/create-material.dto';
import { UserEntity } from '../user/entities/user.entity';
import { Multer } from 'multer';
import { MaterialFilterDto } from './dto/material-filter.dto';
import { CalculationService } from 'src/services/calculation/calculation.service';
import { MaterialsAndCnt } from './dto/materials-and-cnt.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
export declare class MaterialService {
    private materialRepository;
    private calculationService;
    private glueTypeService;
    private layerTypeService;
    private membraneLayerPolymerTypeService;
    private productionMethodService;
    private conditionService;
    private waterproofFunctionService;
    private homeostasisFunctionService;
    private reliabilityFunctionService;
    private estimationService;
    private imageService;
    private layerService;
    private exelService;
    private paginationService;
    private dataSource;
    constructor(materialRepository: Repository<MaterialEntity>, calculationService: CalculationService, glueTypeService: GlueTypeService, layerTypeService: LayerTypeService, membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService, productionMethodService: ProductionMethodService, conditionService: ConditionService, waterproofFunctionService: WaterproofFunctionService, homeostasisFunctionService: HomeostasisFunctionService, reliabilityFunctionService: ReliabilityFunctionService, estimationService: EstimationService, imageService: ImageService, layerService: LayerService, exelService: ExelService, paginationService: PaginationService, dataSource: DataSource);
    create(createMaterialDto: CreateMaterialDto, files: Multer.File[], reqUser: UserEntity): Promise<MaterialEntity>;
    update(id: number, updateMaterialDto: UpdateMaterialDto, reqUser: UserEntity): Promise<MaterialEntity>;
    findAll(materialFilterDto: MaterialFilterDto): Promise<MaterialsAndCnt>;
    findOne(id: number, withFunctionalIndicators?: boolean): Promise<MaterialEntity>;
    remove(id: number, reqUser: UserEntity): Promise<MaterialEntity>;
    getReportFromTemplate(material: MaterialEntity): Promise<Buffer>;
}
