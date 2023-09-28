import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAbrasionTypeDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
