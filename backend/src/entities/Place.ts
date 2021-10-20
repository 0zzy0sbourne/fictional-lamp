import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Place {

  @PrimaryKey()
  _id!: number;


  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  title!: string;
 
}