const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


// cors
app.use(cors({
    origin: 'http://localhost:4200'
}));


// settings
app.set('port', process.env.PORT  || 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// routes
app.use(require('./routes'));


// setting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
})


