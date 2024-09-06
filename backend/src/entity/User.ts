import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Home } from './Home';

@Entity("user")
export class User{
    @PrimaryColumn()
    username: string;

    @Column()
    email: string;

    @ManyToMany(()=>Home, (home)=>home.users)
    @JoinTable({
        name : "user_home_mapping",
        joinColumn: {
            name: "username",
            referencedColumnName: "username"
        },
        inverseJoinColumn: {
            name: "street_address",
            referencedColumnName: "street_address"
        }
    })
    homes : Home[]
}
