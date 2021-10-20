import { __prod__ } from "./constants";
import {Place} from "./entities/Place";
import {MikroORM} from "@mikro-orm/core" ;

 export default 
 {
        entities: [Place], 
        dbName: "Travelly", 
        user: "ozan", 
        password: "",
        type: "postgresql",  
        debug: !__prod__
} as Parameters< typeof MikroORM.init>[0]  ;


