"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Place_1 = require("./entities/Place");
exports.default = {
    entities: [Place_1.Place],
    dbName: "Travelly",
    user: "ozan",
    password: "",
    type: "postgresql",
    debug: !constants_1.__prod__
};
//# sourceMappingURL=mikro-orm.config.js.map