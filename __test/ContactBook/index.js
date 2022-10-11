var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); // 2.1
var methodOverride = require('method-override'); // 3.1
var app = express();

// DB setting
mongoose.connect(process.env.MONGO_DB_CONT); // 1.1
var db = mongoose.connection; //1.2
//1.3
db.once('open', function(){
    console.log('DB connected');
});
//1.4
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); //2.2
app.use(bodyParser.urlencoded({extended:true})); //2.3
app.use(methodOverride('_method')); // 3.2

/*
// DB schema //2.4 //models/Contact.js로 이동
var contactSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String},
    phone:{type:String}
});
var Contact = mongoose.model('contact', contactSchema); //2.5
*/

// Routes
app.use('/', require('./routes/home')); // 4.1
app.use('/contacts', require('./routes/contacts')); // 4.2
/*
// Home //2.6 //routes/home.js로 이동
app.get('/', function(req, res){
    res.redirect('/contacts');
});
// Contacts - Index //2.7
app.get('/contacts', function(req, res){
    Contact.find({}, function(err, contacts){
        if(err) return res.json(err);
        res.render('contacts/index', {contacts:contacts});
    });
});
// Contacts - New //2.8
app.get('/contacts/new', function(req, res){
    res.render('contacts/new');
});
// Contacts - create //2.9
app.post('/contacts', function(req, res){
    Contact.create(req.body, function(err, contact){
        if(err) return res.json(err);
        res.redirect('/contacts');
    });
});
// Contacts - show // 3.3
app.get('/contacts/:id', function(req, res){
    Contact.findOne({_id:req.params.id}, function(err, contact){
        if(err) return res.json(err);
        res.render('contacts/show', {contact:contact});
    });
});
// Contacts - edit // 3.4
app.get('/contacts/:id/edit', function(req, res){
    Contact.findOne({_id:req.params.id}, function(err, contact){
        if(err) return res.json(err);
        res.render('contacts/edit', {contact:contact});
    });
});
// Contacts - update // 3.5
app.put('/contacts/:id', function(req, res){
    Contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
        if(err) return res.json(err);
        res.redirect('/contacts/'+req.params.id);
    });
});
// Contacts - destroy // 3.6
app.delete('/contacts/:id', function(req, res){
    Contact.deleteOne({_id:req.params.id}, function(err){
        if(err) return res.json(err);
        res.redirect('/contacts');
    });
});
*/

// Port setting
var port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});
/*
1.1. node.js에서 기본으로 제공되는 process.env 오브젝트는 환경변수들을 가지고 있는 객체입니다. 저는 DB connection string을 "MONGO_DB"라는 이름의 환경변수에 저장하였기 때문에 node.js코드상에서 process.env.MONGO_DB로 해당 값을 불러올 수 있습니다.
mongoose.connect('CONNECTION_STRING')함수를 사용해서 DB를 연결할 수 있습니다.
1.2. mongoose의 db object를 가져와 db변수에 넣는 과정입니다. 이 db변수에는 DB와 관련된 이벤트 리스너 함수들이 있습니다. 
1.3. db가 성공적으로 연결된 경우 "DB connected"를 출력합니다.
1.4. db연결중 에러가 있는 경우 "DB ERROR : " 와 에러를 출력합니다.
*/

/*
2.1. body-parser module를 bodyPaser 변수에 담습니다.
2.2 & 2.3. bodyParser를 사용하기 위해 필요한 코드 --> 이렇게 처리해야 데이터가 bodyParser를 통해 req.body로 생성됨
2.2. json 형식의 데이터를 받는다는 설정
2.3. urlencoded data를 extended 알고리즘을 사용해서 분석한다는 설정
2.4. mongoose.Schema 함수로 DB에서 사용할 schema를 설정, 데이터베이스에 정보를 어떠한 형식으로 저장할 지를 지정
2.5. mongoose.model함수를 사용하여 contact schema의 model을 생성
    mongoose.model함수의 첫번째 parameter는 mongoDB에서 사용되는 콜렉션의 이름
    mongoose.model함수의 두번째 parameter는 mongoose.Schema로 생성된 오브젝트
2.6. "/"에 get 요청이 오는 경우 : "/contacts"로 redirect하는 코드
2.7. "/contacts"에 get 요청이 오는 경우 : 에러가 있다면 에러를 json형태로 웹브라우저에 표시하고, 에러가 없다면 검색 결과를 받아 views/contacts/index.ejs를 render(페이지를 다이나믹하게 제작) 
2.8. "/contacts/new"에 get 요청이 오는 경우 : 새로운 주소록을 만드는 form이 있는 views/contacts/new.ejs를 render
2.9. "/contacts"에 post 요청이 오는 경우 : "/contacts/new"에서 폼을 전달받는 경우
*/

/*
3.1. method-override module을 methodOverride변수에 담습니다.
3.2. _method의 query로 들어오는 값으로 HTTP method를 바꿉니다.
3.3. "contacts/:id"에 get 요청이 오는 경우 : ":id"처럼 route에 콜론(:)을 사용하면 해당 위치의 값을 받아 req.params에 넣게 됩니다.
3.4. "contacts/:id/edit"에 get 요청이 오는 경우 : 검색 결과를 받아 views/contacts/edit.ejs를 render합니다.
3.5. "contacts/:id"에 put 요청이 오는 경우 :
    Model.findOneAndUpdate는 DB에서 해당 model의 document를 하나 찾아 그 data를 수정하는 함수입니다.
    첫번째 parameter로 찾을 조건을 object로 입력하고
    두번째 parameter로 update할 정보를 object로 입력data를 찾은 후 callback함수를 호출합니다.
    이때 callback함수로 넘겨지는 값은 수정되기 전의 값입니다.
    만약 업데이트 된 후의 값을 보고 싶다면 콜백 함수 전에 parameter로 {new:true}를 넣어주면 됩니다.
    Data 수정 후 "/contacts/"+req.params.id로 redirect합니다.
3.6. "contacts/:id"에 delete 요청이 오는 경우 :
    Model.deleteOne은 DB에서 해당 model의 document를 하나 찾아 삭제하는 함수입니다.
    첫번째 parameter로 찾을 조건을 object로 입력하고 data를 찾은 후 callback함수를 호출합니다.
    Data 삭제후 "/contacts"로 redirect합니다.
*/

/*
4.1 & 4.2. app.use('route', 콜백_함수)는 해당 route에 요청이 오는 경우에만 콜백 함수를 호출합니다.
*/