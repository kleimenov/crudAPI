const Pool = require('pg').Pool
const pool = new Pool({
    user: 'deelooc21',
    host: 'localhost',
    database: 'testdb',
    port: '5432'
})

const getCats = (request, response) => {
    pool.query('select * from cats', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
    })
}

module.exports = {
    getCats
}

