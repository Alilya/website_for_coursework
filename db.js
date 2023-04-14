const sqlite3 = require("sqlite3").verbose();
const dbName = "dance.sqlite";
const db = new sqlite3.Database(dbName);

db.serialize(()=>{
    const sql=`CREATE TABLE IF NOT `
})