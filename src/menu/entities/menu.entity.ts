import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuChild } from './menu-child.emtity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  type: number;

  @Column()
  order?: number;

  @Column({ default: true })
  isActive: boolean;
}
