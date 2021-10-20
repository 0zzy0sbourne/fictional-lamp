import {MikroORM} from "@mikro-orm/core"; 
import { __prod__ } from "./constants";
import {Place} from "./entities/Place";
import microConfig from "./mikro-orm.config";

const main = async () => { 
    const orm = await MikroORM.init(microConfig); 


    const place = orm.em.create(Place, {title: "my first place"});
    // to insert a place into a database: 
    await orm.em.persistAndFlush(place);

    }; 
    
main().catch(err=>{
    console.error(err);
});
