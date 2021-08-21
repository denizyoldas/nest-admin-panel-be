import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
