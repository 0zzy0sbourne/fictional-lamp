"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Place_1 = require("./entities/Place");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const place = orm.em.create(Place_1.Place, { title: "my first place" });
    await orm.em.persistAndFlush(place);
};
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=index.js.map