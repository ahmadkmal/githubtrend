var compression = require('compression')
const express = require('express');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
const  Axios  = require('axios');
const app = express();
const options = {
    immutable: true,
    cacheControl: true, 
    maxAge: 60000,
    headers: {
        "Cache-Control": "max-age=60000"
    }
}
app.use(compression())
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.get('/api/developers', function (req, res) {
    Axios.get('https://gh-trending-api.herokuapp.com/developers', {
                method : "GET",
                mode: 'cors',
                headers: {},
                params: req.query ,
            })
            .then(({data}) => {
                res.json( data);
            })
  });
  app.get('/api/repositories', function (req, res) {
    const params = req.query;
    Axios.get('https://gh-trending-api.herokuapp.com/repositories', {
                method : "GET",
                mode: 'cors',
                headers: {},
                params:  params,
            })
            .then(({data}) => {
                res.json( data);
            })
  });
//   app.get('/api/developers', function (req, res) {
//     githubTrends({section:'developers'})
//     .then(result =>  res.json({data:result}))
//     .catch(error => { console.log(error) });
//     // res.json({test:'test'})
//   });
//   app.get('/api/repositories', function (req, res) {
//     githubTrends({section:'repositories'})
//     .then(result =>  res.json({data:result}))
//     .catch(error => { console.log(error) });
//     // res.json({test:'test'})
//   });
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'),options);
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${PORT}`));