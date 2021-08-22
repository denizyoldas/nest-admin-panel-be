import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurServicesService } from './our-services.service';
import { CreateOurServiceDto } from './dto/create-our-service.dto';
import { UpdateOurServiceDto } from './dto/update-our-service.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("homepage/our-services")
@Controller('api/homepage/our-services')
export class OurServicesController {
  constructor(private readonly ourServicesService: OurServicesService) {}

  @Get()
  getSlider() {
    return this.ourServicesService.getSlider();
  }

  @Patch()
  update(@Body() updateOurServiceDto: UpdateOurServiceDto) {
    return this.ourServicesService.update(updateOurServiceDto);
  }
}
