var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var MONGO_DB_BOARD = "mongodb+srv://kanghr8149:k84672931@cluster0.v1hivsi.mongodb.net/?retryWrites=true&w=majority";

// DB setting
mongoose.connect(MONGO_DB_BOARD);
var db = mongoose.connection;
db.once('open', function(){
    console.log('DB connected');
});
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts')); // posts route 추가
app.use('/users', require('./routes/users')); // users route 추가

// Port setting
var port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});