const { connect } = require("mongoose")

const connect_db = async () => {
    try {
        const conn = await connect(process.env.MONGO_CONNECTION_STRING, {
            dbName: process.env.MONGO_DATABASE_NAME
        });
        return console.log(` MongoDB connected: ${conn.connection.db.databaseName}`);
    } catch (err) {
        return console.log(err);
    }
}

module.exports = connect_db