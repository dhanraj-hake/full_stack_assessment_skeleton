USE home_db;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS home;
DROP TABLE IF EXISTS user_home_mapping;

CREATE TABLE user (
	username varchar(100) PRIMARY KEY,
	email varchar(100) NOT NULL
);

CREATE TABLE home (
    street_address varchar(255) PRIMARY KEY,
    state varchar(50) NOT NULL,
    zip varchar(10) NOT NULL,
    sqft INT NOT NULL,
    beds INT NOT NULL,
    baths DECIMAL NOT NULL,
    list_price DECIMAL NOT NULL
);

CREATE TABLE user_home_mapping (
    username varchar(100),
    street_address varchar(255),
    FOREIGN KEY (username) REFERENCES user(username),
    FOREIGN KEY (street_address) REFERENCES home(street_address),
    PRIMARY KEY (username, street_address)
);


INSERT INTO user (username, email)
VALUES ('user7', 'user7@example.org'),
('user3', 'user3@example.org'),
('user10', 'user10@example.org'),
('user6', 'user6@example.org'),
('user2', 'user2@example.org'),
('user5', 'user5@example.org'),
('user4', 'user4@example.org'),
('user9', 'user9@example.org'),
('user8', 'user8@example.org');

INSERT INTO home (street_address, state, zip, sqft, beds, baths, list_price)
VALUES ('72242 Jacobson Square', 'Arizona', '05378', 2945.89, 1, 3, 791204),
('75246 Cumberland Street', 'Arizona', '08229', 2278.71, 2, 1, 182092),
('811 Walker-Bogan Terrace', 'Rhode Island', '19219', 3648.42, 1, 2, 964995),
('947 Allen Motorway', 'Massachusetts', '65353', 1375.37, 3, 3, 578532),
('7976 W Division Street', 'New Mexico', '99460', 2510.57, 1, 3, 842529),
('4679 Horacio Plains', 'Texas', '62631', 1679.69, 6, 3, 303195),
('78089 Prospect Avenue', 'Nebraska', '95406', 4718.9, 1, 2, 358752),
('5788 Mallie Gateway', 'Nebraska', '37697', 2236.85, 3, 2, 632165),
('975 Marty Ridges', 'New Jersey', '28721', 1310.08, 6, 3, 467656),
('40353 Main Street S', 'West Virginia', '77945', 3480.32, 2, 3, 263753),
('9919 Park Drive', 'Maine', '68269', 1773.54, 3, 2, 329301),
('642 Aaron Parkway', 'Maine', '69309', 1260.51, 4, 3, 883444),
('529 S Chestnut Street', 'Wyoming', '68181', 3571.47, 2, 1, 102264),
('4218 Louvenia Street', 'Ohio', '94585', 2336.27, 2, 2, 250682),
('9905 Rolfson Burgs', 'Kansas', '02468', 4464.5, 5, 2, 178178),
('7816 Depot Street', 'Iowa', '93347', 963.04, 1, 2, 383454),
('125 4th Street', 'North Dakota', '86965', 3758.22, 4, 1, 299997),
('592 N Pine Street', 'West Virginia', '35608', 2559.48, 5, 1, 130775),
('93346 Hoyt Trafficway', 'Maine', '34630', 1576.53, 5, 2, 113377),
('244 Lorenzo Expressway', 'Utah', '81773', 4911.86, 1, 1, 283819);


INSERT INTO user_home_mapping (username, street_address)
VALUES ('user7', '72242 Jacobson Square'),
('user7', '75246 Cumberland Street'),
('user3', '811 Walker-Bogan Terrace'),
('user3', '947 Allen Motorway'),
('user10', '7976 W Division Street'),
('user6', '4679 Horacio Plains'),
('user2', '78089 Prospect Avenue'),
('user2', '5788 Mallie Gateway'),
('user6', '975 Marty Ridges'),
('user5', '40353 Main Street S'),
('user4', '9919 Park Drive'),
('user2', '642 Aaron Parkway'),
('user6', '529 S Chestnut Street'),
('user9', '4218 Louvenia Street'),
('user3', '9905 Rolfson Burgs'),
('user9', '7816 Depot Street'),
('user4', '125 4th Street'),
('user6', '592 N Pine Street'),
('user2', '93346 Hoyt Trafficway'),
('user8', '244 Lorenzo Expressway');


select * from user;
select * from home;
select * from user_home_mapping;
