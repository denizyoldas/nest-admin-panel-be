import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("homepage/testimonials")
@Controller('api/homepage/testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get('/active')
  getActiveTestimonials() {
    return this.testimonialsService.getActiveTestimonials();
  }

  @Get()
  getTestimonials() {
    return this.testimonialsService.getTestimonials();
  }

  @Post()
  create(@Body() createTestimonialDto: CreateTestimonialDto) {
    return this.testimonialsService.create(createTestimonialDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestimonialDto: UpdateTestimonialDto) {
    return this.testimonialsService.update(+id, updateTestimonialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testimonialsService.remove(+id);
  }
}
