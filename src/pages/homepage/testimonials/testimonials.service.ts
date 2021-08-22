import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Testimonial } from './entities/testimonial.entity';

@Injectable()
export class TestimonialsService {

  constructor(
    @InjectRepository(Testimonial)
    private readonly testimonialsRepository: Repository<Testimonial>
  ) {}

  getActiveTestimonials() {
    return this.testimonialsRepository.find({isActive: true});
  }

  getTestimonials() {
    return this.testimonialsRepository.find();
  }

  create(createTestimonialDto: CreateTestimonialDto) {
    const testimonial = new Testimonial();
    testimonial.testimonialName = createTestimonialDto.testimonialName;
    testimonial.testimonialSurname = createTestimonialDto.testimonialSurname;
    testimonial.testimonialComment = createTestimonialDto.testimonialComment;
    
    //Date settings
    const creationDate = new Date();
    testimonial.creationDate = creationDate;
    testimonial.dateOfUpdate = creationDate;

    return this.testimonialsRepository.insert(testimonial);
  }

  update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    const testimonial = new Testimonial();
    testimonial.testimonialName = updateTestimonialDto.testimonialName;
    testimonial.testimonialSurname = updateTestimonialDto.testimonialSurname;
    testimonial.testimonialComment = updateTestimonialDto.testimonialComment;
    testimonial.isActive = updateTestimonialDto.isActive;

    //Update date settings
    const dateOfUpdate = new Date();
    testimonial.dateOfUpdate = dateOfUpdate;
    
    return this.testimonialsRepository.update(id, testimonial);
  }

  remove(id: number) {
    return this.testimonialsRepository.delete(id);
  }
}
