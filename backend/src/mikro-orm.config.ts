import { __prod__, dbpassword } from "./constants";
import {Place} from "./entities/Place";
import {MikroORM} from "@mikro-orm/core" ;
import path from "path"; // built-in in node

 export default 
 {
        migrations: {
         path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
         },
        entities: [Place], 
        dbName: "Travelly", 
        user: "ozan",
        password: dbpassword, 
        type: "postgresql",  
        debug: !__prod__
} as Parameters< typeof MikroORM.init>[0]  ;


