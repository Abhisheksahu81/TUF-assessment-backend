import mysql from 'mysql2'
// import { configDotenv } from 'dotenv'

// const dotenv = configDotenv();

export const connectDb = () => {
    
    const connection = mysql.createConnection({
        password :process.env.DB_PASSWORD,
        database :process.env.DB_NAME,
        user :process.env.DB_USER,
        host :process.env.DB_HOST,
        waitForConnections : true,

    })

    connection.connect((err)=>{
        if(err){
            console.log("Error while connecting DB :" , err);
        }
        else{
            console.log("DB connected.");
        }
    })
} 