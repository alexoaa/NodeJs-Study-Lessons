USE animal;

CREATE TABLE dogs (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) DEFAULT NULL,
    breed VARCHAR(50) DEFAULT NULL,
    age INT DEFAULT NULL,
    gender VARCHAR(1) DEFAULT NULL CONSTRAINT Chk_Gender CHECK (gender = 'M' OR GENDER = 'F')
);
SHOW TABLES;

DESCRIBE dogs;

SELECT * FROM dogs;
SELECT * FROM dogs WHERE id = 18;

UPDATE dogs SET age = 4 WHERE id = 2;

DROP TABLE dogs;

INSERT INTO dogs (name, breed, age, gender)VALUES ('Hashi', 'ChowChow', 5, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Mora', 'Mestizo', 5, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Canelo', 'Mestizo', 1, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Drogo', 'Pitbull', 4, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Hana', 'Chihuahua', 3, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Niza', 'Chihuahua', 5, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Tom', 'Schnauzer Med', 8, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Boni', 'Schnauzer Mini', 8, 'M');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Tao', 'Pug', 2, 'F');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Kishka', 'Pitbull', 1, 'F');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Nicole', 'Mastin/Pitbull', 3, 'F');
INSERT INTO dogs (name, breed, age, gender)VALUES ('Morgan', 'Akita', 1, 'M');

DELETE FROM dogs WHERE id = 11;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin123';

flush privileges;