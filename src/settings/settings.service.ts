import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingsRepository: Repository<Setting>,
  ) {}

  getSettings() {
    return this.settingsRepository.findOne(1);
  }

  update(updateSettingDto: UpdateSettingDto) {
    const id = 1;
    return this.settingsRepository.update(id, updateSettingDto);
  }
}
