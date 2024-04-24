CREATE DATABASE test_db;
USE test_db;
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10, 2)
);
INSERT INTO products (name, price) VALUES ('Product1', 10.00);
INSERT INTO products (name, price) VALUES ('Product2', 15.50);
