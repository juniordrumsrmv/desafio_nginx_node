CREATE DATABASE IF NOT EXISTS nodedb;
use nodedb;
create table if not exists people ( id int not null auto_increment primary key, name varchar(255) null);