let express = require('express');
let cors = require('cors');
let app = express();
let mainRouter = require('./routes/main');

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', mainRouter);

app.listen(3000, ()=>{
    console.log('listening...')
});
