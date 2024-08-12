import { Sequelize , DataTypes } from "sequelize";
import { configDotenv } from "dotenv";

const dotenv = configDotenv();

const sequelize = new Sequelize( dotenv.parsed.DB_NAME,dotenv.parsed.DB_USER, dotenv.parsed.DB_PASSWORD, {
    host: dotenv.parsed.DB_HOST,
    port : dotenv.parsed.DB_PORT,
    dialect: 'mysql'
});

const Banner = sequelize.define('Banner', {
    id : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true,
    },
    visibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    heading: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    
    tableName: 'Banner', 
    timestamps: false    
});


sequelize.sync()
    .then(() => {
        console.log('Table created successfully.');
    })
    .catch(error => {
        console.error('Error creating table:', error);
    });

export default Banner;
