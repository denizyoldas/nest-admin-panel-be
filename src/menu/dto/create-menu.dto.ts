import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../enum';

export class CreateMenuDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  type: number;

  @ApiProperty()
  order?: number;

  @ApiProperty({ default: true })
  isActive: boolean;
}
