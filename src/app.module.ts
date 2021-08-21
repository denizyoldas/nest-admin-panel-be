import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MenuModule, SettingsModule],
})
export class AppModule {}
