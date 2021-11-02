"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211020120952 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211020120952 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "place" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null);');
    }
}
exports.Migration20211020120952 = Migration20211020120952;
//# sourceMappingURL=Migration20211020120952.js.map