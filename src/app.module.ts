import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OurServicesModule } from './pages/homepage/our-services/our-services.module';
import { SliderModule } from './pages/homepage/slider/slider.module';
import { TestimonialsModule } from './pages/homepage/testimonials/testimonials.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule, TypeOrmModule.forRoot(), SliderModule, OurServicesModule, TestimonialsModule],
})
export class AppModule {}
