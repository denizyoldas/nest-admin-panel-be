import { ApiProperty } from '@nestjs/swagger';
export class CreateTestimonialDto {

    @ApiProperty()
    testimonialName: string;

    @ApiProperty()
    testimonialSurname: string;

    @ApiProperty()
    testimonialComment: string;
}
