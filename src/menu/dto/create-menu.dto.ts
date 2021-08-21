import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../enum';

export class CreateMenuDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty({ name: 'type', enum: Type })
  type: number;
}
