import {MikroORM} from "@mikro-orm/core"; 
import { __prod__ } from "./constants";
import {Place} from "./entities/Place";
import microConfig from "./mikro-orm.config";
import express from "express"
import {ApolloServer} from "apollo-server-express"; 
import  {buildSchema} from  'type-graphql'; 
import { HelloResolver } from "./resolvers/hello";

const main = async () => { 
    
    // database connection comes first
    const orm = await MikroORM.init(microConfig); // connect to db
    await orm.getMigrator().up();  // run migrations     
    
    const app = express(); 

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false,

        })
    })
    
}; 
    
main().catch(err=>{
    console.error(err);
});
