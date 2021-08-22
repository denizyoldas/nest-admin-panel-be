import { ApiProperty } from '@nestjs/swagger';

export class CreateSliderDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    body: string;

    @ApiProperty()
    imageId: number;
}
