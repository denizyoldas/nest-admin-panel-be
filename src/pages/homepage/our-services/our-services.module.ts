import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OurServicesService } from './our-services.service';
import { OurServicesController } from './our-services.controller';
import { OurService } from './entities/our-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OurService])],
  controllers: [OurServicesController],
  providers: [OurServicesService]
})
export class OurServicesModule {}
