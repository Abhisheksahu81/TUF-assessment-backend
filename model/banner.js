import { Sequelize , DataTypes } from "sequelize";
// import { configDotenv } from "dotenv";

// const dotenv = configDotenv();

const sequelize = new Sequelize( process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
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
