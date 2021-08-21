import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PrimaryColumn } from 'typeorm';
import { CreateSettingDto } from './create-setting.dto';

export class UpdateSettingDto extends PartialType(CreateSettingDto) {

    @ApiProperty()
    siteTitle: string;
    
    @ApiProperty()
    siteSlogan: string;

    @ApiProperty()
    siteLanguage: string;
}
