import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SliderService } from './slider.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('homepage/slider')
@Controller('api/homepage/slider')
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Get('/active')
  getActiveSliders() {
    return this.sliderService.getActiveSliders();
  }

  @Get()
  getSliders() {
    return this.sliderService.getSliders();
  }

  @Post()
  create(@Body() createSliderDto: CreateSliderDto) {
    return this.sliderService.create(createSliderDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSliderDto: UpdateSliderDto) {
    return this.sliderService.update(+id, updateSliderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sliderService.remove(+id);
  }
}
