import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import sequelize from "../../../config/databaseConfiguration";

export default class Hero extends Model {
    public id!: number;
    public name!: string;
    public power!: string;
}

Hero.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    power: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    sequelize: sequelize,
    tableName: 'Heroes'
});









