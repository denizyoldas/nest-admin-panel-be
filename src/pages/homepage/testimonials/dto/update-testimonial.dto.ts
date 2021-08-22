import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTestimonialDto } from './create-testimonial.dto';

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {

    @ApiProperty()
    testimonialName: string;

    @ApiProperty()
    testimonialSurname: string;

    @ApiProperty()
    testimonialComment: string;

    @ApiProperty()
    isActive: boolean;
}
