/**
 * @name mysql.mjs
 * @description Mise en place de la connexion (pool) mysql au serveur
 * @author author
 * @version version
 **/

import mysql from "mysql2/promise";

const mysqlHostname = "timmatane.ca";
const mysqlPort = 3306;
const mysqlUser = "tim_coqueletm";
const mysqlDb = "tim_coqueletm";
const mysqlPassword = "z8D0o6o8x2";

let connection;

export function getConnectionPool() {
    if (!connection) {
        connection = mysql.createPool({
            port: mysqlPort,
            host: mysqlHostname,
            user: mysqlUser,
            password: mysqlPassword,
            database: mysqlDb,
            connectionLimit: 20,
        });
        console.log("Connexion au serveur SQL établie")
    }
    return connection;
}