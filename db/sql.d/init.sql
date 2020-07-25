-- create table boxes
CREATE TABLE IF NOT EXISTS boxes (
    box_id INT AUTO_INCREMENT PRIMARY KEY,
    receiver VARCHAR(255) NOT NULL,
    weight DOUBLE NOT NULL,
    color VARCHAR(25) NOT NULL,
    destination VARCHAR(25) NOT NULL
) ENGINE=INNODB;
