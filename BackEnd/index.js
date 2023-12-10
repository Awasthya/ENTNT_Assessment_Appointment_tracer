
const express = require('express') 
const app = express();
const path = require('path');
require('./DB/Conn');
const router = require('./Router/router.js');
app.use(express.json())
const PORT = process.env.PORT || 5000;
app.use(router);
app.use(express.static(path.join(__dirname, './clientt/build')));

app.listen(PORT,()=>{
        console.log('Server is Started....')
})
/**
 * mongoDB link : 
 mongodb+srv://Demo:<password>@cluster0.27whm.mongodb.net/?retryWrites=true&w=majority
 */