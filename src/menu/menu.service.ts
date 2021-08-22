import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { Type } from './enum';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    createMenuDto.slug = this.slug(createMenuDto.slug);
    return this.menuRepository.insert(createMenuDto);
  }

  async findAll() {
    const res = await this.menuRepository.find();
    return res;
  }

  findOne(id: number) {
    return this.menuRepository.findOne(id);
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    this.menuRepository.update(id, updateMenuDto);
  }

  remove(id: number) {
    this.menuRepository.delete(id);
  }

  changeType(id: number, type: Type) {
    this.menuRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .update()
      .set({ type })
      .execute();
  }

  slug(s) {
    return s
      .toUpperCase()
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');
  }
}
