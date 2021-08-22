import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateOurServiceDto } from './dto/update-our-service.dto';
import { OurService } from './entities/our-service.entity';

@Injectable()
export class OurServicesService {

  constructor(
    @InjectRepository(OurService)
    private readonly ourServiceRepository: Repository<OurService>
  ) {}

  getSlider() {
    return this.ourServiceRepository.findOne(1);
  }
  
  update(updateOurServiceDto: UpdateOurServiceDto) {
    return this.ourServiceRepository.update(1, updateOurServiceDto);
  }
}
