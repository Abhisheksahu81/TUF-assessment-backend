import mysql from 'mysql2'
import { configDotenv } from 'dotenv'

const dotenv = configDotenv();

export const connectDb = () => {
    
    const connection = mysql.createConnection({
        password : dotenv.parsed.DB_PASSWORD,
        database : dotenv.parsed.DB_NAME,
        user : dotenv.parsed.DB_USER,
        host : dotenv.parsed.DB_HOST,
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