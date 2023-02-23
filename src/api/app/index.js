const { default: axios } = require('axios');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", async (request, response) => {
    response.status(200).send({ message: "Alive!" });
  });

app.get("/getTicker", (req, res) => {
    axios.get( `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=${req.query.symbol}`)
   .then(response =>{ 
       res.setHeader('Content-Type', 'application/json');
       res.send(response.data)    })
    .catch(function (error) {
        console.log(error);
    });
});

const server = app.listen(5000);


process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

let connections = [];

server.on('connection', connection => {
    connections.push(connection);
    connection.on('close', () => connections = connections.filter(curr => curr !== connection));
});

function shutDown() {
    console.log('Received kill signal, shutting down gracefully');
    server.close(() => {
        console.log('Closed out remaining connections');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);

    connections.forEach(curr => curr.end());
    setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
}
