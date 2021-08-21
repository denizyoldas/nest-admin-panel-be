import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryColumn()
  id: number;

  @Column()
  siteTitle: string;

  @Column()
  siteSlogan: string;

  @Column()
  siteLanguage: string;
}
