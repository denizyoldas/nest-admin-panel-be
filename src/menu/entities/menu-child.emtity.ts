import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuChild {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parentId: number;

  @Column()
  childId: number;
}
