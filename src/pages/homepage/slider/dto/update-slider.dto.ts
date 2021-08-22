import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSliderDto } from './create-slider.dto';

export class UpdateSliderDto extends PartialType(CreateSliderDto) {

    @ApiProperty()
    title: string;

    @ApiProperty()
    body: string;

    @ApiProperty()
    imageId: number;

    @ApiProperty()
    isActive: boolean;
}
