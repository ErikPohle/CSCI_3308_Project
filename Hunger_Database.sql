--TO LOAD THIS DATABASE INTO PSQL, CREATE A DATABASE ("CREATE DATABASE hunger")
--Then, in command line (not in PSQL) enter "sudo -u postgres psql hunger < Hunger_Database.sql"


DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS purchases;


--
-- Name: restaurants;
--

CREATE TABLE restaurants (
    id INT PRIMARY KEY,
    restaurant_name VARCHAR(30) NOT NULL,
    restaurant_type VARCHAR(30) NOT NULL,
    restaurant_link VARCHAR(30),
    description VARCHAR(200),
    address VARCHAR(60),
	  lat DECIMAL(10, 6) NOT NULL,
  	lng DECIMAL(10, 6) NOT NULL,
    avg_price VARCHAR(5),
  	avg_rating FLOAT,
  	num_ratings int,
  	menu INT[] NOT NULL
);

--
-- Name: food;
--

CREATE TABLE food (
	  id INT PRIMARY KEY,
  	item_name VARCHAR(30),
  	price FLOAT
);


--
-- Name: purchases;
--

CREATE TABLE purchases (
    id INT PRIMARY KEY ,
    order_date DATE NOT NULL,
    tip FLOAT,
  	tax FLOAT,
  	delivery FLOAT,
  	order_rating int,
  	food_ids INT[]
);


--
-- Name: clients;
--

CREATE TABLE clients (
    id INT PRIMARY KEY,
  	first_name VARCHAR(30) NOT NULL,
  	last_name VARCHAR(30) NOT NULL,
  	username VARCHAR(30) NOT NULL,
  	hashed_password VARCHAR(50) NOT NULL,
  	purchase_ids INT[]
);



--
-- Data for Name: restaurants;
--



INSERT INTO restaurants VALUES (1, 'Chipotle', 'Mexican', 'https://www.chipotle.com/', 'Food with integrity', '1650 28th St UNIT 1224, Boulder, CO 80301', 40.016040, -105.257160, '$', 4.2, 26, ARRAY [1, 2, 3, 4]),
                               (2, 'Illegal Pete''s', 'Mexican', 'https://www.illegalpetes.com/', 'The More. The Merrier.', '1124 13th St, Boulder, CO 80302', 40.007830, -105.275970, '$', 4.4, 40, ARRAY [5, 6, 7, 8]),
                               (3, 'Boss Lady Pizza', 'Pizza', 'https://bossladypizza.com', 'Locally-owned pizza shop serving hand-tossed New York-style Pizza, fresh salads, and house-made gluten-free desserts', '1129 13th St, Boulder, CO 80302', 40.007890, -105.276590, '$$', 4.4, 30, ARRAY [9, 10, 11, 12]),
                               (4, 'Thai Avenue', 'Thai', 'N/a', 'Familiar rice, noodle & curry plates are served at this simple Thai counter in a food–court setting.', '1310 College Ave, Boulder, CO 80302', 40.007040, -105.275900, '$$', 4.4, 8, ARRAY [13, 14, 15, 16]),
                               (5, 'Pasta Jay''s', 'Italian', 'https://pastajays.com', 'In 1988, Jay Elowsky, along with his parents, opened the first Pasta Jay''s at 9th and Pearl. Thirty years later it is still a favorite of the Boulder Community.', '1001 Pearl St, Boulder, CO 80302', 40.007040, -105.275900, '$$$', 4.3, 19, ARRAY [17, 18, 19, 20]),
                               (6, 'Subway', 'Sandwiches', 'https://www.subway.com/en-US', 'Eat, move, live, & do good with us', '2920 Baseline Rd, Boulder, CO 80303', 39.999470, -105.255160, '$', 3.6, 28, ARRAY [21, 22, 23, 24, 25]),
                               (7, 'Dominos', 'Pizza', 'https://www.dominos.com/', 'At Domino’s we’re all about pizza', '2425 Canyon Blvd Ste B, Boulder, CO 80302', 40.017870, -105.262680, '$', 3.7, 50, ARRAY [26, 27, 28, 29, 30]),
                               (8, 'Pizza Hut', 'Pizza', 'https://www.pizzahut.com/', 'We’re the pizza company that lives life unboxed', '3175 28th St, Boulder, CO 80301', 40.032070, -105.258970, '$', 2.6, 18, ARRAY [31, 32, 33, 34, 35, 36]),
                               (9, 'Potbelly', 'Sandwiches', 'https://www.potbelly.com/', 'Our Promise: Fresh, Fast & Friendly. We don’t use these words lightly.', '1685 29th St, Boulder, CO 80301', 40.016640, -105.256130, '$$', 4.1, 16, ARRAY [37, 38, 39, 40, 41, 42, 43]),
                               (10, 'Wendys', 'Fast Food', 'https://www.wendys.com/home', 'At Wendy''s, we''re all about serving up fresh food, even if it means going the extra mile.', '2420 Baseline Rd, Boulder, CO 80305', 39.999430, -105.262670, '$', 3.7, 60, ARRAY [44, 45, 46, 47, 48, 49]),
                               (11, 'Cafe Mexicali', 'Mexican', 'https://www.cafemexicali.com/', 'Cafe Mexicali’s goal is to provide customers with Mexican genre food that is as fresh as it gets', '2850 Baseline Rd, Boulder, CO 80303', 39.999870, -105.256104, '$$', 4.4, 70, ARRAY [50, 51, 52, 53, 54, 55, 56]),
                               (12, 'Five Guys', 'Fast Food', 'https://www.fiveguys.com/', 'We only use fresh ground beef. We only use peanut oil. There are no freezers in Five Guys locations, just coolers.', '1855 29th St, Boulder, CO 80301', 40.019250, -105.256580, '$', 4.4, 54, ARRAY [57, 58, 59, 60, 61]),
                               (13, 'Cosmos', 'Pizza', 'http://cosmospizza.com/', 'Late night pizza has never tasted so good.', '659 30th St, Boulder, CO 80303', 39.999081, -105.252960, '$', 4.4, 73, ARRAY [62, 63, 64]);
--
-- Data for Name: food;
--

INSERT INTO food VALUES (1, 'Chicken Burrito', 6.5),
                        (2, 'Vegetarian Burrito', 6.5),
                        (3, 'Fountain Drink', 1.8),
                        (4, 'Salad', 6.0);

INSERT INTO food VALUES (5, 'Chicken Burrito', 6.79),
                        (6, 'Breakfast Burrito', 3.95),
                        (7, 'Cookie', 1.79),
                        (8, 'Fountain Drink', 1.79);

INSERT INTO food VALUES (9, 'The Caesar Salad', 5.0),
                        (10, 'Cheese Slice Pizza', 3.0),
                        (11, 'Pepperoni Slice Pizza', 3.0),
                        (12, 'Build Your Own Pie', 17);

INSERT INTO food VALUES (13, 'Pad Thai', 11.0),
                        (14, 'Green Curry', 11.0),
                        (15, 'Thai Spring Roll', 3.25),
                        (16, 'Entree', 14.89);

INSERT INTO food VALUES (17, 'Burrata Salad', 10.0),
                        (18, 'Marinara Pasta', 10.0),
                        (19, 'Fresh Eggplant Parmagania', 14.5),
                        (20, 'Alfredo Williams', 20.0);

INSERT INTO food VALUES (21, 'Italian BMT', 10.50),
                        (22, 'Cold Cut Combo', 7.20),
                        (23, 'BLT Sub', 8.75),
                        (24, 'Cookie', 1.50),
                        (25, 'Drink', 1.25);

INSERT INTO food VALUES (26, 'Cheese Pizza', 10.25),
                        (27, 'Pepperoni Pizza', 11.00),
                        (28, 'Meat Lovers Pizza', 11.75),
                        (29, 'Lava Cake', 4.25),
                        (30, 'Drink', 1.50);

INSERT INTO food VALUES (31, 'Cheese Pizza', 8.25),
                        (32, 'Pepperoni Pizza', 9.00),
                        (33, 'Meat Lovers Pizza', 11.00),
                        (34, 'Bread Twist', 3.00),
                        (35, 'Cookie Pizza', 5.25),
                        (36, 'Drink', 2.50);

INSERT INTO food VALUES (37, 'Clubby', 9.25),
                        (38, 'Italian', 8.15),
                        (39, 'Turkey', 7.00),
                        (40, 'BLT Sandwich', 6.75),
                        (41, 'Oreo Milkshake', 4.25),
                        (42, 'Vanilla Milkshake', 4.25),
                        (43, 'Drink', 3.50);

INSERT INTO food VALUES (44, 'Burger', 5.25),
                        (45, 'Spicy Chicken Nuggets', 4.50),
                        (46, 'Spicy Chicken Sandwich', 3.30),
                        (47, 'Fries', 3.20),
                        (48, 'Drink', 1.20),
                        (49, 'Milkshake', 2.85);

INSERT INTO food VALUES (50, 'Enchilada', 8.25),
                        (51, 'Smothered Burrito', 8.00),
                        (52, 'Steak Burrito', 7.20),
                        (53, 'Chicken Burrito', 6.40),
                        (54, 'Taco', 4.75),
                        (55, 'Sopapilla', 3.25),
                        (56, 'Drink', 2.00);


INSERT INTO food VALUES (57, 'Burger', 7.35),
                        (58, 'Fries', 4.50),
                        (59, 'Chocolate Milkshake', 3.75),
                        (60, 'Drink', 1.00),
                        (61, 'Peanuts', 0.00);

INSERT INTO food VALUES (62, 'Pizza', 5.35),
                        (63, 'Spicy Ranch', 1.50),
                        (64, 'Drink', 1.25);

--
-- Data for Name: purchases;
--

INSERT INTO purchases VALUES (1, to_date('20190819','YYYYMMDD'), 1.5, 0.99, 2.0, 5, ARRAY [1, 3]),
                             (2, to_date('20190825','YYYYMMDD'), 0.0, 1.32, 2.0, 4, ARRAY [9, 10, 11]),
                             (3, to_date('20190905','YYYYMMDD'), 2.0, 1.71, 3.0, 4, ARRAY [14, 15]),
                             (4, to_date('20191013','YYYYMMDD'), 4.0, 2.4, 3.0, 5, ARRAY [20]);
--
-- Data for Name: clients;
--

INSERT INTO clients VALUES (1, 'Jacob', 'Stewart', 'jstew554', '', ARRAY [2]),
                           (2, 'Samuel', 'Mitchell', 'burritoboy', '', ARRAY [1]),
                           (3, 'Kara', 'Edwards', 'kubrickwithtwobricks', '', ARRAY [4]),
                           (4, 'Caroline', 'Walker', 'xmascarol', '', ARRAY [3]);

--
--Queries
--

--Get order ids from client id

--WITH pid AS (SELECT purchase_ids FROM clients WHERE id = /*Client ID*/) SELECT food_ids FROM purchases WHERE id = ANY(SELECT unnest(purchase_ids) FROM pid);

--Get food items from order id

--WITH oid AS (SELECT food_ids FROM purchases WHERE id = /*Order ID*/) SELECT item_name FROM food WHERE id = ANY(SELECT unnest(food_ids) FROM oid);

--Get restaurant from order id

--SELECT id FROM restaurants WHERE (SELECT food_ids[1] FROM purchases WHERE id = /*Order ID*/) = ANY(menu);

--Get total cost from order id

--SELECT tip + tax + delivery + (WITH oid AS (SELECT food_ids FROM purchases WHERE id = /*Order ID*/) SELECT SUM(price) FROM food WHERE id = ANY(SELECT unnest(food_ids) FROM oid)) AS total_cost FROM purchases WHERE id = /*Order ID*/;
