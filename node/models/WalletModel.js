import db from '../database/db.js';
import { DataTypes } from 'sequelize'

const WalletModel = db.define('operations', {
    concept: {type: DataTypes. STRING},
    amount: {type: DataTypes. NUMBER},
    date: {type: DataTypes. DATE},
    type: {type: DataTypes. STRING},
    category: {type: DataTypes. STRING}

})

export default WalletModel

