import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OurService {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    serviceOneTitle: string;

    @Column({nullable: true})
    serviceOneBody: string;

    @Column({nullable: true})
    serviceTwoTitle: string;

    @Column({nullable: true})
    serviceTwoBody: string;

    @Column({nullable: true})
    serviceThreeTitle: string;

    @Column({nullable: true})
    serviceThreeBody: string;

    @Column({nullable: true})
    serviceFourTitle: string;

    @Column({nullable: true})
    serviceFourBody: string;

    @Column({nullable: true})
    serviceFiveTitle: string;

    @Column({nullable: true})
    serviceFiveBody: string;

    @Column({nullable: true})
    serviceSixTitle: string;

    @Column({nullable: true})
    serviceSixBody: string;

}
