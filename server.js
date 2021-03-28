const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}...`)),
    cors = require('cors');


const storage = [];

app.use(cors());
app.use(express.json());

// Testing routes
// =============================
// app.get('/', (req, res) => {
//     res.json({result: "success"});
// })

// app.get('/test', (req, res) => {
//     res.json({data: storage, result: "success"});
// })

// app.post('/post-test', (req, res) => {
//     if (!(Object.keys(req.body).length === 0)){
//         storage.push(req.body);
//         res.json({result: "success"});
//     }
//     else
//         res.json({result: "failed"});        
    
//     console.log(req, storage);
// })