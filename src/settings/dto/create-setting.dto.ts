import { ApiProperty } from "@nestjs/swagger";
import { PrimaryColumn } from "typeorm";

export class CreateSettingDto {

    @ApiProperty()
    siteTitle: string;
    
    @ApiProperty()
    siteSlogan: string;

    @ApiProperty()
    siteLanguage: string;
}
