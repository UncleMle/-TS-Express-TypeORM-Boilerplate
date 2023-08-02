import "reflect-metadata";
import { DataSource, Repository } from "typeorm";

import { Accounts } from "./entities/accounts";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "examplepassword123",
    database: "",
    synchronize: true,
    logging: false,
    entities: [
        Accounts
    ],
    migrations: [],
    subscribers: [],
})