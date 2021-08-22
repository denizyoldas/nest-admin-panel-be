import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Slider {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    imageId: number;

    @Column({default: true})
    isActive: boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    creationDate: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    dateOfUpdate: Date;
}
