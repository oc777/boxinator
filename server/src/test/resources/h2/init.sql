DROP TABLE IF EXISTS boxes;
DROP TABLE IF EXISTS countries;


-- create table countries
CREATE TABLE IF NOT EXISTS countries (
    country_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    multiplier DOUBLE NOT NULL
);


-- create table boxes
CREATE TABLE IF NOT EXISTS boxes (
    box_id INT AUTO_INCREMENT PRIMARY KEY,
    receiver VARCHAR(255) NOT NULL CHECK (receiver <> ''),
    weight DOUBLE NOT NULL CHECK (weight > 0),
    color VARCHAR(25) NOT NULL,
    destination INT NOT NULL,
    shipping_cost DOUBLE NOT NULL,
    FOREIGN KEY(destination) REFERENCES countries(country_id)
);
