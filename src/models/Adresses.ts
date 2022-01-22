import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import User from './Users';
@Entity('adresses')
class Adresses {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    provider: User;

    @Column()
    adress: string;

    @Column()
    adress_complement: string;

    @Column()
    zip: string;

    @Column()
    zone: string;

    @Column()
    city: string;

    @Column()
    obs: string;



    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;


}

export default Adresses;
