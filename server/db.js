//example of a db function structure

function dbFunction(connection) {
  return connection('TABLE_NAME')
}

module.exports = {
  dbFunction
}
