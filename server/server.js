const express = require('express');
const cors = require('cors')
const app = express();


const PORT = 4000;

app.use(cors());


app.get('/message', (req, res) => {
    res.json({message: 'Hello World!'})
})



app.listen(PORT, () => {
    console.log(`Server running PORT ${PORT}`)
})