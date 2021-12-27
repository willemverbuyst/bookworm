CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS book;
CREATE TABLE book (book_id uuid DEFAULT uuid_generate_v4 (),book_title VARCHAR(250) NOT NULL,book_language VARCHAR(250) NOT NULL,book_author VARCHAR(250) NOT NULL,book_year INT NOT NULL,book_read INT NOT NULL,PRIMARY KEY (book_id));