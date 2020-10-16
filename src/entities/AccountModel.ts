import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Transaction from "./TransactionModel";
import User from "./UserModel";

/**
 * FIXME
 */
@Entity({name: "accounts" /* Relation name in database */})
class Account {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: false })
  public name: string;
  
  @ManyToOne(() => User, users => users.id, { onDelete: "CASCADE",  nullable: false })
  public owner: User;
}

export default Account;
