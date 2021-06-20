import DB from './init';

export async function createDatabaseTables() {
    // @ts-ignore
    let sql = `
    CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL,
        enabled TINYINT(1) NOT NULL DEFAULT "0",
        bio VARCHAR(255) NULL DEFAULT NULL,
        created_at DATETIME NOT NULL DEFAULT current_timestamp(),
        PRIMARY KEY (id)
    );`;
    DB.execute(sql);
}
