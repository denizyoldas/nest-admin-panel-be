import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { Slider } from './entities/slider.entity';

@Injectable()
export class SliderService {

  constructor(
    @InjectRepository(Slider)
    private readonly sliderRepository: Repository<Slider>
  ) {}

  getActiveSliders() {
    return this.sliderRepository.find({isActive: true});
  }

  getSliders() {
    return this.sliderRepository.find();
  }

  create(createSliderDto: CreateSliderDto) {
    const slider = new Slider();
    slider.title = createSliderDto.title;
    slider.body = createSliderDto.body;
    slider.imageId = createSliderDto.imageId;
    
    //Date settings
    const creationDate = new Date();
    slider.creationDate = creationDate;
    slider.dateOfUpdate = creationDate;

    return this.sliderRepository.insert(slider);
  }

  update(id: number, updateSliderDto: UpdateSliderDto) {
    const slider = new Slider();
    slider.title = updateSliderDto.title;
    slider.body = updateSliderDto.body;
    slider.imageId = updateSliderDto.imageId;
    slider.isActive = updateSliderDto.isActive;

    //Update date settings
    const dateOfUpdate = new Date();
    slider.dateOfUpdate = dateOfUpdate;

    return this.sliderRepository.update(id, slider);
  }

  remove(id: number) {
    return this.sliderRepository.delete(id);
  }
}
