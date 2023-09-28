import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('ProductionMethod')
export class ProductionMethodEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @OneToMany(() => MaterialEntity, (material) => material.productionMethod)
  material: MaterialEntity;
}
