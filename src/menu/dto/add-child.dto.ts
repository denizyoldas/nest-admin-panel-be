import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../enum';

export class AddChildDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty({ name: 'type', enum: Type })
  type: number;
}
