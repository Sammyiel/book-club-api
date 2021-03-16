import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Borrow = sequelize.define('borrowings', {
    user_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    full_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    email_address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    book_id: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'borrowings',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "user_id" }
        ]
    }]
});

export default Borrow;