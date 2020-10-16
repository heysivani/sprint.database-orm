import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from "typeorm";
import Account from "./AccountModel";

/**
 * FIXME
 */
@Entity({name: "transactions" /* Relation name in database */})
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("float8", { nullable: false }) 
  public amount: number;

  @Column("timestamp with time zone", { nullable: false })
  public transactionDate: Date;

  @Column()
  public description: string;

  @ManyToOne(() => Account, accounts => accounts.id, { onDelete: "CASCADE", nullable: false})
  public account: Account;
}

export default Transaction;
