import {Sequelize} from "sequelize";

const sequelize = new Sequelize('Heroes', 'root', 'Pegasus1313', {
    host: 'localhost',
    dialect:  'mysql',
});

export default sequelize;
