import { Migration } from '@mikro-orm/migrations';

export class Migration20211020120952 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "place" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null);');
  }

}
