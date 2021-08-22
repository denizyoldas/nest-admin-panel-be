import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateOurServiceDto } from './create-our-service.dto';

export class UpdateOurServiceDto extends PartialType(CreateOurServiceDto) {

    @ApiProperty()
    serviceOneTitle: string;

    @ApiProperty()
    serviceOneBody: string;

    @ApiProperty()
    serviceTwoTitle: string;

    @ApiProperty()
    serviceTwoBody: string;

    @ApiProperty()
    serviceThreeTitle: string;

    @ApiProperty()
    serviceThreeBody: string;

    @ApiProperty()
    serviceFourTitle: string;

    @ApiProperty()
    serviceFourBody: string;

    @ApiProperty()
    serviceFiveTitle: string;

    @ApiProperty()
    serviceFiveBody: string;

    @ApiProperty()
    serviceSixTitle: string;

    @ApiProperty()
    serviceSixBody: string;
}
