import mysql = require("mysql");

export default class Mysql {
    private static _instance: Mysql;

    connection: mysql.Connection;
    connected: boolean = false;

    constructor () {
        console.log('clase inicializada OJO QUE NO PUEDE HABER MAS');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Pegasus1313',
            database: 'Heroes'
        });

        this.dbConnection();
    }

    public static get getInstance() {
        return this._instance || (this._instance = new this())
    }

    private dbConnection () {
        this.connection.connect((error: mysql.MysqlError) => {
            if (error) {
                console.log('error al conectar', error)
                return
            } else {
                this.connected = true;
                console.log('Base de datos conectada')
            }
        });
    }

}










