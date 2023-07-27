import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:paperino@localhost:5433/esercizi");

const setupDb = async () => {
  await db.none(`

        CREATE TABLE users (
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
