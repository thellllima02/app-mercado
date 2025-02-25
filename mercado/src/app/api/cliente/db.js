import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    database:process.env.MYSQL_NAME,
    password:process.env.MYSQL_PASSWORD,
    port:process.env.MYSQL_PORT
});

export default pool;