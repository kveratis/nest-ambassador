import { Exclude, Expose } from 'class-transformer';
import { Order } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: true })
  is_ambassador: boolean;

  @OneToMany(() => Order, (order) => order.user, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({
    referencedColumnName: 'user_id',
    name: 'id',
  })
  orders: Order[];

  get revenue(): number {
    return this.orders
      .filter((o) => o.complete)
      .reduce((sum, order) => sum + order.ambassador_revenue, 0);
  }
}
