import {Sequelize} from 'sequelize'

const db = new Sequelize('database_wallet', 'root', 'abc', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db