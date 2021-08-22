import { ApiProperty } from "@nestjs/swagger";

export class CreateOurServiceDto {

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
