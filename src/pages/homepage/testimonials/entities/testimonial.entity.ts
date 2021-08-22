import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Testimonial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    testimonialName: string;

    @Column()
    testimonialSurname: string;

    @Column()
    testimonialComment: string;

    @Column({default: true})
    isActive: boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    creationDate: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    dateOfUpdate: Date;
}
