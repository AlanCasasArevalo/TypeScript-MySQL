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

    public static get instance() {
        // console.log('Creacion de instancia')
        return this._instance || (this._instance = new this())
    }

    static queryExecute ( query: string, callback: Function) {
        this.instance.connection.query(query, (error: any, results: Object[], fields: any) =>{
            if (error) {
                console.log('error en el query', error);
                return callback( error );
            } else {
                if (results.length == 0) {
                    callback('El registro no existe ')
                } else {
                    callback( null, results )
                }

            }
        })
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










