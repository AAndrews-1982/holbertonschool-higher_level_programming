-- 1-create_user.sql

-- Check if the user 'user_0d_1' already exists, if not, create the user with all privileges

CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY '{password}';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost' WITH GRANT OPTION;
