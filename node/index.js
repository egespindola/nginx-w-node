const dotenv = require('dotenv')
const express = require('express')
const connectionPool = require('./db/mysql-config')
const {randomNames,executeQuery} = require('./helpers/global')

const app = express()
dotenv.config()
const port = process.env.APP_PORT

app.get('/', async (req, res) => {
    try{
        console.debug('DB_HOST:', process.env.DB_HOST);
        let randonNamesArrSize = randomNames.length,
         randomNumber = Math.floor(Math.random() * randonNamesArrSize);
        let names = [];
    
        const nameSet = randomNames[randomNumber]
        const  sqlInsert = `INSERT INTO people (name) VALUES ("${nameSet}")`,
          sqlGet = 'SELECT * FROM people',
           sqlTbCreate = `
          CREATE TABLE IF NOT EXISTS people (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255)
          );
        `;

        connectionPool.getConnection(async (err, connection) => {
            if (err) {
              console.error('Error getting connection from pool:', err);
              return res.status(500).json({ error: 'Error getting connection from pool' });
            }
      
            try {
              await executeQuery(connection, sqlTbCreate);
              await executeQuery(connection, sqlInsert);
              console.log('Data insert successful!!');
      
              const selectResults = await executeQuery(connection, sqlGet);
              names = selectResults.map(el => `<li>${el.name}</li>`);
      
              connection.release();
      
              res.send('<h1>Full Cycle Rocks!</h1> \n' + names.join('\n'));
            } catch (e) {
              console.error('Error:', e);
              res.status(500).json({ error: 'An error occurred' });
              connection.release();
            }
          });
        } catch (e) {
          console.error('Error:', e);
          res.status(500).json({ error: 'An error occurred' });
        }

    })

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `Server running on port ${process.env.APP_PORT}`);

})