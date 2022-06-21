CREATE PROCEDURE dogsAddOrEdit (
	IN _id INT,
    IN _name VARCHAR(50),
    IN _breed VARCHAR(50),
    IN _age INT,
    IN _gender VARCHAR(1) 
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO dogs (name, breed, age, gender) 
		VALUES (_name, _breed, _age, _gender)
		SET _id = LAST_INSERT_ID();
	ELSE
		UPDATE dogs
        SET name = _name, breed = _breed, age = _age, gender = _gender 
        WHERE id = _id;
	END IF
END

CREATE PROCEDURE dogsAddOrEdit @id INT, @name VARCHAR(50), @breed VARCHAR(50), @age INT, @gender VARCHAR(1) 
AS
IF @id = 0
BEGIN
		INSERT INTO dogs (name, breed, age, gender) 
		VALUES (@name, @breed, @age, @gender);
		SET @id = LAST_INSERT_ID();
END
	ELSE
		UPDATE dogs
        SET name = _name, breed = _breed, age = _age, gender = _gender 
        WHERE id = _id;
	END IF