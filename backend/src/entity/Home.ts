import { Entity, PrimaryColumn, Column, ManyToMany } from 'typeorm';
import { User } from './User';

@Entity("home")
export class Home {
    @PrimaryColumn()
    street_address: string;

    @Column()
    state: string;

    @Column()
    zip: string;

    @Column('float')
    sqft: number;

    @Column('int')
    beds: number;

    @Column('float')
    baths: number;

    @Column('decimal')
    list_price: number;

    @ManyToMany(() =>User, (user)=>user.homes)
    users : User[]
}
