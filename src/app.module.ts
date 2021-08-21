import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
