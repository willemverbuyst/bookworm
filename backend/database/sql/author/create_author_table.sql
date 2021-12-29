CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS author;
CREATE TABLE author (author_id uuid DEFAULT uuid_generate_v4 (),author_name VARCHAR(250) NOT NULL,author_books_written INT NOT NULL,PRIMARY KEY (author_id));