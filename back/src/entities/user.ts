import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Index()
    @Column({type:"varchar", unique:true})
    username:string

    @Index()
    @Column({type:"varchar"})
    name:string

    @Index()
    @Column({ type: 'varchar', select: false })
    passwordDigest: string;




}





