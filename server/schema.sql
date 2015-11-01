-- DROP DATABASE chat;
-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(140) NOT NULL,
  userId int NOT NULL,
  roomname varchar(40) NOT NULL,
  PRIMARY KEY (ID)
  /* Describe your table here.*/
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30),
  PRIMARY KEY (ID)
);

-- CREATE TABLE rooms (
--   roomId int AUTO_INCREMENT PRIMARY KEY,
--   roomName varchar(30)
-- );

-- CREATE TABLE users_rooms (
--   urId int AUTO_INCREMENT PRIMARY KEY,
--   userId int,
--   roomId int
-- );
/* Create other tables and define schemas for them here! */


DESCRIBE users;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

