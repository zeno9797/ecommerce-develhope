import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:sanjiro@localhost:5432/postgres");

const setupDb = async () => {
  await db.none(`
       

        CREATE TABLE IF NOT EXISTS users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        )
    `);

  await db.none(
    `INSERT INTO users (username, password) VALUES ('admin', 'admin')`
  );
};

setupDb();

export { db };
