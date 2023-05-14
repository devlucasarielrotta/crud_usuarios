import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario',{
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "email is required" },
        },
        
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});

export default Usuario;