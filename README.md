 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] 
# <h1 align="center">e-comm-back</h1>

## Description
This project is the back-end side of an ecommerce application that allows the management of categories, products, and product tags using sequelize and Object Relational Mapping.

## Demo

Link to Video Demo: 
  
## Table of Contents
  - [Description](#description)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
1.in a .env file, enter your mySQL database, username, and password in the appropriate fields to connect. <br>
2.Once connected, run | >source db/schema.sql | in mySQL shell. <br>
3.Then, run | >node server | in the CL to populate your database with tables. <br>
    --- note: upon first setup, please ensure sequelize.sync force is true. --- <br>
4.After the tables are populated run | npm run seed | to populate your tables with seeded data. <br>
5.Once your tables are seeded, change seuelize.sync force to false. <br>
6.To start the server with a populated db, run | > node server | with sequelize.sync force set to false. <br>

## Usage
As this application does not have a front end yet, it is recommended to use Insomnia for RESTful CRUD operations. 

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]This application is covered under the MIT license. (https://opensource.org/licenses/MIT)

## Contributors
Sequelize, mysql2, dotenv, express

## Tests
Testing done through Insomnia.

## Questions? Contact me:
GitHub: https://github.com/ejackson1228/ <br>
Email: ejackson1228@gmail.com

