const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values('Bianou')`
// connection.query(sql)

//Exibindo a mensagem de full cycle
app.get('/', (req,res) => {
    res.write('<h1>Full Cycle</h1>');

    (async () => {
        try {
            connection.query("SELECT id, name FROM people ORDER BY name", function(err, result, fields) {
                if (err) throw err;
                res.write('<ul>');
                Object.keys(result).forEach(function(key) {
                    var row = result[key];
                    res.write('<li>'+ row.name +'</li>');
                    console.log(row.name);
                });
                res.write('</ul>');
                res.send();
            });
        } finally {
            // connection.end()
        }
    })()
    
})

//Exibindo nomes cadastrados

// connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})