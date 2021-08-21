import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    createMenuDto.slug = this.slug(createMenuDto.slug);
    return this.menuRepository.insert(createMenuDto);
  }

  findAll() {
    return this.menuRepository.find();
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
