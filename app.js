const express = require('express');
const app = express();
const Swal = require('sweetalert2');


app.set('views engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/', require('./router'));





app.listen(5000, () => {
    console.log('liste port to http://localhost:5000');
});