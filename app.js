const express = require ('express');
const app = express();
require('dotenv').config();
const cors = require('cors');


const infoRouter = require('./routes/hng');


app.use(express.json());

app.use('/api', infoRouter)

const corsOptions = {
  origin: '*', // You can replace this with the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 200
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req,res) => {
    res.send('This is my homepage')
});

port = process.env.PORT || 9000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

