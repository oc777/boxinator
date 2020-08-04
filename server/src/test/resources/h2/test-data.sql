-- seed countries table
INSERT INTO countries (name, multiplier) VALUES ('Sweden', 1.3);
INSERT INTO countries (name, multiplier) VALUES ('China', 4);
INSERT INTO countries (name, multiplier) VALUES ('Brazil', 8.6);
INSERT INTO countries (name, multiplier) VALUES ('Australia', 7.2);


-- seed boxes table with dummy data for testing

INSERT INTO boxes (receiver, weight, color, destination, shipping_cost) VALUES ('Bilbo Baggings', '1.2', '220,220,220', 1, 1.56);
INSERT INTO boxes (receiver, weight, color, destination, shipping_cost) VALUES ('Frodo Baggings', '3.2', '120,120,120', 2, 12.8);