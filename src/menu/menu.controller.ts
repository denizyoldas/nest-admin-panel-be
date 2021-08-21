import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Type } from './enum';

@ApiTags('Menu')
@ApiBearerAuth()
@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }

  @Post('deleteByIds')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        ids: {
          type: 'number',
          format: 'array',
        },
      },
    },
  })
  deleteByIds(@Body('ids') ids: number[]) {
    for (const id of ids) {
      console.log(id);
      this.menuService.remove(+id);
    }
  }

  @Patch('changeType/:id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: {
          type: 'number',
        },
      },
    },
  })
  changeType(@Param('id') id: string, @Body('type') type: Type) {
    this.menuService.changeType(+id, type);
  }
}
