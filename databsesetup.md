# Create the DB
CREATE DATABASE scsanalytics;

# Create the User and setup permissions
CREATE USER 'scsanalyticsuser'@'localhost' IDENTIFIED BY 'jdfjdsfiqewrj12!F';
GRANT ALL PRIVILEGES ON scsanalytics TO 'scsanalyticsuser'@'localhost';
FLUSH PRIVILEGES;
alter user 'scsanalyticsuser'@'localhost' identified with mysql_native_password by 'jdfjdsfiqewrj12!F';

# Create a sample level table
CREATE TABLE IF NOT EXISTS `level_test` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `playerID` varchar(255) NOT NULL,
  `server_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `completition_time` int(11) NOT NULL,
  `collectables` int(11) NOT NULL,
  `attempt_num` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

# Add testing  data. Run a few times with different information
INSERT INTO `level_text` (
    playerID, completition_time, collectables, attempt_num
)
VALUES (
    '1234123', '1200', '10', '5'
);
