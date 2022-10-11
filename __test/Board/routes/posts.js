var express  = require('express');
var router = express.Router();
var Post = require('../models/Post');

// Index 
router.get('/', function(req, res){
    Post.find({})                  // 1
    .sort('-createdAt')            // 1
    .exec(function(err, posts){    // 1
        if(err) return res.json(err);
        res.render('posts/index', {posts:posts});
    });
});

// New
router.get('/new', function(req, res){
    res.render('posts/new');
});

// create
router.post('/', function(req, res){
    Post.create(req.body, function(err, post){
        if(err) return res.json(err);
        res.redirect('/posts');
    });
});

// show
router.get('/:id', function(req, res){
    Post.findOne({_id:req.params.id}, function(err, post){
        if(err) return res.json(err);
        res.render('posts/show', {post:post});
    });
});

// edit
router.get('/:id/edit', function(req, res){
    Post.findOne({_id:req.params.id}, function(err, post){
        if(err) return res.json(err);
        res.render('posts/edit', {post:post});
    });
});

// update
router.put('/:id', function(req, res){
    req.body.updatedAt = Date.now(); //2
    Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, post){
        if(err) return res.json(err);
        res.redirect("/posts/"+req.params.id);
    });
});

// destroy
router.delete('/:id', function(req, res){
    Post.deleteOne({_id:req.params.id}, function(err){
        if(err) return res.json(err);
        res.redirect('/posts');
    });
});

module.exports = router;

/*
    route은 1, 2번을 제외하면 주소록 만들기예제의 contacts route와 형태가 거의 같습니다.
    앞으로도 CRUD 기능을 만들게 된다면 항상 거의 이 형태를 사용하게 됩니다.

    1. 나중에 생성된 data가 위로 오도록 정렬합니다. find와 function 사이에 sort함수가 들어간 형태이다.
        .exec함수 앞에 DB에서 데이터를 어떻게 찾을지, 어떻게 정렬할지 등등을 함수로 표현하고, exec안의 함수에서 해당 data를 받아와서 할일을 정하는 구조입니다.

        .sort()함수는 string이나 object를 받아서 데이터 정렬방법을 정의하는데, 문자열로 표현하는 경우 정렬할 항목명을 문자열로 넣으면 오름차순으로 정렬하고, 내림차순인 경우 -를 앞에 붙여준다. 두가지 이상으로 정렬하는 경우 빈칸을 넣고 각각의 항목을 적어주면 된다.
        object를 넣는 경우 {createdAt:1}(오름차순), {createdAt:-1}(내림차순)

    2. post를 수정하는 경우 수정된 날짜를 updateAt에 기록
*/