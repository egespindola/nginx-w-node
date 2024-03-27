const randomNames = [
'Thierry',
'Elroy',
'Marley',
'Guiomar',
'Román',
'Dorothée',
'Turner',
'Mathew',
'Kristi',
'Éric',
'Thurstan',
'Lorinda',
'Alexandrina',
'Chantel',
'Galilea',
'Kristina',
'Barrie',
'Aina',
'Herminio',
'Gilberta'
]

function executeQuery(connection, sqlQuery) {
    return new Promise((resolve, reject) => {
      connection.query(sqlQuery, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  

module.exports = {randomNames,executeQuery}
